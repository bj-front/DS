<template>
  <div class="theme-comparison-page">
    <div class="page-header">
      <h1 class="page-title">🌓 Comparaison Thèmes</h1>
      <p class="page-description">
        Découvrez comment les couleurs et composants s'adaptent entre les modes clair et sombre.
      </p>
    </div>

    <!-- Comparaison des couleurs principales -->
    <section class="section">
      <h2 class="section-title">🎨 Couleurs principales</h2>
      <p class="section-description">
        Comparaison des couleurs primaires entre les modes clair et sombre.
      </p>

      <div class="comparison-grid">
        <div class="theme-column">
          <h3 class="theme-title">☀️ Mode Clair</h3>
          <div class="color-samples light">
            <div class="color-sample">
              <div class="color-swatch primary-light"></div>
              <span class="color-label">Primary</span>
            </div>
            <div class="color-sample">
              <div class="color-swatch background-light"></div>
              <span class="color-label">Background</span>
            </div>
            <div class="color-sample">
              <div class="color-swatch card-light"></div>
              <span class="color-label">Card</span>
            </div>
            <div class="color-sample">
              <div class="color-swatch text-primary-light"></div>
              <span class="color-label">Text Primary</span>
            </div>
          </div>
        </div>

        <div class="theme-column">
          <h3 class="theme-title">🌙 Mode Sombre</h3>
          <div class="color-samples dark">
            <div class="color-sample">
              <div class="color-swatch primary-dark"></div>
              <span class="color-label">Primary</span>
            </div>
            <div class="color-sample">
              <div class="color-swatch background-dark"></div>
              <span class="color-label">Background</span>
            </div>
            <div class="color-sample">
              <div class="color-swatch card-dark"></div>
              <span class="color-label">Card</span>
            </div>
            <div class="color-sample">
              <div class="color-swatch text-primary-dark"></div>
              <span class="color-label">Text Primary</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparaison des composants -->
    <section class="section">
      <h2 class="section-title">🧩 Composants</h2>
      <p class="section-description">
        Aperçu des composants dans les deux modes de thème.
      </p>

      <div class="components-comparison">
        <div class="theme-demo light-theme">
          <h3 class="demo-title">☀️ Mode Clair</h3>
          <div class="demo-content">
            <div class="demo-card">
              <h4 class="demo-card-title">Card Title</h4>
              <p class="demo-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div class="demo-buttons">
                <Button variant="primary" size="small">Primary</Button>
                <Button variant="outline" size="small">Outline</Button>
                <Button variant="ghost" size="small">Ghost</Button>
              </div>
            </div>

            <div class="demo-form">
              <div class="demo-input-group">
                <label class="demo-label">Label</label>
                <input type="text" class="demo-input" placeholder="Placeholder text" />
              </div>
              <div class="demo-input-group">
                <label class="demo-label">Select</label>
                <select class="demo-select">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="theme-demo dark-theme">
          <h3 class="demo-title">🌙 Mode Sombre</h3>
          <div class="demo-content">
            <div class="demo-card">
              <h4 class="demo-card-title">Card Title</h4>
              <p class="demo-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div class="demo-buttons">
                <Button variant="primary" size="small">Primary</Button>
                <Button variant="outline" size="small">Outline</Button>
                <Button variant="ghost" size="small">Ghost</Button>
              </div>
            </div>

            <div class="demo-form">
              <div class="demo-input-group">
                <label class="demo-label">Label</label>
                <input type="text" class="demo-input" placeholder="Placeholder text" />
              </div>
              <div class="demo-input-group">
                <label class="demo-label">Select</label>
                <select class="demo-select">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guidelines pour les thèmes -->
    <section class="section">
      <h2 class="section-title">📋 Guidelines pour les thèmes</h2>
      <div class="guidelines-grid">
        <div class="guideline-card">
          <h4 class="guideline-title">🎯 Contraste</h4>
          <p class="guideline-description">
            Assurez-vous que le contraste est suffisant dans les deux modes pour l'accessibilité.
          </p>
        </div>

        <div class="guideline-card">
          <h4 class="guideline-title">🔄 Consistance</h4>
          <p class="guideline-description">
            Les éléments doivent avoir la même hiérarchie visuelle dans les deux modes.
          </p>
        </div>

        <div class="guideline-card">
          <h4 class="guideline-title">👁️ Lisibilité</h4>
          <p class="guideline-description">
            Le texte doit rester lisible et confortable à lire dans tous les contextes.
          </p>
        </div>

        <div class="guideline-card">
          <h4 class="guideline-title">⚡ Performance</h4>
          <p class="guideline-description">
            Le changement de thème doit être fluide et sans effet de clignotement.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@club-employes/utopia'
</script>

<style scoped>
.theme-comparison-page {
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

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-8);
}

.theme-column {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.theme-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
  text-align: center;
}

.color-samples {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-4);
}

.color-sample {
  text-align: center;
}

.color-swatch {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-md);
  margin: 0 auto var(--spacing-2) auto;
  border: 1px solid var(--theme-colors-border-default);
}

.color-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
}

/* Light theme colors */
.primary-light {
  background: #3b82f6;
}

.background-light {
  background: #ffffff;
}

.card-light {
  background: #f8fafc;
}

.text-primary-light {
  background: #1e293b;
}

/* Dark theme colors */
.primary-dark {
  background: #60a5fa;
}

.background-dark {
  background: #0f172a;
}

.card-dark {
  background: #1e293b;
}

.text-primary-dark {
  background: #f1f5f9;
}

.components-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-8);
}

.theme-demo {
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  border: 2px solid var(--theme-colors-border-default);
}

.light-theme {
  background: #ffffff;
  color: #1e293b;
}

.dark-theme {
  background: #0f172a;
  color: #f1f5f9;
}

.demo-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-6);
  text-align: center;
}

.light-theme .demo-title {
  color: #1e293b;
}

.dark-theme .demo-title {
  color: #f1f5f9;
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.demo-card {
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  border: 1px solid;
}

.light-theme .demo-card {
  background: #f8fafc;
  border-color: #e2e8f0;
}

.dark-theme .demo-card {
  background: #1e293b;
  border-color: #334155;
}

.demo-card-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-2);
}

.demo-card-text {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-4);
  opacity: 0.8;
}

.demo-buttons {
  display: flex;
  gap: var(--spacing-2);
  flex-wrap: wrap;
}

.demo-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.demo-input-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.demo-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.demo-input,
.demo-select {
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--border-radius-sm);
  border: 1px solid;
  font-size: var(--font-size-sm);
}

.light-theme .demo-input,
.light-theme .demo-select {
  background: #ffffff;
  border-color: #d1d5db;
  color: #1e293b;
}

.dark-theme .demo-input,
.dark-theme .demo-select {
  background: #374151;
  border-color: #4b5563;
  color: #f9fafb;
}

.demo-input::placeholder {
  opacity: 0.5;
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

@media (max-width: 768px) {
  .theme-comparison-page {
    padding: var(--spacing-4);
  }

  .comparison-grid,
  .components-comparison {
    grid-template-columns: 1fr;
  }

  .color-samples {
    grid-template-columns: repeat(2, 1fr);
  }

  .demo-buttons {
    flex-direction: column;
  }

  .guidelines-grid {
    grid-template-columns: 1fr;
  }
}
</style>
