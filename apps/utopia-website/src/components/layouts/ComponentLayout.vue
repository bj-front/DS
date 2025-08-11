<template>
  <div class="component-page">
    <div class="page-header">
      <div class="header-title">
        <Icon :name="icon" class="component-icon" />
        <h1>{{ title }}</h1>
      </div>
      <p v-if="type" class="component-meta">
        <span class="section-badge">{{ type }}</span>
      </p>
    </div>
    
    <div class="component-showcase">
      <h2>Exemples</h2>
      <div class="showcase-grid">
        <slot name="examples">
          <div class="showcase-item">
            <h3>Défaut</h3>
            <div class="example">
              <slot name="default-example">
                <p>Exemple par défaut du composant <strong>{{ title }}</strong>.</p>
              </slot>
            </div>
            <details class="code-snippet">
              <summary>Voir le code</summary>
              <pre><code>&lt;{{ title }} /&gt;</code></pre>
            </details>
          </div>
        </slot>
      </div>
    </div>
    
    <div class="component-props">
      <h2>Documentation</h2>
      <slot name="documentation">
        <p>Cette page de documentation a été générée automatiquement pour le composant <strong>{{ title }}</strong>.</p>
        <p>Vous pouvez la personnaliser en modifiant le fichier de cette page.</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@club-employes/utopia'

interface Props {
  title: string
  icon?: string
  type?: string
}

withDefaults(defineProps<Props>(), {
  icon: 'Package',
  type: undefined
})
</script>

<style scoped>
.component-page {
  padding: var(--spacing-8);
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: var(--spacing-8);
  padding-bottom: var(--spacing-6);
  border-bottom: 1px solid var(--theme-colors-border-default);
}

.header-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}

.header-title h1 {
  margin: 0;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
}

.component-icon {
  font-size: var(--font-size-2xl);
  color: var(--theme-colors-brand-primary-500);
}

.component-meta {
  margin: 0;
}

.section-badge {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-3);
  background: var(--theme-colors-brand-primary-100);
  color: var(--theme-colors-brand-primary-600);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-transform: capitalize;
}

.component-showcase {
  margin-bottom: var(--spacing-8);
}

.component-showcase h2 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
}

.showcase-grid {
  display: grid;
  gap: var(--spacing-6);
}

.showcase-item {
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.showcase-item h3 {
  background: var(--theme-colors-surface-muted);
  padding: var(--spacing-4);
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  border-bottom: 1px solid var(--theme-colors-border-default);
}

.example {
  padding: var(--spacing-6);
  background: var(--theme-colors-surface-card);
}

.example p {
  margin: 0 0 var(--spacing-4) 0;
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
}

.example p:last-child {
  margin-bottom: 0;
}

.code-snippet {
  border-top: 1px solid var(--theme-colors-border-default);
}

.code-snippet summary {
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--theme-colors-surface-muted);
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  transition: background-color 0.2s ease;
}

.code-snippet summary:hover {
  background: var(--theme-colors-surface-hover);
}

.code-snippet pre {
  margin: 0;
  padding: var(--spacing-4);
  background: var(--theme-colors-surface-dark);
  color: var(--theme-colors-text-contrast);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  overflow-x: auto;
}

.code-snippet code {
  background: none;
  padding: 0;
  color: inherit;
}

.component-props {
  margin-bottom: var(--spacing-8);
}

.component-props h2 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
}

.component-props :deep(p) {
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-4);
}

.component-props :deep(code) {
  background: var(--theme-colors-surface-muted);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
}
</style>