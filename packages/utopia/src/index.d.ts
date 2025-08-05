// Type definitions for @club-employes/utopia
import { ComputedRef, DefineComponent } from 'vue'

// Component prop types
export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium'
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export interface IconProps {
  name: string
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'current'
}

export interface LogoProps {
  variant?: 'auto' | 'default' | 'white' | 'small' | 'small-white'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  brand?: 'club-employes' | 'gifteo'
  alt?: string
  class?: string
}

export interface ThemeConfig {
  name: string
  mode: 'light' | 'dark'
  cssFile: string
}

export interface ThemeProviderProps {
  theme: ThemeConfig
}

// Component exports
export declare const Badge: DefineComponent<BadgeProps>
export declare const Button: DefineComponent<ButtonProps>
export declare const Header: DefineComponent<{}>
export declare const Icon: DefineComponent<IconProps>
export declare const Logo: DefineComponent<LogoProps>
export declare const ThemeProvider: DefineComponent<ThemeProviderProps>

// Theme exports
export declare const clubEmployesLight: ThemeConfig
export declare const clubEmployesDark: ThemeConfig
export declare const gifteoLight: ThemeConfig
export declare const gifteoDark: ThemeConfig

// Composable types
export type BrandTheme = 'club-employes' | 'gifteo'
export type ThemeMode = 'light' | 'dark'

export interface UseThemeReturn {
  currentTheme: ComputedRef<ThemeConfig>
  currentBrand: ComputedRef<BrandTheme>
  currentMode: ComputedRef<ThemeMode>
  currentBrandName: ComputedRef<string>
  availableBrands: ComputedRef<Array<{ key: BrandTheme; name: string }>>
  toggleBrand: () => void
  toggleMode: () => void
  setBrand: (brand: BrandTheme) => void
  setMode: (mode: ThemeMode) => void
}

export interface UseFaviconReturn {
  faviconUrl: ComputedRef<string>
  refreshFavicon: () => void
  updateFavicon: (faviconUrl: string) => void
}

// Composable exports
export declare function useTheme(): UseThemeReturn
export declare function useFavicon(): UseFaviconReturn

// Type exports
export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger'
export type BadgeSize = 'small' | 'medium'
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'small' | 'medium' | 'large'
export type IconName = string
export type IconSize = 'small' | 'medium' | 'large'
export type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'current'
export type LogoVariant = 'auto' | 'default' | 'white' | 'small' | 'small-white'
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type LogoBrand = 'club-employes' | 'gifteo'