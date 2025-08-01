<template>
  <div class="surfaces-page">
    <div class="page-header">
      <h1 class="page-title">🖼️ Surfaces & Arrière-plans</h1>
      <p class="page-description">
        Découvrez les différentes surfaces disponibles pour créer des interfaces cohérentes.
      </p>
    </div>

    <!-- Surfaces principales -->
    <section class="section">
      <h2 class="section-title">🎯 Surfaces principales</h2>
      <p class="section-description">
        Surfaces utilisées pour les composants principaux de l'interface.
      </p>
      
      <div class="surfaces-grid">
        <div class="surface-card background">
          <div class="card-content">
            <h4 class="card-title">Background</h4>
            <p class="card-description">Arrière-plan principal de l'application</p>
            <div class="card-info">
              <div class="code-group">
                <code class="color-var">--theme-colors-surface-background</code>
                <Button 
                  variant="ghost" 
                  size="small"
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
        
        <div class="surface-card card">
          <div class="card-content">
            <h4 class="card-title">Card</h4>
            <p class="card-description">Surface pour les cartes et composants</p>
            <div class="card-info">
              <div class="code-group">
                <code class="color-var">--theme-colors-surface-card</code>
                <Button 
                  variant="ghost" 
                  size="small"
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
        
        <div class="surface-card elevated">
          <div class="card-content">
            <h4 class="card-title">Elevated</h4>
            <p class="card-description">Surface surélevée avec ombre</p>
            <div class="card-info">
              <div class="code-group">
                <code class="color-var">--theme-colors-surface-elevated</code>
                <Button 
                  variant="ghost" 
                  size="small"
                  @click="copyToClipboard('--theme-colors-surface-elevated')"
                  class="copy-btn"
                  aria-label="Copier --theme-colors-surface-elevated"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="surface-card overlay">
          <div class="card-content">
            <h4 class="card-title">Overlay</h4>
            <p class="card-description">Surface pour les modales et overlays</p>
            <div class="card-info">
              <div class="code-group">
                <code class="color-var">--theme-colors-surface-overlay</code>
                <Button 
                  variant="ghost" 
                  size="small"
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
    </section>

    <!-- Exemples d'utilisation -->
    <section class="section">
      <h2 class="section-title">📖 Exemples d'utilisation</h2>
      <p class="section-description">
        Exemples concrets d'utilisation des différentes surfaces.
      </p>
      
      <div class="examples-grid">
        <div class="example-card">
          <div class="example-preview">
            <div class="mock-background">
              <div class="mock-card">
                <div class="mock-header">Header</div>
                <div class="mock-content">Content</div>
                <div class="mock-elevated">Elevated Card</div>
              </div>
            </div>
          </div>
          <div class="example-info">
            <h4 class="example-title">Layout principal</h4>
            <p class="example-description">
              Combinaison des surfaces background, card et elevated pour créer une hiérarchie visuelle.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@club-employes/utopia'

// Copy to clipboard function
const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.surface-card {
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  min-height: 200px;
  transition: transform 0.2s ease;
}

.surface-card:hover {
  transform: translateY(-2px);
}

.surface-card.background {
  background-color: var(--theme-colors-surface-background);
}

.surface-card.card {
  background-color: var(--theme-colors-surface-card);
}

.surface-card.elevated {
  background-color: var(--theme-colors-surface-elevated);
  box-shadow: var(--shadow-lg);
}

.surface-card.overlay {
  background-color: var(--theme-colors-surface-overlay);
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.card-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-6);
  flex: 1;
}

.card-info {
  margin-top: auto;
}

.code-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.color-var {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--theme-colors-border-default);
  flex: 1;
}

.copy-btn {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.surface-card:hover .copy-btn {
  opacity: 1;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-8);
}

.example-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.example-preview {
  margin-bottom: var(--spacing-4);
}

.mock-background {
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  border: 2px dashed var(--theme-colors-border-default);
}

.mock-card {
  background: var(--theme-colors-surface-card);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--theme-colors-border-default);
}

.mock-header {
  background: var(--theme-colors-primary-100);
  padding: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-3);
  text-align: center;
  font-weight: var(--font-weight-semibold);
}

.mock-content {
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-3);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-3);
  text-align: center;
}

.mock-elevated {
  background: var(--theme-colors-surface-elevated);
  padding: var(--spacing-3);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  text-align: center;
  font-weight: var(--font-weight-medium);
}

.example-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-2);
}

.example-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
}

@media (max-width: 768px) {
  .surfaces-page {
    padding: var(--spacing-4);
  }
  
  .surfaces-grid {
    grid-template-columns: 1fr;
  }
  
  .examples-grid {
    grid-template-columns: 1fr;
  }
}
</style>