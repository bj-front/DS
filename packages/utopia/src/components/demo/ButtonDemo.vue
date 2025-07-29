<template>
  <div class="button-demo">
    <h2 class="demo-title">🔲 Composants Button</h2>
    <p class="demo-description">
      Composant Button atomique utilisant les tokens de design. S'adapte automatiquement aux thèmes.
    </p>

    <!-- Variants -->
    <section class="demo-section">
      <h3 class="demo-subtitle">Variants</h3>
      <div class="button-grid">
        <div class="button-item">
          <Button variant="primary" @click="handleClick('primary')">
            Primary
          </Button>
          <code class="code-snippet">variant="primary"</code>
        </div>
        
        <div class="button-item">
          <Button variant="secondary" @click="handleClick('secondary')">
            Secondary
          </Button>
          <code class="code-snippet">variant="secondary"</code>
        </div>
        
        <div class="button-item">
          <Button variant="outline" @click="handleClick('outline')">
            Outline
          </Button>
          <code class="code-snippet">variant="outline"</code>
        </div>
        
        <div class="button-item">
          <Button variant="ghost" @click="handleClick('ghost')">
            Ghost
          </Button>
          <code class="code-snippet">variant="ghost"</code>
        </div>
        
        <div class="button-item">
          <Button variant="danger" @click="handleClick('danger')">
            Danger
          </Button>
          <code class="code-snippet">variant="danger"</code>
        </div>
      </div>
    </section>

    <!-- Sizes -->
    <section class="demo-section">
      <h3 class="demo-subtitle">Tailles</h3>
      <div class="button-grid">
        <div class="button-item">
          <Button size="sm" @click="handleClick('small')">
            Small
          </Button>
          <code class="code-snippet">size="sm"</code>
        </div>
        
        <div class="button-item">
          <Button size="md" @click="handleClick('medium')">
            Medium
          </Button>
          <code class="code-snippet">size="md"</code>
        </div>
        
        <div class="button-item">
          <Button size="lg" @click="handleClick('large')">
            Large
          </Button>
          <code class="code-snippet">size="lg"</code>
        </div>
      </div>
    </section>

    <!-- States -->
    <section class="demo-section">
      <h3 class="demo-subtitle">États</h3>
      <div class="button-grid">
        <div class="button-item">
          <Button :disabled="true">
            Disabled
          </Button>
          <code class="code-snippet">:disabled="true"</code>
        </div>
        
        <div class="button-item">
          <Button :loading="true" @click="handleClick('loading')">
            Loading
          </Button>
          <code class="code-snippet">:loading="true"</code>
        </div>
        
        <div class="button-item">
          <Button block @click="handleClick('block')">
            Block (Full Width)
          </Button>
          <code class="code-snippet">block</code>
        </div>
      </div>
    </section>

    <!-- Avec icônes -->
    <section class="demo-section">
      <h3 class="demo-subtitle">Avec icônes</h3>
      <div class="button-grid">
                 <div class="button-item">
           <Button @click="handleClick('icon-before')">
             <template #icon>
               <Icon name="plus" />
             </template>
             Ajouter
           </Button>
           <code class="code-snippet">&lt;template #icon&gt;</code>
         </div>
         
         <div class="button-item">
           <Button variant="outline" @click="handleClick('icon-after')">
             Télécharger
             <template #iconAfter>
               <Icon name="download" />
             </template>
           </Button>
           <code class="code-snippet">&lt;template #iconAfter&gt;</code>
         </div>
         
         <div class="button-item">
           <Button variant="ghost" size="sm" @click="handleClick('icon-only')">
             <template #icon>
               <Icon name="heart" />
             </template>
           </Button>
           <code class="code-snippet">icon seule</code>
         </div>
      </div>
    </section>

    <!-- Variables CSS utilisées -->
    <section class="demo-section">
      <h3 class="demo-subtitle">Variables CSS utilisées</h3>
      <div class="token-list">
        <div class="token-item">
          <span class="token-name">Couleurs :</span>
          <code class="token-value">--theme-colors-primary-500</code>
          <code class="token-value">--theme-colors-text-inverse</code>
          <code class="token-value">--theme-colors-border-default</code>
        </div>
        <div class="token-item">
          <span class="token-name">Espacement :</span>
          <code class="token-value">--spacing-2</code>
          <code class="token-value">--spacing-3</code>
          <code class="token-value">--spacing-4</code>
        </div>
        <div class="token-item">
          <span class="token-name">Typographie :</span>
          <code class="token-value">--font-family-sans</code>
          <code class="token-value">--font-weight-medium</code>
          <code class="token-value">--font-size-base</code>
        </div>
        <div class="token-item">
          <span class="token-name">Bordures :</span>
          <code class="token-value">--border-radius-base</code>
          <code class="token-value">--border-width-1</code>
        </div>
        <div class="token-item">
          <span class="token-name">Ombres :</span>
          <code class="token-value">--shadow-sm</code>
          <code class="token-value">--shadow-md</code>
        </div>
      </div>
    </section>

    <!-- Click counter -->
    <div class="click-counter" v-if="clickCount > 0">
      <p>Bouton cliqué {{ clickCount }} fois ({{ lastClicked }})</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Icon } from '../atoms'

// State
const clickCount = ref(0)
const lastClicked = ref('')

// Methods
const handleClick = (buttonType: string) => {
  clickCount.value++
  lastClicked.value = buttonType
  console.log(`Button clicked: ${buttonType}`)
}
</script>

<style scoped>
.button-demo {
  background-color: var(--theme-colors-surface-card);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
}

.demo-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.demo-description {
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-6);
  line-height: var(--font-line-height-relaxed);
}

.demo-section {
  margin-bottom: var(--spacing-8);
}

.demo-subtitle {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-4);
}

.button-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-4);
  background-color: var(--theme-colors-surface-background);
  border: var(--border-width-1) solid var(--theme-colors-border-muted);
  border-radius: var(--border-radius-base);
}

.code-snippet {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-muted);
  background-color: var(--theme-colors-border-muted);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  text-align: center;
}

.token-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.token-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-2);
}

.token-name {
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
  min-width: 120px;
}

.token-value {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-muted);
  background-color: var(--theme-colors-border-muted);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
}

.click-counter {
  margin-top: var(--spacing-6);
  padding: var(--spacing-4);
  background-color: var(--theme-colors-primary-50);
  border: var(--border-width-1) solid var(--theme-colors-primary-200);
  border-radius: var(--border-radius-base);
  text-align: center;
  color: var(--theme-colors-primary-700);
  font-weight: var(--font-weight-medium);
}
</style> 