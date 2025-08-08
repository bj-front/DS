import { computed, nextTick, onUnmounted, ref, watch, type Ref } from 'vue'

export interface UseScrollShadowsOptions {
  /** Délai avant la première vérification (ms) */
  initialDelay?: number
  /** Tolérance en pixels pour détecter le bas */
  bottomTolerance?: number
  /** Tolérance en pixels pour détecter le haut */
  topTolerance?: number
  /** Configuration des ombres */
  shadowConfig?: {
    /** Offset du haut en px */
    topOffset?: number
    /** Offset du bas en px */
    bottomOffset?: number
    /** Hauteur des ombres en px */
    height?: number
    /** Opacité des ombres (0-1) */
    opacity?: number
    /** Z-index des ombres */
    zIndex?: number
  }
  /** Injecter automatiquement les styles CSS */
  injectStyles?: boolean
}

export interface UseScrollShadowsReturn {
  /** Ref de l'élément scrollable */
  scrollElementRef: Ref<HTMLElement | undefined>
  /** État de l'ombre du haut */
  showTopShadow: Ref<boolean>
  /** État de l'ombre du bas */
  showBottomShadow: Ref<boolean>
  /** Fonction à appeler sur l'événement scroll */
  handleScroll: () => void
  /** Fonction pour vérifier manuellement la position */
  checkScrollPosition: () => void
  /** Fonction d'initialisation à appeler dans onMounted */
  initialize: () => void
  /** Classes CSS calculées pour le conteneur */
  containerClasses: Ref<string[]>
  /** Classes CSS pour l'élément scrollable */
  scrollClasses: Ref<string[]>
  /** Fonction pour initialiser avec un watcher */
  initializeOnChange: (trigger: () => any) => () => void
}

/**
 * Composable pour gérer les ombres de scroll
 * 
 * @param options - Options de configuration
 * @returns Objet contenant les refs et fonctions nécessaires
 * 
 * @example
 * ```vue
 * <template>
 *   <div 
 *     ref="scrollElementRef" 
 *     @scroll="handleScroll"
 *     :class="{ 'hide-top-shadow': !showTopShadow, 'hide-bottom-shadow': !showBottomShadow }"
 *   >
 *     <!-- Contenu scrollable -->
 *   </div>
 * </template>
 * 
 * <script setup>
 * import { onMounted } from 'vue'
 * import { useScrollShadows } from '@/composables/useScrollShadows'
 * 
 * const { 
 *   scrollElementRef, 
 *   showTopShadow, 
 *   showBottomShadow, 
 *   handleScroll,
 *   initialize 
 * } = useScrollShadows()
 * 
 * onMounted(() => {
 *   initialize()
 * })
 * </script>
 * ```
 */
// Fonction pour injecter les styles CSS
function injectScrollShadowStyles(shadowConfig: NonNullable<UseScrollShadowsOptions['shadowConfig']>): () => void {
  const styleId = 'use-scroll-shadows-styles'
  
  // Vérifier si les styles sont déjà injectés
  if (document.getElementById(styleId)) {
    return () => {} // Retourner une fonction vide si déjà injecté
  }

  const styles = `
    /* Styles pour useScrollShadows */
    .scroll-shadows-container {
      position: relative;
    }
    
    .scroll-shadows-container::before {
      content: '';
      position: absolute;
      top: ${shadowConfig.topOffset}px;
      left: 0;
      right: 0;
      height: ${shadowConfig.height}px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, ${shadowConfig.opacity}), transparent);
      pointer-events: none;
      z-index: ${shadowConfig.zIndex};
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    
    .scroll-shadows-container::after {
      content: '';
      position: absolute;
      bottom: ${shadowConfig.bottomOffset}px;
      left: 0;
      right: 0;
      height: ${shadowConfig.height}px;
      background: linear-gradient(to top, rgba(0, 0, 0, ${shadowConfig.opacity}), transparent);
      pointer-events: none;
      z-index: ${shadowConfig.zIndex};
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    
    .scroll-shadows-container.hide-top-shadow::before {
      opacity: 0;
    }
    
    .scroll-shadows-container.hide-bottom-shadow::after {
      opacity: 0;
    }
    
    .scroll-content-hidden-scrollbar {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* Internet Explorer 10+ */
    }
    
    .scroll-content-hidden-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `

  const styleElement = document.createElement('style')
  styleElement.id = styleId
  styleElement.textContent = styles
  document.head.appendChild(styleElement)

  // Retourner une fonction de nettoyage
  return () => {
    const element = document.getElementById(styleId)
    if (element) {
      element.remove()
    }
  }
}

export function useScrollShadows(options: UseScrollShadowsOptions = {}): UseScrollShadowsReturn {
  const {
    initialDelay = 100,
    bottomTolerance = 1,
    topTolerance = 1,
    shadowConfig = {
      topOffset: 61,
      bottomOffset: 61,
      height: 16,
      opacity: 0.15,
      zIndex: 1000
    },
    injectStyles = true
  } = options

  // Injection des styles CSS si demandée
  let cleanupStyles: (() => void) | null = null
  if (injectStyles) {
    cleanupStyles = injectScrollShadowStyles(shadowConfig)
  }

  // États réactifs
  const scrollElementRef = ref<HTMLElement>()
  const showTopShadow = ref(false)
  const showBottomShadow = ref(true)

  /**
   * Vérifie la position du scroll et met à jour les ombres
   */
  const checkScrollPosition = (): void => {
    if (!scrollElementRef.value) return

    try {
      const { scrollTop, scrollHeight, clientHeight } = scrollElementRef.value
      
      // Vérifier si on peut scroller
      const hasScrollableContent = scrollHeight > clientHeight
      
      if (!hasScrollableContent) {
        // Pas de contenu scrollable = pas d'ombres
        showTopShadow.value = false
        showBottomShadow.value = false
        return
      }

      // Vérifier les positions
      const isAtTop = scrollTop <= topTolerance
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) <= bottomTolerance

      // Mettre à jour les ombres
      showTopShadow.value = !isAtTop
      showBottomShadow.value = !isAtBottom

    } catch (error) {
      console.warn('Error checking scroll position:', error)
      // En cas d'erreur, cacher les ombres
      showTopShadow.value = false
      showBottomShadow.value = false
    }
  }

  /**
   * Handler pour l'événement scroll
   */
  const handleScroll = (): void => {
    checkScrollPosition()
  }

  /**
   * Initialise le composable
   * À appeler dans onMounted du composant parent
   */
  const initialize = (): void => {
    // Vérification initiale avec délai pour laisser le DOM se stabiliser
    setTimeout(() => {
      checkScrollPosition()
    }, initialDelay)
  }

  /**
   * Fonction utilitaire pour initialiser avec un watcher
   * Utile pour les composants qui s'ouvrent/ferment
   */
  const initializeOnChange = (trigger: () => any): (() => void) => {
    const unwatch = watch(trigger, (newValue) => {
      if (newValue) {
        nextTick(() => {
          setTimeout(checkScrollPosition, initialDelay)
        })
      }
    }, { immediate: true })

    // Retourner la fonction de nettoyage si nécessaire
    return unwatch
  }

  // Classes CSS calculées
  const containerClasses = computed(() => {
    const classes = ['scroll-shadows-container']
    if (!showTopShadow.value) classes.push('hide-top-shadow')
    if (!showBottomShadow.value) classes.push('hide-bottom-shadow')
    return classes
  })

  const scrollClasses = computed(() => {
    return ['scroll-content-hidden-scrollbar']
  })

  // Nettoyage à la destruction du composant
  onUnmounted(() => {
    if (cleanupStyles) {
      cleanupStyles()
    }
  })

  return {
    scrollElementRef,
    showTopShadow,
    showBottomShadow,
    handleScroll,
    checkScrollPosition,
    initialize,
    containerClasses,
    scrollClasses,
    // Fonction bonus pour les cas d'usage spéciaux
    initializeOnChange
  }
}

// Export du type pour TypeScript
export type ScrollShadowsComposable = ReturnType<typeof useScrollShadows>