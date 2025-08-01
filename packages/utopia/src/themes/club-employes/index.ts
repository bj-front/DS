import type { ThemeConfig } from '../../theme-provider'

export const clubEmployesLight: ThemeConfig = {
  name: 'club-employes-light',
  mode: 'light',
  cssFile: '/src/tokens/generated/club-employes/light.css'
}

export const clubEmployesDark: ThemeConfig = {
  name: 'club-employes-dark',
  mode: 'dark',
  cssFile: '/src/tokens/generated/club-employes/dark.css'
}

// Export par défaut pour la compatibilité
export default clubEmployesLight
