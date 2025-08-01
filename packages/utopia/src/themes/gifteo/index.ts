import type { ThemeConfig } from '../../theme-provider'

export const gifteoLight: ThemeConfig = {
  name: 'gifteo-light',
  mode: 'light',
  cssFile: '/src/tokens/generated/gifteo/light.css'
}

export const gifteoDark: ThemeConfig = {
  name: 'gifteo-dark',
  mode: 'dark',
  cssFile: '/src/tokens/generated/gifteo/dark.css'
}

// Export par défaut pour la compatibilité
export default gifteoLight
