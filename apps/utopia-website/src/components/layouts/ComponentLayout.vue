<template>
  <div class="component-layout">
    <div class="page-header">
      <div class="header-title">
        <Icon :name="icon" class="component-icon" />
        <h1>{{ title }}</h1>
      </div>
      <div v-if="type" class="page-meta">
        <span class="section-badge">{{ type }}</span>
      </div>
    </div>
    
    <div class="page-content">
      <!-- Section Exemples -->
      <div class="content-section">
        <h2>Exemples</h2>
        <div class="showcase-container">
          <slot name="examples">
            <div class="example-item">
              <h3>Défaut</h3>
              <div class="content-example">
                <slot name="default-example">
                  <p>Exemple par défaut du composant <strong>{{ title }}</strong>.</p>
                </slot>
              </div>
              <details class="code-snippet">
                <summary>
                  <Icon name="Code" class="code-icon" />
                  Voir le code
                </summary>
                <pre><code>&lt;{{ title }} /&gt;</code></pre>
              </details>
            </div>
          </slot>
        </div>
      </div>
      
      <!-- Section Documentation -->
      <div class="content-section">
        <h2>Documentation</h2>
        <div class="content-example">
          <slot name="documentation">
            <p>Cette page de documentation a été générée automatiquement pour le composant <strong>{{ title }}</strong>.</p>
            <p>📁 <strong>Fichier :</strong> <code>src/generated/pages/{{ type }}/{{ title }}Page.vue</code></p>
            <p>🎨 <strong>Composant :</strong> <code>packages/utopia/src/components/{{ type }}/{{ title }}/</code></p>
            <p>📝 <strong>Personnalisation :</strong></p>
            <ul>
              <li>Modifiez les exemples dans les slots <code>#examples</code></li>
              <li>Ajoutez de la documentation dans le slot <code>#documentation</code></li>
              <li>Référez-vous à la documentation du design system</li>
            </ul>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@club-employes/utopia';

interface Props {
  title: string
  icon?: string
  type?: string
}

withDefaults(defineProps<Props>(), {
  icon: 'Package'
})
</script>

<style scoped>
/* Layout principal - Style PageLayout */
.component-layout {
  padding: var(--spacing-8, 32px);
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: var(--spacing-8, 32px);
  padding-bottom: var(--spacing-6, 24px);
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
}

.header-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-3, 12px);
  margin-bottom: var(--spacing-3, 12px);
}

.header-title h1 {
  margin: 0;
  font-size: var(--font-size-3xl, 30px);
  font-weight: var(--font-weight-bold, 700);
  color: var(--theme-colors-text-primary, #111827);
}

.component-icon {
  font-size: var(--font-size-2xl, 24px);
  color: var(--theme-colors-brand-primary-500, #3b82f6);
}

.component-description {
  margin: 0 0 var(--spacing-3, 12px) 0;
  font-size: var(--font-size-lg, 18px);
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.6;
}

.page-meta {
  margin: 0;
}

.section-badge {
  display: inline-block;
  padding: var(--spacing-1, 4px) var(--spacing-3, 12px);
  background: var(--theme-colors-brand-primary-100);
  color: var(--theme-colors-brand-primary-500);
  border-radius: var(--border-radius-full, 9999px);
  font-size: var(--font-size-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  text-transform: capitalize;
}

.page-content {
  margin-bottom: var(--spacing-8, 32px);
}

/* Section de contenu */
.content-section {
  background: var(--theme-colors-surface-card, #ffffff);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: var(--border-radius-lg, 8px);
  padding: var(--spacing-8, 32px);
  margin-bottom: var(--spacing-6, 24px);
}

.content-section h2 {
  font-size: var(--font-size-2xl, 24px);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--theme-colors-text-primary, #111827);
  margin-bottom: var(--spacing-6, 24px);
}

/* Showcase container */
.showcase-container {
  display: grid;
  gap: var(--spacing-6, 24px);
}

.page-content :deep(.example-item) {
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: var(--border-radius-lg, 8px);
  overflow: hidden;
}

.page-content :deep(.example-item h3) {
  background: var(--theme-colors-surface-muted, #f3f4f6);
  padding: var(--spacing-4, 16px);
  margin: 0 0 var(--spacing-4, 16px) 0;
  font-size: var(--font-size-lg, 18px);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--theme-colors-text-primary, #111827);
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: var(--border-radius-lg, 8px) var(--border-radius-lg, 8px) 0 0;
}

.content-example {
  padding: var(--spacing-6, 24px);
  background: var(--theme-colors-surface-card, #ffffff);
  margin-bottom: 0;
}

.content-example p {
  margin: 0 0 var(--spacing-4, 16px) 0;
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.6;
}

.content-example p:last-child {
  margin-bottom: 0;
}

/* Code snippet stylisé - utilisation de :deep pour les slots */
.page-content :deep(.code-snippet) {
  border-top: 1px solid var(--theme-colors-border-default, #e5e7eb);
  margin-top: var(--spacing-4, 16px);
}

.page-content :deep(.code-snippet summary) {
  display: flex;
  align-items: center;
  gap: var(--spacing-3, 12px);
  padding: var(--spacing-4, 16px) var(--spacing-6, 24px);
  background: var(--theme-colors-surface-muted, #f3f4f6);
  cursor: pointer;
  font-size: var(--font-size-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--theme-colors-text-secondary, #6b7280);
  transition: all 0.2s ease;
  user-select: none;
  border: none;
}

.page-content :deep(.code-snippet summary:hover) {
  background: var(--theme-colors-surface-hover, #f1f5f9);
  color: var(--theme-colors-text-primary, #111827);
}

.page-content :deep(.code-snippet summary::-webkit-details-marker) {
  display: none;
}

.page-content :deep(.code-snippet summary::after) {
  content: '▶';
  font-size: var(--font-size-xs, 12px);
  transition: transform 0.2s ease;
  margin-left: auto;
}

.page-content :deep(.code-snippet[open] summary::after) {
  transform: rotate(90deg);
}

.page-content :deep(.code-icon) {
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-brand-primary-500, #3b82f6);
}

.page-content :deep(.code-snippet pre) {
  margin: 0;
  padding: var(--spacing-6, 24px);
  background: var(--theme-colors-surface-dark, #1e293b);
  color: var(--theme-colors-text-contrast, #f1f5f9);
  font-family: var(--font-family-mono, 'JetBrains Mono', 'Fira Code', Consolas, monospace);
  font-size: var(--font-size-sm, 14px);
  line-height: 1.8;
  overflow-x: auto;
  border: none;
}

.page-content :deep(.code-snippet pre code) {
  background: none;
  padding: 0;
  color: inherit;
}

/* Styles pour la documentation */
ul {
  margin: var(--spacing-4, 16px) 0;
  padding-left: var(--spacing-6, 24px);
}

ul li {
  margin-bottom: var(--spacing-2, 8px);
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.6;
}

code {
  background: var(--theme-colors-surface-muted, #f3f4f6);
  padding: var(--spacing-1, 4px) var(--spacing-2, 8px);
  border-radius: var(--border-radius-sm, 4px);
  font-family: var(--font-family-mono, 'JetBrains Mono', 'Fira Code', Consolas, monospace);
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-text-primary, #111827);
}
</style>