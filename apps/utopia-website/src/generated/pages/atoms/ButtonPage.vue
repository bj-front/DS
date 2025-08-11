<template>
  <ComponentLayout 
    :title="'Button'"
    :icon="'Mouse-pointer'"
    :type="'atoms'"
  >
    <template #examples>
      <div class="example-item">
        <h3>Défaut</h3>
        <div class="content-example">
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
      
      <div class="example-item">
        <h3>Variantes</h3>
        <div class="content-example">
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
/* Styles spécifiques pour les variantes de boutons */
.button-variants {
  display: flex;
  gap: var(--spacing-4, 16px);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>