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