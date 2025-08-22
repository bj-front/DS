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