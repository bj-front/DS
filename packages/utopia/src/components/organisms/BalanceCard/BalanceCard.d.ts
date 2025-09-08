import { DefineComponent } from 'vue'

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

declare const BalanceCard: DefineComponent<BalanceCardProps>
export default BalanceCard