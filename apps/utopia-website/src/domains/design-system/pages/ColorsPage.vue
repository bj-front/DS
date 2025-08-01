<template>
  <div class="colors-page">
    <div class="page-header">
      <h1 class="page-title">🎨 Couleurs du Design System</h1>
      <p class="page-description">
        Découvrez toutes les couleurs disponibles : couleurs spécifiques aux marques et couleurs communes partagées.
      </p>
    </div>

    <!-- Couleurs Primary -->
    <section class="section">
      <h2 class="section-title">🎯 Couleurs Primaires</h2>
      <p class="section-description">
        Couleurs principales utilisées pour les éléments interactifs et les accents.
      </p>
      
      <div class="colors-grid">
        <div class="color-group">
          <h4 class="color-group-title">Primary</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in primaryColors" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="ghost" 
                    size="small" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
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
      </p>
      
      <div class="common-colors-grid">
        <div class="common-color-group">
          <h4 class="color-group-title">⚫ Slate</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in slateColors" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="ghost" 
                    size="small" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
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
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="ghost" 
                    size="small" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
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
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="ghost" 
                    size="small" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
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
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="ghost" 
                    size="small" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Couleurs de Surface -->
    <section class="section">
      <h2 class="section-title">🖼️ Couleurs de Surface</h2>
      <p class="section-description">
        Couleurs utilisées pour les arrière-plans et les surfaces.
      </p>
      
      <div class="common-colors-grid">
        <div class="common-color-group">
          <h4 class="color-group-title">Surfaces</h4>
          <div class="color-row">
            <div class="color-card" v-for="surface in surfaceColors" :key="surface.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${surface.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ surface.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ surface.variable }}</code>
                  <Button 
                    variant="ghost" 
                    size="small" 
                    @click="copyToClipboard(surface.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${surface.variable}`"
                  >
                    📋
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@club-employes/utopia'

// Copy to clipboard function
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

// Primary colors
const primaryColors = [
  { name: '25', variable: '--theme-colors-primary-25' },
  { name: '50', variable: '--theme-colors-primary-50' },
  { name: '100', variable: '--theme-colors-primary-100' },
  { name: '200', variable: '--theme-colors-primary-200' },
  { name: '300', variable: '--theme-colors-primary-300' },
  { name: '400', variable: '--theme-colors-primary-400' },
  { name: '500', variable: '--theme-colors-primary-500' },
  { name: '600', variable: '--theme-colors-primary-600' },
  { name: '700', variable: '--theme-colors-primary-700' },
  { name: '800', variable: '--theme-colors-primary-800' },
  { name: '900', variable: '--theme-colors-primary-900' }
]

// Common Colors
const slateColors = [
  { name: '50', variable: '--theme-colors-slate-50' },
  { name: '100', variable: '--theme-colors-slate-100' },
  { name: '200', variable: '--theme-colors-slate-200' },
  { name: '300', variable: '--theme-colors-slate-300' },
  { name: '400', variable: '--theme-colors-slate-400' },
  { name: '500', variable: '--theme-colors-slate-500' },
  { name: '600', variable: '--theme-colors-slate-600' },
  { name: '700', variable: '--theme-colors-slate-700' },
  { name: '800', variable: '--theme-colors-slate-800' },
  { name: '900', variable: '--theme-colors-slate-900' }
]

const successColors = [
  { name: '50', variable: '--theme-colors-success-50' },
  { name: '100', variable: '--theme-colors-success-100' },
  { name: '200', variable: '--theme-colors-success-200' },
  { name: '300', variable: '--theme-colors-success-300' },
  { name: '400', variable: '--theme-colors-success-400' },
  { name: '500', variable: '--theme-colors-success-500' },
  { name: '600', variable: '--theme-colors-success-600' },
  { name: '700', variable: '--theme-colors-success-700' },
  { name: '800', variable: '--theme-colors-success-800' },
  { name: '900', variable: '--theme-colors-success-900' }
]

const warningColors = [
  { name: '50', variable: '--theme-colors-warning-50' },
  { name: '100', variable: '--theme-colors-warning-100' },
  { name: '200', variable: '--theme-colors-warning-200' },
  { name: '300', variable: '--theme-colors-warning-300' },
  { name: '400', variable: '--theme-colors-warning-400' },
  { name: '500', variable: '--theme-colors-warning-500' },
  { name: '600', variable: '--theme-colors-warning-600' },
  { name: '700', variable: '--theme-colors-warning-700' },
  { name: '800', variable: '--theme-colors-warning-800' },
  { name: '900', variable: '--theme-colors-warning-900' }
]

const dangerColors = [
  { name: '50', variable: '--theme-colors-danger-50' },
  { name: '100', variable: '--theme-colors-danger-100' },
  { name: '200', variable: '--theme-colors-danger-200' },
  { name: '300', variable: '--theme-colors-danger-300' },
  { name: '400', variable: '--theme-colors-danger-400' },
  { name: '500', variable: '--theme-colors-danger-500' },
  { name: '600', variable: '--theme-colors-danger-600' },
  { name: '700', variable: '--theme-colors-danger-700' },
  { name: '800', variable: '--theme-colors-danger-800' },
  { name: '900', variable: '--theme-colors-danger-900' }
]

const surfaceColors = [
  { name: 'Background', variable: '--theme-colors-surface-background' },
  { name: 'Card', variable: '--theme-colors-surface-card' },
  { name: 'Elevated', variable: '--theme-colors-surface-elevated' },
  { name: 'Overlay', variable: '--theme-colors-surface-overlay' }
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

.color-code-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  width: 100%;
}

.color-code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  flex: 1;
}

.copy-btn {
  opacity: 0;
  transition: opacity 0.2s ease;
  min-width: 32px !important;
  min-height: 24px !important;
  padding: var(--spacing-1) !important;
}

.color-card:hover .copy-btn {
  opacity: 1;
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