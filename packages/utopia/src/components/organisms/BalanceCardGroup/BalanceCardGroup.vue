<template>
  <div class="utopia-balance-card-group">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="utopia-balance-card-grouped"
      :class="{
        'utopia-balance-card-grouped--actionable': card.actionable,
        'utopia-balance-card-grouped--disabled': card.disabled
      }"
      @click="card.actionable && !card.disabled ? card.actionable() : undefined"
    >
      <!-- Icône de catégorie -->
      <div class="utopia-balance-card-grouped__icon">
        <img 
          :src="getCategoryImage(card.category)" 
          :alt="`Icône ${card.category}`"
          class="utopia-balance-card-grouped__icon-image"
        />
      </div>

      <!-- Contenu principal -->
      <div class="utopia-balance-card-grouped__content">
        <!-- Titre et nombre de campagnes -->
        <div class="utopia-balance-card-grouped__header">
          <h3 class="utopia-balance-card-grouped__title">{{ card.campaignName }}</h3>
          <div class="utopia-balance-card-grouped__campaign-count">
            {{ card.campaignCount }} {{ currentTranslations.campaigns }}
          </div>
        </div>

        <!-- Montant et progression -->
        <div class="utopia-balance-card-grouped__balance">
          <div class="utopia-balance-card-grouped__amount">
            {{ formatAmount(card.spentAmount) }}
          </div>
          <div class="utopia-balance-card-grouped__progress">
            <div class="utopia-balance-card-grouped__progress-bar">
              <div 
                class="utopia-balance-card-grouped__progress-fill"
                :style="{ width: `${getProgressPercentage(card)}%` }"
              ></div>
            </div>
            <div class="utopia-balance-card-grouped__progress-total">
              {{ formatAmount(card.totalAmount) }}
            </div>
          </div>
        </div>
      </div>

      <!-- Chevron pour les cartes actionables -->
      <div v-if="card.actionable && !card.disabled" class="utopia-balance-card-grouped__chevron">
        <Icon name="Chevron-right" size="small" stroke-width="2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../../atoms/Icon/Icon.vue'

interface BalanceCardData {
  campaignName: string
  category: 'culture' | 'noel' | 'voyages' | 'rentree' | 'retraite' | 'naissance' | 'mariage' | 'sport'
  totalAmount: number
  spentAmount: number
  campaignCount: number
  actionable?: () => void
  disabled?: boolean
}

interface Props {
  cards: BalanceCardData[]
  language?: 'fr' | 'en'
  currency?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'fr',
  currency: 'EUR'
})

// Imports des images
import mariageImage from '../../../assets/images/3D_Alliance.webp'
import rentreeImage from '../../../assets/images/3D_Cartable.webp'
import retraiteImage from '../../../assets/images/3D_ChaiseBascule.webp'
import naissanceImage from '../../../assets/images/3D_Peluche.webp'
import noelImage from '../../../assets/images/3D_SapinNoel.webp'
import sportImage from '../../../assets/images/3D_sport.webp'
import cultureImage from '../../../assets/images/3D_ticket.webp'
import voyagesImage from '../../../assets/images/3D_Valise.webp'

// Mapping des images par catégorie
const categoryImages = {
  culture: cultureImage,
  noel: noelImage,
  voyages: voyagesImage,
  rentree: rentreeImage,
  retraite: retraiteImage,
  naissance: naissanceImage,
  mariage: mariageImage,
  sport: sportImage
}

const getCategoryImage = (category: string) => {
  return categoryImages[category as keyof typeof categoryImages]
}

// Traductions
const translations = {
  fr: {
    campaigns: 'campagnes'
  },
  en: {
    campaigns: 'campaigns'
  }
}

const currentTranslations = computed(() => translations[props.language])

// Formatage des montants
const formatAmount = (amount: number) => {
  const locale = props.language === 'fr' ? 'fr-FR' : 'en-US'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: props.currency,
    minimumFractionDigits: 2
  }).format(amount)
}

// Calcul du pourcentage de progression
const getProgressPercentage = (card: BalanceCardData) => {
  if (card.totalAmount === 0) return 0
  return Math.min((card.spentAmount / card.totalAmount) * 100, 100)
}
</script>

<style scoped>
.utopia-balance-card-group {
  display: flex;
  gap: 0;
  width: 100%;
}

/* Desktop: horizontal layout */
@media (min-width: 768px) {
  .utopia-balance-card-group {
    flex-direction: row;
    align-items: stretch;
  }
}

/* Mobile: vertical layout */
@media (max-width: 767px) {
  .utopia-balance-card-group {
    flex-direction: column;
    align-items: stretch;
  }
}

/* Carte grouped individuelle */
.utopia-balance-card-grouped {
  display: flex;
  align-items: center;
  gap: var(--spacing-4, 16px);
  padding: var(--spacing-4, 16px);
  background: var(--theme-colors-surface-card, #ffffff);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 0;
  width: 100%;
  transition: all 0.2s ease;
  position: relative;
}

/* Première carte : bordure arrondie à gauche */
.utopia-balance-card-grouped:first-child {
  border-top-left-radius: var(--border-radius-lg, 12px);
  border-bottom-left-radius: var(--border-radius-lg, 12px);
}

/* Dernière carte : bordure arrondie à droite */
.utopia-balance-card-grouped:last-child {
  border-top-right-radius: var(--border-radius-lg, 12px);
  border-bottom-right-radius: var(--border-radius-lg, 12px);
}

/* Séparateur entre les cartes (sauf la dernière)
.utopia-balance-card-grouped:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: var(--theme-colors-border-default, #e5e7eb);
} */

.utopia-balance-card-grouped--actionable {
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.utopia-balance-card-grouped--actionable:hover {
  border-color: var(--theme-colors-brand-primary-300, #93c5fd);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.utopia-balance-card-grouped--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Icône */
.utopia-balance-card-grouped__icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-md, 8px);
  overflow: hidden;
  background: var(--theme-colors-brand-primary-100, #dbeafe);
  display: flex;
  align-items: center;
  justify-content: center;
}

.utopia-balance-card-grouped__icon-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Contenu principal */
.utopia-balance-card-grouped__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
}

/* Header */
.utopia-balance-card-grouped__header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1, 4px);
}

.utopia-balance-card-grouped__title {
  font-size: var(--font-size-lg, 18px);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--theme-colors-text-primary, #111827);
  margin: 0;
  line-height: 1.2;
}

.utopia-balance-card-grouped__campaign-count {
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-text-muted, #6b7280);
  line-height: 1.2;
}

/* Balance */
.utopia-balance-card-grouped__balance {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
}

/* Montant */
.utopia-balance-card-grouped__amount {
  font-size: var(--font-size-xl, 20px);
  font-weight: var(--font-weight-bold, 700);
  color: var(--theme-colors-brand-primary-600, #2563eb);
  line-height: 1.2;
}

/* Progression */
.utopia-balance-card-grouped__progress {
  display: flex;
  align-items: center;
  gap: var(--spacing-2, 8px);
}

.utopia-balance-card-grouped__progress-bar {
  flex: 1;
  height: 8px;
  background: var(--theme-colors-brand-primary-100, #dbeafe);
  border-radius: var(--border-radius-full, 9999px);
  overflow: hidden;
}

.utopia-balance-card-grouped__progress-fill {
  height: 100%;
  background: var(--theme-colors-brand-primary-500, #3b82f6);
  border-radius: var(--border-radius-full, 9999px);
  transition: width 0.3s ease;
}

.utopia-balance-card-grouped__progress-total {
  font-size: var(--font-size-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.2;
}

/* Chevron */
.utopia-balance-card-grouped__chevron {
  flex-shrink: 0;
  color: var(--theme-colors-text-secondary, #6b7280);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .utopia-balance-card-grouped {
    padding: var(--spacing-3, 12px);
    gap: var(--spacing-3, 12px);
  }
  
  .utopia-balance-card-grouped__icon {
    width: 40px;
    height: 40px;
  }
  
  .utopia-balance-card-grouped__title {
    font-size: var(--font-size-base, 16px);
  }
  
  .utopia-balance-card-grouped__amount {
    font-size: var(--font-size-lg, 18px);
  }
  
  .utopia-balance-card-grouped__campaign-count {
    font-size: var(--font-size-xs, 12px);
  }
  
  /* Sur mobile, les cartes sont collées verticalement */
  .utopia-balance-card-grouped {
    border-radius: 0 !important;
    margin-bottom: 0;
  }
  
  /* Première carte : coins arrondis en haut seulement */
  .utopia-balance-card-grouped:first-child {
    border-top-left-radius: var(--border-radius-lg, 12px) !important;
    border-top-right-radius: var(--border-radius-lg, 12px) !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  
  /* Dernière carte : coins arrondis en bas seulement */
  .utopia-balance-card-grouped:last-child {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    border-bottom-left-radius: var(--border-radius-lg, 12px) !important;
    border-bottom-right-radius: var(--border-radius-lg, 12px) !important;
  }
  
  /* Cartes du milieu : pas de coins arrondis */
  .utopia-balance-card-grouped:not(:first-child):not(:last-child) {
    border-radius: 0 !important;
  }
  
  /* Supprimer le séparateur sur mobile */
  .utopia-balance-card-grouped:not(:last-child)::after {
    display: none;
  }
}
</style>
