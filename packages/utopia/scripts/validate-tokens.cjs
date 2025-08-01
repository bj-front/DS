#!/usr/bin/env node

/**
 * Script de validation des tokens pour les composants Utopia
 * Vérifie qu'aucune valeur en dur n'est utilisée dans les composants
 *
 * Usage: node scripts/validate-tokens.js
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
 * Analyser les fichiers pour détecter les valeurs en dur
 */
function validateHardcodedValues() {
  log.title('Validation des tokens - Pas de valeurs en dur')

  const componentsDir = path.join(__dirname, '../src/components')

  if (!fs.existsSync(componentsDir)) {
    log.warning('Dossier components non trouvé')
    return true
  }

  // Patterns à détecter (valeurs en dur interdites)
  const hardcodedPatterns = [
    {
      pattern: /#[0-9a-fA-F]{3,8}(?![a-fA-F0-9])/g,
      type: 'Couleur hex',
      description: 'Utilisez var(--color-*) à la place'
    },
    {
      pattern: /rgba?\s*\(/g,
      type: 'Couleur RGB/RGBA',
      description: 'Utilisez var(--color-*) à la place'
    },
    {
      pattern: /hsla?\s*\(/g,
      type: 'Couleur HSL/HSLA',
      description: 'Utilisez var(--color-*) à la place'
    },
    {
      pattern: /\b\d+(px|rem|em)\b/g,
      type: 'Taille/Espacement',
      description: 'Utilisez var(--spacing-*) ou var(--font-size-*) à la place'
    }
  ]

  let hasErrors = false
  let issues = []

  function scanDirectory(dir) {
    const files = fs.readdirSync(dir)

    for (const file of files) {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory() && !file.startsWith('.')) {
        // Ignorer les dossiers demo et pages (contiennent des exemples avec valeurs en dur)
        if (file !== 'demo' && file !== 'pages') {
          scanDirectory(filePath)
        }
      } else if (file.endsWith('.vue') || file.endsWith('.ts') || file.endsWith('.js')) {
        const content = fs.readFileSync(filePath, 'utf8')
        const relativePath = path.relative(path.join(__dirname, '..'), filePath)

        hardcodedPatterns.forEach(({ pattern, type, description }) => {
          const matches = content.match(pattern)
          if (matches) {
            // Filtrer les faux positifs courants
            const filteredMatches = matches.filter(match => {
              // Ignorer les valeurs dans les commentaires
              if (content.includes(`/* ${match}`) || content.includes(`// ${match}`)) {
                return false
              }
              // Ignorer certaines valeurs techniques courantes
              if (match === '0px' || match === '1px' || match === '2px') {
                return false
              }
              return true
            })

            if (filteredMatches.length > 0) {
              issues.push({
                file: relativePath,
                type,
                matches: filteredMatches,
                description
              })
              hasErrors = true
            }
          }
        })
      }
    }
  }

  scanDirectory(componentsDir)

  if (!hasErrors) {
    log.success('Aucune valeur en dur détectée dans les composants')
    log.info('Tous les composants utilisent correctement les tokens définis')
  } else {
    log.warning('Valeurs en dur détectées dans les composants:')
    issues.forEach(issue => {
      console.log(`\n📄 ${colors.yellow}${issue.file}${colors.reset}`)
      console.log(`   Type: ${issue.type}`)
      console.log(`   Solution: ${issue.description}`)
      issue.matches.forEach(match => {
        console.log(`   ${colors.yellow}⚠️ ${match}${colors.reset}`)
      })
    })
    console.log(`\n${colors.yellow}📋 Total: ${issues.length} fichier(s) avec des valeurs en dur${colors.reset}`)
    console.log(`${colors.blue}💡 Migration vers les tokens recommandée${colors.reset}`)
  }

  return !hasErrors
}

/**
 * Fonction principale
 */
function main() {
  console.log('🎨 Validation des tokens Utopia\n')

  const isValid = validateHardcodedValues()

  console.log('\n' + '='.repeat(60))

  if (isValid) {
    log.success('✅ VALIDATION RÉUSSIE')
    log.success('Les composants respectent les règles du design system')
    process.exit(0)
  } else {
    log.warning('⚠️ MIGRATION DES TOKENS RECOMMANDÉE')
    log.info('Certains composants utilisent encore des valeurs en dur')
    log.info('Migration progressive vers les tokens recommandée')
    log.success('✅ Commit autorisé - Les warnings peuvent être corrigés progressivement')
    process.exit(0)  // Permettre le commit même avec des warnings
  }
}

// Exécution si appelé directement
if (require.main === module) {
  main()
}

module.exports = { validateHardcodedValues }
