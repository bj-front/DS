<template>
  <div class="logo-display">
    <h3 class="logo-title">🏢 Logo de la marque</h3>
    <div class="logo-container">
      <!-- Logo via CSS variable -->
      <div class="logo-css">
        <div class="logo-css-content"></div>
        <p class="logo-label">Via CSS variable</p>
        <code class="logo-var">var(--theme-assets-logo)</code>
      </div>

      <!-- Logo via JavaScript import -->
      <div class="logo-js" v-if="currentTheme.logo">
        <img :src="currentTheme.logo" :alt="`Logo ${currentTheme.name}`" class="logo-js-img" />
        <p class="logo-label">Via JS import</p>
        <code class="logo-var">theme.logo</code>
      </div>
    </div>

    <!-- Showcase des différents logos disponibles -->
    <div class="logos-showcase">
      <h4 class="showcase-title">Logos disponibles</h4>
      <div class="logos-grid">
        <div class="logo-item">
          <div class="logo-css-var" style="background-image: var(--assets-logos-club-employes)"></div>
          <code class="logo-var-name">--assets-logos-club-employes</code>
        </div>
        <div class="logo-item">
          <div class="logo-css-var" style="background-image: var(--assets-logos-gifteo)"></div>
          <code class="logo-var-name">--assets-logos-gifteo</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { ThemeConfig } from '../../theme-provider'

const theme = inject('theme', {
  config: {
    name: 'unknown',
    cssContent: '',
    logo: undefined
  } as ThemeConfig
})
const currentTheme = theme.config
</script>

<style scoped>
.logo-display {
  background-color: var(--theme-colors-surface-card);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
}

.logo-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.logo-container {
  display: flex;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-6);
}

.logo-css, .logo-js {
  flex: 1;
  text-align: center;
}

.logo-css-content {
  width: 120px;
  height: 60px;
  background-image: var(--theme-assets-logo);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-base);
  margin: 0 auto var(--spacing-2);
}

.logo-js-img {
  width: 120px;
  height: 60px;
  object-fit: contain;
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-base);
  margin-bottom: var(--spacing-2);
}

.logo-label {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-1);
}

.logo-var {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-muted);
  background-color: var(--theme-colors-border-muted);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
}

.logos-showcase {
  border-top: var(--border-width-1) solid var(--theme-colors-border-default);
  padding-top: var(--spacing-4);
}

.showcase-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.logos-grid {
  display: flex;
  gap: var(--spacing-4);
}

.logo-item {
  text-align: center;
}

.logo-css-var {
  width: 80px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-2);
}

.logo-var-name {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-muted);
  background-color: var(--theme-colors-border-muted);
  padding: var(--spacing-1);
  border-radius: var(--border-radius-sm);
  display: block;
}
</style>
