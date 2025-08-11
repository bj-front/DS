<template>
  <ComponentLayout 
    :title="'Button'"
    :icon="'Mouse-pointer'"
    :type="'atoms'"
  >
    <template #examples>
      <div class="showcase-item">
        <h3>Défaut</h3>
        <div class="example">
          <Button>Click me</Button>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Button&gt;Click me&lt;/Button&gt;</code></pre>
        </details>
      </div>
      
      <div class="showcase-item">
        <h3>Variantes</h3>
        <div class="example">
          <div class="button-variants">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Button variant="primary"&gt;Primary&lt;/Button&gt;
&lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;
&lt;Button variant="outline"&gt;Outline&lt;/Button&gt;</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <p>Le composant <strong>Button</strong> est un élément interactif fondamental du design system.</p>
      <p>📁 <strong>Fichier :</strong> <code>src/generated/pages/atoms/ButtonPage.vue</code></p>
      <p>🎨 <strong>Composant :</strong> <code>packages/utopia/src/components/atoms/Button/</code></p>
      <p>📝 <strong>Props disponibles :</strong></p>
      <ul>
        <li><code>variant</code> - Style du bouton (primary, secondary, outline)</li>
        <li><code>size</code> - Taille du bouton (small, medium, large)</li>
        <li><code>disabled</code> - État désactivé du bouton</li>
        <li><code>loading</code> - État de chargement avec spinner</li>
      </ul>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components';
import { Button, Icon } from '@club-employes/utopia';
</script>

<style scoped>
/* Styles standard pour les pages de composants */
.showcase-item {
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: var(--spacing-6, 24px);
}

.showcase-item h3 {
  margin: 0;
  padding: 1rem;
  background: var(--theme-colors-surface-background, #f9fafb);
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  font-size: 1rem;
  font-weight: 600;
}

.example {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  background: var(--theme-colors-surface-card, #ffffff);
}

.code-snippet {
  border-top: 1px solid var(--theme-colors-border-default, #e5e7eb);
}

.code-snippet summary {
  padding: 0.75rem 1rem;
  cursor: pointer;
  background: var(--theme-colors-surface-background, #f9fafb);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.code-snippet pre {
  margin: 0;
  padding: 1rem;
  background: var(--theme-colors-surface-background, #f9fafb);
  overflow-x: auto;
}

.code-snippet code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
}

.code-icon {
  width: 16px;
  height: 16px;
}

/* Styles spécifiques pour les variantes de boutons */
.button-variants {
  display: flex;
  gap: var(--spacing-4, 16px);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>