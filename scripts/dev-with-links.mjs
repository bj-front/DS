#!/usr/bin/env node

import chalk from 'chalk'
import { spawn } from 'child_process'
import { showProjectLinks } from './show-project-links.mjs'

console.log(chalk.blue.bold('🚀 Démarrage de l\'environnement de développement...\n'))

// Démarrer turbo dev en arrière-plan
const turboProcess = spawn('npx', ['turbo', 'dev'], {
  stdio: 'inherit',
  shell: false
})

// Gérer la fermeture propre du processus
process.on('SIGINT', () => {
  console.log(chalk.yellow('\n\n🛑 Arrêt des serveurs de développement...'))
  turboProcess.kill('SIGINT')
  process.exit(0)
})

process.on('SIGTERM', () => {
  turboProcess.kill('SIGTERM')
  process.exit(0)
})

// Attendre que les serveurs se lancent puis afficher les liens
setTimeout(async () => {
  console.log(chalk.green.bold('\n\n🎉 Serveurs de développement démarrés !\n'))
  await showProjectLinks()
  console.log(chalk.cyan('\n💡 Tip: Utilisez Ctrl+C pour arrêter tous les serveurs\n'))
}, 3000) // Attendre 3 secondes pour laisser le temps aux serveurs de démarrer

// Garder le processus en vie
turboProcess.on('exit', (code) => {
  if (code !== 0) {
    console.log(chalk.red(`\n❌ Turbo dev s'est arrêté avec le code ${code}`))
  }
  process.exit(code)
})