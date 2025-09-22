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
