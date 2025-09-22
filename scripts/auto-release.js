#!/usr/bin/env node

/**
 * Script d'automatisation complète du release
 * Gère le versioning, la publication NPM et les tags Git
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const PACKAGE_NAME = '@club-employes/utopia';
const PACKAGE_PATH = './packages/utopia/package.json';

function exec(command, options = {}) {
  try {
    console.log(`🔧 Running: ${command}`);
    return execSync(command, { 
      stdio: 'inherit', 
      encoding: 'utf8',
      ...options 
    });
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf8'));
  return packageJson.version;
}

function checkVersionExists(version) {
  try {
    execSync(`npm view ${PACKAGE_NAME}@${version} version`, { stdio: 'pipe' });
    return true;
  } catch (error) {
    return false;
  }
}

function incrementVersion() {
  console.log('🔄 Incrementing version due to NPM conflict...');
  exec('cd packages/utopia && npm version patch');
  return getCurrentVersion();
}

function main() {
  console.log('🚀 Starting automated release process...');
  
  // 1. Check for changesets
  console.log('\n📋 Step 1: Checking for changesets...');
  const changesets = exec('find .changeset -name "*.md" -not -name "README.md" | wc -l', { encoding: 'utf8' }).trim();
  
  if (parseInt(changesets) === 0) {
    console.log('❌ No changesets found. Nothing to release.');
    process.exit(0);
  }
  
  console.log(`✅ Found ${changesets} changeset(s)`);
  
  // 2. Build the project
  console.log('\n🏗️ Step 2: Building project...');
  exec('npm run build');
  
  // 3. Version packages
  console.log('\n📝 Step 3: Versioning packages...');
  exec('npm run version-packages');
  
  let version = getCurrentVersion();
  console.log(`📦 Versioned to: ${version}`);
  
  // 4. Check for version conflicts
  console.log('\n🔍 Step 4: Checking for version conflicts...');
  if (checkVersionExists(version)) {
    console.log(`⚠️ Version ${version} already exists on NPM`);
    version = incrementVersion();
    console.log(`📦 Incremented to: ${version}`);
  } else {
    console.log(`✅ Version ${version} is available for publishing`);
  }
  
  // 5. Commit version changes
  console.log('\n💾 Step 5: Committing version changes...');
  try {
    exec('git add .');
    exec(`git commit -m "chore: version packages to ${version}"`);
    console.log('✅ Version changes committed');
  } catch (error) {
    console.log('ℹ️ No changes to commit');
  }
  
  // 6. Publish to NPM
  console.log('\n📦 Step 6: Publishing to NPM...');
  exec('npm run release');
  
  // 7. Create Git tag
  console.log('\n🏷️ Step 7: Creating Git tag...');
  try {
    exec(`git tag v${version}`);
    exec(`git push origin v${version}`);
    console.log(`✅ Git tag v${version} created and pushed`);
  } catch (error) {
    console.log(`ℹ️ Tag v${version} might already exist`);
  }
  
  // 8. Create GitHub Release
  console.log('\n🎉 Step 8: Creating GitHub Release...');
  try {
    const releaseNotes = `🎨 New release of @club-employes/utopia design system

**Installation:**
\`\`\`bash
npm install @club-employes/utopia@${version}
\`\`\`

**What's included:**
- 🎨 Design tokens (colors, spacing, typography)  
- 🧩 Vue 3 components
- 📱 Responsive utilities
- 🌙 Dark mode support
`;

    exec(`gh release create v${version} --title "🚀 Design System v${version}" --notes "${releaseNotes}" --latest`);
    console.log(`✅ GitHub Release v${version} created`);
  } catch (error) {
    console.log(`ℹ️ GitHub Release v${version} might already exist`);
  }
  
  console.log('\n🎉 Release process completed successfully!');
  console.log(`📦 Published version: ${version}`);
  console.log(`🏷️ Git tag: v${version}`);
  console.log(`🎉 GitHub Release: v${version}`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main };
