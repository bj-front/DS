#!/usr/bin/env node

/**
 * Script simplifié pour créer automatiquement un changeset 
 * quand des fichiers du design system sont modifiés
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getChangedFiles() {
  try {
    const output = execSync('git diff --cached --name-only', { encoding: 'utf8' });
    const files = output.trim().split('\n').filter(Boolean);
    console.log('📁 Fichiers modifiés:', files);
    return files;
  } catch (error) {
    console.log('⚠️  Erreur:', error.message);
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

function createChangeset() {
  const changesetDir = '.changeset';
  const timestamp = Date.now();
  const filename = `auto-${timestamp}.md`;
  const filepath = path.join(changesetDir, filename);
  
  const branchName = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  
  const content = `---
"@club-employes/utopia": minor
---

Updates from branch ${branchName}:
- Design system components updated
`;

  fs.writeFileSync(filepath, content);
  console.log(`✅ Changeset créé : ${filename}`);
  
  // Ajouter le changeset au commit
  execSync(`git add ${filepath}`);
  
  return filename;
}

function main() {
  console.log('🚀 Script auto-changeset...');
  
  const changedFiles = getChangedFiles();
  
  if (!hasDesignSystemChanges(changedFiles)) {
    console.log('ℹ️  Pas de changements dans le design system');
    return;
  }
  
  console.log('✅ Changements détectés dans le design system');
  
  // Créer un nouveau changeset
  createChangeset();
  
  console.log('✅ Script terminé');
}

if (require.main === module) {
  main();
}
