#!/usr/bin/env node

/**
 * Script pour créer automatiquement un changeset quand des fichiers 
 * du design system sont modifiés
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getChangedFiles() {
  try {
    // Vérifier d'abord les fichiers staged (pour pre-commit)
    let output = execSync('git diff --cached --name-only', { encoding: 'utf8' });
    let files = output.trim().split('\n').filter(Boolean);
    
    // Si pas de fichiers staged, regarder le dernier commit
    if (files.length === 0) {
      output = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8' });
      files = output.trim().split('\n').filter(Boolean);
    }
    
    return files;
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

function determineChangeType(files) {
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
  
  if (hasNewFeatures) return 'minor';
  
  return 'patch';
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

function main() {
  const changedFiles = getChangedFiles();
  
  if (!hasDesignSystemChanges(changedFiles)) {
    console.log('ℹ️  Pas de changements dans le design system');
    return;
  }
  
  // Vérifier si un changeset existe déjà
  let existingChangesets = [];
  try {
    existingChangesets = execSync('git diff --cached --name-only', { encoding: 'utf8' })
      .split('\n')
      .filter(file => file.startsWith('.changeset/') && file.endsWith('.md') && !file.includes('README'));
  } catch (error) {
    // Si pas de fichiers staged, vérifier dans le dernier commit
    try {
      existingChangesets = execSync('git diff --name-only HEAD~1 HEAD', { encoding: 'utf8' })
        .split('\n')
        .filter(file => file.startsWith('.changeset/') && file.endsWith('.md') && !file.includes('README'));
    } catch (error2) {
      existingChangesets = [];
    }
  }
  
  if (existingChangesets.length > 0) {
    console.log('✅ Changeset déjà présent, pas besoin d\'en créer un nouveau');
    return;
  }
  
  const changeType = determineChangeType(changedFiles);
  const branchName = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  const description = `Update design system components from branch ${branchName}`;
  
  createChangeset(changeType, description);
}

if (require.main === module) {
  main();
}

module.exports = { main };
