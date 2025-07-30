<template>
  <div class="spacing-page">
    <div class="page-header">
      <h1 class="page-title">📏 Espacement</h1>
      <p class="page-description">
        Système d'espacement cohérent pour créer des layouts harmonieux et une hiérarchie visuelle claire.
      </p>
    </div>

    <!-- Spacing Scale -->
    <section class="section">
      <h2 class="section-title">📐 Échelle d'espacement</h2>
      <p class="section-description">
        Valeurs d'espacement basées sur une progression harmonique pour maintenir la cohérence visuelle.
      </p>
      
      <div class="spacing-scale">
        <div class="spacing-item" v-for="space in spacingValues" :key="space.name">
          <div class="spacing-info">
            <span class="spacing-name">{{ space.name }}</span>
            <div class="code-group">
              <code class="spacing-var">--spacing-{{ space.name }}</code>
              <Button 
                variant="ghost" 
                size="sm" 
                @click="copyToClipboard(`--spacing-${space.name}`)"
                class="copy-btn"
                :aria-label="`Copier --spacing-${space.name}`"
              >
                📋
              </Button>
            </div>
            <span class="spacing-value">{{ space.value }}</span>
          </div>
          <div class="spacing-visual">
            <div class="spacing-box" :style="{ width: `var(--spacing-${space.name})`, height: `var(--spacing-${space.name})` }"></div>
            <div class="spacing-ruler" :style="{ width: `var(--spacing-${space.name})` }"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Padding Examples -->
    <section class="section">
      <h2 class="section-title">📦 Exemples de Padding</h2>
      <p class="section-description">
        Application des valeurs d'espacement comme padding interne des éléments.
      </p>
      
      <div class="padding-examples-grid">
        <div class="example-card" v-for="padding in paddingExamples" :key="padding.name">
          <h3 class="example-title">Padding {{ padding.name }}</h3>
          <div class="padding-demo" :style="{ padding: `var(--spacing-${padding.name})` }">
            <div class="padding-content">
              Contenu avec padding {{ padding.value }}
            </div>
          </div>
          <div class="example-info">
            <code class="example-var">padding: var(--spacing-{{ padding.name }})</code>
          </div>
        </div>
      </div>
    </section>

    <!-- Margin Examples -->
    <section class="section">
      <h2 class="section-title">🎯 Exemples de Margin</h2>
      <p class="section-description">
        Application des valeurs d'espacement comme margin externe des éléments.
      </p>
      
      <div class="margin-examples-grid">
        <div class="example-card" v-for="margin in marginExamples" :key="margin.name">
          <h3 class="example-title">Margin {{ margin.name }}</h3>
          <div class="margin-container">
            <div class="margin-demo" :style="{ margin: `var(--spacing-${margin.name})` }">
              <div class="margin-content">
                Élément avec margin {{ margin.value }}
              </div>
            </div>
          </div>
          <div class="example-info">
            <code class="example-var">margin: var(--spacing-{{ margin.name }})</code>
          </div>
        </div>
      </div>
    </section>

    <!-- Gap Examples -->
    <section class="section">
      <h2 class="section-title">🔄 Exemples de Gap</h2>
      <p class="section-description">
        Application des valeurs d'espacement comme gap dans les layouts flexbox et grid.
      </p>
      
      <div class="gap-examples-grid">
        <div class="example-card" v-for="gap in gapExamples" :key="gap.name">
          <h3 class="example-title">Gap {{ gap.name }}</h3>
          <div class="gap-demo" :style="{ gap: `var(--spacing-${gap.name})` }">
            <div class="gap-item">Item 1</div>
            <div class="gap-item">Item 2</div>
            <div class="gap-item">Item 3</div>
          </div>
          <div class="example-info">
            <code class="example-var">gap: var(--spacing-{{ gap.name }})</code>
          </div>
        </div>
      </div>
    </section>

    <!-- Layout Examples -->
    <section class="section">
      <h2 class="section-title">🏗️ Exemples de Layout</h2>
      <p class="section-description">
        Combinaisons typiques d'espacement pour différents types de layouts.
      </p>
      
      <div class="layout-examples">
        <div class="layout-example">
          <h3 class="layout-title">Card Layout</h3>
          <div class="card-example">
            <div class="card-header">
              <h4>Titre de la carte</h4>
            </div>
            <div class="card-content">
              <p>Contenu de la carte avec padding et margin appropriés pour une lisibilité optimale.</p>
              <button class="card-button">Action</button>
            </div>
          </div>
          <div class="layout-code">
            <code>
              padding: var(--spacing-6);<br>
              gap: var(--spacing-4);<br>
              margin-bottom: var(--spacing-3);
            </code>
          </div>
        </div>

        <div class="layout-example">
          <h3 class="layout-title">Form Layout</h3>
          <div class="form-example">
            <div class="form-field">
              <label>Label</label>
              <input type="text" placeholder="Input field">
            </div>
            <div class="form-field">
              <label>Label</label>
              <input type="text" placeholder="Input field">
            </div>
            <button class="form-submit">Submit</button>
          </div>
          <div class="layout-code">
            <code>
              gap: var(--spacing-5);<br>
              padding: var(--spacing-4);<br>
              margin-top: var(--spacing-6);
            </code>
          </div>
        </div>

        <div class="layout-example">
          <h3 class="layout-title">Navigation Layout</h3>
          <div class="nav-example">
            <div class="nav-item">Home</div>
            <div class="nav-item">About</div>
            <div class="nav-item">Services</div>
            <div class="nav-item">Contact</div>
          </div>
          <div class="layout-code">
            <code>
              gap: var(--spacing-8);<br>
              padding: var(--spacing-4) var(--spacing-6);
            </code>
          </div>
        </div>
      </div>
    </section>

    <!-- Spacing in Action -->
    <section class="section">
      <h2 class="section-title">✨ Espacement en action</h2>
      <p class="section-description">
        Exemples pratiques d'espacement dans les composants du design system.
      </p>
      
      <div class="action-examples">
        <div class="action-example">
          <h3 class="example-title">Groupes de boutons avec espacement</h3>
          <div class="button-spacing-demo">
            <div class="button-demo-group">
              <span class="demo-label">Gap: var(--spacing-2) - 8px</span>
              <div class="button-group" style="gap: var(--spacing-2)">
                <Button variant="primary" size="md">Sauvegarder</Button>
                <Button variant="secondary" size="md">Annuler</Button>
                <Button variant="outline" size="md">Aide</Button>
              </div>
            </div>
            
            <div class="button-demo-group">
              <span class="demo-label">Gap: var(--spacing-4) - 16px</span>
              <div class="button-group" style="gap: var(--spacing-4)">
                <Button variant="primary" size="md">Sauvegarder</Button>
                <Button variant="secondary" size="md">Annuler</Button>
                <Button variant="outline" size="md">Aide</Button>
              </div>
            </div>
            
            <div class="button-demo-group">
              <span class="demo-label">Gap: var(--spacing-6) - 24px</span>
              <div class="button-group" style="gap: var(--spacing-6)">
                <Button variant="primary" size="md">Sauvegarder</Button>
                <Button variant="secondary" size="md">Annuler</Button>
                <Button variant="outline" size="md">Aide</Button>
              </div>
            </div>
          </div>
        </div>

        <div class="action-example">
          <h3 class="example-title">Cards avec espacement interne</h3>
          <div class="card-spacing-demo">
            <div class="demo-card" style="padding: var(--spacing-3)">
              <h4>Padding: --spacing-3 (12px)</h4>
              <p>Contenu de la carte avec espacement réduit.</p>
              <Button variant="outline" size="sm">Action</Button>
            </div>
            
            <div class="demo-card" style="padding: var(--spacing-6)">
              <h4>Padding: --spacing-6 (24px)</h4>
              <p>Contenu de la carte avec espacement confortable.</p>
              <Button variant="outline" size="sm">Action</Button>
            </div>
            
            <div class="demo-card" style="padding: var(--spacing-10)">
              <h4>Padding: --spacing-10 (40px)</h4>
              <p>Contenu de la carte avec espacement généreux.</p>
              <Button variant="outline" size="sm">Action</Button>
            </div>
          </div>
        </div>

        <div class="action-example">
          <h3 class="example-title">Sections avec margin</h3>
          <div class="section-spacing-demo">
            <div class="demo-section" style="margin-bottom: var(--spacing-4)">
              <h4>Section 1</h4>
              <p>Margin-bottom: --spacing-4 (16px)</p>
              <Button variant="ghost" size="sm">Plus de détails</Button>
            </div>
            
            <div class="demo-section" style="margin-bottom: var(--spacing-8)">
              <h4>Section 2</h4>
              <p>Margin-bottom: --spacing-8 (32px)</p>
              <Button variant="ghost" size="sm">Plus de détails</Button>
            </div>
            
            <div class="demo-section">
              <h4>Section 3</h4>
              <p>Pas de margin-bottom</p>
              <Button variant="ghost" size="sm">Plus de détails</Button>
            </div>
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

// Spacing values data
const spacingValues = [
  { name: '0', value: '0px' },
  { name: '1', value: '4px' },
  { name: '2', value: '8px' },
  { name: '3', value: '12px' },
  { name: '4', value: '16px' },
  { name: '5', value: '20px' },
  { name: '6', value: '24px' },
  { name: '8', value: '32px' },
  { name: '10', value: '40px' },
  { name: '12', value: '48px' },
  { name: '16', value: '64px' },
  { name: '20', value: '80px' },
  { name: '24', value: '96px' },
  { name: '32', value: '128px' }
]

// Padding examples (subset for demo)
const paddingExamples = [
  { name: '2', value: '8px' },
  { name: '4', value: '16px' },
  { name: '6', value: '24px' },
  { name: '8', value: '32px' }
]

// Margin examples (subset for demo)
const marginExamples = [
  { name: '3', value: '12px' },
  { name: '5', value: '20px' },
  { name: '8', value: '32px' },
  { name: '12', value: '48px' }
]

// Gap examples (subset for demo)
const gapExamples = [
  { name: '2', value: '8px' },
  { name: '4', value: '16px' },
  { name: '6', value: '24px' },
  { name: '10', value: '40px' }
]
</script>

<style scoped>
.spacing-page {
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

/* Spacing Scale */
.spacing-scale {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.spacing-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
  padding: var(--spacing-4);
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  transition: transform 0.2s ease;
}

.spacing-item:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.spacing-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  min-width: 300px;
}

.spacing-name {
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  min-width: 40px;
  font-size: var(--font-size-lg);
}

.spacing-var {
  font-family: var(--font-family-mono);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-secondary);
  font-size: var(--font-size-sm);
}

.spacing-value {
  color: var(--theme-colors-text-secondary);
  font-size: var(--font-size-sm);
  min-width: 50px;
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

.spacing-item:hover .copy-btn {
  opacity: 1;
}

.spacing-visual {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.spacing-box {
  background: var(--theme-colors-primary-400);
  border-radius: var(--border-radius-sm);
  opacity: 0.8;
}

.spacing-ruler {
  height: 2px;
  background: var(--theme-colors-primary-500);
  position: relative;
}

.spacing-ruler::before,
.spacing-ruler::after {
  content: '';
  position: absolute;
  top: -4px;
  width: 2px;
  height: 10px;
  background: var(--theme-colors-primary-500);
}

.spacing-ruler::before {
  left: 0;
}

.spacing-ruler::after {
  right: 0;
}

/* Examples Grids */
.padding-examples-grid,
.margin-examples-grid,
.gap-examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.example-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  transition: transform 0.2s ease;
}

.example-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.example-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.example-info {
  margin-top: var(--spacing-4);
}

.example-var {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-secondary);
  display: block;
}

/* Padding Examples */
.padding-demo {
  background: var(--theme-colors-primary-100);
  border: 2px dashed var(--theme-colors-primary-300);
  border-radius: var(--border-radius-md);
}

.padding-content {
  background: var(--theme-colors-surface-background);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-2);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
  text-align: center;
}

/* Margin Examples */
.margin-container {
  background: var(--theme-colors-primary-100);
  border: 2px dashed var(--theme-colors-primary-300);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-2);
}

.margin-demo {
  background: var(--theme-colors-surface-background);
  border-radius: var(--border-radius-sm);
}

.margin-content {
  padding: var(--spacing-3);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
  text-align: center;
}

/* Gap Examples */
.gap-demo {
  display: flex;
  flex-wrap: wrap;
}

.gap-item {
  background: var(--theme-colors-primary-400);
  color: white;
  padding: var(--spacing-3);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

/* Layout Examples */
.layout-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-8);
}

.layout-example {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.layout-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
}

.layout-code {
  margin-top: var(--spacing-6);
  padding: var(--spacing-4);
  background: var(--theme-colors-surface-background);
  border-radius: var(--border-radius-md);
}

.layout-code code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
}

/* Card Example */
.card-example {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.card-header {
  padding: var(--spacing-6);
  border-bottom: 1px solid var(--theme-colors-border-default);
}

.card-header h4 {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
}

.card-content {
  padding: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.card-content p {
  margin: 0;
  color: var(--theme-colors-text-secondary);
  line-height: 1.5;
}

.card-button {
  background: var(--theme-colors-primary-500);
  color: white;
  border: none;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  align-self: flex-start;
  margin-bottom: var(--spacing-3);
}

/* Form Example */
.form-example {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.form-field label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
}

.form-field input {
  padding: var(--spacing-3);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  background: var(--theme-colors-surface-background);
  color: var(--theme-colors-text-primary);
}

.form-submit {
  background: var(--theme-colors-primary-500);
  color: white;
  border: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  margin-top: var(--spacing-6);
  align-self: flex-start;
}

/* Navigation Example */
.nav-example {
  display: flex;
  gap: var(--spacing-8);
  padding: var(--spacing-4) var(--spacing-6);
  background: var(--theme-colors-surface-background);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--theme-colors-border-default);
}

.nav-item {
  color: var(--theme-colors-text-primary);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: var(--theme-colors-primary-500);
}

/* Action examples styles */
.action-examples {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
}

.action-example {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.example-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.button-spacing-demo {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.button-demo-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.demo-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-secondary);
  font-family: var(--font-family-mono);
}

.button-group {
  display: flex;
  flex-wrap: wrap;
}

.card-spacing-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
}

.demo-card {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.demo-card h4 {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin: 0;
}

.demo-card p {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  margin: 0;
  line-height: 1.5;
}

.section-spacing-demo {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-6);
}

.demo-section {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-muted);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-4);
}

.demo-section h4 {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin: 0 0 var(--spacing-2) 0;
}

.demo-section p {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  margin: 0 0 var(--spacing-3) 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .spacing-page {
    padding: var(--spacing-4);
  }
  
  .spacing-item {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-4);
  }
  
  .spacing-info {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-2);
    min-width: auto;
  }
  
  .layout-examples {
    grid-template-columns: 1fr;
  }
  
  .nav-example {
    flex-direction: column;
    gap: var(--spacing-4);
  }
  
  .button-group {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .card-spacing-demo {
    grid-template-columns: 1fr;
  }
}
</style> 