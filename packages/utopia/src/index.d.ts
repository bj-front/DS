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

export interface ChipProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  removable?: boolean
  leftIcon?: string
  actionable?: boolean
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
  min?: number
  max?: number
  step?: number
  isCode?: boolean
}

export interface DropDownOption {
  value: string | number
  label: string
  disabled?: boolean
}

export interface DropDownProps {
  modelValue?: string | number | (string | number)[]
  label?: string
  placeholder?: string
  options?: DropDownOption[]
  state?: 'default' | 'error' | 'valid' | 'incomplete' | 'completed'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  readonly?: boolean
  multiple?: boolean
  searchable?: boolean
  clearable?: boolean
  message?: string
  required?: boolean
  maxHeight?: string
}

export interface InputCodeProps {
  modelValue?: string
  label?: string
  length?: number
  type?: 'text' | 'number'
  size?: 'small' | 'medium' | 'large'
  state?: 'default' | 'error' | 'valid'
  disabled?: boolean
  message?: string
  required?: boolean
  autoFocus?: boolean
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

export interface BalanceCardProps {
  campaignName: string
  category: 'culture' | 'noel' | 'voyages' | 'rentree' | 'retraite' | 'naissance' | 'mariage' | 'sport'
  totalAmount: number
  spentAmount: number
  expirationDate: string | Date
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  actionable?: () => void
  language?: 'fr' | 'en'
  currency?: string
}

export interface BalanceCardGroupProps {
  cards: BalanceCardData[]
  language?: 'fr' | 'en'
  currency?: string
}

export interface BalanceCardData {
  campaignName: string
  category: 'culture' | 'noel' | 'voyages' | 'rentree' | 'retraite' | 'naissance' | 'mariage' | 'sport'
  totalAmount: number
  amount: number // Montant restant
  campaignCount: number
  actionable?: () => void
  disabled?: boolean
}

export interface SkeletonProps {
  width?: string | number
  height?: string | number
  variant?: 'text' | 'rectangular' | 'circular'
  animation?: 'pulse' | 'wave' | 'none'
  radius?: number
  bg?: boolean
}

export interface SkeletonAvatarProps {
  size?: 'small' | 'medium' | 'large' | number
  variant?: 'circular' | 'rounded' | 'square'
  animation?: 'pulse' | 'wave' | 'none'
  rounded?: boolean
}

export interface SkeletonTextProps {
  lines?: number
  width?: string | string[] | number
  animation?: 'pulse' | 'wave' | 'none'
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
export declare const Chip: DefineComponent<ChipProps>
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
export declare const DropDown: DefineComponent<DropDownProps>
export declare const InputCode: DefineComponent<InputCodeProps>
export declare const DataTable: DefineComponent<DataTableProps>
export declare const BalanceCard: DefineComponent<BalanceCardProps>
export declare const BalanceCardGroup: DefineComponent<BalanceCardGroupProps>
export declare const Skeleton: DefineComponent<SkeletonProps>
export declare const SkeletonAvatar: DefineComponent<SkeletonAvatarProps>
export declare const SkeletonText: DefineComponent<SkeletonTextProps>
export declare const ThemeProvider: DefineComponent<ThemeProviderProps>
export declare const DefaultLayout: DefineComponent<{}>
export declare const AuthLayout: DefineComponent<{}>
export declare const Slider: DefineComponent<{}>

// Theme exports
export declare const clubEmployesLight: ThemeConfig
export declare const clubEmployesDark: ThemeConfig
export declare const gifteoLight: ThemeConfig
export declare const gifteoDark: ThemeConfig

// Composable types
export type BrandTheme = 'club-employes' | 'gifteo'
export type ThemeMode = 'light' | 'dark'
export type ThemeName = 
  | 'club-employes-light'
  | 'club-employes-dark'
  | 'gifteo-light'
  | 'gifteo-dark'

export interface UseThemeReturn {
  currentTheme: ComputedRef<ThemeConfig>
  currentBrand: ComputedRef<BrandTheme>
  currentMode: ComputedRef<ThemeMode>
  currentBrandName: ComputedRef<string>
  availableBrands: ComputedRef<Array<{ key: BrandTheme; name: string }>>
  menuCollapsed: ComputedRef<boolean>
  isBrandLocked: ComputedRef<boolean>
  toggleBrand: () => void
  toggleMode: () => void
  setBrand: (brand: BrandTheme) => void
  setMode: (mode: ThemeMode) => void
  toggleMenuCollapsed: () => void
  setMenuCollapsed: (collapsed: boolean) => void
}

export interface UseFaviconReturn {
  faviconUrl: ComputedRef<string>
  refreshFavicon: () => void
  updateFavicon: (faviconUrl: string) => void
}

// Composable exports
export declare function useTheme(): UseThemeReturn
export declare function useFavicon(): UseFaviconReturn

// Theme initialization exports
export declare function initializeTheme(themeName: string): Promise<void>
export declare function getActiveTheme(): ThemeName | null
export declare function isValidThemeName(themeName: string): themeName is ThemeName
export declare function unlockBrand(): void

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