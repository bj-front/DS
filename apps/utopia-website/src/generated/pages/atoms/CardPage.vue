<template>
  <div class="component-page">
    <div class="page-header">
      <h1>Card</h1>
      <p class="component-meta">
        <span class="section-badge">Atoms</span>
      </p>
    </div>
    
    <div class="component-showcase">
      <h2>Exemples</h2>
      <div class="showcase-grid">
        <!-- Exemple par défaut -->
        <div class="showcase-item">
          <h3>Défaut</h3>
          <div class="example">
            <Card>Card content</Card>
          </div>
          <details class="code-snippet">
            <summary>Voir le code</summary>
            <pre><code>&lt;Card&gt;Card content&lt;/Card&gt;</code></pre>
          </details>
        </div>
        
        <!-- Ajoutez d'autres exemples ici -->
      </div>
    </div>
    
    <div class="component-props">
      <h2>Props</h2>
      <p>Documentation des props à compléter...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@club-employes/utopia'
</script>

<style scoped>
.component-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--utopia-color-border);
  padding-bottom: 1rem;
}

.page-header h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2.5rem;
  color: var(--utopia-color-text-primary);
}

.component-meta {
  margin: 0;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.section-badge {
  background: var(--utopia-color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.component-showcase {
  margin-bottom: 3rem;
}

.component-showcase h2 {
  margin-bottom: 1.5rem;
  color: var(--utopia-color-text-primary);
}

.showcase-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.showcase-item {
  border: 1px solid var(--utopia-color-border);
  border-radius: 8px;
  overflow: hidden;
}

.showcase-item h3 {
  margin: 0;
  padding: 1rem;
  background: var(--utopia-color-surface-secondary);
  border-bottom: 1px solid var(--utopia-color-border);
  font-size: 1rem;
  font-weight: 600;
}

.example {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  background: var(--utopia-color-surface);
}

.code-snippet {
  border-top: 1px solid var(--utopia-color-border);
}

.code-snippet summary {
  padding: 0.75rem 1rem;
  cursor: pointer;
  background: var(--utopia-color-surface-secondary);
  font-weight: 500;
}

.code-snippet pre {
  margin: 0;
  padding: 1rem;
  background: var(--utopia-color-surface-tertiary);
  overflow-x: auto;
}

.code-snippet code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
}

.component-props {
  margin-top: 3rem;
}

.component-props h2 {
  margin-bottom: 1rem;
  color: var(--utopia-color-text-primary);
}
</style>