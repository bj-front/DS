#!/usr/bin/env node

import chalk from 'chalk'
import fs from 'fs'
import inquirer from 'inquirer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration pour les icônes
const ICONS_LIST_PATH = path.resolve(__dirname, '../public/icons-list.json')

// Configuration
const DESIGN_SYSTEM_PATH = path.resolve(__dirname, '../../../packages/utopia/src/components')

// Types de composants disponibles
const COMPONENT_TYPES = [
  { name: '⚛️  Atoms (composants de base)', value: 'atoms' },
  { name: '🧬 Molecules (combinaisons simples)', value: 'molecules' },
  { name: '🦠 Organisms (composants complexes)', value: 'organisms' },
  { name: '📄 Templates (structures de page)', value: 'templates' },
  { name: '🎨 Themes (styles et thèmes)', value: 'themes' },
  { name: '📐 Layouts (mises en page)', value: 'layouts' }
]

// Fonction pour charger la liste des icônes
function loadIconsList() {
  try {
    if (!fs.existsSync(ICONS_LIST_PATH)) {
      console.log(chalk.yellow('⚠️  Fichier icons-list.json non trouvé, utilisation d\'icônes par défaut'))
      return ['Search', 'Settings', 'Heart', 'Star', 'Plus', 'Minus', 'X', 'Check']
    }
    
    const iconsData = JSON.parse(fs.readFileSync(ICONS_LIST_PATH, 'utf8'))
    return iconsData.icons || []
  } catch {
    console.log(chalk.yellow('⚠️  Erreur lors du chargement des icônes, utilisation d\'icônes par défaut'))
    return ['Search', 'Settings', 'Heart', 'Star', 'Plus', 'Minus', 'X', 'Check']
  }
}

// Fonction pour filtrer et rechercher des icônes (non utilisée actuellement)
// function createIconSearch(icons) {
//   return async (answers, input = '') => {
//     return icons.filter(icon => 
//       icon.toLowerCase().includes(input.toLowerCase())
//     ).slice(0, 20) // Limiter à 20 résultats pour éviter la surcharge
//   }
// }

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

  stories: (componentName, type) => `import type { Meta, StoryObj } from '@storybook/vue3'
import { ${componentName} } from '@club-employes/utopia'

const meta: Meta<typeof ${componentName}> = {
  title: '${type}/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean'
    }
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    disabled: false
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'large',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    disabled: true,
  },
}`
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

  // 4. Fichier Storybook (optionnel)
  const storiesFile = path.join(targetDir, `${componentName}.stories.ts`)
  fs.writeFileSync(storiesFile, COMPONENT_TEMPLATES.stories(componentName, type), 'utf8')
  files.push(storiesFile)

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

async function createComponent() {
  console.log(chalk.blue.bold('\n🚀 Générateur de composants Utopia Design System\n'))

  try {
    // Charger la liste des icônes
    console.log(chalk.gray('📦 Chargement des icônes...'))
    const availableIcons = loadIconsList()
    console.log(chalk.gray(`✅ ${availableIcons.length} icônes chargées\n`))

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

    // 3. Recherche d'icône (optionnel)
    const { iconSearch } = await inquirer.prompt([
      {
        type: 'input',
        name: 'iconSearch',
        message: 'Rechercher une icône (laissez vide pour voir les populaires) :',
        default: ''
      }
    ])

    // Filtrer les icônes
    const popularIcons = ['Search', 'Settings', 'Heart', 'Star', 'Plus', 'Check', 'X', 'Home', 'User', 'Edit']
    let filteredIcons = iconSearch.trim() 
      ? availableIcons.filter(icon => 
          icon.toLowerCase().includes(iconSearch.toLowerCase())
        ).slice(0, 15)
      : popularIcons.filter(icon => availableIcons.includes(icon))

    if (filteredIcons.length === 0) {
      filteredIcons = popularIcons.filter(icon => availableIcons.includes(icon))
      console.log(chalk.yellow(`Aucune icône trouvée pour "${iconSearch}", affichage des icônes populaires`))
    }

    // 4. Sélection de l'icône
    const { selectedIcon } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedIcon',
        message: `Choisissez une icône (${filteredIcons.length} disponibles) :`,
        choices: filteredIcons.map(icon => ({
          name: `${icon}`,
          value: icon
        })),
        pageSize: 12
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

    // 9. Régénérer le menu et les pages
    console.log(chalk.blue('\n🔄 Régénération du menu et des pages...'))
    
    // Importer et exécuter le script de génération
    const { generateCompleteStructure } = await import('./generate-complete-structure.js')
    await generateCompleteStructure()

    // 7. Succès !
    console.log(chalk.green.bold('\n✅ Composant créé avec succès !'))
    console.log(chalk.gray('\n📁 Fichiers créés :'))
    createdFiles.forEach(file => {
      console.log(chalk.gray(`   • ${path.relative(process.cwd(), file)}`))
    })

    console.log(chalk.blue('\n🎯 Prochaines étapes :'))
    console.log(chalk.gray('   • Personnaliser le composant dans le fichier .vue'))
    console.log(chalk.gray('   • Ajouter des props spécifiques si nécessaire'))
    console.log(chalk.gray('   • Tester avec Storybook'))
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
