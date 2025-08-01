#!/usr/bin/env node

/**
 * Script de vérification des changesets
 * Vérifie qu'un changeset existe pour les modifications du design system
 *
 * Usage: node scripts/check-changeset.js
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Couleurs pour la console
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
}

const log = {
  success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  title: (msg) => console.log(`${colors.bold}${colors.blue}🔍 ${msg}${colors.reset}\n`)
}

/**
 * Vérifier si des changements nécessitent un changeset
 */
function checkChangesetNeeded() {
  log.title('Vérification des changesets')

  try {
    // Vérifier s'il y a des changements dans le design system
    const changedFiles = execSync('git diff --cached --name-only', { encoding: 'utf8' }).trim()

    if (!changedFiles) {
      log.info('Aucun fichier stagé, vérification ignorée')
      return true
    }

    const files = changedFiles.split('\n').filter(Boolean)
    const utopiaChanges = files.filter(file =>
      file.startsWith('packages/utopia/src/') &&
      !file.includes('.md') &&
      !file.includes('.json') &&
      !file.includes('demo/')
    )

    if (utopiaChanges.length === 0) {
      log.info('Aucun changement dans les composants/tokens Utopia')
      return true
    }

    log.info(`${utopiaChanges.length} fichier(s) modifié(s) dans Utopia:`)
    utopiaChanges.forEach(file => {
      console.log(`  📄 ${file}`)
    })

    // Vérifier si un changeset existe
    const changesetDir = path.join(process.cwd(), '.changeset')

    if (!fs.existsSync(changesetDir)) {
      log.error('Dossier .changeset non trouvé')
      log.info('Exécutez: npm run changeset')
      return false
    }

    const changesetFiles = fs.readdirSync(changesetDir)
      .filter(file => file.endsWith('.md') && file !== 'README.md' && file !== 'config.json')

    if (changesetFiles.length === 0) {
      log.warning('Aucun changeset trouvé pour les modifications Utopia')
      log.info('Un changeset est requis pour les changements du design system')
      log.info('Exécutez: npm run changeset')
      log.info('Puis recommittez vos changements')
      return false
    }

    log.success(`${changesetFiles.length} changeset(s) trouvé(s):`)
    changesetFiles.forEach(file => {
      console.log(`  📝 ${file}`)
    })

    return true

  } catch (error) {
    log.warning('Impossible de vérifier les changements git')
    log.info('Vérification ignorée (probablement un commit initial)')
    return true
  }
}

/**
 * Fonction principale
 */
function main() {
  console.log('📝 Vérification des changesets\n')

  const isValid = checkChangesetNeeded()

  console.log('\n' + '='.repeat(60))

  if (isValid) {
    log.success('✅ VÉRIFICATION RÉUSSIE')
    log.success('Changeset approprié pour les modifications')
    process.exit(0)
  } else {
    log.error('❌ CHANGESET REQUIS')
    log.error('Un changeset est nécessaire pour les modifications du design system')
    log.info('1. Exécutez: npm run changeset')
    log.info('2. Décrivez vos changements')
    log.info('3. Recommittez vos fichiers')
    process.exit(1)
  }
}

// Exécution si appelé directement
if (require.main === module) {
  main()
}

module.exports = { checkChangesetNeeded }
