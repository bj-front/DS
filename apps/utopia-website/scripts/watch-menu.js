#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DESIGN_SYSTEM_PATH = path.resolve(__dirname, '../../../packages/utopia/src/components')
const DEBOUNCE_DELAY = 500 // ms

let timeoutId = null

function debounceGeneration() {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  
  timeoutId = setTimeout(() => {
    console.log('🔄 Design system structure changed, regenerating menu...')
    try {
      // Import dynamique pour éviter les problèmes de cache
      import('./generate-menu.js?t=' + Date.now()).then(module => {
        const data = module.generateMenuStructure()
        const outputPath = path.resolve(__dirname, '../src/generated/menu-structure.ts')
        
        // Générer le contenu
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
        
        fs.writeFileSync(outputPath, content, 'utf8')
        console.log('✅ Menu regenerated successfully!')
      })
    } catch (error) {
      console.error('❌ Error regenerating menu:', error)
    }
  }, DEBOUNCE_DELAY)
}

function startWatcher() {
  console.log('👀 Watching design system at:', DESIGN_SYSTEM_PATH)
  console.log('🚀 Menu will auto-regenerate when structure changes...')
  
  // Vérifier que le dossier existe
  if (!fs.existsSync(DESIGN_SYSTEM_PATH)) {
    console.error('❌ Design system path does not exist:', DESIGN_SYSTEM_PATH)
    process.exit(1)
  }
  
  // Watcher récursif
  const watcher = fs.watch(DESIGN_SYSTEM_PATH, { recursive: true }, (eventType, filename) => {
    if (filename) {
      // Ignorer les fichiers temporaires et les fichiers non pertinents
      if (filename.includes('.') && !filename.endsWith('.vue') && !filename.endsWith('.ts')) {
        return
      }
      
      console.log(`📁 ${eventType}: ${filename}`)
      debounceGeneration()
    }
  })
  
  // Gérer l'arrêt propre
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping menu watcher...')
    watcher.close()
    process.exit(0)
  })
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Stopping menu watcher...')
    watcher.close()
    process.exit(0)
  })
}

// Lancer le watcher si exécuté directement
if (import.meta.url === `file://${process.argv[1]}`) {
  startWatcher()
}

export { startWatcher }
