<template>
  <ComponentLayout 
    :title="'Test'"
    :icon="'Package'"
    :type="'Atoms'"
  >
    <template #examples>
      <div class="showcase-item">
        <h3>Défaut</h3>
        <div class="example">
          <Test />
        </div>
        <details class="code-snippet">
          <summary>Voir le code</summary>
          <pre><code>&lt;Test /&gt;</code></pre>
        </details>
      </div>
      
      <!-- Ajoutez d'autres exemples ici -->
      <div class="showcase-item">
        <h3>Variante personnalisée</h3>
        <div class="example">
          <!-- Exemple personnalisé à développer -->
          <Test />
        </div>
        <details class="code-snippet">
          <summary>Voir le code</summary>
          <pre><code>&lt;Test /&gt;</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <p>Cette page de documentation a été générée automatiquement pour le composant <strong>Test</strong>.</p>
      <p>📁 <strong>Fichier :</strong> <code>src/generated/pages/atoms/TestPage.vue</code></p>
      <p>🎨 <strong>Composant :</strong> <code>packages/utopia/src/components/atoms/Test/</code></p>
      <p>📝 <strong>Personnalisation :</strong></p>
      <ul>
        <li>Modifiez les exemples dans les slots <code>#examples</code></li>
        <li>Ajoutez de la documentation dans le slot <code>#documentation</code></li>
        <li>Consultez le fichier Storybook pour plus d'exemples</li>
      </ul>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { Test } from '@club-employes/utopia'
import { ComponentLayout } from '@/components'
</script>

<style scoped>
/* Les styles sont maintenant dans ComponentLayout */
</style>