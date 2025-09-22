<template>
  <Card 
    variant="elevated" 
    :size="props.size"
    :disabled="props.disabled"
    :interactive="!!props.actionable"
    :class="['utopia-cardcampaign', { 'utopia-cardcampaign--actionable': !!props.actionable }]"
    @click="handleClick"
  >
    <!-- Première rangée : Icône, titre, date et chevron -->
    <div class="utopia-cardcampaign__row utopia-cardcampaign__row--header">
      <!-- Icône de catégorie -->
      <div class="utopia-cardcampaign__icon">
        <img 
          :src="categoryImage" 
          :alt="`Icône ${props.category}`"
          class="utopia-cardcampaign__icon-image"
        />
      </div>

      <!-- Titre et date -->
      <div class="utopia-cardcampaign__header-content">
        <div class="utopia-cardcampaign__title-container">
          <h3 
            class="utopia-cardcampaign__title"
            ref="titleRef"
            @mouseenter="showTooltip"
            @mouseleave="hideTooltip"
          >{{ props.campaignName }}</h3>
          <div 
            v-if="showTooltipFlag && props.campaignName.length > 20"
            class="utopia-cardcampaign__tooltip"
          >
            {{ props.campaignName }}
          </div>
        </div>
        <div v-if="!props.disabled" class="utopia-cardcampaign__expiration">
          <Icon name="Calendar" size="small" class="utopia-cardcampaign__calendar-icon" :strokeWidth="2" />
          <span class="utopia-cardcampaign__expiration-text">
            {{ currentTranslations.expiresOn }} {{ formattedExpirationDate }}
          </span>
        </div>
      </div>

      <!-- Icône chevron pour les cartes actionables -->
      <div v-if="props.actionable" class="utopia-cardcampaign__chevron">
        <Icon name="Chevron-right" size="small" stroke-width="2" />
      </div>
    </div>

    <!-- Deuxième rangée : Slider de balance ou statut expiré -->
    <div class="utopia-cardcampaign__row utopia-cardcampaign__row--balance">
      <!-- Balance avec progression (pour tous les variants sauf expiré) -->
      <div v-if="!props.disabled" class="utopia-cardcampaign__balance-content">
        <!-- Labels des montants au-dessus de la barre -->
        <div class="utopia-cardcampaign__amounts-labels">
          <!-- Montant dépensé -->
          <div class="utopia-cardcampaign__spent">
            {{ formattedSpentAmount }}
          </div>
          
          <!-- Montant total -->
          <div class="utopia-cardcampaign__total">
            {{ formattedTotalAmount }}
          </div>
        </div>
        
        <!-- Gauge de progression -->
        <div class="utopia-cardcampaign__gauge">
          <div class="utopia-cardcampaign__gauge-track">
            <div 
              class="utopia-cardcampaign__gauge-fill"
              :style="{ width: `${progressPercentage}%` }"
            ></div>
          </div>
        </div>
      </div>
      
      <!-- Statut expiré pour les campagnes désactivées -->
      <div v-else class="utopia-cardcampaign__expired-content">
        <div class="utopia-cardcampaign__expired-date">
          Expiré le {{ formattedExpirationDate }}
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Card from '../../atoms/Card/Card.vue'
import Icon from '../../atoms/Icon/Icon.vue'

interface Props {
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

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'medium',
  disabled: false,
  language: 'fr',
  currency: 'EUR'
})

// Imports des images
import mariageImage from '../../../assets/images/3D_Alliance.webp'
import rentreeImage from '../../../assets/images/3D_Cartable.webp'
import retraiteImage from '../../../assets/images/3D_ChaiseBascule.webp'
import naissanceImage from '../../../assets/images/3D_Peluche.webp'
import noelImage from '../../../assets/images/3D_SapinNoel.webp'
import voyagesImage from '../../../assets/images/3D_Valise.webp'
import sportImage from '../../../assets/images/3D_sport.webp'
import cultureImage from '../../../assets/images/3D_ticket.webp'

// Mapping des catégories vers les images
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

// Les classes sont maintenant gérées par le composant Card

const categoryImage = computed(() => categoryImages[props.category])

const progressPercentage = computed(() => {
  if (props.totalAmount === 0) return 0
  return Math.min((props.spentAmount / props.totalAmount) * 100, 100)
})

const formattedSpentAmount = computed(() => {
  const locale = props.language === 'fr' ? 'fr-FR' : 'en-US'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: props.currency,
    minimumFractionDigits: 2
  }).format(props.spentAmount)
})

const formattedTotalAmount = computed(() => {
  const locale = props.language === 'fr' ? 'fr-FR' : 'en-US'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: props.currency,
    minimumFractionDigits: 0
  }).format(props.totalAmount)
})


const formattedExpirationDate = computed(() => {
  const date = new Date(props.expirationDate)
  const locale = props.language === 'fr' ? 'fr-FR' : 'en-US'
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
})

// Gestionnaire de clic
const handleClick = () => {
  if (props.actionable && !props.disabled) {
    props.actionable()
  }
}

// Traductions selon la langue
const translations = computed(() => ({
  fr: {
    expiresOn: 'Expire le'
  },
  en: {
    expiresOn: 'Expires on'
  }
}))

const currentTranslations = computed(() => translations.value[props.language])

// Gestion du tooltip personnalisé
const titleRef = ref<HTMLElement>()
const showTooltipFlag = ref(false)

// Fonctions pour gérer l'affichage du tooltip
const showTooltip = () => {
  if (props.campaignName.length > 20) {
    showTooltipFlag.value = true
  }
}

const hideTooltip = () => {
  showTooltipFlag.value = false
}
</script>

<style scoped>
.utopia-cardcampaign {
  /* Layout principal - utilise le composant Card */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4, 16px);
  position: relative;
  width: 100%;
}

/* Cursor pointer pour les cartes actionables */
.utopia-cardcampaign--actionable {
  cursor: pointer;
}

.utopia-cardcampaign--actionable:hover {
  cursor: pointer;
}

/* Rangées */
.utopia-cardcampaign__row {
  display: flex;
  align-items: center;
}

.utopia-cardcampaign__row--header {
  gap: var(--spacing-3, 12px);
}

.utopia-cardcampaign__row--balance {
  justify-content: space-between;
}

/* Icône de catégorie */
.utopia-cardcampaign__icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: var(--theme-colors-brand-primary-100, #dbeafe);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.utopia-cardcampaign__icon-image {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

/* Contenu de l'en-tête */
.utopia-cardcampaign__header-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1, 4px);
  min-width: 0;
}

/* Contenu de la balance */
.utopia-cardcampaign__balance-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
  width: 100%;
}

/* Labels des montants au-dessus de la barre */
.utopia-cardcampaign__amounts-labels {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
}

/* Contenu expiré pour les campagnes désactivées */
.utopia-cardcampaign__expired-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1, 4px);
  width: 100%;
}

.utopia-cardcampaign__expired-status {
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-text-muted, #6b7280);
  font-weight: var(--font-weight-medium, 500);
}

.utopia-cardcampaign__expired-date {
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-text-muted, #6b7280);
}

/* Container du titre avec tooltip */
.utopia-cardcampaign__title-container {
  position: relative;
  flex: 1;
  min-width: 0;
}

.utopia-cardcampaign__title {
  margin: 0;
  font-size: var(--font-size-base, 16px);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--theme-colors-text-primary, #111827);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Tooltip personnalisé */
.utopia-cardcampaign__tooltip {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background: rgba(31, 41, 55, 0.95);
  color: #ffffff;
  padding: var(--spacing-3, 12px);
  border-radius: var(--border-radius-md, 8px);
  font-size: var(--font-size-sm, 14px);
  z-index: 9999;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  margin-bottom: var(--spacing-2, 8px);
  max-width: 280px;
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.4;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Flèche du tooltip */
.utopia-cardcampaign__tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 20px;
  border: 6px solid transparent;
  border-top-color: rgba(31, 41, 55, 0.95);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.utopia-cardcampaign__expiration {
  display: flex;
  align-items: center;
  gap: var(--spacing-1, 4px);
}

.utopia-cardcampaign__calendar-icon {
  color: var(--theme-colors-brand-primary-400, #6b7280) !important;
}

.utopia-cardcampaign__expiration-text {
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-brand-primary-400, #6b7280);
}


/* Icône chevron */
.utopia-cardcampaign__chevron {
  flex-shrink: 0;
  color: var(--theme-colors-text-secondary, #6b7280);
  display: flex;
  align-items: center;
  justify-content: center;
}

.utopia-cardcampaign__spent {
  font-size: var(--font-size-lg, 18px);
  font-weight: var(--font-weight-bold, 700);
  color: var(--theme-colors-brand-primary-500, #2563eb);
}

.utopia-cardcampaign__total {
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-text-muted, #6b7280);
}

/* Gauge de progression */
.utopia-cardcampaign__gauge {
  width: 100%;
  height: 4px;
  background: var(--theme-colors-border-default, #e5e7eb);
  border-radius: 2px;
  overflow: hidden;
}

.utopia-cardcampaign__gauge-track {
  width: 100%;
  height: 100%;
  position: relative;
}

.utopia-cardcampaign__gauge-fill {
  height: 100%;
  background: var(--theme-colors-brand-primary-500, #3b82f6);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.utopia-cardcampaign:hover .utopia-cardcampaign__chevron {
  color: var(--theme-colors-text-primary, #111827);
}

/* Les variants sont maintenant gérés par le composant Card */

/* Les tailles sont maintenant gérées par le composant Card */

/* Les états et le dark mode sont maintenant gérés par le composant Card */
</style>