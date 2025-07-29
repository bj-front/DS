<template>
  <div class="colors-page">
    <div class="page-header">
      <h1 class="page-title">🎨 Couleurs du Design System</h1>
      <p class="page-description">
        Découvrez toutes les couleurs disponibles : couleurs spécifiques aux marques et couleurs communes partagées.
      </p>
    </div>

    <!-- Couleurs Brand -->
    <section class="section">
      <h2 class="section-title">{{ currentBrand.name }} - Couleurs Brand</h2>
      <p class="section-description">
        Couleurs spécifiques à cette marque, adaptées au mode {{ currentTheme.mode === 'dark' ? 'sombre' : 'clair' }} actuel.
        <br>
        <small>💡 Utilisez le widget en haut à droite pour voir les couleurs des autres marques.</small>
      </p>
      
      <div class="colors-grid">
        <div class="color-group">
          <h4 class="color-group-title">{{ currentBrand.primary.name }}</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in currentBrand.primary.shades" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <code class="color-code">{{ shade.variable }}</code>
              </div>
            </div>
          </div>
        </div>
        
        <div class="color-group">
          <h4 class="color-group-title">{{ currentBrand.secondary.name }}</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in currentBrand.secondary.shades" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <code class="color-code">{{ shade.variable }}</code>
              </div>
            </div>
          </div>
        </div>
        
        <div class="color-group">
          <h4 class="color-group-title">{{ currentBrand.accent.name }}</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in currentBrand.accent.shades" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <code class="color-code">{{ shade.variable }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Couleurs Communes -->
    <section class="section">
      <h2 class="section-title">🌐 Couleurs Communes</h2>
      <p class="section-description">
        Couleurs partagées entre toutes les marques pour la cohérence du système. 
        <strong>Ces couleurs s'adaptent automatiquement selon le mode {{ currentTheme.mode === 'dark' ? 'sombre' : 'clair' }}.</strong>
      </p>
      
      <div class="common-colors-grid">
        <div class="common-color-group">
          <h4 class="color-group-title">⚫ Slate</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in slateColors" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <code class="color-code">{{ shade.variable }}</code>
              </div>
            </div>
          </div>
        </div>
        
        <div class="common-color-group">
          <h4 class="color-group-title">✅ Success</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in successColors" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <code class="color-code">{{ shade.variable }}</code>
              </div>
            </div>
          </div>
        </div>
        
        <div class="common-color-group">
          <h4 class="color-group-title">⚠️ Warning</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in warningColors" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <code class="color-code">{{ shade.variable }}</code>
              </div>
            </div>
          </div>
        </div>
        
        <div class="common-color-group">
          <h4 class="color-group-title">🚨 Danger</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in dangerColors" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <code class="color-code">{{ shade.variable }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ThemeConfig } from '../../theme-provider'

interface Props {
  currentTheme: ThemeConfig
}

const props = defineProps<Props>()

// All brand colors data
const brandColors = {
  'club-employes': {
    name: '🏢 Club Employés',
    primary: {
      name: 'Primary',
      shades: [
        { name: '25', variable: '--theme-colors-brand-primary-25' },
        { name: '50', variable: '--theme-colors-brand-primary-50' },
        { name: '100', variable: '--theme-colors-brand-primary-100' },
        { name: '200', variable: '--theme-colors-brand-primary-200' },
        { name: '300', variable: '--theme-colors-brand-primary-300' },
        { name: '400', variable: '--theme-colors-brand-primary-400' },
        { name: '500', variable: '--theme-colors-brand-primary-500' }
      ]
    },
    secondary: {
      name: 'Secondary',
      shades: [
        { name: '25', variable: '--theme-colors-brand-secondary-25' },
        { name: '50', variable: '--theme-colors-brand-secondary-50' },
        { name: '100', variable: '--theme-colors-brand-secondary-100' },
        { name: '200', variable: '--theme-colors-brand-secondary-200' },
        { name: '300', variable: '--theme-colors-brand-secondary-300' },
        { name: '400', variable: '--theme-colors-brand-secondary-400' },
        { name: '500', variable: '--theme-colors-brand-secondary-500' }
      ]
    },
    accent: {
      name: 'Accent',
      shades: [
        { name: '25', variable: '--theme-colors-brand-accent-25' },
        { name: '50', variable: '--theme-colors-brand-accent-50' },
        { name: '100', variable: '--theme-colors-brand-accent-100' },
        { name: '200', variable: '--theme-colors-brand-accent-200' },
        { name: '300', variable: '--theme-colors-brand-accent-300' },
        { name: '400', variable: '--theme-colors-brand-accent-400' },
        { name: '500', variable: '--theme-colors-brand-accent-500' }
      ]
    }
  },
  'gifteo': {
    name: '❤️ Gifteo',
    primary: {
      name: 'Primary',
      shades: [
        { name: '25', variable: '--theme-colors-brand-primary-25' },
        { name: '50', variable: '--theme-colors-brand-primary-50' },
        { name: '100', variable: '--theme-colors-brand-primary-100' },
        { name: '200', variable: '--theme-colors-brand-primary-200' },
        { name: '300', variable: '--theme-colors-brand-primary-300' },
        { name: '400', variable: '--theme-colors-brand-primary-400' },
        { name: '500', variable: '--theme-colors-brand-primary-500' }
      ]
    },
    secondary: {
      name: 'Secondary',
      shades: [
        { name: '25', variable: '--theme-colors-brand-secondary-25' },
        { name: '50', variable: '--theme-colors-brand-secondary-50' },
        { name: '100', variable: '--theme-colors-brand-secondary-100' },
        { name: '200', variable: '--theme-colors-brand-secondary-200' },
        { name: '300', variable: '--theme-colors-brand-secondary-300' },
        { name: '400', variable: '--theme-colors-brand-secondary-400' },
        { name: '500', variable: '--theme-colors-brand-secondary-500' }
      ]
    },
    accent: {
      name: 'Accent',
      shades: [
        { name: '25', variable: '--theme-colors-brand-accent-25' },
        { name: '50', variable: '--theme-colors-brand-accent-50' },
        { name: '100', variable: '--theme-colors-brand-accent-100' },
        { name: '200', variable: '--theme-colors-brand-accent-200' },
        { name: '300', variable: '--theme-colors-brand-accent-300' },
        { name: '400', variable: '--theme-colors-brand-accent-400' },
        { name: '500', variable: '--theme-colors-brand-accent-500' }
      ]
    }
  }
}

// Get current brand data
const currentBrand = computed(() => {
  const brandKey = props.currentTheme.name.includes('club-employes') ? 'club-employes' : 'gifteo'
  return brandColors[brandKey]
})

// Common Colors (adapted for light/dark modes)
const slateColors = [
  { name: '50', variable: '--theme-colors-common-slate-50' },
  { name: '200', variable: '--theme-colors-common-slate-200' },
  { name: '400', variable: '--theme-colors-common-slate-400' },
  { name: '600', variable: '--theme-colors-common-slate-600' },
  { name: '800', variable: '--theme-colors-common-slate-800' },
  { name: '950', variable: '--theme-colors-common-slate-950' }
]

const successColors = [
  { name: '50', variable: '--theme-colors-common-succeed-50' },
  { name: '200', variable: '--theme-colors-common-succeed-200' },
  { name: '400', variable: '--theme-colors-common-succeed-400' },
  { name: '600', variable: '--theme-colors-common-succeed-600' },
  { name: '800', variable: '--theme-colors-common-succeed-800' },
  { name: '950', variable: '--theme-colors-common-succeed-950' }
]

const warningColors = [
  { name: '50', variable: '--theme-colors-common-warning-50' },
  { name: '200', variable: '--theme-colors-common-warning-200' },
  { name: '400', variable: '--theme-colors-common-warning-400' },
  { name: '600', variable: '--theme-colors-common-warning-600' },
  { name: '800', variable: '--theme-colors-common-warning-800' },
  { name: '950', variable: '--theme-colors-common-warning-950' }
]

const dangerColors = [
  { name: '50', variable: '--theme-colors-common-danger-50' },
  { name: '200', variable: '--theme-colors-common-danger-200' },
  { name: '400', variable: '--theme-colors-common-danger-400' },
  { name: '600', variable: '--theme-colors-common-danger-600' },
  { name: '800', variable: '--theme-colors-common-danger-800' },
  { name: '950', variable: '--theme-colors-common-danger-950' }
]
</script>

<style scoped>
.colors-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--spacing-8);
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.page-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.page-description {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.section {
  margin-bottom: var(--spacing-16);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
  border-bottom: 2px solid var(--theme-colors-border-default);
  padding-bottom: var(--spacing-4);
}

.section-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-8);
}

.colors-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
}

.common-colors-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
}

.color-group,
.common-color-group {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.color-group-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.color-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-3);
}

.color-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-3);
  border-radius: var(--border-radius-md);
  transition: transform 0.2s ease;
}

.color-card:hover {
  transform: translateY(-2px);
}

.color-swatch {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--theme-colors-border-default);
  margin-bottom: var(--spacing-2);
  box-shadow: var(--shadow-sm);
}

.color-info {
  text-align: center;
}

.color-name {
  display: block;
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-1);
}

.color-code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
}

@media (max-width: 768px) {
  .colors-page {
    padding: var(--spacing-4);
  }
  
  .color-row {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: var(--spacing-2);
  }
  
  .color-swatch {
    width: 50px;
    height: 50px;
  }
}
</style> 