<template>
  <div class="tokens-demo">
    <h1 class="demo-title">🎨 Design Tokens Demo</h1>
    
    <!-- Couleurs principales -->
    <section class="demo-section">
      <h2 class="demo-subtitle">Couleurs principales</h2>
      <div class="color-grid">
        <div class="color-card primary-50">
          <span>Primary 50</span>
          <code>var(--color-blue-50)</code>
        </div>
        <div class="color-card primary-500">
          <span>Primary 500</span>
          <code>var(--color-blue-500)</code>
        </div>
        <div class="color-card primary-900">
          <span>Primary 900</span>
          <code>var(--color-blue-900)</code>
        </div>
      </div>
    </section>

    <!-- Couleurs produits -->
    <section class="demo-section">
      <h2 class="demo-subtitle">Couleurs produits</h2>
      <div class="color-grid">
        <div class="color-card exclusive-sale">
          <span>Vente exclusive</span>
          <code>var(--color-product-exclusive-sale-primary)</code>
        </div>
        <div class="color-card promo-code">
          <span>Code promo</span>
          <code>var(--color-product-promo-code-primary)</code>
        </div>
        <div class="color-card e-ticket">
          <span>E-billet</span>
          <code>var(--color-product-e-ticket-primary)</code>
        </div>
      </div>
    </section>

    <!-- Espacement -->
    <section class="demo-section">
      <h2 class="demo-subtitle">Espacement</h2>
      <div class="spacing-demo">
        <div class="spacing-item spacing-1">spacing-1 (4px)</div>
        <div class="spacing-item spacing-4">spacing-4 (16px)</div>
        <div class="spacing-item spacing-8">spacing-8 (32px)</div>
      </div>
    </section>

    <!-- Typographie -->
    <section class="demo-section">
      <h2 class="demo-subtitle">Typographie</h2>
      <div class="typography-demo">
        <p class="text-xs">Texte XS - var(--font-size-xs)</p>
        <p class="text-base">Texte Base - var(--font-size-base)</p>
        <p class="text-xl">Texte XL - var(--font-size-xl)</p>
        <p class="text-3xl">Texte 3XL - var(--font-size-3xl)</p>
      </div>
    </section>

    <!-- Logos Display -->
    <LogoDisplay />

    <!-- Button Demo -->
    <ButtonDemo />

    <!-- Dark Mode Showcase -->
    <DarkModeShowcase />

    <!-- Gifteo Colors Demo (only show when Gifteo theme is active) -->
    <GifteoColorsDemo v-if="isGifteoTheme" />
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import DarkModeShowcase from './DarkModeShowcase.vue'
import GifteoColorsDemo from './GifteoColorsDemo.vue'
import LogoDisplay from './LogoDisplay.vue'
import ButtonDemo from './ButtonDemo.vue'

const theme = inject('theme', { name: { value: 'unknown' } })
const isGifteoTheme = computed(() => {
  const themeName = typeof theme.name === 'string' ? theme.name : theme.name?.value || 'unknown'
  return themeName.includes('gifteo')
})
</script>

<style scoped>
.tokens-demo {
  padding: var(--spacing-6);
  font-family: var(--font-family-sans);
  line-height: var(--font-line-height-normal);
}

.demo-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-primary-900);
  margin-bottom: var(--spacing-8);
}

.demo-section {
  margin-bottom: var(--spacing-8);
}

.demo-subtitle {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-4);
}

/* Grille de couleurs */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
}

.color-card {
  padding: var(--spacing-4);
  border-radius: var(--border-radius-base);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.color-card span {
  font-weight: var(--font-weight-medium);
  color: white;
}

.color-card code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  background: rgba(0, 0, 0, 0.2);
  padding: var(--spacing-1);
  border-radius: var(--border-radius-sm);
  color: white;
}

/* Couleurs spécifiques */
.primary-50 { background-color: var(--theme-colors-primary-50); }
.primary-50 span, .primary-50 code { color: var(--theme-colors-primary-900); }

.primary-500 { background-color: var(--theme-colors-primary-500); }
.primary-900 { background-color: var(--theme-colors-primary-900); }

.exclusive-sale { background-color: var(--color-product-exclusive-sale-primary); }
.promo-code { background-color: var(--color-product-promo-code-primary); }
.e-ticket { background-color: var(--color-product-e-ticket-primary); }

/* Démo espacement */
.spacing-demo {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.spacing-item {
  background-color: var(--theme-colors-primary-100);
  color: var(--theme-colors-primary-900);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.spacing-1 { padding: var(--spacing-1); }
.spacing-4 { padding: var(--spacing-4); }
.spacing-8 { padding: var(--spacing-8); }

/* Démo typographie */
.typography-demo {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.text-xs { font-size: var(--font-size-xs); }
.text-base { font-size: var(--font-size-base); }
.text-xl { font-size: var(--font-size-xl); }
.text-3xl { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); }
</style> 