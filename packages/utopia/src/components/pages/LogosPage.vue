<template>
  <div class="logos-page">
    <div class="page-header">
      <h1>🏢 Logos & Icônes</h1>
      <p>Présentation des assets visuels du design system</p>
    </div>

    <!-- Section Logos Adaptatifs -->
    <section class="logos-section">
      <h2>🎯 Logos adaptatifs au thème</h2>
      <p>Ces logos s'adaptent automatiquement en fonction du thème actuel ({{ currentTheme?.mode === 'dark' ? 'sombre' : 'clair' }}) et de la marque sélectionnée ({{ currentBrandInfo.name }}).</p>
      
      <div class="logos-grid">
        <div class="logo-card" v-for="logoType in adaptiveLogos" :key="logoType.key">
          <div class="logo-preview" :class="logoType.background">
            <div 
              class="logo-display" 
              :style="{ backgroundImage: `var(${logoType.variable})` }"
            ></div>
          </div>
          <div class="logo-info">
            <h3>{{ logoType.name }}</h3>
            <div class="code-group">
              <code>{{ logoType.variable }}</code>
              <Button 
                variant="ghost" 
                size="sm" 
                @click="copyToClipboard(logoType.variable)"
                aria-label="Copier"
              >
                📋
              </Button>
            </div>
            <p class="description">{{ logoType.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Logos Spécifiques -->
    <section class="logos-section">
      <h2>🎨 Logos spécifiques par marque</h2>
      <p>Accès direct aux logos de chaque marque, indépendamment du thème actuel.</p>
      
      <!-- Club Employés -->
      <div class="brand-section">
        <h3>🏢 Club Employés</h3>
        <div class="logos-grid">
          <div class="logo-card" v-for="logo in clubEmployesLogos" :key="logo.key">
            <div class="logo-preview" :class="logo.background">
              <div 
                class="logo-display" 
                :style="{ backgroundImage: `var(${logo.variable})` }"
              ></div>
            </div>
            <div class="logo-info">
              <h4>{{ logo.name }}</h4>
              <div class="code-group">
                <code>{{ logo.variable }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(logo.variable)"
                  aria-label="Copier"
                >
                  📋
                </Button>
              </div>
              <p class="description">{{ logo.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Gifteo -->
      <div class="brand-section">
        <h3>❤️ Gifteo</h3>
        <div class="logos-grid">
          <div class="logo-card" v-for="logo in gifteoLogos" :key="logo.key">
            <div class="logo-preview" :class="logo.background">
              <div 
                class="logo-display" 
                :style="{ backgroundImage: `var(${logo.variable})` }"
              ></div>
            </div>
            <div class="logo-info">
              <h4>{{ logo.name }}</h4>
              <div class="code-group">
                <code>{{ logo.variable }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(logo.variable)"
                  aria-label="Copier"
                >
                  📋
                </Button>
              </div>
              <p class="description">{{ logo.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Guide d'usage -->
    <section class="usage-section">
      <h2>💡 Guide d'utilisation</h2>
      
      <div class="usage-examples">
        <div class="example-card">
          <h3>CSS</h3>
          <pre class="code-block"><code>/* Logo adaptatif au thème */
.header-logo {
  background-image: var(--theme-assets-logo-default);
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 60px;
}

/* Logo compact pour mobile */
.mobile-logo {
  background-image: var(--theme-assets-logo-small);
  width: 32px;
  height: 32px;
}

/* Logo blanc sur fond sombre */
.footer-logo {
  background-image: var(--theme-assets-logo-white);
}</code></pre>
        </div>

        <div class="example-card">
          <h3>Vue.js</h3>
          <pre class="code-block"><code>&lt;template&gt;
  &lt;div 
    class="logo"
    :style="{
      backgroundImage: 'var(--theme-assets-logo-default)'
    }"
  &gt;&lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.logo {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
&lt;/style&gt;</code></pre>
        </div>
      </div>

      <div class="best-practices">
        <h3>📋 Bonnes pratiques</h3>
        <ul>
          <li><strong>Utilisez les tokens adaptatifs</strong> (<code>--theme-assets-*</code>) pour un rendu optimal selon le thème</li>
          <li><strong>Format SVG recommandé</strong> pour une qualité parfaite à toutes les tailles</li>
          <li><strong>Logo small</strong> pour les espaces restreints (navigation mobile, favicon)</li>
          <li><strong>Logo white</strong> sur les fonds sombres ou colorés</li>
          <li><strong>Respectez les proportions</strong> originales du logo</li>
        </ul>
      </div>
    </section>

    <!-- Section Composant Logo -->
    <section class="component-section">
      <LogoShowcase />
    </section>

    <!-- Section Icônes (placeholder) -->
    <section class="icons-section">
      <h2>🎯 Icônes système</h2>
      <p>Les icônes du design system seront ajoutées ici une fois configurées.</p>
      
      <div class="placeholder-card">
        <div class="placeholder-icon">⚠️</div>
        <h3>En cours de développement</h3>
        <p>Cette section présentera les icônes SVG du design system une fois qu'elles seront intégrées aux tokens.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Button } from '../atoms/Button'
import LogoShowcase from '../demo/LogoShowcase.vue'
import type { ThemeConfig } from '../../theme-provider'

interface Props {
  currentTheme: ThemeConfig
}

const props = defineProps<Props>()

// Get current brand info
const currentBrandInfo = computed(() => {
  const brandKey = props.currentTheme.name.includes('club-employes') ? 'club-employes' : 'gifteo'
  return {
    key: brandKey,
    name: brandKey === 'club-employes' ? '🏢 Club Employés' : '❤️ Gifteo'
  }
})

// Copy to clipboard function
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

// Adaptive logos (change based on theme)
const adaptiveLogos = [
  {
    key: 'default',
    name: 'Logo principal',
    variable: '--theme-assets-logo-default',
    description: 'Logo adaptatif : normal en mode clair, blanc en mode sombre',
    background: 'neutral'
  },
  {
    key: 'small',
    name: 'Logo compact',
    variable: '--theme-assets-logo-small',
    description: 'Version compacte adaptative du logo',
    background: 'neutral'
  },
  {
    key: 'white',
    name: 'Logo blanc',
    variable: '--theme-assets-logo-white',
    description: 'Version blanche du logo pour fonds sombres',
    background: 'dark'
  },
  {
    key: 'small-white',
    name: 'Logo compact blanc',
    variable: '--theme-assets-logo-small-white',
    description: 'Version compacte et blanche du logo',
    background: 'dark'
  }
]

// Club Employés specific logos
const clubEmployesLogos = [
  {
    key: 'default',
    name: 'Logo principal',
    variable: '--assets-logos-club-employes-default',
    description: 'Logo principal Club Employés',
    background: 'neutral'
  },
  {
    key: 'small',
    name: 'Logo compact',
    variable: '--assets-logos-club-employes-small',
    description: 'Version compacte',
    background: 'neutral'
  },
  {
    key: 'white',
    name: 'Logo blanc',
    variable: '--assets-logos-club-employes-white',
    description: 'Version blanche',
    background: 'dark'
  },
  {
    key: 'small-white',
    name: 'Logo compact blanc',
    variable: '--assets-logos-club-employes-small-white',
    description: 'Version compacte et blanche',
    background: 'dark'
  }
]

// Gifteo specific logos
const gifteoLogos = [
  {
    key: 'default',
    name: 'Logo principal',
    variable: '--assets-logos-gifteo-default',
    description: 'Logo principal Gifteo',
    background: 'neutral'
  },
  {
    key: 'small',
    name: 'Logo compact',
    variable: '--assets-logos-gifteo-small',
    description: 'Version compacte',
    background: 'neutral'
  },
  {
    key: 'white',
    name: 'Logo blanc',
    variable: '--assets-logos-gifteo-white',
    description: 'Version blanche',
    background: 'dark'
  },
  {
    key: 'small-white',
    name: 'Logo compact blanc',
    variable: '--assets-logos-gifteo-small-white',
    description: 'Version compacte et blanche',
    background: 'dark'
  }
]
</script>

<style scoped>
.logos-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  color: var(--theme-colors-brand-primary-600);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.page-header p {
  color: var(--theme-colors-common-slate-600);
  font-size: 1.125rem;
}

.logos-section, .usage-section, .component-section, .icons-section {
  margin-bottom: 4rem;
}

.logos-section h2, .usage-section h2, .icons-section h2 {
  color: var(--theme-colors-brand-primary-600);
  font-size: 1.875rem;
  margin-bottom: 0.5rem;
}

.logos-section p, .usage-section p, .icons-section p {
  color: var(--theme-colors-common-slate-600);
  margin-bottom: 2rem;
}

.brand-section {
  margin-bottom: 3rem;
}

.brand-section h3 {
  color: var(--theme-colors-brand-secondary-600);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.logo-card {
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  background: var(--theme-colors-surface-background);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.logo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.logo-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  border-radius: var(--border-radius-md);
  margin-bottom: 1rem;
  position: relative;
}

.logo-preview.neutral {
  background: linear-gradient(45deg, var(--theme-colors-common-slate-50), var(--theme-colors-common-slate-100));
  border: 1px dashed var(--theme-colors-common-slate-300);
}

.logo-preview.dark {
  background: linear-gradient(45deg, var(--theme-colors-brand-primary-700), var(--theme-colors-brand-primary-800));
  border: 1px dashed var(--theme-colors-brand-primary-500);
}

.logo-display {
  width: 140px;
  height: 60px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.logo-info h3, .logo-info h4 {
  color: var(--theme-colors-brand-primary-700);
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.code-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.code-group code {
  background: var(--theme-colors-common-slate-100);
  padding: 0.375rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  flex: 1;
  word-break: break-all;
}

.description {
  color: var(--theme-colors-common-slate-600);
  font-size: 0.875rem;
  line-height: 1.4;
}

.usage-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.example-card {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
}

.example-card h3 {
  color: var(--theme-colors-brand-primary-600);
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.code-block {
  background: var(--theme-colors-common-slate-50);
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-md);
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.5;
}

.code-block code {
  color: var(--theme-colors-brand-primary-700);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.best-practices {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
}

.best-practices h3 {
  color: var(--theme-colors-brand-primary-600);
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.best-practices ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.best-practices li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--theme-colors-common-slate-100);
  color: var(--theme-colors-common-slate-700);
  line-height: 1.5;
}

.best-practices li:last-child {
  border-bottom: none;
}

.best-practices code {
  background: var(--theme-colors-common-slate-100);
  padding: 0.125rem 0.375rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
}

.placeholder-card {
  text-align: center;
  padding: 3rem;
  background: var(--theme-colors-surface-background);
  border: 2px dashed var(--theme-colors-common-slate-300);
  border-radius: var(--border-radius-lg);
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.placeholder-card h3 {
  color: var(--theme-colors-brand-primary-600);
  margin-bottom: 1rem;
}

.placeholder-card p {
  color: var(--theme-colors-common-slate-600);
  margin: 0;
}
</style> 