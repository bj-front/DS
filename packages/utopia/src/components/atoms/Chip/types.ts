export interface ChipProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  removable?: boolean
  leftIcon?: string
  actionable?: boolean
}