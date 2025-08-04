import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useTheme } from './useTheme'

/**
 * Composable pour gérer le favicon dynamique basé sur le thème actuel
 */
export function useFavicon() {
    const { currentBrand, currentMode } = useTheme()

    // Fonction pour extraire l'URL du logo depuis les variables CSS
    const getLogoUrl = (brand: string): string | null => {
        try {
            // Pour le favicon, on utilise toujours la version "small" 
            // On gère le dark/light avec des couleurs de fond plutôt que des variants
            const variant = 'small'

            // Construit le nom de la variable CSS
            const cssVar = `--assets-logos-${brand}-${variant}`

            // Récupère la valeur depuis le style computed
            const computedStyle = getComputedStyle(document.documentElement)
            const logoValue = computedStyle.getPropertyValue(cssVar).trim()

            if (logoValue && logoValue.startsWith('url(') && logoValue.endsWith(')')) {
                // Extrait l'URL de la fonction url()
                return logoValue.slice(4, -1).replace(/['"`]/g, '')
            }

            return null
        } catch (error) {
            console.warn('Erreur lors de la récupération du logo pour le favicon:', error)
            return null
        }
    }

    // Fonction pour créer un favicon SVG directement
    const createFaviconFromDataUrl = (dataUrl: string): string => {
        // On retourne directement le data URL du logo SVG
        return dataUrl
    }

    // Fonction pour mettre à jour le favicon
    const updateFavicon = (faviconUrl: string) => {
        try {
            // Supprime l'ancien favicon
            const existingFavicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
            if (existingFavicon) {
                existingFavicon.remove()
            }

            // Crée et ajoute le nouveau favicon
            const newFavicon = document.createElement('link')
            newFavicon.rel = 'icon'
            newFavicon.type = 'image/svg+xml'
            newFavicon.href = faviconUrl

            document.head.appendChild(newFavicon)
        } catch (error) {
            console.warn('Erreur lors de la mise à jour du favicon:', error)
        }
    }

    // Favicon URL calculé basé sur le thème actuel
    const faviconUrl = computed(() => {
        const logoUrl = getLogoUrl(currentBrand.value)

        if (logoUrl) {
            return createFaviconFromDataUrl(logoUrl)
        }

        // Fallback vers un favicon par défaut
        return '/favicon.ico'
    })

    // Fonction pour forcer la mise à jour du favicon
    const refreshFavicon = () => {
        const url = faviconUrl.value
        if (url) {
            updateFavicon(url)
        }
    }

    // Watcher pour mettre à jour automatiquement le favicon
    let unwatchFavicon: (() => void) | null = null

    onMounted(() => {
        // Mise à jour initiale avec délai pour laisser les CSS se charger
        setTimeout(refreshFavicon, 50)

        // Surveille les changements de thème et mode
        unwatchFavicon = watch(
            [currentBrand, currentMode],
            () => {
                // Mise à jour immédiate du favicon
                refreshFavicon()
            },
            { immediate: false }
        )
    })

    onUnmounted(() => {
        if (unwatchFavicon) {
            unwatchFavicon()
        }
    })

    return {
        faviconUrl,
        refreshFavicon,
        updateFavicon
    }
}

export type UseFaviconReturn = ReturnType<typeof useFavicon>