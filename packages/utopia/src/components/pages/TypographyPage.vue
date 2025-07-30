<template>
  <div class="typography-page">
    <div class="page-header">
      <h1 class="page-title">📝 Typographie</h1>
      <p class="page-description">
        Découvrez le système typographique complet avec toutes les tailles, poids et styles disponibles.
      </p>
    </div>

    <!-- Font Families -->
    <section class="section">
      <h2 class="section-title">🔠 Familles de polices</h2>
      <p class="section-description">
        Polices principales utilisées dans le design system.
      </p>
      
      <div class="font-families-grid">
        <div class="font-family-card">
          <div class="font-family-preview font-sans">
            <h3 class="font-family-name">Sans-serif</h3>
            <p class="font-family-sample">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm</p>
            <p class="font-family-sample">1234567890 !@#$%^&*()</p>
            <div class="font-family-info">
              <div class="code-group">
                <code class="font-family-var">--font-family-sans</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard('--font-family-sans')"
                  class="copy-btn"
                  aria-label="Copier --font-family-sans"
                >
                  📋
                </Button>
              </div>
              <p class="font-family-stack">Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif</p>
            </div>
          </div>
        </div>
        
        <div class="font-family-card">
          <div class="font-family-preview font-mono">
            <h3 class="font-family-name">Monospace</h3>
            <p class="font-family-sample">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm</p>
            <p class="font-family-sample">1234567890 !@#$%^&*()</p>
            <div class="font-family-info">
              <div class="code-group">
                <code class="font-family-var">--font-family-mono</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard('--font-family-mono')"
                  class="copy-btn"
                  aria-label="Copier --font-family-mono"
                >
                  📋
                </Button>
              </div>
              <p class="font-family-stack">'JetBrains Mono', 'Fira Code', Consolas, monospace</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Font Sizes -->
    <section class="section">
      <h2 class="section-title">📏 Tailles de police</h2>
      <p class="section-description">
        Échelle typographique avec différentes tailles pour créer une hiérarchie visuelle.
      </p>
      
      <div class="font-sizes-grid">
        <div class="font-size-card" v-for="size in fontSizes" :key="size.name">
          <div class="font-size-preview" :style="{ fontSize: `var(--font-size-${size.name})` }">
            <div class="font-size-sample">The quick brown fox</div>
            <div class="font-size-info">
              <span class="font-size-name">{{ size.label }}</span>
              <div class="code-group">
                <code class="font-size-var">--font-size-{{ size.name }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(`--font-size-${size.name}`)"
                  class="copy-btn"
                  :aria-label="`Copier --font-size-${size.name}`"
                >
                  📋
                </Button>
              </div>
              <span class="font-size-value">{{ size.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Font Weights -->
    <section class="section">
      <h2 class="section-title">💪 Poids de police</h2>
      <p class="section-description">
        Différents poids pour créer des contrastes et des emphases.
      </p>
      
      <div class="font-weights-grid">
        <div class="font-weight-card" v-for="weight in fontWeights" :key="weight.name">
          <div class="font-weight-preview" :style="{ fontWeight: `var(--font-weight-${weight.name})` }">
            <div class="font-weight-sample">The quick brown fox jumps over the lazy dog</div>
            <div class="font-weight-info">
              <span class="font-weight-name">{{ weight.label }}</span>
              <div class="code-group">
                <code class="font-weight-var">--font-weight-{{ weight.name }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(`--font-weight-${weight.name}`)"
                  class="copy-btn"
                  :aria-label="`Copier --font-weight-${weight.name}`"
                >
                  📋
                </Button>
              </div>
              <span class="font-weight-value">{{ weight.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Line Heights -->
    <section class="section">
      <h2 class="section-title">📐 Hauteurs de ligne</h2>
      <p class="section-description">
        Espacement vertical entre les lignes pour améliorer la lisibilité.
      </p>
      
      <div class="line-heights-grid">
        <div class="line-height-card" v-for="lineHeight in lineHeights" :key="lineHeight.name">
          <div class="line-height-preview" :style="{ lineHeight: `var(--line-height-${lineHeight.name})` }">
            <div class="line-height-sample">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </div>
            <div class="line-height-info">
              <span class="line-height-name">{{ lineHeight.label }}</span>
              <code class="line-height-var">--line-height-{{ lineHeight.name }}</code>
              <span class="line-height-value">{{ lineHeight.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Typography Examples -->
    <section class="section">
      <h2 class="section-title">✨ Exemples d'utilisation</h2>
      <p class="section-description">
        Combinaisons typographiques courantes pour différents contextes.
      </p>
      
      <div class="typography-examples">
        <div class="example-card">
          <h3 class="example-title">Titres</h3>
          <div class="example-content">
            <h1 class="heading-5xl">Titre H1 - 5XL</h1>
            <h2 class="heading-4xl">Titre H2 - 4XL</h2>
            <h3 class="heading-3xl">Titre H3 - 3XL</h3>
            <h4 class="heading-2xl">Titre H4 - 2XL</h4>
            <h5 class="heading-xl">Titre H5 - XL</h5>
            <h6 class="heading-lg">Titre H6 - LG</h6>
          </div>
        </div>
        
        <div class="example-card">
          <h3 class="example-title">Corps de texte</h3>
          <div class="example-content">
            <p class="text-lg">Texte large - Parfait pour les introductions et textes importants.</p>
            <p class="text-base">Texte de base - Utilisé pour le contenu principal et les paragraphes.</p>
            <p class="text-sm">Texte small - Idéal pour les descriptions et informations secondaires.</p>
            <p class="text-xs">Texte extra-small - Pour les mentions légales et petites annotations.</p>
          </div>
        </div>
        
        <div class="example-card">
          <h3 class="example-title">Code et données</h3>
          <div class="example-content">
            <code class="code-inline">const variable = 'value'</code>
            <pre class="code-block">function example() {
  return 'Hello World!';
}</pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '../atoms/Button'

// Copy to clipboard function
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

// Font sizes data
const fontSizes = [
  { name: 'xs', label: 'Extra Small', value: '12px' },
  { name: 'sm', label: 'Small', value: '14px' },
  { name: 'base', label: 'Base', value: '16px' },
  { name: 'lg', label: 'Large', value: '18px' },
  { name: 'xl', label: 'Extra Large', value: '20px' },
  { name: '2xl', label: '2X Large', value: '24px' },
  { name: '3xl', label: '3X Large', value: '30px' },
  { name: '4xl', label: '4X Large', value: '36px' },
  { name: '5xl', label: '5X Large', value: '48px' }
]

// Font weights data
const fontWeights = [
  { name: 'light', label: 'Light', value: '300' },
  { name: 'normal', label: 'Normal', value: '400' },
  { name: 'medium', label: 'Medium', value: '500' },
  { name: 'semibold', label: 'Semibold', value: '600' },
  { name: 'bold', label: 'Bold', value: '700' }
]

// Line heights data
const lineHeights = [
  { name: 'tight', label: 'Tight', value: '1.25' },
  { name: 'normal', label: 'Normal', value: '1.5' },
  { name: 'relaxed', label: 'Relaxed', value: '1.75' }
]
</script>

<style scoped>
.typography-page {
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

/* Font Families */
.font-families-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-6);
}

.font-family-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  transition: transform 0.2s ease;
}

.font-family-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.font-family-name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-4);
  color: var(--theme-colors-text-primary);
}

.font-family-sample {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-3);
  color: var(--theme-colors-text-primary);
}

.font-sans {
  font-family: var(--font-family-sans);
}

.font-mono {
  font-family: var(--font-family-mono);
}

.font-family-var {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-2);
  display: inline-block;
}

.font-family-stack {
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  margin: 0;
}

/* Copy buttons styles */
.code-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-2);
}

.copy-btn {
  opacity: 0;
  transition: opacity 0.2s ease;
  min-width: 32px !important;
  min-height: 24px !important;
  padding: var(--spacing-1) !important;
}

.font-family-card:hover .copy-btn,
.font-size-card:hover .copy-btn,
.font-weight-card:hover .copy-btn {
  opacity: 1;
}

/* Font Sizes */
.font-sizes-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.font-size-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  transition: transform 0.2s ease;
}

.font-size-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.font-size-sample {
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
  font-weight: var(--font-weight-medium);
}

.font-size-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  font-size: var(--font-size-sm);
}

.font-size-name {
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  min-width: 80px;
}

.font-size-var {
  font-family: var(--font-family-mono);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-secondary);
}

.font-size-value {
  color: var(--theme-colors-text-secondary);
}

/* Font Weights */
.font-weights-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.font-weight-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  transition: transform 0.2s ease;
}

.font-weight-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.font-weight-sample {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.font-weight-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  font-size: var(--font-size-sm);
}

.font-weight-name {
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  min-width: 80px;
}

.font-weight-var {
  font-family: var(--font-family-mono);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-secondary);
}

.font-weight-value {
  color: var(--theme-colors-text-secondary);
}

/* Line Heights */
.line-heights-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.line-height-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  transition: transform 0.2s ease;
}

.line-height-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.line-height-sample {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
  max-width: 500px;
}

.line-height-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  font-size: var(--font-size-sm);
}

.line-height-name {
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  min-width: 80px;
}

.line-height-var {
  font-family: var(--font-family-mono);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-secondary);
}

.line-height-value {
  color: var(--theme-colors-text-secondary);
}

/* Typography Examples */
.typography-examples {
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

.example-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
}

.example-content > * {
  margin-bottom: var(--spacing-4);
}

.example-content > *:last-child {
  margin-bottom: 0;
}

/* Heading styles */
.heading-5xl { font-size: var(--font-size-5xl); font-weight: var(--font-weight-bold); color: var(--theme-colors-text-primary); }
.heading-4xl { font-size: var(--font-size-4xl); font-weight: var(--font-weight-bold); color: var(--theme-colors-text-primary); }
.heading-3xl { font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); color: var(--theme-colors-text-primary); }
.heading-2xl { font-size: var(--font-size-2xl); font-weight: var(--font-weight-semibold); color: var(--theme-colors-text-primary); }
.heading-xl { font-size: var(--font-size-xl); font-weight: var(--font-weight-semibold); color: var(--theme-colors-text-primary); }
.heading-lg { font-size: var(--font-size-lg); font-weight: var(--font-weight-medium); color: var(--theme-colors-text-primary); }

/* Text styles */
.text-lg { font-size: var(--font-size-lg); color: var(--theme-colors-text-primary); line-height: var(--line-height-relaxed); }
.text-base { font-size: var(--font-size-base); color: var(--theme-colors-text-primary); line-height: var(--line-height-normal); }
.text-sm { font-size: var(--font-size-sm); color: var(--theme-colors-text-secondary); line-height: var(--line-height-normal); }
.text-xs { font-size: var(--font-size-xs); color: var(--theme-colors-text-secondary); line-height: var(--line-height-tight); }

/* Code styles */
.code-inline {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-primary);
}

.code-block {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  color: var(--theme-colors-text-primary);
  overflow-x: auto;
  margin: var(--spacing-4) 0;
}

/* Action examples styles */
.action-example {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.buttons-showcase {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.button-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-secondary);
}

.button-row {
  display: flex;
  gap: var(--spacing-3);
  flex-wrap: wrap;
}

.states-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
}

.state-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  align-items: flex-start;
}

.state-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-secondary);
}

.icons-showcase {
  display: flex;
  gap: var(--spacing-3);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .typography-page {
    padding: var(--spacing-4);
  }
  
  .font-families-grid,
  .typography-examples {
    grid-template-columns: 1fr;
  }
  
  .button-row, .icons-showcase {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .states-showcase {
    grid-template-columns: 1fr;
  }
}
</style> 