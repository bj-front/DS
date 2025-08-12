#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const DESIGN_SYSTEM_PATH = path.resolve(__dirname, '../../../packages/utopia/src/components')
const OUTPUT_PATH = path.resolve(__dirname, '../src/generated/menu-structure.ts')
const PAGES_OUTPUT_DIR = path.resolve(__dirname, '../src/generated/pages')
const ROUTES_OUTPUT_PATH = path.resolve(__dirname, '../src/generated/routes.ts')
const ICON_META_PATH = path.resolve(__dirname, '../src/generated/component-icons.json')

// Fonction pour charger les métadonnées d'icônes
function loadIconMetadata() {
  try {
    if (fs.existsSync(ICON_META_PATH)) {
      return JSON.parse(fs.readFileSync(ICON_META_PATH, 'utf8'))
    }
  } catch {
    console.log('⚠️  Erreur lors du chargement des métadonnées d\'icônes')
  }
  return {}
}

// Fonction pour convertir un nom de dossier en label lisible
function formatLabel(folderName) {
  return folderName
    .replace(/([A-Z])/g, ' $1') // Ajouter des espaces avant les majuscules
    .replace(/^./, str => str.toUpperCase()) // Première lettre en majuscule
    .trim()
}

// Fonction pour convertir un nom en route
function formatRoute(folderName, section = '') {
  const cleanName = folderName.toLowerCase().replace(/[^a-z0-9]/g, '-')
  return section ? `/design-system/${section}/${cleanName}` : `/design-system/${cleanName}`
}

// Fonction pour obtenir un exemple approprié selon le composant
function getComponentExample(componentName) {
  const examples = {
    'Icon': '<Icon name="Heart" />',
    'Badge': '<Badge>Default</Badge>',
    'Button': '<Button>Click me</Button>',
    'Card': '<Card>Card content</Card>',
    'Logo': '<Logo brand="club-employes" />',
    'SearchBox': '<SearchBox placeholder="Search..." />',
    'DataTable': '<DataTable :columns="[]" :data="[]" />',
    'DefaultLayout': '<DefaultLayout>Layout content</DefaultLayout>'
  }
  
  return examples[componentName] || `<${componentName} />`
}

// Fonction pour obtenir le code d'exemple approprié
function getComponentExampleCode(componentName) {
  const examples = {
    'Icon': '&lt;Icon name="Heart" /&gt;',
    'Badge': '&lt;Badge&gt;Default&lt;/Badge&gt;',
    'Button': '&lt;Button&gt;Click me&lt;/Button&gt;',
    'Card': '&lt;Card&gt;Card content&lt;/Card&gt;',
    'Logo': '&lt;Logo brand="club-employes" /&gt;',
    'SearchBox': '&lt;SearchBox placeholder="Search..." /&gt;',
    'DataTable': '&lt;DataTable :columns="[]" :data="[]" /&gt;',
    'DefaultLayout': '&lt;DefaultLayout&gt;Layout content&lt;/DefaultLayout&gt;'
  }
  
  return examples[componentName] || `&lt;${componentName} /&gt;`
}

// Fonction pour obtenir une icône appropriée selon le type de composant
function getIconForComponent(name, section) {
  const iconMap = {
    // Atoms
    'badge': 'Tag',
    'button': 'Square',
    'icon': 'Smile',
    'logo': 'Image',
    'card': 'RectangleHorizontal',
    'input': 'Edit',
    'checkbox': 'CheckSquare',
    'radio': 'Circle',
    'switch': 'ToggleLeft',
    'spinner': 'Loader2',
    'avatar': 'User',
    'tooltip': 'Info',
    
    // Molecules
    'searchbox': 'Search',
    'dropdown': 'ChevronDown',
    'modal': 'Window',
    'dialog': 'MessageSquare',
    'navbar': 'Menu',
    'breadcrumb': 'Navigation',
    'pagination': 'MoreHorizontal',
    'tabs': 'Tabs',
    'accordion': 'ChevronRight',
    'form': 'FileText',
    
    // Organisms
    'datatable': 'Table',
    'sidebar': 'PanelLeft',
    'header': 'Layout',
    'footer': 'AlignBottom',
    'calendar': 'Calendar',
    'chart': 'BarChart3',
    'carousel': 'Images',
    'gallery': 'Grid3x3',
    
    // Par section
    'atoms': 'Atom',
    'molecules': 'Combine',
    'organisms': 'Layers',
    'layouts': 'Layout',
    'pages': 'FileText',
    'themes': 'Palette',
    'demo': 'Play'
  }
  
  const key = name.toLowerCase()
  return iconMap[key] || iconMap[section] || 'Component'
}

// Fonction pour vérifier si un dossier contient un composant
function isComponentDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return false
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  const hasVueFile = entries.some(e => e.name.endsWith('.vue'))
  const hasIndexFile = entries.some(e => e.name === 'index.ts')
  
  return hasVueFile || hasIndexFile
}

// Fonction pour scanner récursivement un dossier
function scanDirectory(dirPath, relativePath = '') {
  const items = []
  
  if (!fs.existsSync(dirPath)) {
    return items
  }
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  const directories = entries.filter(e => e.isDirectory())
  
  for (const entry of directories) {
    // Ignorer le fichier index.ts et autres fichiers
    if (!entry.isDirectory()) continue
    
    const fullPath = path.join(dirPath, entry.name)
    
    if (isComponentDirectory(fullPath)) {
      // C'est un composant final
      items.push({
        name: entry.name,
        type: 'component',
        path: path.join(relativePath, entry.name)
      })
    } else {
      // C'est potentiellement une section, scanner récursivement
      const subItems = scanDirectory(fullPath, path.join(relativePath, entry.name))
      
      if (subItems.length > 0) {
        items.push({
          name: entry.name,
          type: 'section',
          path: path.join(relativePath, entry.name),
          children: subItems
        })
      }
    }
  }
  
  return items
}

// Fonction pour scanner spécifiquement le dossier racine des composants
function scanRootComponentsDirectory(dirPath) {
  const sections = []
  
  if (!fs.existsSync(dirPath)) {
    return sections
  }
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  const directories = entries.filter(e => e.isDirectory())
  
  for (const entry of directories) {
    const fullPath = path.join(dirPath, entry.name)
    const components = scanDirectory(fullPath, entry.name)
    
    if (components.length > 0) {
      sections.push({
        name: entry.name,
        type: 'section',
        path: entry.name,
        children: components
      })
    }
  }
  
  return sections
}

// Fonction pour générer un template de page Vue
function generatePageTemplate(componentName, section, route, iconName = null) {
  const componentImportName = `${componentName}`
  const sectionCapitalized = formatLabel(section)
  
  // Charger les métadonnées d'icônes pour utiliser l'icône sélectionnée
  const iconMeta = loadIconMetadata()
  const iconKey = `${section}-${componentName}`
  const icon = iconName || iconMeta[iconKey] || getIconForComponent(componentName, section)
  
  return `<template>
  <div class="component-page">
    <div class="page-header">
      <div class="header-title">
        <Icon name="${icon}" class="component-icon" />
        <h1>${formatLabel(componentName)}</h1>
      </div>
      <p class="component-meta">
        <span class="section-badge">${sectionCapitalized}</span>
      </p>
    </div>
    
    <div class="component-showcase">
      <h2>Exemples</h2>
      <div class="showcase-grid">
        <!-- Exemple par défaut -->
        <div class="showcase-item">
          <h3>Défaut</h3>
          <div class="example">
            ${getComponentExample(componentName)}
          </div>
          <details class="code-snippet">
            <summary>Voir le code</summary>
            <pre><code>${getComponentExampleCode(componentName)}</code></pre>
          </details>
        </div>
        
        <!-- Ajoutez d'autres exemples ici -->
      </div>
    </div>
    
    <div class="component-props">
      <h2>Props</h2>
      <p>Documentation des props à compléter...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ${componentImportName}, Icon } from '@club-employes/utopia'
</script>

<style scoped>
.component-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--utopia-color-border);
  padding-bottom: 1rem;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.component-icon {
  font-size: 2rem;
  color: var(--utopia-color-primary);
  background: var(--utopia-color-primary-light, #f0f8ff);
  padding: 0.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-header h1 {
  margin: 0;
  font-size: 2.5rem;
  color: var(--utopia-color-text-primary);
}

.component-meta {
  margin: 0;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.section-badge {
  background: var(--utopia-color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.component-showcase {
  margin-bottom: 3rem;
}

.component-showcase h2 {
  margin-bottom: 1.5rem;
  color: var(--utopia-color-text-primary);
}

.showcase-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.showcase-item {
  border: 1px solid var(--utopia-color-border);
  border-radius: 8px;
  overflow: hidden;
}

.showcase-item h3 {
  margin: 0;
  padding: 1rem;
  background: var(--utopia-color-surface-secondary);
  border-bottom: 1px solid var(--utopia-color-border);
  font-size: 1rem;
  font-weight: 600;
}

.example {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  background: var(--utopia-color-surface);
}

.code-snippet {
  border-top: 1px solid var(--utopia-color-border);
}

.code-snippet summary {
  padding: 0.75rem 1rem;
  cursor: pointer;
  background: var(--utopia-color-surface-secondary);
  font-weight: 500;
}

.code-snippet pre {
  margin: 0;
  padding: 1rem;
  background: var(--utopia-color-surface-tertiary);
  overflow-x: auto;
}

.code-snippet code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
}

.component-props {
  margin-top: 3rem;
}

.component-props h2 {
  margin-bottom: 1rem;
  color: var(--utopia-color-text-primary);
}
</style>`
}

// Fonction pour convertir la structure en menu items
function structureToMenuItems(structure) {
  const menuItems = []
  
  // Ajouter l'accueil en premier
  menuItems.push({
    key: 'home',
    label: 'Accueil',
    icon: 'Home',
    to: '/'
  })
  
  // Traiter chaque section et inclure TOUS les composants
  const allSections = structure.filter(item => item.type === 'section')
  
  for (const section of allSections) {
    // Ajouter le séparateur de section
    menuItems.push({
      key: `${section.name}-section`,
      type: 'section',
      label: formatLabel(section.name)
    })
    
    // Ajouter les composants de la section
    for (const component of section.children) {
      if (component.type === 'component') {
        menuItems.push({
          key: `${section.name}-${component.name}`,
          label: formatLabel(component.name),
          icon: getIconForComponent(component.name, section.name),
          to: formatRoute(component.name, section.name)
        })
      }
    }
  }
  
  return menuItems
}

// Fonction pour générer les routes Vue Router
function generateRoutes(structure) {
  const routes = []
  
  for (const section of structure) {
    if (section.type === 'section') {
      for (const component of section.children) {
        if (component.type === 'component') {
          const route = formatRoute(component.name, section.name)
          const componentPath = `@/generated/pages/${section.name}/${component.name}Page.vue`
          
          routes.push({
            path: route,
            name: `${section.name}-${component.name}`,
            component: componentPath,
            meta: {
              title: formatLabel(component.name),
              section: formatLabel(section.name)
            }
          })
        }
      }
    }
  }
  
  return routes
}

// Fonction principale
function generateCompleteStructure() {
  console.log('🔍 Scanning design system structure...')
  console.log('Scanning design system at:', DESIGN_SYSTEM_PATH)
  
  const structure = scanRootComponentsDirectory(DESIGN_SYSTEM_PATH)
  const menuItems = structureToMenuItems(structure)
  const routes = generateRoutes(structure)
  
  console.log(`📁 Found sections: ${structure.map(s => s.name).join(', ')}`)
  console.log(`📄 Generated menu items: ${menuItems.length}`)
  console.log(`🚗 Generated routes: ${routes.length}`)
  
  // Créer le dossier generated s'il n'existe pas
  const generatedDir = path.dirname(OUTPUT_PATH)
  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir, { recursive: true })
  }
  
  // Créer le dossier pages s'il n'existe pas
  if (!fs.existsSync(PAGES_OUTPUT_DIR)) {
    fs.mkdirSync(PAGES_OUTPUT_DIR, { recursive: true })
  }
  
  // Générer le fichier de structure du menu
  const menuContent = `// Ce fichier est généré automatiquement par generate-complete-structure.js
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
export const designSystemStructure = ${JSON.stringify(structure, null, 2)} as const

// Menu items générés automatiquement
export const generatedMenuItems: MenuItemOrSection[] = ${JSON.stringify(menuItems, null, 2)}

// Fonction utilitaire pour obtenir les items d'une section
export function getItemsForSection(sectionName: string): MenuItem[] {
  return generatedMenuItems.filter(item => 
    'to' in item && item.key.startsWith(sectionName + '-')
  ) as MenuItem[]
}

// Dernière mise à jour: ${new Date().toISOString()}
`
  
  fs.writeFileSync(OUTPUT_PATH, menuContent, 'utf8')
  console.log('Menu structure generated at:', OUTPUT_PATH)
  
  // Générer les routes
  const routesContent = `// Ce fichier est généré automatiquement par generate-complete-structure.js
// Ne pas modifier manuellement

import type { RouteRecordRaw } from 'vue-router'

// Routes générées automatiquement pour les composants du design system
export const generatedRoutes: RouteRecordRaw[] = [
${routes.map(route => `  {
    path: '${route.path}',
    name: '${route.name}',
    component: () => import('${route.component}'),
    meta: ${JSON.stringify(route.meta)}
  }`).join(',\n')}
]

// Dernière mise à jour: ${new Date().toISOString()}
`
  
  fs.writeFileSync(ROUTES_OUTPUT_PATH, routesContent, 'utf8')
  console.log('Routes generated at:', ROUTES_OUTPUT_PATH)
  
  // Générer les pages pour chaque composant
  let pagesCreated = 0
  for (const section of structure) {
    if (section.type === 'section') {
      const sectionDir = path.join(PAGES_OUTPUT_DIR, section.name)
      if (!fs.existsSync(sectionDir)) {
        fs.mkdirSync(sectionDir, { recursive: true })
      }
      
      for (const component of section.children) {
        if (component.type === 'component') {
          const pagePath = path.join(sectionDir, `${component.name}Page.vue`)
          const route = formatRoute(component.name, section.name)
          const pageContent = generatePageTemplate(component.name, section.name, route)
          
          // Forcer la régénération ou créer si n'existe pas
          const forceRegenerate = process.argv.includes('--force')
          if (!fs.existsSync(pagePath) || forceRegenerate) {
            fs.writeFileSync(pagePath, pageContent, 'utf8')
            pagesCreated++
          }
        }
      }
    }
  }
  
  console.log(`📄 Created ${pagesCreated} new pages`)
  console.log('✅ Complete structure generation completed!')
  
  // Afficher un aperçu du menu
  console.log('\n📋 Menu preview:')
  for (const item of menuItems) {
    if ('type' in item && item.type === 'section') {
      console.log(`   📑 ${item.label}`)
    } else {
      console.log(`     • ${item.label} (${item.icon}) → ${item.to}`)
    }
  }
  
  return { structure, menuItems, routes }
}

// Export pour utilisation externe
export { formatLabel, formatRoute, generateCompleteStructure }

// Exécuter si appelé directement
if (import.meta.url === `file://${process.argv[1]}`) {
  generateCompleteStructure()
}