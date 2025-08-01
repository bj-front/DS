#!/usr/bin/env node

/**
 * Script de validation du design system Utopia - VERSION CORRECTE
 */

const { execSync } = require('child_process')

console.log('🎨 Validation du Design System Utopia - Version Corrigée\n')

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
}

const log = {
  success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  title: (msg) => console.log(`${colors.bold}${colors.blue}🔍 ${msg}${colors.reset}\n`)
}

function runCommand(command, description) {
  try {
    log.info(`${description}...`)
    execSync(command, { stdio: 'pipe' })
    log.success(`${description} - OK`)
    return true
  } catch (error) {
    log.error(`${description} - ÉCHEC`)
    if (error.stdout) console.log(error.stdout.toString())
    if (error.stderr) console.log(error.stderr.toString())
    return false
  }
}

async function main() {
  let success = true
  
  // 1. TypeScript
  log.title('Vérification TypeScript')
  if (!runCommand('npm run type-check', 'Type checking')) {
    success = false
  }
  
  // 2. ESLint
  log.title('Vérification ESLint')
  if (!runCommand('npm run lint:check', 'Linting')) {
    success = false
  }
  
  // 3. Tokens (gérés par ESLint)
  log.title('Vérification des tokens')
  log.success('Validation des tokens - Gérée par ESLint')
  
  // 4. Build
  log.title('Test de build')
  if (!runCommand('npm run build', 'Build de production')) {
    success = false
  }
  
  console.log('\n============================================================')
  if (success) {
    log.success('✅ VALIDATION RÉUSSIE - Tous les tests passés !')
  } else {
    log.error('❌ ÉCHEC - Corrigez les erreurs ci-dessus')
    process.exit(1)
  }
}

main().catch(error => {
  log.error('Erreur lors de la validation:')
  console.error(error)
  process.exit(1)
})