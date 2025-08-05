// Theme Provider
export { ThemeProvider } from './theme-provider'
export type { ThemeConfig, ThemeProviderProps } from './theme-provider'

// Components
export * from './components'

// Explicit exports for better IDE support
export { Header, Menu, NavItem } from './components/layouts'

// Themes
export { clubEmployesDark, clubEmployesLight } from './themes/club-employes'
export { gifteoDark, gifteoLight } from './themes/gifteo'

// Composables
export { useFavicon, useTheme } from './composables'
export type { BrandTheme, ThemeMode } from './composables/useTheme'

// Design Tokens (JavaScript exports)
// Note: Commented temporarily to fix TypeScript issues
// @ts-ignore - Generated file
// export * from './tokens/generated/club-employes/light.js'
