import lightCSS from '../../tokens/generated/gifteo/light.css?inline'
import darkCSS from '../../tokens/generated/gifteo/dark.css?inline'
import gifteoLogo from '../../assets/logos/gifteo/logo.svg'
import type { ThemeConfig } from '../../theme-provider'

export const gifteoLight: ThemeConfig = {
  name: 'gifteo-light',
  mode: 'light',
  cssContent: lightCSS,
  logo: gifteoLogo
}

export const gifteoDark: ThemeConfig = {
  name: 'gifteo-dark',
  mode: 'dark',
  cssContent: darkCSS,
  logo: gifteoLogo
}

// Export par défaut pour la compatibilité
export default gifteoLight 