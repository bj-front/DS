<template>
  <div class="logo-showcase">
    <h2>🧩 Composant Logo</h2>
    <p>Démonstration du composant réutilisable avec toutes ses variantes et tailles.</p>

    <!-- Section Tailles -->
    <div class="showcase-section">
      <h3>📏 Tailles disponibles</h3>
      <div class="size-grid">
        <div v-for="size in logoSizes" :key="size.key" class="size-item">
          <div class="logo-container">
            <Logo :size="size.key" variant="auto" :alt="`Logo ${size.name}`" />
          </div>
          <div class="size-info">
            <h4>{{ size.name }}</h4>
            <code>&lt;Logo size="{{ size.key }}" /&gt;</code>
            <p class="dimensions">{{ size.dimensions }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Variantes -->
    <div class="showcase-section">
      <h3>🎨 Variantes disponibles</h3>
      <div class="variant-grid">
        <div v-for="variant in logoVariants" :key="variant.key" class="variant-item">
          <div class="logo-container" :class="variant.background">
            <Logo size="lg" :variant="variant.key" :alt="`Logo ${variant.name}`" />
          </div>
          <div class="variant-info">
            <h4>{{ variant.name }}</h4>
            <code>&lt;Logo variant="{{ variant.key }}" /&gt;</code>
            <p class="description">{{ variant.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Matrix complète -->
    <div class="showcase-section">
      <h3>🔢 Matrice complète</h3>
      <p>Toutes les combinaisons de tailles et variantes :</p>

      <div class="matrix">
        <div class="matrix-header">
          <div class="matrix-cell matrix-header-cell">Taille</div>
          <div v-for="variant in logoVariants" :key="variant.key" class="matrix-cell matrix-header-cell">
            {{ variant.name }}
          </div>
        </div>

        <div v-for="size in logoSizes.slice(1, -1)" :key="size.key" class="matrix-row">
          <div class="matrix-cell matrix-size-cell">
            <strong>{{ size.name }}</strong>
            <br>
            <small>{{ size.dimensions }}</small>
          </div>
          <div v-for="variant in logoVariants" :key="variant.key" class="matrix-cell matrix-logo-cell" :class="variant.background">
            <Logo :size="size.key" :variant="variant.key" :alt="`Logo ${variant.name} ${size.name}`" />
          </div>
        </div>
      </div>
    </div>

    <!-- Section Cas d'usage -->
    <div class="showcase-section">
      <h3>💼 Cas d'usage recommandés</h3>
      <div class="use-cases">
        <div class="use-case">
          <h4>🏠 Header principal</h4>
          <div class="example-container header-example">
            <Logo size="lg" variant="auto" alt="Logo header" />
            <span class="example-text">Navigation principale</span>
          </div>
          <code>&lt;Logo size="lg" variant="auto" /&gt;</code>
        </div>

        <div class="use-case">
          <h4>📱 Navigation mobile</h4>
          <div class="example-container mobile-example">
            <Logo size="sm" variant="auto" alt="Logo mobile" />
            <span class="example-text">Menu mobile</span>
          </div>
          <code>&lt;Logo size="sm" variant="auto" /&gt;</code>
        </div>

        <div class="use-case">
          <h4>🦶 Footer</h4>
          <div class="example-container footer-example">
            <Logo size="md" variant="white" alt="Logo footer" />
            <span class="example-text">Pied de page</span>
          </div>
          <code>&lt;Logo size="md" variant="white" /&gt;</code>
        </div>

        <div class="use-case">
          <h4>📄 Documents/PDF</h4>
          <div class="example-container document-example">
            <Logo size="xl" variant="default" alt="Logo document" />
            <span class="example-text">En-tête de document</span>
          </div>
          <code>&lt;Logo size="xl" variant="default" /&gt;</code>
        </div>
      </div>
    </div>

    <!-- Section Code d'exemple -->
    <div class="showcase-section">
      <h3>💻 Exemples de code</h3>
      <div class="code-examples">
        <div class="code-example">
          <h4>Vue.js</h4>
          <pre class="code-block"><code>&lt;template&gt;
  &lt;!-- Logo adaptatif au thème --&gt;
  &lt;Logo size="lg" variant="auto" alt="Mon application" /&gt;

  &lt;!-- Logo fixe blanc --&gt;
  &lt;Logo size="md" variant="white" alt="Logo blanc" /&gt;

  &lt;!-- Logo compact pour espaces restreints --&gt;
  &lt;Logo size="sm" variant="small" alt="Logo compact" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Logo } from '@/components/atoms/Logo'
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Logo } from '../atoms/Logo'
import type { LogoSize, LogoVariant } from '../atoms/Logo'

// Définition des tailles avec leurs informations
const logoSizes: Array<{
  key: LogoSize
  name: string
  dimensions: string
}> = [
  { key: 'xs', name: 'Extra Small', dimensions: '60×15px' },
  { key: 'sm', name: 'Small', dimensions: '80×20px' },
  { key: 'md', name: 'Medium', dimensions: '120×30px' },
  { key: 'lg', name: 'Large', dimensions: '160×40px' },
  { key: 'xl', name: 'Extra Large', dimensions: '200×50px' },
  { key: 'xxl', name: 'XXL', dimensions: '280×70px' }
]

// Définition des variantes avec leurs informations
const logoVariants: Array<{
  key: LogoVariant
  name: string
  description: string
  background: string
}> = [
  {
    key: 'auto',
    name: 'Auto',
    description: 'S\'adapte automatiquement au thème',
    background: 'neutral'
  },
  {
    key: 'default',
    name: 'Default',
    description: 'Logo principal pour fond clair',
    background: 'neutral'
  },
  {
    key: 'white',
    name: 'White',
    description: 'Logo blanc pour fond sombre',
    background: 'dark'
  },
  {
    key: 'small',
    name: 'Small',
    description: 'Version compacte adaptative',
    background: 'neutral'
  },
  {
    key: 'small-white',
    name: 'Small White',
    description: 'Version compacte blanche',
    background: 'dark'
  }
]
</script>

<style scoped>
.logo-showcase {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: var(--theme-colors-brand-primary-600);
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

h3 {
  color: var(--theme-colors-brand-primary-600);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

h4 {
  color: var(--theme-colors-brand-primary-700);
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.showcase-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-lg);
}

/* Section Tailles */
.size-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.size-item {
  text-align: center;
  padding: 1.5rem;
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-common-slate-50);
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  border: 1px dashed var(--theme-colors-common-slate-300);
}

.logo-container.neutral {
  background: linear-gradient(45deg, var(--theme-colors-common-slate-50), var(--theme-colors-common-slate-100));
}

.logo-container.dark {
  background: linear-gradient(45deg, var(--theme-colors-brand-primary-700), var(--theme-colors-brand-primary-800));
}

.size-info code {
  background: var(--theme-colors-common-slate-100);
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  display: block;
  margin: 0.5rem 0;
}

.dimensions {
  color: var(--theme-colors-common-slate-600);
  font-size: 0.875rem;
  margin: 0;
}

/* Section Variantes */
.variant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.variant-item {
  padding: 1.5rem;
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-common-slate-50);
}

.variant-info {
  text-align: center;
}

.variant-info code {
  background: var(--theme-colors-common-slate-100);
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  display: block;
  margin: 0.5rem 0;
}

.description {
  color: var(--theme-colors-common-slate-600);
  font-size: 0.875rem;
  margin: 0;
}

/* Section Matrix */
.matrix {
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  background: var(--theme-colors-surface-background);
}

.matrix-header,
.matrix-row {
  display: grid;
  grid-template-columns: 150px repeat(5, 1fr);
}

.matrix-cell {
  padding: 1rem;
  border-right: 1px solid var(--theme-colors-common-slate-200);
  border-bottom: 1px solid var(--theme-colors-common-slate-200);
  text-align: center;
}

.matrix-header-cell {
  background: var(--theme-colors-brand-primary-100);
  font-weight: 600;
  color: var(--theme-colors-brand-primary-700);
}

.matrix-size-cell {
  background: var(--theme-colors-common-slate-50);
  font-weight: 500;
  text-align: left;
}

.matrix-logo-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
}

.matrix-logo-cell.neutral {
  background: var(--theme-colors-common-slate-25);
}

.matrix-logo-cell.dark {
  background: var(--theme-colors-brand-primary-700);
}

/* Section Cas d'usage */
.use-cases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.use-case {
  padding: 1.5rem;
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-surface-background);
}

.example-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  margin: 1rem 0;
}

.header-example {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-common-slate-200);
}

.mobile-example {
  background: var(--theme-colors-common-slate-50);
  border: 1px solid var(--theme-colors-common-slate-200);
}

.footer-example {
  background: var(--theme-colors-brand-primary-700);
  color: white;
}

.document-example {
  background: white;
  border: 2px solid var(--theme-colors-common-slate-300);
}

.example-text {
  font-size: 0.875rem;
  color: var(--theme-colors-common-slate-600);
}

.footer-example .example-text {
  color: var(--theme-colors-common-slate-200);
}

.use-case code {
  background: var(--theme-colors-common-slate-100);
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  display: block;
}

/* Section Code d'exemple */
.code-examples {
  display: grid;
  gap: 1.5rem;
}

.code-example {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
}

.code-block {
  background: var(--theme-colors-common-slate-50);
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-sm);
  padding: 1rem;
  overflow-x: auto;
  margin: 0;
}

.code-block code {
  color: var(--theme-colors-brand-primary-700);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .matrix-header,
  .matrix-row {
    grid-template-columns: 120px repeat(5, 1fr);
  }

  .matrix-cell {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .size-grid,
  .variant-grid,
  .use-cases {
    grid-template-columns: 1fr;
  }

  .matrix-header,
  .matrix-row {
    grid-template-columns: 100px repeat(3, 1fr);
  }

  /* Masquer les 2 dernières colonnes sur très petit écran */
  .matrix-cell:nth-child(n+5) {
    display: none;
  }
}
</style>
