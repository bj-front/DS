// Type definitions for @club-employes/utopia
import { ComputedRef, DefineComponent } from 'vue'

// Component prop types
export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium'
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
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

export interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  interactive?: boolean
  active?: boolean
}

export interface SearchBoxProps {
  modelValue?: string
  placeholder?: string
  size?: 'small' | 'medium' | 'large'
  clearable?: boolean
  disabled?: boolean
}

export interface InputProps {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export interface InputSelectProps {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

export interface CheckboxProps {
  modelValue?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

export interface SwitchProps {
  modelValue?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  label?: string
}

export interface InputTextProps {
  modelValue?: string
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  state?: 'default' | 'error' | 'valid' | 'incomplete' | 'completed'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  readonly?: boolean
  icon?: string
  message?: string
  required?: boolean
}

export interface DataTableProps {
  columns: Array<{
    key: string
    label: string
    sortable?: boolean
    width?: string
    align?: 'left' | 'center' | 'right'
    formatter?: (value: any) => string
  }>
  data: any[]
  title?: string
  loading?: boolean
  selectable?: boolean
  striped?: boolean
  hoverable?: boolean
  rowKey?: string | ((row: any) => string)
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
export declare const Card: DefineComponent<CardProps>
export declare const Checkbox: DefineComponent<CheckboxProps>
export declare const Header: DefineComponent<{}>
export declare const Icon: DefineComponent<IconProps>
export declare const Input: DefineComponent<InputProps>
export declare const InputSelect: DefineComponent<InputSelectProps>
export declare const Logo: DefineComponent<LogoProps>
export declare const Menu: DefineComponent<{}>
export declare const NavItem: DefineComponent<{}>
export declare const SearchBox: DefineComponent<SearchBoxProps>
export declare const Switch: DefineComponent<SwitchProps>
export declare const InputText: DefineComponent<InputTextProps>
export declare const DataTable: DefineComponent<DataTableProps>
export declare const ThemeProvider: DefineComponent<ThemeProviderProps>
export declare const DefaultLayout: DefineComponent<{}>

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
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type IconName = string
export type IconSize = 'small' | 'medium' | 'large'
export type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'current'
export type LogoVariant = 'auto' | 'default' | 'white' | 'small' | 'small-white'
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type LogoBrand = 'club-employes' | 'gifteo'