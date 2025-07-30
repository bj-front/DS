import lightCSS from '../../tokens/generated/club-employes/light.css?inline'
import darkCSS from '../../tokens/generated/club-employes/dark.css?inline'
import clubEmployesLogo from '../../assets/logos/club-employes/logo.svg'
import type { ThemeConfig } from '../../theme-provider'

export const clubEmployesLight: ThemeConfig = {
  name: 'club-employes-light',
  mode: 'light',
  cssContent: lightCSS,
  logo: clubEmployesLogo
}

export const clubEmployesDark: ThemeConfig = {
  name: 'club-employes-dark',
  mode: 'dark',
  cssContent: darkCSS,
  logo: clubEmployesLogo
}

// Export par défaut pour la compatibilité
export default clubEmployesLight 