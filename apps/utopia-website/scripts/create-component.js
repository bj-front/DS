#!/usr/bin/env node

import chalk from 'chalk'
import fs from 'fs'
import inquirer from 'inquirer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration pour les icônes
// const ICONS_LIST_PATH = path.resolve(__dirname, '../public/icons-list.json')

// Configuration
const DESIGN_SYSTEM_PATH = path.resolve(__dirname, '../../../packages/utopia/src/components')
const MENU_JSON_PATH = path.resolve(__dirname, '../src/config/menu.json')

// Types de composants disponibles
const COMPONENT_TYPES = [
  { name: '⚛️  Atoms (composants de base)', value: 'atoms' },
  { name: '🧬 Molecules (combinaisons simples)', value: 'molecules' },
  { name: '🦠 Organisms (composants complexes)', value: 'organisms' },
  { name: '📄 Templates (structures de page)', value: 'templates' },
  { name: '🎨 Themes (styles et thèmes)', value: 'themes' },
  { name: '📐 Layouts (mises en page)', value: 'layouts' }
]





// Templates de fichiers
const COMPONENT_TEMPLATES = {
  vue: (componentName) => `<template>
  <div class="utopia-${componentName.toLowerCase()}" :class="${componentName.toLowerCase()}Classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'medium',
  disabled: false
})

const ${componentName.toLowerCase()}Classes = computed(() => ({
  [\`utopia-${componentName.toLowerCase()}--\${props.variant}\`]: true,
  [\`utopia-${componentName.toLowerCase()}--\${props.size}\`]: true,
  'utopia-${componentName.toLowerCase()}--disabled': props.disabled
}))
</script>

<style scoped>
.utopia-${componentName.toLowerCase()} {
  /* Styles de base */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--utopia-radius-md);
  font-family: var(--utopia-font-family);
  transition: all 0.2s ease;
}

/* Variants */
.utopia-${componentName.toLowerCase()}--default {
  background-color: var(--utopia-color-surface);
  border: 1px solid var(--utopia-color-border);
  color: var(--utopia-color-text);
}

.utopia-${componentName.toLowerCase()}--primary {
  background-color: var(--utopia-color-primary);
  border: 1px solid var(--utopia-color-primary);
  color: var(--utopia-color-primary-text);
}

.utopia-${componentName.toLowerCase()}--secondary {
  background-color: var(--utopia-color-secondary);
  border: 1px solid var(--utopia-color-secondary);
  color: var(--utopia-color-secondary-text);
}

/* Sizes */
.utopia-${componentName.toLowerCase()}--small {
  padding: var(--utopia-space-xs) var(--utopia-space-sm);
  font-size: var(--utopia-font-size-sm);
}

.utopia-${componentName.toLowerCase()}--medium {
  padding: var(--utopia-space-sm) var(--utopia-space-md);
  font-size: var(--utopia-font-size-base);
}

.utopia-${componentName.toLowerCase()}--large {
  padding: var(--utopia-space-md) var(--utopia-space-lg);
  font-size: var(--utopia-font-size-lg);
}

/* States */
.utopia-${componentName.toLowerCase()}--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .utopia-${componentName.toLowerCase()}--default {
    background-color: var(--utopia-color-surface-dark);
    border-color: var(--utopia-color-border-dark);
    color: var(--utopia-color-text-dark);
  }
}
</style>`,

  index: (componentName) => `export { default as ${componentName} } from './${componentName}.vue'`,

  types: (componentName) => `export interface ${componentName}Props {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}`,


}

// Fonctions utilitaires
function formatComponentName(name) {
  return name
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^./, str => str.toUpperCase())
}

function createComponentFiles(componentName, type, targetDir) {
  const files = []
  
  // Créer le dossier du composant
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  // 1. Fichier Vue principal
  const vueFile = path.join(targetDir, `${componentName}.vue`)
  fs.writeFileSync(vueFile, COMPONENT_TEMPLATES.vue(componentName), 'utf8')
  files.push(vueFile)

  // 2. Fichier index.ts
  const indexFile = path.join(targetDir, 'index.ts')
  fs.writeFileSync(indexFile, COMPONENT_TEMPLATES.index(componentName), 'utf8')
  files.push(indexFile)

  // 3. Fichier de types (optionnel)
  const typesFile = path.join(targetDir, 'types.ts')
  fs.writeFileSync(typesFile, COMPONENT_TEMPLATES.types(componentName), 'utf8')
  files.push(typesFile)



  return files
}

function updateTypeExports(type, componentName) {
  const typeIndexPath = path.join(DESIGN_SYSTEM_PATH, type, 'index.ts')
  
  // Créer le fichier index.ts du type s'il n'existe pas
  if (!fs.existsSync(typeIndexPath)) {
    const typeDir = path.join(DESIGN_SYSTEM_PATH, type)
    if (!fs.existsSync(typeDir)) {
      fs.mkdirSync(typeDir, { recursive: true })
    }
    fs.writeFileSync(typeIndexPath, '', 'utf8')
  }

  // Lire le contenu actuel
  let content = fs.readFileSync(typeIndexPath, 'utf8')
  
  // Ajouter l'export s'il n'existe pas déjà
  const exportLine = `export { ${componentName} } from './${componentName}'`
  if (!content.includes(exportLine)) {
    content = content.trim()
    if (content) content += '\n'
    content += exportLine + '\n'
    fs.writeFileSync(typeIndexPath, content, 'utf8')
  }

  // Mettre à jour l'index principal des composants
  const mainIndexPath = path.join(DESIGN_SYSTEM_PATH, 'index.ts')
  if (fs.existsSync(mainIndexPath)) {
    let mainContent = fs.readFileSync(mainIndexPath, 'utf8')
    const typeExportLine = `export * from './${type}'`
    if (!mainContent.includes(typeExportLine)) {
      mainContent = mainContent.trim()
      if (mainContent) mainContent += '\n'
      mainContent += `\n// ${type.charAt(0).toUpperCase() + type.slice(1)}\n${typeExportLine}\n`
      fs.writeFileSync(mainIndexPath, mainContent, 'utf8')
    }
  }
}

// Fonction pour mettre à jour le fichier menu.json
async function updateMenuJson(type, componentName, icon) {
  try {
    // Lire le fichier menu.json actuel
    let menuConfig = {}
    if (fs.existsSync(MENU_JSON_PATH)) {
      const menuContent = fs.readFileSync(MENU_JSON_PATH, 'utf8')
      menuConfig = JSON.parse(menuContent)
    } else {
      menuConfig = { menuItems: [] }
    }

    // Créer le nouvel item de menu
    const newMenuItem = {
      key: componentName.toLowerCase(),
      label: componentName,
      icon: icon || 'Package',
      to: `/design-system/${type}/${componentName.toLowerCase()}`
    }

    // Trouver la section appropriée et ajouter l'item
    const sectionKey = `${type}-section`
    const sectionIndex = menuConfig.menuItems.findIndex(item => item.key === sectionKey)
    
    if (sectionIndex !== -1) {
      // Trouver l'index où insérer le nouvel item (après la section et ses items existants)
      let insertIndex = sectionIndex + 1
      while (insertIndex < menuConfig.menuItems.length) {
        const currentItem = menuConfig.menuItems[insertIndex]
        if (currentItem.type === 'section') {
          break
        }
        insertIndex++
      }
      
      // Vérifier si l'item n'existe pas déjà
      const existingItemIndex = menuConfig.menuItems.findIndex(item => 
        item.key === newMenuItem.key
      )
      
      if (existingItemIndex === -1) {
        // Ajouter le nouvel item
        menuConfig.menuItems.splice(insertIndex, 0, newMenuItem)
        console.log(chalk.green(`✅ Ajouté au menu: ${componentName}`))
      } else {
        // Mettre à jour l'item existant
        menuConfig.menuItems[existingItemIndex] = newMenuItem
        console.log(chalk.yellow(`⚠️  Mis à jour dans le menu: ${componentName}`))
      }
    } else {
      // Si la section n'existe pas, l'ajouter avec l'item
      const sectionLabel = type.charAt(0).toUpperCase() + type.slice(1)
      menuConfig.menuItems.push(
        {
          key: sectionKey,
          type: 'section',
          label: sectionLabel
        },
        newMenuItem
      )
      console.log(chalk.green(`✅ Créé nouvelle section et ajouté: ${componentName}`))
    }

    // Sauvegarder le fichier menu.json mis à jour
    fs.writeFileSync(MENU_JSON_PATH, JSON.stringify(menuConfig, null, 2), 'utf8')
    console.log(chalk.gray(`📝 Menu mis à jour: ${path.relative(process.cwd(), MENU_JSON_PATH)}`))
    
    // Générer la page de documentation
    await generateComponentPage(type, componentName, icon)
    
    // Mettre à jour le fichier des routes
    await updateRoutesFile(type, componentName)
    
  } catch (error) {
    console.error(chalk.red(`❌ Erreur lors de la mise à jour du menu: ${error.message}`))
    throw error
  }
}

// Fonction pour générer la page de documentation du composant
async function generateComponentPage(type, componentName, icon) {
  const GENERATED_PAGES_PATH = path.resolve(__dirname, '../src/generated/pages')
  const pageDir = path.join(GENERATED_PAGES_PATH, type)
  const pageFile = path.join(pageDir, `${componentName}Page.vue`)
  
  // Créer le dossier si nécessaire
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true })
  }
  
  // Template de page utilisant ComponentLayout
  const pageTemplate = `<template>
  <ComponentLayout 
    :title="'${componentName}'"
    :icon="'${icon || 'Package'}'"
    :type="'${type.charAt(0).toUpperCase() + type.slice(1)}'"
  >
    <template #examples>
      <div class="showcase-item">
        <h3>Défaut</h3>
        <div class="example">
          <${componentName} />
        </div>
        <details class="code-snippet">
          <summary>Voir le code</summary>
          <pre><code>&lt;${componentName} /&gt;</code></pre>
        </details>
      </div>
      
      <!-- Ajoutez d'autres exemples ici -->
      <div class="showcase-item">
        <h3>Variante personnalisée</h3>
        <div class="example">
          <!-- Exemple personnalisé à développer -->
          <${componentName} />
        </div>
        <details class="code-snippet">
          <summary>Voir le code</summary>
          <pre><code>&lt;${componentName} /&gt;</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <p>Cette page de documentation a été générée automatiquement pour le composant <strong>${componentName}</strong>.</p>
      <p>📁 <strong>Fichier :</strong> <code>src/generated/pages/${type}/${componentName}Page.vue</code></p>
      <p>🎨 <strong>Composant :</strong> <code>packages/utopia/src/components/${type}/${componentName}/</code></p>
      <p>📝 <strong>Personnalisation :</strong></p>
      <ul>
        <li>Modifiez les exemples dans les slots <code>#examples</code></li>
        <li>Ajoutez de la documentation dans le slot <code>#documentation</code></li>
        <li>Référez-vous à la documentation du design system</li>
      </ul>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ${componentName} } from '@club-employes/utopia'
import { ComponentLayout } from '@/components'
</script>

<style scoped>
</style>`

  // Écrire le fichier de page
  fs.writeFileSync(pageFile, pageTemplate, 'utf8')
  console.log(chalk.gray(`📄 Page générée: ${path.relative(process.cwd(), pageFile)}`))
}

// Fonction pour mettre à jour le fichier des routes générées
async function updateRoutesFile(type, componentName) {
  const ROUTES_FILE_PATH = path.resolve(__dirname, '../src/generated/routes.ts')
  
  try {
    // Lire le fichier des routes existant
    let routesContent = ''
    if (fs.existsSync(ROUTES_FILE_PATH)) {
      routesContent = fs.readFileSync(ROUTES_FILE_PATH, 'utf8')
    } else {
      // Créer le fichier de base s'il n'existe pas
      routesContent = `// Ce fichier est généré automatiquement par create-component.js
// Ne pas modifier manuellement

import type { RouteRecordRaw } from 'vue-router'

// Routes générées automatiquement pour les composants du design system
export const generatedRoutes: RouteRecordRaw[] = [
]`
    }

    // Générer la nouvelle route
    const newRoute = `  {
    path: '/design-system/${type}/${componentName.toLowerCase()}',
    name: '${type}-${componentName}',
    component: () => import('@/generated/pages/${type}/${componentName}Page.vue'),
    meta: {"title":"${componentName}","section":"${type.charAt(0).toUpperCase() + type.slice(1)}"}
  }`

    // Vérifier si la route existe déjà
    const routeExists = routesContent.includes(`path: '/design-system/${type}/${componentName.toLowerCase()}'`)
    
    if (!routeExists) {
      // Trouver l'endroit où insérer la nouvelle route (avant le dernier bracket)
      const lastBracketIndex = routesContent.lastIndexOf(']')
      if (lastBracketIndex !== -1) {
        // Vérifier s'il y a déjà des routes
        const beforeClosing = routesContent.substring(0, lastBracketIndex).trim()
        const needsComma = beforeClosing.endsWith('}')
        
        const insertContent = needsComma ? `,\n${newRoute}` : `\n${newRoute}`
        routesContent = routesContent.substring(0, lastBracketIndex) + insertContent + '\n' + routesContent.substring(lastBracketIndex)
      }
      
      // Écrire le fichier mis à jour
      fs.writeFileSync(ROUTES_FILE_PATH, routesContent, 'utf8')
      console.log(chalk.gray(`🛣️  Route ajoutée: ${path.relative(process.cwd(), ROUTES_FILE_PATH)}`))
    } else {
      console.log(chalk.yellow(`⚠️  Route déjà existante pour ${componentName}`))
    }
    
  } catch (error) {
    console.error(chalk.red(`❌ Erreur lors de la mise à jour des routes: ${error.message}`))
    throw error
  }
}

async function createComponent() {
  console.log(chalk.blue.bold('\n🚀 Générateur de composants Utopia Design System\n'))

  try {
    // 1. Sélection du type de composant
    const { type } = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Quel type de composant voulez-vous créer ?',
        choices: COMPONENT_TYPES
      }
    ])

    // 2. Nom du composant
    const { componentName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'componentName',
        message: 'Nom du composant (ex: MyButton) :',
        validate: (input) => {
          if (!input || input.trim().length === 0) {
            return 'Le nom du composant est requis'
          }
          if (!/^[A-Za-z][A-Za-z0-9]*$/.test(input.trim())) {
            return 'Le nom doit commencer par une lettre et ne contenir que des lettres et chiffres'
          }
          return true
        },
        filter: (input) => formatComponentName(input.trim())
      }
    ])

    // 3. Saisie simple de l'icône
    const { selectedIcon } = await inquirer.prompt([
      {
        type: 'input',
        name: 'selectedIcon',
        message: 'Nom de l\'icône (ex: Package, Star, Search) :',
        default: 'Package',
        validate: (input) => {
          if (!input || input.trim().length === 0) {
            return 'Le nom de l\'icône est requis'
          }
          return true
        },
        filter: (input) => input.trim()
      }
    ])

    // 5. Confirmation
    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: `Créer le composant "${componentName}" dans "${type}" avec l'icône "${selectedIcon}" ?`,
        default: true
      }
    ])

    if (!confirm) {
      console.log(chalk.yellow('\n❌ Annulé'))
      return
    }

    console.log(chalk.green('\n⏳ Création du composant...'))

    // 6. Créer les fichiers
    const componentDir = path.join(DESIGN_SYSTEM_PATH, type, componentName)
    const createdFiles = createComponentFiles(componentName, type, componentDir, selectedIcon)

    // 7. Sauvegarder l'icône sélectionnée pour la génération de page
    const iconMetaPath = path.join(__dirname, '../src/generated/component-icons.json')
    const iconMetaDir = path.dirname(iconMetaPath)
    if (!fs.existsSync(iconMetaDir)) {
      fs.mkdirSync(iconMetaDir, { recursive: true })
    }
    
    let iconMeta = {}
    if (fs.existsSync(iconMetaPath)) {
      try {
        iconMeta = JSON.parse(fs.readFileSync(iconMetaPath, 'utf8'))
      } catch {
        console.log(chalk.yellow('⚠️  Erreur lors de la lecture des métadonnées d\'icônes'))
      }
    }
    
    iconMeta[`${type}-${componentName}`] = selectedIcon
    fs.writeFileSync(iconMetaPath, JSON.stringify(iconMeta, null, 2), 'utf8')

    // 8. Mettre à jour les exports
    updateTypeExports(type, componentName)

    // 9. Mettre à jour le menu JSON
    console.log(chalk.blue('\n🔄 Mise à jour du menu...'))
    
    // Mettre à jour le fichier menu.json
    await updateMenuJson(type, componentName, selectedIcon)

    // 7. Succès !
    console.log(chalk.green.bold('\n✅ Composant créé avec succès !'))
    console.log(chalk.gray('\n📁 Fichiers créés :'))
    createdFiles.forEach(file => {
      console.log(chalk.gray(`   • ${path.relative(process.cwd(), file)}`))
    })

    console.log(chalk.blue('\n🎯 Prochaines étapes :'))
    console.log(chalk.gray('   • Personnaliser le composant dans le fichier .vue'))
    console.log(chalk.gray('   • Ajouter des props spécifiques si nécessaire'))
    console.log(chalk.gray('   • La page de documentation a été générée automatiquement'))

    console.log(chalk.green('\n🔗 Liens utiles :'))
    console.log(chalk.gray(`   • Composant: packages/utopia/src/components/${type}/${componentName}/`))
    console.log(chalk.gray(`   • Page web: /design-system/${type}/${componentName.toLowerCase()}`))

  } catch (error) {
    console.error(chalk.red('\n❌ Erreur:', error.message))
    process.exit(1)
  }
}

// Exécuter si appelé directement
if (import.meta.url === `file://${process.argv[1]}`) {
  createComponent()
}

export { createComponent }
