<template>
  <div class="theme-provider" :data-theme="themeName">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, provide, ref, watch } from 'vue'

interface ThemeConfig {
  name: string
  mode?: 'light' | 'dark'
  cssFile?: string
  cssContent?: string
  logo?: string
}

interface Props {
  theme: ThemeConfig
}

const props = defineProps<Props>()

const themeName = computed(() => props.theme.name)

// Cache pour les CSS déjà chargés
const cssCache = new Map<string, string>()
const isTransitioning = ref(false)
// Fonction pour précharger un thème CSS
const preloadThemeCSS = async (themeName: string): Promise<string> => {
  if (cssCache.has(themeName)) {
    return cssCache.get(themeName)!
  }
  
  const lastDashIndex = themeName.lastIndexOf('-')
  const brand = themeName.substring(0, lastDashIndex)
  const mode = themeName.substring(lastDashIndex + 1)
  
  try {
    const cssModule = await import(`../tokens/generated/${brand}/${mode}.css?inline`)
    const cssContent = cssModule.default || cssModule
    cssCache.set(themeName, cssContent)
    return cssContent
  } catch (error) {
    console.warn(`Failed to preload theme CSS for ${themeName}:`, error)
    return ''
  }
}

// Fonction pour injecter les styles CSS avec transition fluide
const injectStyles = async () => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  console.log('🎨 Switching to theme:', themeName.value)
  
  try {
    // Récupérer le CSS depuis le cache ou le charger
    const cssContent = await preloadThemeCSS(themeName.value)
    
    if (!cssContent) {
      console.warn('No CSS content found for theme:', themeName.value)
      isTransitioning.value = false
      return
    }
    
    // Ajouter classe de transition au body
    document.body.classList.add('theme-transition')
    
    // Attendre un peu pour que la transition commence
    await new Promise(resolve => setTimeout(resolve, 50))
    
    // Supprimer l'ancien style et le thème par défaut s'il existe
    const existingStyles = document.querySelectorAll('style[data-theme-css]')
    existingStyles.forEach(style => style.remove())
    
    // Créer le nouvel élément style
    const styleElement = document.createElement('style')
    styleElement.setAttribute('data-theme-css', 'true')
    styleElement.textContent = cssContent
    document.head.appendChild(styleElement)
    
    // Appliquer l'attribut data-theme
    document.body.setAttribute('data-theme', themeName.value)
    
    // Attendre la fin de la transition avant de nettoyer
    setTimeout(() => {
      document.body.classList.remove('theme-transition')
      isTransitioning.value = false
    }, 300) // Durée de la transition CSS
    
    console.log('✅ Theme CSS applied smoothly:', themeName.value)
  } catch (error) {
    console.warn('Failed to inject theme CSS:', error)
    document.body.classList.remove('theme-transition')
    isTransitioning.value = false
  }
}

// Fonction pour nettoyer les styles
const cleanupStyles = () => {
  // Retirer l'attribut data-theme
  document.body.removeAttribute('data-theme')
  
  // Supprimer le style de thème CSS
  const existingStyle = document.querySelector('style[data-theme-css]')
  if (existingStyle) {
    existingStyle.remove()
  }
}

// Provide du thème pour les composants enfants
provide('theme', {
  name: themeName,
  config: props.theme
})

// Précharger tous les thèmes disponibles au montage
onMounted(async () => {
  // Vérifier si un thème a été préchargé via initializeTheme()
  const preloadedThemeElement = document.querySelector('style[data-theme-preloaded]')
  const preloadedTheme = preloadedThemeElement?.getAttribute('data-theme-preloaded')
  
  // Si le thème actuel a déjà été préchargé, ne pas le recharger
  if (preloadedTheme === themeName.value) {
    console.log('✅ Theme already preloaded via initializeTheme(), skipping initial injection')
    
    // Mettre le CSS préchargé dans le cache pour les transitions futures
    const cssContent = preloadedThemeElement?.textContent
    if (cssContent) {
      cssCache.set(themeName.value, cssContent)
    }
    
    // Précharger les autres thèmes en arrière-plan
    const commonThemes = [
      'club-employes-light',
      'club-employes-dark', 
      'gifteo-light',
      'gifteo-dark'
    ].filter(theme => theme !== themeName.value)
    
    Promise.all(
      commonThemes.map(theme => preloadThemeCSS(theme))
    ).then(() => {
      console.log('🚀 Other themes preloaded in cache')
    })
    
    return
  }
  
  // Vérifier si un thème par défaut est déjà chargé (ancien système)
  const defaultThemeLoaded = document.querySelector('style[data-default-theme]')
  
  // Précharger les thèmes les plus courants
  const commonThemes = [
    'club-employes-light',
    'club-employes-dark', 
    'gifteo-light',
    'gifteo-dark'
  ]
  
  // Précharger en parallèle sans attendre
  Promise.all(
    commonThemes.map(theme => preloadThemeCSS(theme))
  ).then(() => {
    console.log('🚀 All themes preloaded in cache')
  })
  
  // Si le thème par défaut correspond au thème actuel et qu'il est déjà chargé,
  // pas besoin de recharger
  if (defaultThemeLoaded && themeName.value === 'club-employes-light') {
    console.log('✅ Default theme already loaded, skipping initial injection')
    return
  }
  
  // Sinon, injecter le thème actuel
  await injectStyles()
})

// Nettoyer au démontage
onBeforeUnmount(() => {
  cleanupStyles()
})

// Réinjecter les styles si le thème change
watch(() => props.theme, () => {
  console.log('Theme changed to:', props.theme.name)
  injectStyles()
}, { deep: true })

// Injecter les styles CSS pour les transitions fluides
const injectGlobalTransitionStyles = () => {
  const existingStyles = document.querySelector('style[data-theme-transitions]')
  if (existingStyles) return
  
  const transitionStyles = document.createElement('style')
  transitionStyles.setAttribute('data-theme-transitions', 'true')
  transitionStyles.textContent = `
    body.theme-transition {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    body.theme-transition *,
    body.theme-transition *::before,
    body.theme-transition *::after {
      transition: background-color 0.3s ease, 
                  color 0.3s ease, 
                  border-color 0.3s ease, 
                  box-shadow 0.3s ease,
                  fill 0.3s ease,
                  stroke 0.3s ease !important;
    }
    
    /* Désactiver les transitions sur les éléments interactifs pour éviter les lags */
    body.theme-transition button:hover,
    body.theme-transition a:hover,
    body.theme-transition [role="button"]:hover {
      transition: none !important;
    }
  `
  document.head.appendChild(transitionStyles)
}

// Injecter les styles de transition au montage
injectGlobalTransitionStyles()
</script>

<style scoped>
.theme-provider {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style> 