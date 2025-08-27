#!/usr/bin/env node

/**
 * Script pour créer ou mettre à jour automatiquement un changeset 
 * quand des fichiers du design system sont modifiés
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getChangedFiles() {
  try {
    // Pour un pre-commit hook, on regarde les fichiers staged
    const output = execSync('git diff --cached --name-only', { encoding: 'utf8' });
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
}

function hasDesignSystemChanges(files) {
  return files.some(file => 
    file.startsWith('packages/utopia/src/') && 
    !file.includes('/dist/') && 
    !file.includes('/node_modules/')
  );
}

function determineChangeType(files, currentType = 'patch') {
  // Si c'est déjà major, on ne peut pas descendre
  if (currentType === 'major') return 'major';
  
  // Vérifier les changements breaking
  const hasBreaking = files.some(file => 
    file.includes('BREAKING') || 
    execSync('git diff --cached', { encoding: 'utf8' }).includes('BREAKING')
  );
  
  if (hasBreaking) return 'major';
  
  // Vérifier les nouvelles fonctionnalités
  const hasNewFeatures = files.some(file => 
    file.match(/src\/components\/.*\/.*\.vue$/) ||
    file.match(/src\/composables\/.*\.ts$/) ||
    file.includes('src/tokens/')
  );
  
  if (hasNewFeatures) {
    return currentType === 'minor' ? 'minor' : 'minor';
  }
  
  return currentType;
}

function getChangesSummary(files) {
  const components = new Set();
  const features = [];
  
  files.forEach(file => {
    if (file.match(/src\/components\/atoms\/(\w+)\//)) {
      components.add(RegExp.$1 + ' (atom)');
    } else if (file.match(/src\/components\/molecules\/(\w+)\//)) {
      components.add(RegExp.$1 + ' (molecule)');
    } else if (file.match(/src\/components\/organisms\/(\w+)\//)) {
      components.add(RegExp.$1 + ' (organism)');
    } else if (file.match(/src\/components\/layouts\/(\w+)\//)) {
      components.add(RegExp.$1 + ' (layout)');
    } else if (file.includes('src/tokens/')) {
      features.push('Design tokens');
    } else if (file.includes('src/composables/')) {
      features.push('Composables');
    }
  });
  
  const summary = [];
  if (components.size > 0) {
    summary.push(`Components: ${Array.from(components).join(', ')}`);
  }
  if (features.length > 0) {
    summary.push(`Features: ${features.join(', ')}`);
  }
  
  return summary.join(' • ');
}

function parseChangeset(content) {
  const lines = content.split('\n');
  const packageLine = lines.find(line => line.includes('"@club-employes/utopia":'));
  if (!packageLine) return null;
  
  const typeMatch = packageLine.match(/"@club-employes\/utopia":\s*(\w+)/);
  const type = typeMatch ? typeMatch[1] : 'patch';
  
  // Extraire la description (tout après le second ---)
  const descStartIndex = lines.findIndex((line, index) => 
    index > 0 && line.trim() === '---'
  );
  
  const description = descStartIndex >= 0 
    ? lines.slice(descStartIndex + 1).join('\n').trim()
    : '';
  
  return { type, description };
}

function updateChangeset(filepath, newType, additionalDescription) {
  const content = fs.readFileSync(filepath, 'utf8');
  const parsed = parseChangeset(content);
  
  if (!parsed) {
    console.log(`⚠️  Impossible de parser le changeset: ${filepath}`);
    return false;
  }
  
  // Déterminer le nouveau type (ne jamais réduire le niveau)
  const finalType = newType === 'major' ? 'major' : 
                   (parsed.type === 'major' ? 'major' :
                   (newType === 'minor' || parsed.type === 'minor' ? 'minor' : 'patch'));
  
  // Construire la nouvelle description
  let newDescription = parsed.description;
  if (additionalDescription && !newDescription.includes(additionalDescription)) {
    if (newDescription) {
      newDescription += '\n' + additionalDescription;
    } else {
      newDescription = additionalDescription;
    }
  }
  
  // Reconstruire le contenu
  const newContent = `---
"@club-employes/utopia": ${finalType}
---

${newDescription}
`;
  
  fs.writeFileSync(filepath, newContent);
  console.log(`✅ Changeset mis à jour : ${path.basename(filepath)}`);
  console.log(`📝 Type: ${parsed.type} → ${finalType}`);
  console.log(`📄 Description ajoutée: ${additionalDescription}`);
  
  return true;
}

function createChangeset(changeType, description) {
  const changesetDir = '.changeset';
  const timestamp = Date.now();
  const filename = `auto-${timestamp}.md`;
  const filepath = path.join(changesetDir, filename);
  
  const content = `---
"@club-employes/utopia": ${changeType}
---

${description}
`;

  fs.writeFileSync(filepath, content);
  console.log(`✅ Changeset créé : ${filename}`);
  console.log(`📝 Type: ${changeType}`);
  console.log(`📄 Description: ${description}`);
  
  // Ajouter le changeset au commit
  execSync(`git add ${filepath}`);
  
  return filename;
}

function findExistingUtopiaChangeset() {
  const changesetDir = '.changeset';
  
  try {
    // Chercher tous les changesets existants (committed ou staged)
    const allChangesets = fs.readdirSync(changesetDir)
      .filter(file => file.endsWith('.md') && file !== 'README.md');
    
    // Vérifier chaque changeset pour voir s'il concerne utopia
    for (const file of allChangesets) {
      const filepath = path.join(changesetDir, file);
      try {
        const content = fs.readFileSync(filepath, 'utf8');
        if (content.includes('"@club-employes/utopia":')) {
          return filepath;
        }
      } catch (e) {
        // Ignorer les erreurs de lecture
      }
    }
  } catch (e) {
    // Ignorer les erreurs
  }
  
  return null;
}

function main() {
  const changedFiles = getChangedFiles();
  
  if (!hasDesignSystemChanges(changedFiles)) {
    console.log('ℹ️  Pas de changements dans le design system');
    return;
  }
  
  const changeType = determineChangeType(changedFiles);
  const branchName = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  const changesSummary = getChangesSummary(changedFiles);
  const commitMessage = execSync('git log -1 --pretty=%s 2>/dev/null', { encoding: 'utf8' }).trim() || '';
  
  // Description basée sur le commit message ou un résumé des changements
  let description = '';
  if (commitMessage && !commitMessage.startsWith('chore:')) {
    description = `- ${commitMessage}`;
  } else if (changesSummary) {
    description = `- Updated: ${changesSummary}`;
  } else {
    description = `- Update design system components from branch ${branchName}`;
  }
  
  // Chercher un changeset existant pour utopia
  const existingChangeset = findExistingUtopiaChangeset();
  
  if (existingChangeset) {
    console.log(`📋 Changeset existant trouvé: ${path.basename(existingChangeset)}`);
    
    // Mettre à jour le changeset existant
    if (updateChangeset(existingChangeset, changeType, description)) {
      execSync(`git add ${existingChangeset}`);
    }
  } else {
    // Créer un nouveau changeset
    const fullDescription = `Updates from branch ${branchName}:\n${description}`;
    createChangeset(changeType, fullDescription);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };