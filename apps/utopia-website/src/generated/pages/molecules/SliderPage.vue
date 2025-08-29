<template>
  <ComponentLayout 
    :title="'Slider'"
    :icon="'View-carousel'"
    :type="'Molecules'"
  >
    <template #examples>
      <div class="showcase-item">
        <h3>Slider Horizontal</h3>
        <div class="example" style="height: 400px;">
          <Slider
            :slides="horizontalSlides"
            direction="horizontal"
            :autoplay-delay="1000"
            height="100%"
          />
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Slider
  :slides="slides"
  direction="horizontal"
  :autoplay="true"
  :autoplay-delay="3000"
  height="400px"
/&gt;</code></pre>
        </details>
      </div>
      
      <div class="showcase-item">
        <h3>Slider Vertical</h3>
        <div class="example" style="height: 500px;">
          <Slider
            :slides="verticalSlides"
            direction="horizontal"
            :autoplay="true"
            :autoplay-delay="4000"
            :show-dots="true"
            height="100%"
          />
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Slider
  :slides="slides"
  direction="vertical"
  :autoplay="true"
  :autoplay-delay="4000"
  :show-dots="true"
  height="500px"
/&gt;</code></pre>
        </details>
      </div>

      <div class="showcase-item">
        <h3>Slider avec contrôles toujours visibles</h3>
        <div class="example" style="height: 300px;">
          <Slider
            :slides="simpleSlides"
            :autoplay="false"
            :always-show-controls="true"
            height="100%"
          />
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Slider
  :slides="slides"
  :autoplay="false"
  :always-show-controls="true"
  height="300px"
/&gt;</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <h2>Props</h2>
      <table class="props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>slides</code></td>
            <td><code>Array&lt;Slide&gt;</code></td>
            <td><code>[]</code></td>
            <td>Tableau des slides à afficher</td>
          </tr>
          <tr>
            <td><code>direction</code></td>
            <td><code>'horizontal' | 'vertical'</code></td>
            <td><code>'horizontal'</code></td>
            <td>Direction du slider</td>
          </tr>
          <tr>
            <td><code>autoplay</code></td>
            <td><code>boolean</code></td>
            <td><code>true</code></td>
            <td>Active/désactive l'autoplay</td>
          </tr>
          <tr>
            <td><code>autoplayDelay</code></td>
            <td><code>number</code></td>
            <td><code>5000</code></td>
            <td>Délai entre les slides en ms</td>
          </tr>
          <tr>
            <td><code>showDots</code></td>
            <td><code>boolean</code></td>
            <td><code>true</code></td>
            <td>Affiche les indicateurs de pagination</td>
          </tr>
          <tr>
            <td><code>showControls</code></td>
            <td><code>boolean</code></td>
            <td><code>true</code></td>
            <td>Affiche les boutons de navigation</td>
          </tr>
          <tr>
            <td><code>alwaysShowControls</code></td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
            <td>Affiche toujours les contrôles (pas seulement au hover)</td>
          </tr>
          <tr>
            <td><code>height</code></td>
            <td><code>string</code></td>
            <td><code>'100%'</code></td>
            <td>Hauteur du slider</td>
          </tr>
        </tbody>
      </table>

      <h2>Structure d'un Slide</h2>
      <pre><code>interface Slide {
  image?: string      // URL de l'image
  alt?: string        // Texte alternatif
  content?: string    // Contenu HTML
  [key: string]: any  // Propriétés additionnelles
}</code></pre>

      <h2>Composants utilisés</h2>
      <p>Le Slider utilise les composants suivants du design system :</p>
      <ul>
        <li><strong>Button</strong> - Pour les boutons de navigation (variant: secondary, size: sm)</li>
        <li><strong>Icon</strong> - Pour les icônes de navigation (Chevron-up, Chevron-down, Chevron-left, Chevron-right)</li>
      </ul>

      <h2>Slots</h2>
      <ul>
        <li><code>slide</code> - Personnaliser le rendu de chaque slide</li>
        <li><code>prev-icon</code> - Icône du bouton précédent</li>
        <li><code>next-icon</code> - Icône du bouton suivant</li>
      </ul>

      <h2>Events</h2>
      <ul>
        <li><code>@slide-change</code> - Émis lors du changement de slide avec l'index</li>
      </ul>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components'
import { Icon, Slider } from '@club-employes/utopia'
import { ref } from 'vue'

const horizontalSlides = ref([
  {
    image: 'https://placehold.co/800x400/6366f1/ffffff?text=Slide+1',
    alt: 'Slide 1'
  },
  {
    image: 'https://placehold.co/800x400/8b5cf6/ffffff?text=Slide+2',
    alt: 'Slide 2'
  },
  {
    image: 'https://placehold.co/800x400/a855f7/ffffff?text=Slide+3',
    alt: 'Slide 3'
  }
])

const verticalSlides = ref([
  {
    image: 'https://placehold.co/600x800/1e40af/ffffff?text=Vertical+1',
    alt: 'Vertical Slide 1'
  },
  {
    image: 'https://placehold.co/600x800/3730a3/ffffff?text=Vertical+2',
    alt: 'Vertical Slide 2'
  },
  {
    image: 'https://placehold.co/600x800/4f46e5/ffffff?text=Vertical+3',
    alt: 'Vertical Slide 3'
  }
])

const simpleSlides = ref([
  {
    content: '<h2>Slide avec contenu HTML</h2><p>Vous pouvez inclure du contenu HTML personnalisé</p>'
  },
  {
    content: '<h2>Deuxième slide</h2><p>Avec du texte et des styles</p>'
  },
  {
    image: 'https://placehold.co/600x300/10b981/ffffff?text=Image',
    alt: 'Image slide'
  }
])
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
  background: var(--theme-colors-surface-card, #ffffff);
  position: relative;
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

/* Props table */
.props-table {
  width: 100%;
  margin: var(--spacing-4, 16px) 0;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.props-table th,
.props-table td {
  padding: var(--spacing-3, 12px);
  text-align: left;
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
}

.props-table th {
  background: var(--theme-colors-surface-background, #f9fafb);
  font-weight: 600;
}

.props-table code {
  background: var(--theme-colors-surface-secondary, #f3f4f6);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875em;
}
</style>
