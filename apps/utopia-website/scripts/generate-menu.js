#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const DESIGN_SYSTEM_PATH = '../../../packages/utopia/src/components'
const OUTPUT_PATH = '../src/generated/menu-structure.ts'

// Fonction pour convertir un nom de dossier en label lisible
function formatLabel(folderName) {
  return folderName
    .replace(/([A-Z])/g, ' $1') // Ajouter des espaces avant les majuscules
    .replace(/^./, str => str.toUpperCase()) // Première lettre en majuscule
    .trim()
}

// Fonction pour convertir un nom en route
function formatRoute(section, componentName) {
  const sectionRoute = section.toLowerCase()
  const componentRoute = componentName.toLowerCase().replace(/\s+/g, '-')
  return `/design-system/${sectionRoute}/${componentRoute}`
}

// Fonction pour obtenir une icône par défaut basée sur le type
function getDefaultIcon(folderName, isSection = false) {
  if (isSection) {
    const iconMap = {
      'atoms': 'Atom',
      'molecules': 'Layers',
      'organisms': 'Grid-3x3',
      'layouts': 'Layout',
      'pages': 'File',
      'demo': 'Eye'
    }
    return iconMap[folderName.toLowerCase()] || 'Folder'
  }
  
  // Icônes par défaut pour les composants
  const iconMap = {
    'button': 'Square',
    'badge': 'Tag',
    'icon': 'Smile',
    'logo': 'Image',
    'header': 'Navigation',
    'menu': 'Menu',
    'defaultlayout': 'Layout-template'
  }
  
  return iconMap[folderName.toLowerCase().replace(/\s+/g, '')] || 'Component'
}

// Fonction pour scanner récursivement les dossiers
function scanDirectory(dirPath, relativePath = '') {
  const items = []
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dirPath, entry.name)
        const newRelativePath = path.join(relativePath, entry.name)
        
        // Scanner récursivement d'abord
        const subItems = scanDirectory(fullPath, newRelativePath)
        
        // Vérifier si c'est un composant (contient un index.ts ou un fichier .vue)
        const hasIndex = fs.existsSync(path.join(fullPath, 'index.ts'))
        const hasVueFile = fs.readdirSync(fullPath).some(file => file.endsWith('.vue'))
        
        if (subItems.length > 0) {
          // C'est une section qui contient des sous-éléments
          items.push({
            type: 'section',
            name: entry.name,
            label: formatLabel(entry.name),
            path: newRelativePath,
            children: subItems
          })
        } else if (hasIndex || hasVueFile) {
          // C'est un composant final
          items.push({
            type: 'component',
            name: entry.name,
            label: formatLabel(entry.name),
            path: newRelativePath
          })
        }
      }
    }
  } catch (error) {
    console.warn(`Cannot read directory ${dirPath}:`, error.message)
  }
  
  return items
}

// Fonction pour générer la structure du menu
function generateMenuStructure() {
  const dsPath = path.resolve(__dirname, DESIGN_SYSTEM_PATH)
  console.log('Scanning design system at:', dsPath)
  
  const structure = scanDirectory(dsPath)
  
  // Construire le menu avec sections et nav items
  const menuItems = []
  
  // Ajouter la page d'accueil
  menuItems.push({
    key: 'home',
    label: 'Accueil',
    icon: 'Home',
    to: '/'
  })
  
  // Traiter chaque section
  for (const section of structure) {
    if (section.type === 'section' && section.children) {
      // Ajouter le label de section
      menuItems.push({
        key: `${section.name}-section`,
        type: 'section',
        label: section.label
      })
      
      // Ajouter les composants de cette section
      for (const component of section.children) {
        if (component.type === 'component') {
          menuItems.push({
            key: `${section.name}-${component.name}`,
            label: component.label,
            icon: getDefaultIcon(component.name),
            to: formatRoute(section.name, component.name)
          })
        }
      }
    } else if (section.type === 'component') {
      // Composant à la racine
      menuItems.push({
        key: section.name,
        label: section.label,
        icon: getDefaultIcon(section.name),
        to: formatRoute('root', section.name)
      })
    }
  }
  
  return { structure, menuItems }
}

// Fonction pour écrire le fichier de sortie
function writeOutput(data) {
  const outputDir = path.dirname(path.resolve(__dirname, OUTPUT_PATH))
  
  // Créer le dossier si nécessaire
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  
  const content = `// Ce fichier est généré automatiquement par generate-menu.js
// Ne pas modifier manuellement

export interface MenuItem {
  key: string
  label: string
  icon: string
  to: string
}

export interface MenuSection {
  key: string
  type: 'section'
  label: string
}

export type MenuItemOrSection = MenuItem | MenuSection

// Structure complète scannée du design system
export const designSystemStructure = ${JSON.stringify(data.structure, null, 2)} as const

// Menu items générés automatiquement
export const generatedMenuItems: MenuItemOrSection[] = ${JSON.stringify(data.menuItems, null, 2)}

// Fonction utilitaire pour obtenir les items d'une section
export function getItemsForSection(sectionName: string): MenuItem[] {
  return generatedMenuItems.filter(item => 
    'to' in item && item.key.startsWith(sectionName + '-')
  ) as MenuItem[]
}

// Dernière mise à jour: ${new Date().toISOString()}
`
  
  fs.writeFileSync(path.resolve(__dirname, OUTPUT_PATH), content, 'utf8')
  console.log('Menu structure generated at:', path.resolve(__dirname, OUTPUT_PATH))
}

// Fonction principale
function main() {
  console.log('🔍 Scanning design system structure...')
  
  try {
    const data = generateMenuStructure()
    
    console.log('📁 Found sections:', data.structure.map(s => s.name).join(', '))
    console.log('📄 Generated menu items:', data.menuItems.length)
    
    writeOutput(data)
    
    console.log('✅ Menu structure generation completed!')
    
    // Afficher un aperçu
    console.log('\n📋 Menu preview:')
    data.menuItems.forEach(item => {
      if ('type' in item && item.type === 'section') {
        console.log(`   📑 ${item.label}`)
      } else {
        console.log(`     • ${item.label} (${item.icon}) → ${item.to}`)
      }
    })
    
  } catch (error) {
    console.error('❌ Error generating menu structure:', error)
    process.exit(1)
  }
}

// Lancer le script
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export { formatLabel, formatRoute, generateMenuStructure }
