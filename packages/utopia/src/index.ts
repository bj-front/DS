// Theme Provider
export { ThemeProvider } from './theme-provider'
export type { ThemeConfig, ThemeProviderProps } from './theme-provider'

// Components
export * from './components'

// Explicit exports for better IDE support
export { Skeleton, SkeletonAvatar, SkeletonText } from './components/atoms/Skeleton'
export { DefaultLayout, Header, Menu, NavItem } from './components/layouts'
export { BalanceCard } from './components/organisms'
export type { BalanceCardProps } from './components/organisms'

// Themes
export { clubEmployesDark, clubEmployesLight } from './themes/club-employes'
export { gifteoDark, gifteoLight } from './themes/gifteo'

// Composables
export { useFavicon, useScrollShadows, useTheme } from './composables'
export type { UseScrollShadowsOptions, UseScrollShadowsReturn } from './composables/useScrollShadows'
export type { BrandTheme, ThemeMode } from './composables/useTheme'

