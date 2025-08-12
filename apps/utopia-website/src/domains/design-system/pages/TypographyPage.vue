<template>
  <ComponentLayout title="Typographie" icon="Type" type="Design Tokens">
    <template #examples>

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
                  size="small" 
                  @click="copyToClipboard('--font-family-sans')"
                  class="copy-btn"
                  aria-label="Copier --font-family-sans"
                >
                  📋
                </Button>
              </div>
              <p class="font-family-stack">Inter, system-ui, sans-serif</p>
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
                  size="small" 
                  @click="copyToClipboard('--font-family-mono')"
                  class="copy-btn"
                  aria-label="Copier --font-family-mono"
                >
                  📋
                </Button>
              </div>
              <p class="font-family-stack">JetBrains Mono, Consolas, monospace</p>
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
                  size="small" 
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
        Différents poids disponibles pour créer des hiérarchies et des emphases.
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
                  size="small" 
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

    <!-- Text Colors -->
    <section class="section">
      <h2 class="section-title">🎨 Couleurs de texte</h2>
      <p class="section-description">
        Couleurs utilisées pour les différents types de texte.
      </p>
      
      <div class="text-colors-grid">
        <div class="text-color-card" v-for="color in textColors" :key="color.name">
          <div class="text-color-preview" :style="{ color: `var(${color.variable})` }">
            <div class="text-color-sample">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div class="text-color-info">
              <span class="text-color-name">{{ color.label }}</span>
              <div class="code-group">
                <code class="text-color-var">{{ color.variable }}</code>
                <Button 
                  variant="ghost" 
                  size="small" 
                  @click="copyToClipboard(color.variable)"
                  class="copy-btn"
                  :aria-label="`Copier ${color.variable}`"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </template>

    <template #documentation>
      <div class="documentation">
        <h3>🎯 Utilisation</h3>
        <p>
          Le système typographique d'Utopia offre une échelle cohérente pour toutes vos interfaces.
        </p>
        
        <h4>📝 Familles de polices</h4>
        <ul>
          <li><strong>Sans-serif</strong> : Pour les interfaces et le contenu principal</li>
          <li><strong>Monospace</strong> : Pour le code et les données techniques</li>
        </ul>
        
        <h4>📏 Tailles de police</h4>
        <p>
          Utilisez l'échelle typographique pour créer une hiérarchie visuelle claire. 
          Les tailles vont de <code>xs</code> (12px) à <code>6xl</code> (60px).
        </p>
        
        <h4>💪 Poids de police</h4>
        <p>
          Neuf poids disponibles de <code>thin</code> (100) à <code>black</code> (900) 
          pour créer des emphases et des hiérarchies subtiles.
        </p>
        
        <h4>🎨 Couleurs de texte</h4>
        <p>
          Couleurs sémantiques qui s'adaptent automatiquement aux thèmes clair et sombre.
        </p>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import ComponentLayout from '@/components/layouts/ComponentLayout.vue'
import { Button } from '@club-employes/utopia'

// Copy to clipboard function
const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

const fontSizes = [
  { name: 'xs', label: 'Extra Small', value: '12px' },
  { name: 'sm', label: 'Small', value: '14px' },
  { name: 'base', label: 'Base', value: '16px' },
  { name: 'lg', label: 'Large', value: '18px' },
  { name: 'xl', label: 'Extra Large', value: '20px' },
  { name: '2xl', label: '2X Large', value: '24px' },
  { name: '3xl', label: '3X Large', value: '30px' },
  { name: '4xl', label: '4X Large', value: '36px' },
  { name: '5xl', label: '5X Large', value: '48px' },
  { name: '6xl', label: '6X Large', value: '60px' }
]

const fontWeights = [
  { name: 'thin', label: 'Thin', value: '100' },
  { name: 'extralight', label: 'Extra Light', value: '200' },
  { name: 'light', label: 'Light', value: '300' },
  { name: 'normal', label: 'Normal', value: '400' },
  { name: 'medium', label: 'Medium', value: '500' },
  { name: 'semibold', label: 'Semi Bold', value: '600' },
  { name: 'bold', label: 'Bold', value: '700' },
  { name: 'extrabold', label: 'Extra Bold', value: '800' },
  { name: 'black', label: 'Black', value: '900' }
]

const textColors = [
  { name: 'primary', label: 'Primary', variable: '--theme-colors-text-primary' },
  { name: 'secondary', label: 'Secondary', variable: '--theme-colors-text-secondary' },
  { name: 'tertiary', label: 'Tertiary', variable: '--theme-colors-text-tertiary' },
  { name: 'inverse', label: 'Inverse', variable: '--theme-colors-text-inverse' },
  { name: 'brand', label: 'Brand', variable: '--theme-colors-text-brand' }
]
</script>

<style scoped>
/* Intro */
.intro {
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-8);
}

.section {
  margin-bottom: var(--spacing-16);
}

.section-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
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
}

.font-family-name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
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

.font-family-info {
  margin-top: var(--spacing-4);
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--theme-colors-border-default);
}

.font-family-stack {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  margin-top: var(--spacing-2);
}

.font-sizes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-4);
}

.font-size-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-4);
}

.font-size-sample {
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.font-size-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.font-size-name {
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
}

.font-size-value {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
}

.font-weights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-4);
}

.font-weight-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-4);
}

.font-weight-sample {
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
  font-size: var(--font-size-lg);
}

.font-weight-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.font-weight-name {
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
}

.font-weight-value {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
}

.text-colors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-4);
}

.text-color-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-4);
}

.text-color-sample {
  margin-bottom: var(--spacing-3);
  font-size: var(--font-size-base);
}

.text-color-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.text-color-name {
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
}

.code-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.font-family-var,
.font-size-var,
.font-weight-var,
.text-color-var {
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
}

.font-family-card:hover .copy-btn,
.font-size-card:hover .copy-btn,
.font-weight-card:hover .copy-btn,
.text-color-card:hover .copy-btn {
  opacity: 1;
}

/* Documentation */
.documentation {
  color: var(--theme-colors-text-secondary);
}

.documentation h3 {
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.documentation h4 {
  color: var(--theme-colors-text-primary);
  margin-top: var(--spacing-6);
  margin-bottom: var(--spacing-3);
}

.documentation ul {
  margin: var(--spacing-4) 0;
  padding-left: var(--spacing-6);
}

.documentation li {
  margin-bottom: var(--spacing-2);
}

.documentation code {
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
}

@media (max-width: 768px) {
  .font-families-grid,
  .font-sizes-grid,
  .font-weights-grid,
  .text-colors-grid {
    grid-template-columns: 1fr;
  }
}
</style>