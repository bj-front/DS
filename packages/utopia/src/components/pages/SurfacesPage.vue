<template>
  <div class="surfaces-page">
    <div class="page-header">
      <h1 class="page-title">🖼️ Surfaces & Arrière-plans</h1>
      <p class="page-description">
        Découvrez les différentes surfaces disponibles avec leurs arrière-plans brand et communs.
      </p>
    </div>

    <!-- Surfaces Brand -->
    <section class="section">
      <h2 class="section-title">{{ currentBrand.name }} - Surfaces Brand</h2>
      <p class="section-description">
        Surfaces utilisant les couleurs spécifiques à cette marque, adaptées au mode {{ currentTheme.mode === 'dark' ? 'sombre' : 'clair' }}.
      </p>
      
      <div class="surfaces-grid">
        <!-- Primary Surfaces -->
        <div class="surface-group">
          <h3 class="surface-group-title">🎯 Surfaces Primary</h3>
          <div class="cards-grid">
            <div class="surface-card primary-25">
              <div class="card-content">
                <h4 class="card-title">Primary 25</h4>
                <p class="card-description">Surface très claire pour zones principales</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-brand-primary-25</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-brand-primary-25')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-brand-primary-25"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card primary-50">
              <div class="card-content">
                <h4 class="card-title">Primary 50</h4>
                <p class="card-description">Surface claire pour zones de contenu</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-brand-primary-50</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-brand-primary-50')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-brand-primary-50"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card primary-100">
              <div class="card-content">
                <h4 class="card-title">Primary 100</h4>
                <p class="card-description">Surface légèrement teintée</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-brand-primary-100</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-brand-primary-100')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-brand-primary-100"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Secondary Surfaces -->
        <div class="surface-group">
          <h3 class="surface-group-title">⚫ Surfaces Secondary</h3>
          <div class="cards-grid">
            <div class="surface-card secondary-25">
              <div class="card-content">
                <h4 class="card-title">Secondary 25</h4>
                <p class="card-description">Surface neutre très claire</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-brand-secondary-25</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-brand-secondary-25')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-brand-secondary-25"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card secondary-50">
              <div class="card-content">
                <h4 class="card-title">Secondary 50</h4>
                <p class="card-description">Surface neutre pour backgrounds</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-brand-secondary-50</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-brand-secondary-50')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-brand-secondary-50"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card secondary-100">
              <div class="card-content">
                <h4 class="card-title">Secondary 100</h4>
                <p class="card-description">Surface neutre avec plus de contraste</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-brand-secondary-100</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-brand-secondary-100')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-brand-secondary-100"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Accent Surfaces -->
        <div class="surface-group">
          <h3 class="surface-group-title">🔥 Surfaces Accent</h3>
          <div class="cards-grid">
            <div class="surface-card accent-25">
              <div class="card-content">
                <h4 class="card-title">Accent 25</h4>
                <p class="card-description">Surface d'accent très subtile</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-brand-accent-25</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-brand-accent-25')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-brand-accent-25"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card accent-50">
              <div class="card-content">
                <h4 class="card-title">Accent 50</h4>
                <p class="card-description">Surface d'accent pour highlights</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-brand-accent-50</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-brand-accent-50')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-brand-accent-50"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card accent-100">
              <div class="card-content">
                <h4 class="card-title">Accent 100</h4>
                <p class="card-description">Surface d'accent visible</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-brand-accent-100</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-brand-accent-100')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-brand-accent-100"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Surfaces Communes -->
    <section class="section">
      <h2 class="section-title">🌐 Surfaces Communes</h2>
      <p class="section-description">
        Surfaces utilisant les couleurs partagées, communes à toutes les marques.
      </p>
      
      <div class="surfaces-grid">
        <!-- Surfaces Système -->
        <div class="surface-group">
          <h3 class="surface-group-title">🎛️ Surfaces Système</h3>
          <div class="cards-grid">
            <div class="surface-card surface-background">
              <div class="card-content">
                <h4 class="card-title">Background</h4>
                <p class="card-description">Arrière-plan principal de l'application</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-surface-background</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-surface-background')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-surface-background"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card surface-card-bg">
              <div class="card-content">
                <h4 class="card-title">Card</h4>
                <p class="card-description">Surface pour les cartes et composants</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-surface-card</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-surface-card')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-surface-card"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card surface-overlay">
              <div class="card-content">
                <h4 class="card-title">Overlay</h4>
                <p class="card-description">Surface pour modals et overlays</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-surface-overlay</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-surface-overlay')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-surface-overlay"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Surfaces États -->
        <div class="surface-group">
          <h3 class="surface-group-title">📊 Surfaces États</h3>
          <div class="cards-grid">
            <div class="surface-card success-surface">
              <div class="card-content">
                <h4 class="card-title">Success</h4>
                <p class="card-description">Surface pour états de succès (adapté mode dark)</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-state-success-background</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-state-success-background')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-state-success-background"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card warning-surface">
              <div class="card-content">
                <h4 class="card-title">Warning</h4>
                <p class="card-description">Surface pour avertissements (adapté mode dark)</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-state-warning-background</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-state-warning-background')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-state-warning-background"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card danger-surface">
              <div class="card-content">
                <h4 class="card-title">Danger</h4>
                <p class="card-description">Surface pour erreurs et dangers (adapté mode dark)</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-state-error-background</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-state-error-background')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-state-error-background"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Surfaces Slate -->
        <div class="surface-group">
          <h3 class="surface-group-title">⚫ Surfaces Slate</h3>
          <div class="cards-grid">
            <div class="surface-card slate-50">
              <div class="card-content">
                <h4 class="card-title">Slate 50</h4>
                <p class="card-description">Surface neutre très claire (adapté mode dark)</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-common-slate-50</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-common-slate-50')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-common-slate-50"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card slate-200">
              <div class="card-content">
                <h4 class="card-title">Slate 200</h4>
                <p class="card-description">Surface neutre claire (adapté mode dark)</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-common-slate-200</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-common-slate-200')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-common-slate-200"
                    >
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="surface-card slate-400">
              <div class="card-content">
                <h4 class="card-title">Slate 400</h4>
                <p class="card-description">Surface neutre moyennement contrastée (adapté mode dark)</p>
                <div class="card-info">
                  <div class="code-group">
                    <code class="color-var">--theme-colors-common-slate-400</code>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      @click="copyToClipboard('--theme-colors-common-slate-400')"
                      class="copy-btn"
                      aria-label="Copier --theme-colors-common-slate-400"
                    >
                      📋
                    </Button>
                  </div>
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
import { computed } from 'vue'
import { Button } from '../atoms/Button'
import type { ThemeConfig } from '../../theme-provider'

interface Props {
  currentTheme: ThemeConfig
}

const props = defineProps<Props>()

// Copy to clipboard function
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

// Get current brand info
const currentBrand = computed(() => {
  const isClubEmployes = props.currentTheme.name.includes('club-employes')
  return {
    name: isClubEmployes ? '🏢 Club Employés' : '❤️ Gifteo'
  }
})
</script>

<style scoped>
.surfaces-page {
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

.surfaces-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
}

.surface-group {
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-8);
  background: var(--theme-colors-surface-card);
}

.surface-group-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.surface-card {
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  border: 1px solid var(--theme-colors-border-default);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.surface-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-2);
}

.card-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-4);
  line-height: 1.5;
}

.card-info {
  margin-top: var(--spacing-4);
}

.color-var {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  background: rgba(0, 0, 0, 0.1);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-secondary);
  flex: 1;
}

/* Copy buttons styles */
.code-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.copy-btn {
  opacity: 0;
  transition: opacity 0.2s ease;
  min-width: 32px !important;
  min-height: 24px !important;
  padding: var(--spacing-1) !important;
}

.surface-card:hover .copy-btn {
  opacity: 1;
}

/* Brand Primary Surfaces */
.primary-25 {
  background: var(--theme-colors-brand-primary-25);
}

.primary-50 {
  background: var(--theme-colors-brand-primary-50);
}

.primary-100 {
  background: var(--theme-colors-brand-primary-100);
}

/* Brand Secondary Surfaces */
.secondary-25 {
  background: var(--theme-colors-brand-secondary-25);
}

.secondary-50 {
  background: var(--theme-colors-brand-secondary-50);
}

.secondary-100 {
  background: var(--theme-colors-brand-secondary-100);
}

/* Brand Accent Surfaces */
.accent-25 {
  background: var(--theme-colors-brand-accent-25);
}

.accent-50 {
  background: var(--theme-colors-brand-accent-50);
}

.accent-100 {
  background: var(--theme-colors-brand-accent-100);
}

/* System Surfaces */
.surface-background {
  background: var(--theme-colors-surface-background);
}

.surface-card-bg {
  background: var(--theme-colors-surface-card);
}

.surface-overlay {
  background: var(--theme-colors-surface-overlay);
}

/* Status Surfaces */
.success-surface {
  background: var(--theme-colors-state-success-background);
  border-color: var(--theme-colors-common-succeed-200);
}

.warning-surface {
  background: var(--theme-colors-state-warning-background);
  border-color: var(--theme-colors-common-warning-200);
}

.danger-surface {
  background: var(--theme-colors-state-error-background);
  border-color: var(--theme-colors-common-danger-200);
}

/* Slate Surfaces */
.slate-50 {
  background: var(--theme-colors-common-slate-50);
}

.slate-200 {
  background: var(--theme-colors-common-slate-200);
}

.slate-400 {
  background: var(--theme-colors-common-slate-400);
  color: var(--theme-colors-common-slate-950);
}

.slate-400 .card-title,
.slate-400 .card-description {
  color: var(--theme-colors-common-slate-950);
}

.slate-400 .color-var {
  background: var(--theme-colors-common-slate-600);
  color: var(--theme-colors-common-slate-200);
}

@media (max-width: 768px) {
  .surfaces-page {
    padding: var(--spacing-4);
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
  
  .surface-group {
    padding: var(--spacing-6);
  }
}
</style> 