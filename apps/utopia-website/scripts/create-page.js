#!/usr/bin/env node

import chalk from 'chalk'
import fs from 'fs'
import inquirer from 'inquirer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const WEBSITE_PAGES_PATH = path.resolve(__dirname, '../src/pages')
const MENU_JSON_PATH = path.resolve(__dirname, '../src/config/menu.json')

// Icônes par défaut pour les pages
const DEFAULT_ICONS = [
  'FileText', 'Home', 'Info', 'Settings', 'Users', 'Mail',
  'Calendar', 'Star', 'Heart', 'Search', 'Plus', 'Edit', 'Book',
  'Globe', 'Shield', 'Target', 'Zap', 'Award', 'Briefcase', 'Phone'
]

// Fonction pour extraire les sections existantes du menu
function getExistingSections() {
  try {
    if (!fs.existsSync(MENU_JSON_PATH)) {
      return []
    }
    
    const menuContent = fs.readFileSync(MENU_JSON_PATH, 'utf8')
    const menuConfig = JSON.parse(menuContent)
    
    return menuConfig.menuItems
      .filter(item => item.type === 'section')
      .map(section => ({
        name: section.label,
        value: section.key
      }))
  } catch (error) {
    console.error(chalk.red(`❌ Erreur lors de la lecture du menu: ${error.message}`))
    return []
  }
}

// Fonction pour formater le nom de la page (comme dans create-component)
function formatPageName(name) {
  return name
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^./, str => str.toUpperCase())
}

// Template de page utilisant le composant PageLayout
function generatePageTemplate(pageName, icon, section) {
  return `<template>
  <PageLayout 
    :title="'${pageName}'"
    :icon="'${icon || 'FileText'}'"
    :description="'Page ${pageName} générée automatiquement'"
    :section="'${section || 'Page'}'"
  >
    <div class="content-section">
      <h2>Contenu Principal</h2>
      <div class="content-example">
        <p>Bienvenue sur la page <strong>${pageName}</strong>.</p>
        <p>Cette page a été générée automatiquement avec le CLI <code>create:page</code>.</p>
        <p>Vous pouvez personnaliser ce contenu selon vos besoins en modifiant ce fichier.</p>
      </div>
    </div>
    
    <div class="content-section">
      <h2>Sections Disponibles</h2>
      <div class="content-grid">
        <div class="content-card">
          <h3>Section d'exemple</h3>
          <div class="content-example">
            <p>Vous pouvez ajouter du contenu ici. Utilisez les classes CSS prédéfinies :</p>
            <ul>
              <li><code>.content-section</code> - Section principale avec bordure</li>
              <li><code>.content-example</code> - Zone d'exemple avec padding</li>
              <li><code>.content-grid</code> - Grille pour organiser le contenu</li>
              <li><code>.content-card</code> - Carte avec bordure et coins arrondis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="content-section">
      <h2>Documentation</h2>
      <div class="content-example">
        <p>📁 <strong>Fichier :</strong> <code>src/pages/${pageName}Page.vue</code></p>
        <p>🎨 <strong>Layout :</strong> Utilise le composant <code>PageLayout</code></p>
        <p>📝 <strong>Personnalisation :</strong> Modifiez le contenu entre les balises <code>&lt;PageLayout&gt;</code></p>
        <p>🔧 <strong>Props disponibles :</strong></p>
        <ul>
          <li><code>title</code> - Titre de la page</li>
          <li><code>icon</code> - Icône affichée à côté du titre</li>
          <li><code>description</code> - Description sous le titre</li>
          <li><code>section</code> - Badge de section</li>
        </ul>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import { PageLayout } from '@/components'
</script>

<style scoped>
/* Styles spécifiques à cette page */
/* Les styles de base sont fournis par PageLayout */

/* Exemple de style personnalisé */
.content-example ul {
  margin: var(--spacing-4) 0;
  padding-left: var(--spacing-6);
}

.content-example li {
  margin-bottom: var(--spacing-2);
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
}

.content-example li code {
  background: var(--theme-colors-surface-muted);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-brand-primary-600);
}
</style>`
}

// Fonction pour créer le fichier de page
function createPageFile(pageName, icon, section, targetPath) {
  const pageContent = generatePageTemplate(pageName, icon, section)
  
  // Créer le dossier si nécessaire
  const pageDir = path.dirname(targetPath)
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true })
  }
  
  // Écrire le fichier
  fs.writeFileSync(targetPath, pageContent, 'utf8')
  return targetPath
}

// Fonction pour mettre à jour les routes du routeur principal
async function updateMainRouter(pageName, route) {
  const ROUTER_PATH = path.resolve(__dirname, '../src/domains/shared/router/index.ts')
  
  try {
    let routerContent = fs.readFileSync(ROUTER_PATH, 'utf8')
    
    // Générer l'import de la nouvelle page
    const importStatement = `const ${pageName}Page = (): Promise<typeof import('@/pages/${pageName}Page.vue')> => import('@/pages/${pageName}Page.vue')`
    
    // Vérifier si l'import existe déjà
    if (!routerContent.includes(`${pageName}Page =`)) {
      // Trouver la ligne des imports dynamiques et ajouter le nouvel import
      const importLineRegex = /const NotFoundPage = \(\).*?=> import\('\.\/NotFoundPage\.vue'\)/
      const match = routerContent.match(importLineRegex)
      
      if (match) {
        const insertAfter = routerContent.indexOf(match[0]) + match[0].length
        routerContent = routerContent.slice(0, insertAfter) + '\n' + importStatement + routerContent.slice(insertAfter)
      }
    }
    
    // Générer la nouvelle route
    const newRoute = `  {
    path: '${route}',
    name: '${pageName.toLowerCase()}',
    component: ${pageName}Page,
    meta: {
      title: '${pageName}',
      description: 'Page ${pageName} générée automatiquement'
    }
  }`
    
    // Vérifier si la route existe déjà
    if (!routerContent.includes(`path: '${route}'`)) {
      // Trouver l'endroit où insérer la nouvelle route (avant les routes générées)
      const generatedRoutesRegex = /\.\.\.generatedRoutes,/
      const generatedMatch = routerContent.match(generatedRoutesRegex)
      
      if (generatedMatch) {
        // Insérer avant les routes générées
        const insertBefore = routerContent.indexOf(generatedMatch[0])
        routerContent = routerContent.slice(0, insertBefore) + newRoute + ',\n  ' + routerContent.slice(insertBefore)
      } else {
        // Si pas de routes générées, ajouter avant la route 404
        const notFoundRegex = /\{[^}]*path: '\/:\(.*?\)\*'[^}]*\}/s
        const notFoundMatch = routerContent.match(notFoundRegex)
        
        if (notFoundMatch) {
          const insertBefore = routerContent.indexOf(notFoundMatch[0])
          routerContent = routerContent.slice(0, insertBefore) + newRoute + ',\n  ' + routerContent.slice(insertBefore)
        }
      }
      
      // Écrire le fichier mis à jour
      fs.writeFileSync(ROUTER_PATH, routerContent, 'utf8')
      console.log(chalk.gray(`🛣️  Route ajoutée au routeur principal: ${path.relative(process.cwd(), ROUTER_PATH)}`))
    } else {
      console.log(chalk.yellow(`⚠️  Route déjà existante dans le routeur pour ${pageName}`))
    }
    
  } catch (error) {
    console.error(chalk.red(`❌ Erreur lors de la mise à jour du routeur: ${error.message}`))
    throw error
  }
}

// Fonction pour mettre à jour le menu (même logique que create-component)
async function updateMenuJson(pageName, icon, route, targetSection) {
  try {
    // Lire le fichier de menu existant
    const menuContent = fs.readFileSync(MENU_JSON_PATH, 'utf8')
    const menuConfig = JSON.parse(menuContent)

    // Créer le nouvel item de menu
    const newMenuItem = {
      key: pageName.toLowerCase(),
      label: pageName,
      icon: icon,
      to: route
    }

    // Vérifier si l'item n'existe pas déjà
    const existingItemIndex = menuConfig.menuItems.findIndex(item => 
      item.key === newMenuItem.key && !item.type
    )
    
    if (existingItemIndex === -1) {
      if (targetSection && targetSection !== 'none') {
        // Trouver la section cible
        const sectionIndex = menuConfig.menuItems.findIndex(item => 
          item.key === targetSection && item.type === 'section'
        )
        
        if (sectionIndex !== -1) {
          // Trouver le prochain élément de section ou la fin
          let insertIndex = menuConfig.menuItems.length
          for (let i = sectionIndex + 1; i < menuConfig.menuItems.length; i++) {
            if (menuConfig.menuItems[i].type === 'section') {
              insertIndex = i
              break
            }
          }
          
          // Insérer le nouvel item
          menuConfig.menuItems.splice(insertIndex, 0, newMenuItem)
        } else {
          // Section non trouvée, ajouter à la fin
          menuConfig.menuItems.push(newMenuItem)
        }
      } else {
        // Ajouter au début (hors section) - avant toutes les sections
        const firstSectionIndex = menuConfig.menuItems.findIndex(item => item.type === 'section')
        if (firstSectionIndex !== -1) {
          // Insérer avant la première section
          menuConfig.menuItems.splice(firstSectionIndex, 0, newMenuItem)
        } else {
          // Aucune section trouvée, ajouter au début
          menuConfig.menuItems.unshift(newMenuItem)
        }
      }
      console.log(chalk.green(`✅ Ajouté au menu: ${pageName}`))
    } else {
      // Mettre à jour l'item existant
      menuConfig.menuItems[existingItemIndex] = newMenuItem
      console.log(chalk.yellow(`⚠️  Mis à jour dans le menu: ${pageName}`))
    }

    // Sauvegarder le fichier menu mis à jour
    fs.writeFileSync(MENU_JSON_PATH, JSON.stringify(menuConfig, null, 2), 'utf8')
    console.log(chalk.gray(`📝 Menu mis à jour: ${path.relative(process.cwd(), MENU_JSON_PATH)}`))
    
  } catch (error) {
    console.error(chalk.red(`❌ Erreur lors de la mise à jour du menu: ${error.message}`))
    throw error
  }
}

async function createPage() {
  console.log(chalk.blue.bold('\n🚀 Générateur de pages Website\n'))

  try {
    // 1. Nom de la page
    const { pageName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'pageName',
        message: 'Nom de la page (ex: Contact, About, etc.) :',
        validate: (input) => {
          if (!input || input.trim().length === 0) {
            return 'Le nom de la page est requis'
          }
          if (!/^[A-Za-z][A-Za-z0-9\s]*$/.test(input.trim())) {
            return 'Le nom doit commencer par une lettre et ne contenir que des lettres, chiffres et espaces'
          }
          return true
        },
        filter: (input) => formatPageName(input.trim())
      }
    ])

    // 2. Choix de la section
    const existingSections = getExistingSections()
    const sectionChoices = [
      { name: '🔘 Hors section (page indépendante)', value: 'none' },
      new inquirer.Separator('── Sections existantes ──'),
      ...existingSections
    ]

    const { targetSection } = await inquirer.prompt([
      {
        type: 'list',
        name: 'targetSection',
        message: 'Dans quelle section voulez-vous ajouter cette page ?',
        choices: sectionChoices,
        pageSize: 10
      }
    ])

    // 3. Sélection d'icône
    console.log(chalk.gray(`🎨 Icônes disponibles: ${DEFAULT_ICONS.length} icônes`))
    
    const { selectedIcon } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedIcon',
        message: 'Choisissez une icône pour votre page :',
        choices: DEFAULT_ICONS.map(icon => ({ name: icon, value: icon })),
        pageSize: 15
      }
    ])

    // 4. Route personnalisée
    const defaultRoute = targetSection === 'none' 
      ? `/${pageName.toLowerCase()}`
      : `/${targetSection}/${pageName.toLowerCase()}`
    
    const { customRoute } = await inquirer.prompt([
      {
        type: 'input',
        name: 'customRoute',
        message: `Route de la page (défaut: ${defaultRoute}) :`,
        default: defaultRoute,
        validate: (input) => {
          if (!input.startsWith('/')) {
            return 'La route doit commencer par /'
          }
          return true
        }
      }
    ])

    // 5. Confirmation
    const sectionLabel = targetSection === 'none' ? 'Hors section' : existingSections.find(s => s.value === targetSection)?.name || targetSection
    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: `Créer la page "${pageName}" dans "${sectionLabel}" avec la route "${customRoute}" et l'icône "${selectedIcon}" ?`,
        default: true
      }
    ])

    if (!confirm) {
      console.log(chalk.yellow('\n❌ Annulé'))
      return
    }

    console.log(chalk.green('\n⏳ Création de la page...'))

    // 6. Créer le fichier de page
    const pageFilePath = path.join(WEBSITE_PAGES_PATH, `${pageName}Page.vue`)
    const createdFile = createPageFile(pageName, selectedIcon, sectionLabel, pageFilePath)

    // 7. Mettre à jour le menu
    console.log(chalk.blue('\n🔄 Mise à jour du menu...'))
    await updateMenuJson(pageName, selectedIcon, customRoute, targetSection)

    // 8. Mettre à jour le routeur
    console.log(chalk.blue('🔄 Mise à jour du routeur...'))
    await updateMainRouter(pageName, customRoute)

    // 8. Succès !
    console.log(chalk.green.bold('\n✅ Page créée avec succès !'))
    console.log(chalk.gray('\n📁 Fichier créé :'))
    console.log(chalk.gray(`   • ${path.relative(process.cwd(), createdFile)}`))

    console.log(chalk.blue('\n🎯 Prochaines étapes :'))
    console.log(chalk.gray('   • Personnaliser le contenu de la page'))
    console.log(chalk.gray('   • Ajouter des composants et styles spécifiques'))
    console.log(chalk.gray('   • Tester la page dans le navigateur'))
    console.log(chalk.gray('   • La page apparaîtra automatiquement dans le menu'))

    console.log(chalk.green('\n🔗 Liens utiles :'))
    console.log(chalk.gray(`   • Fichier: ${path.relative(process.cwd(), createdFile)}`))
    console.log(chalk.gray(`   • Route: ${customRoute}`))
    console.log(chalk.gray(`   • Section: ${sectionLabel}`))

  } catch (error) {
    console.error(chalk.red('\n❌ Erreur:', error.message))
    process.exit(1)
  }
}

// Exécuter si appelé directement
if (import.meta.url === `file://${process.argv[1]}`) {
  createPage()
}

export { createPage }
