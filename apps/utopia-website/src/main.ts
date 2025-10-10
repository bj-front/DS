import './assets/main.css'

import { SpeedInsights } from '@vercel/speed-insights/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './domains/shared/router'

// Import du design system Utopia (styles des composants)
import '@club-employes/utopia/styles'

// Import de la fonction d'initialisation du thème
import { initializeTheme, isValidThemeName, type ThemeName } from '@club-employes/utopia'

/**
 * Détermine le thème à charger en fonction de l'URL
 * Permet de tester différents thèmes via le paramètre ?theme=...
 */
function getThemeFromUrl(): ThemeName {
  // Vérifier si un thème est spécifié dans l'URL
  const urlParams = new URLSearchParams(window.location.search)
  const themeParam = urlParams.get('theme')
  
  if (themeParam && isValidThemeName(themeParam)) {
    console.log('🎨 Theme from URL parameter:', themeParam)
    return themeParam
  }
  
  // Détecter depuis le domaine en production
  const hostname = window.location.hostname
  
  if (hostname.includes('gifteo')) {
    console.log('🎨 Theme detected from domain: gifteo-light')
    return 'gifteo-light'
  }
  
  // Fallback par défaut
  console.log('🎨 Using default theme: club-employes-light')
  return 'club-employes-light'
}

/**
 * Bootstrap de l'application avec initialisation du thème
 */
async function bootstrap(): Promise<void> {
  const themeName = getThemeFromUrl()
  
  console.log('🚀 Bootstrapping application...')
  console.log('🌍 Hostname:', window.location.hostname)
  console.log('🎨 Theme to load:', themeName)
  
  try {
    // 🎨 Initialiser le thème AVANT de créer l'app Vue (évite le FOUC)
    await initializeTheme(themeName)
    console.log('✅ Theme initialized successfully:', themeName)
    
    // 🔓 Déverrouiller la marque pour utopia-website (showcase/demo)
    // Cela permet de tester tous les thèmes depuis l'interface
    // unlockBrand()
    console.log('🔓 Brand unlocked for showcase/demo purposes')
  } catch (error) {
    console.error('❌ Failed to initialize theme:', error)
    // En cas d'erreur, tenter avec le thème par défaut
    try {
      await initializeTheme('club-employes-light')
    //   unlockBrand() // Déverrouiller même en cas d'erreur
      console.log('✅ Fallback theme loaded')
    } catch (fallbackError) {
      console.error('❌ Critical: Could not load any theme:', fallbackError)
    }
  }
  
  // Créer l'application Vue (le thème est déjà chargé, pas de FOUC!)
  const app = createApp(App)
  
  app.use(createPinia())
  app.use(router)
  
  app.mount('#app')
  
  // Ajouter Speed Insights
  app.component('SpeedInsights', SpeedInsights)
  
  console.log('✅ Application mounted')
}

// Démarrer l'application
bootstrap()
