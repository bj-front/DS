// Type definitions for @club-employes/utopia
import { DefineComponent } from 'vue'

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
  size?: 'small' | 'medium' | 'large'
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
export declare const Icon: DefineComponent<IconProps>
export declare const Logo: DefineComponent<LogoProps>
export declare const ThemeProvider: DefineComponent<ThemeProviderProps>

// Theme exports
export declare const clubEmployesLight: ThemeConfig
export declare const clubEmployesDark: ThemeConfig
export declare const gifteoLight: ThemeConfig
export declare const gifteoDark: ThemeConfig

// Type exports
export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger'
export type BadgeSize = 'small' | 'medium'
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'small' | 'medium' | 'large'
export type IconName = string
export type IconSize = 'small' | 'medium' | 'large'
export type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'current'
export type LogoVariant = 'auto' | 'default' | 'white' | 'small' | 'small-white'
export type LogoSize = 'small' | 'medium' | 'large'