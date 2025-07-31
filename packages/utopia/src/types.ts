// Manual type definitions for utopia package
// This is a temporary workaround until vite-plugin-dts works correctly with Vue files

// Re-export all types from components
export type { BadgeVariant, BadgeSize, ButtonVariant, ButtonSize, IconName, IconSize, IconColor, LogoVariant, LogoSize } from './components/atoms'

// Re-export theme types
export type { ThemeConfig, ThemeProviderProps } from './theme-provider'

// Component types (manual declarations)
export interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
}

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
}

export interface IconProps {
  name: IconName
  size?: IconSize
  color?: IconColor
}

export interface LogoProps {
  variant?: LogoVariant
  size?: LogoSize
}

// Declare the Vue component types
declare module '@club-employes/utopia' {
  import { DefineComponent } from 'vue'
  
  export const Badge: DefineComponent<BadgeProps>
  export const Button: DefineComponent<ButtonProps>
  export const Icon: DefineComponent<IconProps>
  export const Logo: DefineComponent<LogoProps>
  export const ThemeProvider: DefineComponent<ThemeProviderProps>
  
  // Theme objects
  export const clubEmployesLight: ThemeConfig
  export const clubEmployesDark: ThemeConfig
  export const gifteoLight: ThemeConfig
  export const gifteoDark: ThemeConfig
}