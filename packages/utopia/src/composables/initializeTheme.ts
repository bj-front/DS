/**
 * Initialize theme before Vue app mounts to prevent FOUC (Flash of Unstyled Content)
 * 
 * This function should be called BEFORE creating the Vue app instance.
 * It loads and injects the theme CSS synchronously into the document head.
 * 
 * @example
 * ```typescript
 * import { initializeTheme } from '@utopia/design-system'
 * 
 * // Detect theme from domain
 * const domain = window.location.hostname
 * const themeName = domain.includes('gifteo') ? 'gifteo-light' : 'club-employes-light'
 * 
 * // Initialize theme BEFORE creating Vue app
 * await initializeTheme(themeName)
 * 
 * // Now create Vue app (no FOUC)
 * const app = createApp(App)
 * app.mount('#app')
 * ```
 */

export type ThemeName = 
  | 'club-employes-light'
  | 'club-employes-dark'
  | 'gifteo-light'
  | 'gifteo-dark'

/**
 * Validates if the theme name is valid
 */
export function isValidThemeName(themeName: string): themeName is ThemeName {
  return [
    'club-employes-light',
    'club-employes-dark',
    'gifteo-light',
    'gifteo-dark'
  ].includes(themeName)
}

/**
 * Initialize theme CSS before app mount
 * @param themeName - The theme name to load (e.g., 'club-employes-light')
 * @throws Error if theme name is invalid or CSS cannot be loaded
 */
export async function initializeTheme(themeName: string): Promise<void> {
  if (!isValidThemeName(themeName)) {
    throw new Error(
      `Invalid theme name: ${themeName}. ` +
      `Valid themes are: club-employes-light, club-employes-dark, gifteo-light, gifteo-dark`
    )
  }

  console.log('🎨 Initializing theme:', themeName)

  try {
    // Parse theme name to get brand and mode
    const lastDashIndex = themeName.lastIndexOf('-')
    const brand = themeName.substring(0, lastDashIndex)
    const mode = themeName.substring(lastDashIndex + 1)

    // Load the CSS module
    const cssModule = await import(`../tokens/generated/${brand}/${mode}.css?inline`)
    const cssContent = cssModule.default || cssModule

    if (!cssContent) {
      throw new Error(`No CSS content found for theme: ${themeName}`)
    }

    // Remove any existing theme styles
    const existingStyles = document.querySelectorAll('style[data-theme-css], style[data-default-theme]')
    existingStyles.forEach(style => style.remove())

    // Create and inject the new style element
    const styleElement = document.createElement('style')
    styleElement.setAttribute('data-theme-css', 'true')
    styleElement.setAttribute('data-theme-preloaded', themeName)
    styleElement.textContent = cssContent
    document.head.appendChild(styleElement)

    // Set data-theme attribute on body for any CSS selectors that need it
    document.body.setAttribute('data-theme', themeName)

    // Store the theme in localStorage for consistency
    const brand_key = brand as 'club-employes' | 'gifteo'
    const mode_key = mode as 'light' | 'dark'
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('utopia-theme-brand', brand_key)
      localStorage.setItem('utopia-theme-mode', mode_key)
    }

    console.log('✅ Theme initialized successfully:', themeName)
  } catch (error) {
    console.error('❌ Failed to initialize theme:', themeName, error)
    throw new Error(`Failed to initialize theme ${themeName}: ${error}`)
  }
}

/**
 * Get the currently active theme name from the DOM
 * @returns The active theme name or null if none is set
 */
export function getActiveTheme(): ThemeName | null {
  const styleElement = document.querySelector('style[data-theme-preloaded]')
  if (styleElement) {
    const themeName = styleElement.getAttribute('data-theme-preloaded')
    if (themeName && isValidThemeName(themeName)) {
      return themeName
    }
  }
  return null
}

/**
 * Unlock the brand to allow manual brand switching
 * Useful for demo/showcase applications like utopia-website
 * 
 * @example
 * ```typescript
 * // In a showcase/demo app, unlock the brand to allow testing
 * unlockBrand()
 * ```
 */
export function unlockBrand(): void {
  if (typeof window !== 'undefined') {
    const styleElement = document.querySelector('style[data-theme-preloaded]')
    if (styleElement) {
      styleElement.removeAttribute('data-theme-preloaded')
      // Dispatch custom event to notify useTheme
      window.dispatchEvent(new CustomEvent('utopia:brand-unlocked'))
      console.log('🔓 Brand unlocked - manual brand switching is now allowed')
    }
  }
}

