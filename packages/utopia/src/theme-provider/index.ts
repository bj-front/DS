export { default as ThemeProvider } from './ThemeProvider.vue'

export interface ThemeConfig {
  name: string
  mode?: 'light' | 'dark'
  cssContent: string
  logo?: string
}

export interface ThemeProviderProps {
  theme: ThemeConfig
}

export type ThemeMode = 'light' | 'dark' 