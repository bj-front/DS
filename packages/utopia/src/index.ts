// Theme Provider
export { ThemeProvider } from './theme-provider'
export type { ThemeConfig, ThemeProviderProps } from './theme-provider'

// Components
export * from './components'

// Explicit exports for better IDE support and production builds
// Import directly from Vue files to avoid barrel export issues
export { default as Badge } from './components/atoms/Badge/Badge.vue'
export { default as Button } from './components/atoms/Button/Button.vue'
export { default as Icon } from './components/atoms/Icon/Icon.vue'
export { default as Logo } from './components/atoms/Logo/Logo.vue'
export { default as Header } from './components/layouts/Header.vue'
export { default as Menu } from './components/layouts/Menu.vue'
export { default as NavItem } from './components/layouts/NavItem.vue'

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
