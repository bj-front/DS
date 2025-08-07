#!/usr/bin/env node

import chalk from 'chalk'
import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration des projets et leurs liens
const PROJECTS_CONFIG = {
  'utopia-website': {
    name: '🌐 Utopia Website',
    description: 'Site web de documentation du design system',
    dev: 'http://localhost:5173',
    preview: null, // sera défini dynamiquement si un build existe
    storybook: null
  },
  'storybook': {
    name: '📖 Storybook',
    description: 'Documentation interactive des composants',
    dev: 'http://localhost:6006',
    preview: null,
    storybook: 'http://localhost:6006'
  },
  'utopia': {
    name: '🎨 Utopia Package',
    description: 'Librairie des composants du design system',
    dev: 'http://localhost:5174',
    preview: null,
    npm: 'https://www.npmjs.com/package/@club-employes/utopia'
  }
}

const execAsync = promisify(exec)

async function checkPortStatus(port) {
  try {
    // Vérifier si le port est utilisé sur macOS/Linux
    const { stdout } = await execAsync(`lsof -i :${port}`)
    return stdout.trim().length > 0
  } catch {
    // Si la commande échoue ou ne trouve rien, le port n'est pas utilisé
    return false
  }
}

// Fonction pour découvrir les ports Vite en cours d'exécution
async function discoverVitePorts() {
  try {
    // Obtenir les processus avec leurs arguments complets
    const { stdout } = await execAsync(`ps aux | grep -E "(vite|node)" | grep -v grep`)
    const lines = stdout.split('\n')
    const ports = {}
    
    for (const line of lines) {
      if (line.includes('vite') || line.includes('node')) {
        // Identifier le type de projet selon le chemin ou les arguments
        if (line.includes('utopia-website') || line.includes('apps/utopia-website')) {
          // Obtenir le port pour ce processus
          const pid = line.trim().split(/\s+/)[1]
          try {
            const { stdout: portInfo } = await execAsync(`lsof -p ${pid} | grep LISTEN`)
            const portMatch = portInfo.match(/:(\d+)/)
            if (portMatch) {
              ports.website = portMatch[1]
            }
          } catch {}
        } else if (line.includes('storybook') || line.includes('apps/storybook')) {
          const pid = line.trim().split(/\s+/)[1]
          try {
            const { stdout: portInfo } = await execAsync(`lsof -p ${pid} | grep LISTEN`)
            const portMatch = portInfo.match(/:(\d+)/)
            if (portMatch) {
              ports.storybook = portMatch[1]
            }
          } catch {}
        } else if (line.includes('packages/utopia') && !line.includes('website')) {
          const pid = line.trim().split(/\s+/)[1]
          try {
            const { stdout: portInfo } = await execAsync(`lsof -p ${pid} | grep LISTEN`)
            const portMatch = portInfo.match(/:(\d+)/)
            if (portMatch) {
              ports.utopia = portMatch[1]
            }
          } catch {}
        }
      }
    }
    
    return ports
  } catch {
    return {}
  }
}

// Fonction pour vérifier si un build existe
function checkBuildExists(projectPath) {
  const distPath = path.join(projectPath, 'dist')
  return fs.existsSync(distPath)
}

// Fonction pour obtenir les informations des projets
function getProjectsInfo() {
  const rootPath = path.resolve(__dirname, '..')
  const projects = {}

  for (const [key, config] of Object.entries(PROJECTS_CONFIG)) {
    const projectPath = key === 'utopia' 
      ? path.join(rootPath, 'packages', key)
      : path.join(rootPath, 'apps', key)

    projects[key] = {
      ...config,
      exists: fs.existsSync(projectPath),
      hasBuild: checkBuildExists(projectPath),
      path: projectPath
    }

    // Définir l'URL de preview si un build existe
    if (projects[key].hasBuild) {
      if (key === 'utopia-website') {
        projects[key].preview = 'http://localhost:4173' // vite preview par défaut
      } else if (key === 'storybook') {
        projects[key].preview = 'http://localhost:6006' // storybook build
      }
    }
  }

  return projects
}

// Fonction pour formater les liens avec des couleurs
function formatLink(url, label, available = true) {
  if (!url) return null
  
  if (available) {
    return `${chalk.blue(url)} ${chalk.gray(`(${label})`)}`
  } else {
    return `${chalk.gray(url)} ${chalk.red(`(${label} - non disponible)`)}`
  }
}

// Fonction pour afficher les informations d'un projet
async function displayProjectInfo(key, project) {
  console.log(`\n${project.name}`)
  console.log(chalk.gray(`   ${project.description}`))
  
  if (!project.exists) {
    console.log(chalk.red('   ❌ Projet non trouvé'))
    return
  }

  const links = []
  
  // Lien de développement
  if (project.dev) {
    const port = project.dev.split(':').pop()
    const devAvailable = await checkPortStatus(port)
    links.push(formatLink(project.dev, 'dev', devAvailable))
  }
  
  // Lien de preview (build)
  if (project.preview && project.hasBuild) {
    links.push(formatLink(project.preview, 'preview'))
  }
  
  // Lien NPM pour utopia
  if (project.npm) {
    links.push(formatLink(project.npm, 'npm'))
  }
  
  // Lien Storybook spécifique
  if (project.storybook && key === 'storybook') {
    links.push(formatLink(project.storybook, 'storybook'))
  }

  // Afficher les liens disponibles
  if (links.length > 0) {
    links.filter(Boolean).forEach(link => {
      console.log(`   🔗 ${link}`)
    })
  }

  // Afficher le statut du build
  if (project.hasBuild) {
    console.log(chalk.green('   ✅ Build disponible'))
  } else {
    console.log(chalk.yellow('   ⚠️  Aucun build trouvé'))
  }
}

// Fonction pour afficher les commandes utiles
function displayUsefulCommands() {
  console.log(chalk.blue.bold('\n🚀 Commandes utiles:\n'))
  
  const commands = [
    {
      command: 'npm run dev',
      description: 'Démarrer tous les serveurs de développement'
    },
    {
      command: 'npm run dev:website',
      description: 'Démarrer uniquement le site web'
    },
    {
      command: 'npm run dev:storybook', 
      description: 'Démarrer uniquement Storybook'
    },
    {
      command: 'npm run build',
      description: 'Construire tous les projets'
    },
    {
      command: 'npm run preview',
      description: 'Prévisualiser les builds (après avoir build)'
    },
    {
      command: 'npm run create:component',
      description: 'Créer un nouveau composant'
    }
  ]

  commands.forEach(({ command, description }) => {
    console.log(`   ${chalk.cyan(command)}`)
    console.log(`   ${chalk.gray(description)}\n`)
  })
}

// Fonction pour détecter l'environnement de déploiement
function detectDeploymentInfo() {
  const deploymentInfo = []

  // Vérifier si on est sur Vercel
  if (process.env.VERCEL) {
    const vercelUrl = process.env.VERCEL_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL
    if (vercelUrl) {
      deploymentInfo.push({
        platform: 'Vercel',
        url: `https://${vercelUrl}`,
        type: 'production'
      })
    }
  }

  // Vérifier si on est sur Netlify
  if (process.env.NETLIFY) {
    const netlifyUrl = process.env.DEPLOY_PRIME_URL || process.env.URL
    if (netlifyUrl) {
      deploymentInfo.push({
        platform: 'Netlify',
        url: netlifyUrl,
        type: process.env.CONTEXT === 'production' ? 'production' : 'preview'
      })
    }
  }

  return deploymentInfo
}

// Fonction principale
async function showProjectLinks() {
  console.log(chalk.blue.bold('\n🎯 Liens d\'accès aux projets\n'))
  console.log(chalk.gray('='.repeat(50)))

  const projects = getProjectsInfo()
  const deployments = detectDeploymentInfo()
  const discoveredPorts = await discoverVitePorts()
  
  // Mettre à jour les URLs de développement avec les ports découverts
  if (discoveredPorts.website) {
    projects['utopia-website'].dev = `http://localhost:${discoveredPorts.website}`
  }
  if (discoveredPorts.storybook) {
    projects['storybook'].dev = `http://localhost:${discoveredPorts.storybook}`
    projects['storybook'].storybook = `http://localhost:${discoveredPorts.storybook}`
  }
  if (discoveredPorts.utopia) {
    projects['utopia'].dev = `http://localhost:${discoveredPorts.utopia}`
  }

  // Afficher les informations de déploiement si disponibles
  if (deployments.length > 0) {
    console.log(chalk.green.bold('\n🌐 Déploiements en ligne:\n'))
    deployments.forEach(({ platform, url, type }) => {
      const typeLabel = type === 'production' ? '🟢 Production' : '🟡 Preview'
      console.log(`   ${typeLabel} (${platform}): ${chalk.blue(url)}`)
    })
  }

  // Afficher les projets locaux
  console.log(chalk.yellow.bold('\n💻 Projets locaux:\n'))
  
  for (const [key, project] of Object.entries(projects)) {
    await displayProjectInfo(key, project)
  }

  // Afficher les commandes utiles
  displayUsefulCommands()

  // Footer avec timestamp
  console.log(chalk.gray('='.repeat(50)))
  console.log(chalk.gray(`Généré le ${new Date().toLocaleString('fr-FR')}`))
  console.log(chalk.gray('Pour mettre à jour cette information, relancez: npm run build\n'))
}

// Exporter pour utilisation externe
export { getProjectsInfo, showProjectLinks }

// Exécuter si appelé directement
if (import.meta.url === `file://${process.argv[1]}`) {
  showProjectLinks()
}