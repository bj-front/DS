import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ICONS_DIR = path.join(__dirname, '../src/assets/icons')
const PROCESSED_ICONS_DIR = path.join(__dirname, '../src/assets/icons-processed')
const TOKENS_FILE = path.join(__dirname, '../src/tokens/core/icons.json')

// Créer le dossier des icônes traitées s'il n'existe pas
if (!fs.existsSync(PROCESSED_ICONS_DIR)) {
  fs.mkdirSync(PROCESSED_ICONS_DIR, { recursive: true })
}

// Fonction pour convertir un nom de fichier en nom de token
function fileNameToTokenName(filename) {
  let name = filename.replace('.svg', '')

  // Gérer les caractères spéciaux courants
  const specialChars = {
    '€': 'euro',
    '$': 'dollar',
    '£': 'pound',
    '¥': 'yen',
    '&': 'and',
    '@': 'at',
    '#': 'hash',
    '%': 'percent',
    '+': 'plus',
    '=': 'equals'
  }

  // Remplacer les caractères spéciaux connus
  Object.entries(specialChars).forEach(([char, replacement]) => {
    name = name.replace(new RegExp(`\\${char}`, 'g'), replacement)
  })

  name = name
    .replace(/\s+/g, '-')  // Remplacer les espaces par des tirets
    .replace(/[^a-zA-Z0-9_-]/g, '-')  // Remplacer les autres caractères spéciaux par des tirets
    .replace(/-+/g, '-')  // Fusionner les tirets multiples
    .replace(/^-|-$/g, '')  // Supprimer les tirets en début et fin
    .toLowerCase()

  // S'assurer qu'on n'a jamais un nom vide
  if (!name || name === '') {
    name = 'icon-' + Math.random().toString(36).substr(2, 6)
  }

  return name
}

// Fonction pour catégoriser les icônes basée sur leur nom
function categorizeIcon(filename) {
  const name = filename.toLowerCase()

  if (name.includes('user') || name.includes('person')) return 'users'
  if (name.includes('sort') || name.includes('arrow') || name.includes('up') || name.includes('down')) return 'navigation'
  if (name.includes('star') || name.includes('heart') || name.includes('thumb')) return 'feedback'
  if (name.includes('time') || name.includes('clock') || name.includes('watch')) return 'time'
  if (name.includes('setting') || name.includes('widget') || name.includes('tool')) return 'settings'
  if (name.includes('text') || name.includes('typo') || name.includes('edit')) return 'text'
  if (name.includes('video') || name.includes('sound') || name.includes('play')) return 'media'
  if (name.includes('file') || name.includes('upload') || name.includes('download')) return 'files'
  if (name.includes('shop') || name.includes('wallet') || name.includes('ticket')) return 'commerce'
  if (name.includes('world') || name.includes('map') || name.includes('location')) return 'location'
  if (name.includes('weather') || name.includes('sun') || name.includes('storm')) return 'weather'

  return 'general'
}

// Fonction pour traiter un fichier SVG
function processSVG(content, filename) {
  let processed = content

  // Remplacer les couleurs hardcodées par currentColor, mais PRÉSERVER fill="none"
  processed = processed.replace(/stroke="[^"]*"(?!"none")/g, 'stroke="currentColor"')

  // Ne remplacer fill que s'il n'est pas "none"
  processed = processed.replace(/fill="([^"]*)"(?!\s*=\s*"none")/g, (match, colorValue) => {
    if (colorValue === 'none') {
      return match // Garder fill="none" intact
    }
    return 'fill="currentColor"'
  })

  // STANDARDISER le stroke-width à 1 pour un style bold
  processed = processed.replace(/stroke-width="([^"]*)"/g, 'stroke-width="1"')

  // SUPPRIMER toutes les opacités pour avoir des couleurs pleines
  processed = processed.replace(/stroke-opacity="[^"]*"/g, '')
  processed = processed.replace(/fill-opacity="[^"]*"/g, '')
  processed = processed.replace(/opacity="[^"]*"/g, '')

  // Nettoyer les espaces multiples mais préserver la structure
  processed = processed.replace(/\s+/g, ' ')
  processed = processed.replace(/>\s+</g, '><') // Supprimer les espaces entre les balises

  return processed
}

// Fonction principale
async function processIcons() {
  console.log('🎯 Traitement des icônes SVG...')

  // Lire tous les fichiers SVG
  const files = fs.readdirSync(ICONS_DIR).filter(file => file.endsWith('.svg'))
  console.log(`📁 ${files.length} icônes trouvées`)

  const tokens = {
    icons: {}
  }

  let processedCount = 0

  for (const file of files) {
    try {
      const inputPath = path.join(ICONS_DIR, file)
      const outputPath = path.join(PROCESSED_ICONS_DIR, file)

      // Lire le contenu SVG
      const content = fs.readFileSync(inputPath, 'utf8')

      // Traiter le SVG
      const processedContent = processSVG(content, file)

      // Écrire le fichier traité
      fs.writeFileSync(outputPath, processedContent)

      // Ajouter au système de tokens
      const tokenName = fileNameToTokenName(file)
      const category = categorizeIcon(file)

      if (!tokens.icons[category]) {
        tokens.icons[category] = {}
      }

      tokens.icons[category][tokenName] = {
        value: `./assets/icons-processed/${file}`,
        type: "asset",
        description: `Icône ${tokenName} (catégorie: ${category})`
      }

      processedCount++

      if (processedCount % 20 === 0) {
        console.log(`⚙️  Traité ${processedCount}/${files.length} icônes...`)
      }

    } catch (error) {
      console.error(`❌ Erreur lors du traitement de ${file}:`, error.message)
    }
  }

  // Écrire le fichier de tokens
  fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens, null, 2))

  console.log(`✅ Traitement terminé !`)
  console.log(`📁 ${processedCount} icônes traitées dans: ${PROCESSED_ICONS_DIR}`)
  console.log(`🎯 Tokens générés dans: ${TOKENS_FILE}`)
  console.log(`📊 Catégories créées: ${Object.keys(tokens.icons).join(', ')}`)

  // Afficher un résumé par catégorie
  console.log('\n📈 Résumé par catégorie:')
  Object.entries(tokens.icons).forEach(([category, icons]) => {
    console.log(`  ${category}: ${Object.keys(icons).length} icônes`)
  })
}

// Lancer le script
processIcons().catch(console.error) 