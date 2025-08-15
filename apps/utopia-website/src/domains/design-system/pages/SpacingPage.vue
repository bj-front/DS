<template>
  <ComponentLayout title="Espacement" icon="Move" type="Design Tokens">
    <template #examples>

    <!-- Échelle d'espacement -->
    <section class="section">
      <h2 class="section-title">📐 Échelle d'espacement</h2>
      <p class="section-description">
        Système d'espacement basé sur une progression logique pour maintenir la cohérence.
      </p>
      
      <div class="spacing-grid">
        <div class="spacing-card" v-for="space in spacingValues" :key="space.name">
          <div class="spacing-preview">
            <div class="spacing-label">{{ space.label }}</div>
            <div class="spacing-visual" :style="{ width: `var(--spacing-${space.name})`, height: `var(--spacing-${space.name})` }"></div>
            <div class="spacing-info">
              <div class="code-group">
                <code class="spacing-var">--spacing-{{ space.name }}</code>
                <Button 
                  variant="ghost" 
                  size="small" 
                  @click="copyToClipboard(`--spacing-${space.name}`)"
                  class="copy-btn"
                  :aria-label="`Copier --spacing-${space.name}`"
                >
                  📋
                </Button>
              </div>
              <span class="spacing-value">{{ space.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Exemples d'utilisation -->
    <section class="section">
      <h2 class="section-title">📖 Exemples d'utilisation</h2>
      <p class="section-description">
        Exemples concrets d'utilisation des différents espacements dans des composants.
      </p>
      
      <div class="examples-grid">
        <div class="example-card">
          <h4 class="example-title">Padding de composants</h4>
          <div class="example-preview">
            <div class="example-component padding-sm">
              <div class="component-content">Spacing 2 (8px)</div>
            </div>
            <div class="example-component padding-md">
              <div class="component-content">Spacing 4 (16px)</div>
            </div>
            <div class="example-component padding-lg">
              <div class="component-content">Spacing 6 (24px)</div>
            </div>
          </div>
          <p class="example-description">
            Différents paddings pour boutons, cartes et composants.
          </p>
        </div>

        <div class="example-card">
          <h4 class="example-title">Espacement entre éléments</h4>
          <div class="example-preview">
            <div class="example-list gap-sm">
              <div class="list-item">Item 1</div>
              <div class="list-item">Item 2</div>
              <div class="list-item">Item 3</div>
            </div>
            <div class="example-list gap-md">
              <div class="list-item">Item 1</div>
              <div class="list-item">Item 2</div>
              <div class="list-item">Item 3</div>
            </div>
          </div>
          <p class="example-description">
            Gaps entre éléments dans des listes ou grilles.
          </p>
        </div>

        <div class="example-card">
          <h4 class="example-title">Marges de sections</h4>
          <div class="example-preview">
            <div class="example-section">
              <div class="section-header">Section 1</div>
              <div class="section-content">Contenu de la section</div>
            </div>
            <div class="example-section">
              <div class="section-header">Section 2</div>
              <div class="section-content">Contenu de la section</div>
            </div>
          </div>
          <p class="example-description">
            Marges entre sections pour créer une hiérarchie visuelle.
          </p>
        </div>
      </div>
    </section>

    <!-- Guidelines -->
    <section class="section">
      <h2 class="section-title">💡 Guidelines d'utilisation</h2>
      <div class="guidelines-grid">
        <div class="guideline-card">
          <h4 class="guideline-title">🎯 Consistance</h4>
          <p class="guideline-description">
            Utilisez toujours les valeurs d'espacement définies pour maintenir la cohérence.
          </p>
        </div>
        <div class="guideline-card">
          <h4 class="guideline-title">📱 Responsive</h4>
          <p class="guideline-description">
            Adaptez les espacements selon la taille d'écran en utilisant des valeurs plus petites sur mobile.
          </p>
        </div>
        <div class="guideline-card">
          <h4 class="guideline-title">🔄 Hiérarchie</h4>
          <p class="guideline-description">
            Utilisez des espacements plus grands pour séparer des sections importantes.
          </p>
        </div>
      </div>
    </section>
    </template>

    <template #documentation>
      <div class="documentation">
        <h3>🎯 Guide d'utilisation</h3>
        <p>
          Le système d'espacement d'Utopia utilise une échelle cohérente basée sur des multiples de 4px pour maintenir l'harmonie visuelle.
        </p>
        
        <h4>📐 Échelle d'espacement</h4>
        <p>
          L'échelle va de <code>spacing-0</code> (0px) à <code>spacing-32</code> (128px) avec une progression logique. 
          Les valeurs les plus courantes sont 4, 8, 16, 24 et 32px.
        </p>
        
        <h4>📱 Utilisation responsive</h4>
        <ul>
          <li><strong>Mobile</strong> : Privilégiez les espacements plus petits (1-6)</li>
          <li><strong>Tablet</strong> : Espacements moyens (4-12)</li>
          <li><strong>Desktop</strong> : Tous les espacements selon le contexte</li>
        </ul>
        
        <h4>💡 Bonnes pratiques</h4>
        <ul>
          <li><strong>Consistance</strong> : Utilisez toujours les tokens définis</li>
          <li><strong>Hiérarchie</strong> : Plus l'espacement est grand, plus la séparation est importante</li>
          <li><strong>Contexte</strong> : Adaptez l'espacement selon l'importance du contenu</li>
        </ul>
        
        <h4>🔧 Propriétés CSS courantes</h4>
        <ul>
          <li><code>padding</code> : Espacement intérieur des composants</li>
          <li><code>margin</code> : Espacement extérieur entre éléments</li>
          <li><code>gap</code> : Espacement dans les layouts Grid et Flexbox</li>
        </ul>
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

const spacingValues = [
  { name: '0', label: '0', value: '0px' },
  { name: '1', label: '1', value: '4px' },
  { name: '2', label: '2', value: '8px' },
  { name: '3', label: '3', value: '12px' },
  { name: '4', label: '4', value: '16px' },
  { name: '5', label: '5', value: '20px' },
  { name: '6', label: '6', value: '24px' },
  { name: '8', label: '8', value: '32px' },
  { name: '10', label: '10', value: '40px' },
  { name: '12', label: '12', value: '48px' },
  { name: '16', label: '16', value: '64px' },
  { name: '20', label: '20', value: '80px' },
  { name: '24', label: '24', value: '96px' },
  { name: '32', label: '32', value: '128px' }
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

.spacing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
}

.spacing-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-4);
  text-align: center;
}

.spacing-label {
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.spacing-visual {
  background: var(--theme-colors-brand-primary-500);
  border-radius: var(--border-radius-sm);
  margin: 0 auto var(--spacing-3) auto;
  max-width: 100px;
  max-height: 100px;
}

.spacing-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.code-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.spacing-var {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  flex: 1;
}

.spacing-value {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
}

.copy-btn {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.spacing-card:hover .copy-btn {
  opacity: 1;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-8);
}

.example-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.example-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.example-preview {
  margin-bottom: var(--spacing-4);
  padding: var(--spacing-4);
  background: var(--theme-colors-surface-background);
  border-radius: var(--border-radius-md);
  border: 2px dashed var(--theme-colors-border-default);
}

.example-component {
  background: var(--theme-colors-brand-primary-100);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-2);
  display: inline-block;
  margin-right: var(--spacing-3);
}

.padding-sm {
  padding: var(--spacing-2);
}

.padding-md {
  padding: var(--spacing-4);
}

.padding-lg {
  padding: var(--spacing-6);
}

.component-content {
  color: var(--theme-colors-text-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.example-list {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-4);
}

.gap-sm {
  gap: var(--spacing-2);
}

.gap-md {
  gap: var(--spacing-4);
}

.list-item {
  background: var(--theme-colors-brand-primary-100);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-primary);
  font-size: var(--font-size-sm);
}

.example-section {
  background: var(--theme-colors-surface-elevated);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-8);
}

.section-header {
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.section-content {
  color: var(--theme-colors-text-secondary);
  font-size: var(--font-size-sm);
}

.example-description {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
}

.guidelines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
}

.guideline-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.guideline-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.guideline-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
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
  .spacing-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .examples-grid,
  .guidelines-grid {
    grid-template-columns: 1fr;
  }
  
  .example-card,
  .guideline-card {
    padding: var(--spacing-4);
  }
}

@media (max-width: 480px) {
  .example-card,
  .guideline-card {
    padding: var(--spacing-3);
  }
  
  .spacing-card {
    padding: var(--spacing-3);
  }
}
</style>