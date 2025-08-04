// Theme Provider
export { ThemeProvider } from './theme-provider'
export type { ThemeConfig, ThemeProviderProps } from './theme-provider'

// Components
export { Badge, Button, Icon, Logo } from './components/atoms'
export type { BadgeSize, BadgeVariant, ButtonSize, ButtonVariant, IconColor, IconName, IconSize, LogoBrand, LogoSize, LogoVariant } from './components/atoms'

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
