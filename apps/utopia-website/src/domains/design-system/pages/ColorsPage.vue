<template>
  <ComponentLayout 
    title="Couleurs"
    icon="Palette"
    type="Design System"
  >
    <template #examples>
     

    <!-- Couleurs Brand -->
    <section class="section">
      <h2 class="section-title">{{ currentBrand.name }} - Couleurs Brand</h2>
      <p class="section-description">
        Couleurs spécifiques à cette marque, adaptées au mode {{ currentTheme?.mode === 'dark' ? 'sombre' : 'clair' }} actuel.
        <br>
        <small>💡 Utilisez le widget en haut à droite pour voir les couleurs des autres marques.</small>
      </p>
      
      <div class="colors-grid">
        <div class="color-group">
          <h4 class="color-group-title">{{ currentBrand.primary.name }}</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in currentBrand.primary.shades" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="color-group">
          <h4 class="color-group-title">{{ currentBrand.secondary.name }}</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in currentBrand.secondary.shades" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="color-group">
          <h4 class="color-group-title">{{ currentBrand.accent.name }}</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in currentBrand.accent.shades" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Couleurs Communes -->
    <section class="section">
      <h2 class="section-title">🌐 Couleurs Communes</h2>
      <p class="section-description">
        Couleurs partagées entre toutes les marques pour la cohérence du système. 
        <strong>Ces couleurs s'adaptent automatiquement selon le mode {{ currentTheme?.mode === 'dark' ? 'sombre' : 'clair' }}.</strong>
      </p>
      
      <div class="common-colors-grid">
        <div class="common-color-group">
          <h4 class="color-group-title">⚫ Slate</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in slateColors" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="common-color-group">
          <h4 class="color-group-title">✅ Success</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in succeedColors" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="common-color-group">
          <h4 class="color-group-title">⚠️ Warning</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in warningColors" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="common-color-group">
          <h4 class="color-group-title">🚨 Danger</h4>
          <div class="color-row">
            <div class="color-card" v-for="shade in dangerColors" :key="shade.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${shade.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ shade.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ shade.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(shade.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${shade.variable}`"
                  >
                    📋
                  </Button>
                </div>
              </div>
            </div>
          </div>
                </div>
      </div>
    </section>

    <!-- Couleurs Sémantiques -->
    <section class="section">
      <h2 class="section-title">🎯 Couleurs Sémantiques</h2>
      <p class="section-description">
        Couleurs avec une signification sémantique spécifique (surfaces, texte, bordures, états).
      </p>
      
      <div class="common-colors-grid">
        <!-- Surfaces -->
        <div class="common-color-group">
          <h4 class="color-group-title">🏠 Surfaces</h4>
          <div class="color-row">
            <div class="color-card" v-for="color in surfaceColors" :key="color.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${color.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ color.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ color.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(color.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${color.variable}`"
                  >
                    📋
                  </Button>
                </div>
                <div class="color-description">{{ color.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Texte -->
        <div class="common-color-group">
          <h4 class="color-group-title">📝 Texte</h4>
          <div class="color-row">
            <div class="color-card" v-for="color in textColors" :key="color.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${color.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ color.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ color.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(color.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${color.variable}`"
                  >
                    📋
                  </Button>
                </div>
                <div class="color-description">{{ color.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bordures -->
        <div class="common-color-group">
          <h4 class="color-group-title">🔲 Bordures</h4>
          <div class="color-row">
            <div class="color-card" v-for="color in borderColors" :key="color.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${color.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ color.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ color.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(color.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${color.variable}`"
                  >
                    📋
                  </Button>
                </div>
                <div class="color-description">{{ color.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- États -->
        <div class="common-color-group">
          <h4 class="color-group-title">⚠️ États</h4>
          <div class="color-row">
            <div class="color-card" v-for="color in stateColors" :key="color.name">
              <div class="color-swatch" :style="{ backgroundColor: `var(${color.variable})` }"></div>
              <div class="color-info">
                <span class="color-name">{{ color.name }}</span>
                <div class="color-code-group">
                  <code class="color-code">{{ color.variable }}</code>
                  <Button 
                    variant="tertiary" 
                    size="sm" 
                    @click="copyToClipboard(color.variable)"
                    class="copy-btn"
                    :aria-label="`Copier ${color.variable}`"
                  >
                    📋
                  </Button>
                </div>
                <div class="color-description">{{ color.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <template #documentation>
      <div class="colors-documentation">
        <p>Cette page présente l'ensemble de la palette de couleurs du design system Utopia.</p>
        
        <h3>🎨 Structure des couleurs</h3>
        <ul>
          <li><strong>Couleurs Brand</strong> : Spécifiques à chaque marque (Club Employés, Gifteo)</li>
          <li><strong>Couleurs Communes</strong> : Partagées entre toutes les marques</li>
          <li><strong>Couleurs Sémantiques</strong> : Couleurs avec une signification spécifique</li>
        </ul>
        
        <h3>🔧 Utilisation</h3>
        <p>Toutes les couleurs sont disponibles sous forme de variables CSS. Cliquez sur 📋 pour copier la variable.</p>
        
        <h3>🌙 Mode sombre</h3>
        <p>Les couleurs s'adaptent automatiquement selon le thème sélectionné (clair/sombre).</p>
        
        <h3>💡 Exemple d'utilisation</h3>
        <pre><code>/* Utilisation directe */
background-color: var(--theme-colors-brand-primary-500);

/* Avec fallback */
background-color: var(--theme-colors-brand-primary-500, #3b82f6);</code></pre>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components';
import { Button, useTheme } from '@club-employes/utopia';
import { computed } from 'vue';

// Accès au thème via le composable
const { currentTheme } = useTheme()

// All brand colors data
const brandColors = {
  'club-employes': {
    name: '🏢 Club Employés',
    primary: {
      name: 'Primary',
      shades: [
        { name: '25', variable: '--theme-colors-brand-primary-25' },
        { name: '50', variable: '--theme-colors-brand-primary-50' },
        { name: '100', variable: '--theme-colors-brand-primary-100' },
        { name: '200', variable: '--theme-colors-brand-primary-200' },
        { name: '300', variable: '--theme-colors-brand-primary-300' },
        { name: '400', variable: '--theme-colors-brand-primary-400' },
        { name: '500', variable: '--theme-colors-brand-primary-500' }
      ]
    },
    secondary: {
      name: 'Secondary',
      shades: [
        { name: '25', variable: '--theme-colors-brand-secondary-25' },
        { name: '50', variable: '--theme-colors-brand-secondary-50' },
        { name: '100', variable: '--theme-colors-brand-secondary-100' },
        { name: '200', variable: '--theme-colors-brand-secondary-200' },
        { name: '300', variable: '--theme-colors-brand-secondary-300' },
        { name: '400', variable: '--theme-colors-brand-secondary-400' },
        { name: '500', variable: '--theme-colors-brand-secondary-500' }
      ]
    },
    accent: {
      name: 'Accent',
      shades: [
        { name: '25', variable: '--theme-colors-brand-accent-25' },
        { name: '50', variable: '--theme-colors-brand-accent-50' },
        { name: '100', variable: '--theme-colors-brand-accent-100' },
        { name: '200', variable: '--theme-colors-brand-accent-200' },
        { name: '300', variable: '--theme-colors-brand-accent-300' },
        { name: '400', variable: '--theme-colors-brand-accent-400' },
        { name: '500', variable: '--theme-colors-brand-accent-500' }
      ]
    }
  },
  'gifteo': {
    name: '❤️ Gifteo',
    primary: {
      name: 'Primary',
      shades: [
        { name: '25', variable: '--theme-colors-brand-primary-25' },
        { name: '50', variable: '--theme-colors-brand-primary-50' },
        { name: '100', variable: '--theme-colors-brand-primary-100' },
        { name: '200', variable: '--theme-colors-brand-primary-200' },
        { name: '300', variable: '--theme-colors-brand-primary-300' },
        { name: '400', variable: '--theme-colors-brand-primary-400' },
        { name: '500', variable: '--theme-colors-brand-primary-500' }
      ]
    },
    secondary: {
      name: 'Secondary',
      shades: [
        { name: '25', variable: '--theme-colors-brand-secondary-25' },
        { name: '50', variable: '--theme-colors-brand-secondary-50' },
        { name: '100', variable: '--theme-colors-brand-secondary-100' },
        { name: '200', variable: '--theme-colors-brand-secondary-200' },
        { name: '300', variable: '--theme-colors-brand-secondary-300' },
        { name: '400', variable: '--theme-colors-brand-secondary-400' },
        { name: '500', variable: '--theme-colors-brand-secondary-500' }
      ]
    },
    accent: {
      name: 'Accent',
      shades: [
        { name: '25', variable: '--theme-colors-brand-accent-25' },
        { name: '50', variable: '--theme-colors-brand-accent-50' },
        { name: '100', variable: '--theme-colors-brand-accent-100' },
        { name: '200', variable: '--theme-colors-brand-accent-200' },
        { name: '300', variable: '--theme-colors-brand-accent-300' },
        { name: '400', variable: '--theme-colors-brand-accent-400' },
        { name: '500', variable: '--theme-colors-brand-accent-500' }
      ]
    }
  }
}

// Get current brand data
const currentBrand = computed(() => {
  if (!currentTheme.value?.name) {
    return brandColors['club-employes'] // Valeur par défaut
  }
  const brandKey = currentTheme.value.name.includes('club-employes') ? 'club-employes' : 'gifteo'
  return brandColors[brandKey]
})

// Copy to clipboard function
const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

// Common Colors (adapted for light/dark modes)
const slateColors = [
  { name: '50', variable: '--theme-colors-common-slate-50' },
  { name: '200', variable: '--theme-colors-common-slate-200' },
  { name: '400', variable: '--theme-colors-common-slate-400' },
  { name: '600', variable: '--theme-colors-common-slate-600' },
  { name: '800', variable: '--theme-colors-common-slate-800' },
  { name: '950', variable: '--theme-colors-common-slate-950' }
]

const succeedColors = [
  { name: '50', variable: '--theme-colors-common-succeed-50' },
  { name: '200', variable: '--theme-colors-common-succeed-200' },
  { name: '400', variable: '--theme-colors-common-succeed-400' },
  { name: '600', variable: '--theme-colors-common-succeed-600' },
  { name: '800', variable: '--theme-colors-common-succeed-800' },
  { name: '950', variable: '--theme-colors-common-succeed-950' }
]

const warningColors = [
  { name: '50', variable: '--theme-colors-common-warning-50' },
  { name: '200', variable: '--theme-colors-common-warning-200' },
  { name: '400', variable: '--theme-colors-common-warning-400' },
  { name: '600', variable: '--theme-colors-common-warning-600' },
  { name: '800', variable: '--theme-colors-common-warning-800' },
  { name: '950', variable: '--theme-colors-common-warning-950' }
]

const dangerColors = [
  { name: '50', variable: '--theme-colors-common-danger-50' },
  { name: '200', variable: '--theme-colors-common-danger-200' },
  { name: '400', variable: '--theme-colors-common-danger-400' },
  { name: '600', variable: '--theme-colors-common-danger-600' },
  { name: '800', variable: '--theme-colors-common-danger-800' },
  { name: '950', variable: '--theme-colors-common-danger-950' }
]

// Surface colors (semantic tokens)
const surfaceColors = [
  { name: 'Background', variable: '--theme-colors-surface-background', description: 'Couleur de fond principale' },
  { name: 'Card', variable: '--theme-colors-surface-card', description: 'Couleur de fond des cartes' },
  { name: 'Overlay', variable: '--theme-colors-surface-overlay', description: 'Couleur de superposition (modales, etc.)' }
]

// Text colors (semantic tokens)
const textColors = [
  { name: 'Primary', variable: '--theme-colors-text-primary', description: 'Couleur de texte principale' },
  { name: 'Secondary', variable: '--theme-colors-text-secondary', description: 'Couleur de texte secondaire' },
  { name: 'Muted', variable: '--theme-colors-text-muted', description: 'Couleur de texte atténuée' },
  { name: 'Inverse', variable: '--theme-colors-text-inverse', description: 'Couleur de texte inversée' }
]

// Border colors (semantic tokens)
const borderColors = [
  { name: 'Default', variable: '--theme-colors-border-default', description: 'Couleur de bordure par défaut' },
  { name: 'Muted', variable: '--theme-colors-border-muted', description: 'Couleur de bordure atténuée' },
  { name: 'Strong', variable: '--theme-colors-border-strong', description: 'Couleur de bordure forte' }
]

// State colors (semantic tokens)
const stateColors = [
  { name: 'Error', variable: '--theme-colors-state-error', description: 'Couleur d\'erreur' },
  { name: 'Error Background', variable: '--theme-colors-state-error-background', description: 'Fond d\'erreur' },
  { name: 'Success', variable: '--theme-colors-state-success', description: 'Couleur de succès' },
  { name: 'Success Background', variable: '--theme-colors-state-success-background', description: 'Fond de succès' },
  { name: 'Warning', variable: '--theme-colors-state-warning', description: 'Couleur d\'avertissement' },
  { name: 'Warning Background', variable: '--theme-colors-state-warning-background', description: 'Fond d\'avertissement' }
]


</script>

<style scoped>
.colors-intro {
  margin-bottom: var(--spacing-8);
}

.intro-description {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  text-align: center;
  margin-bottom: var(--spacing-6);
}

.colors-documentation h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-top: var(--spacing-6);
  margin-bottom: var(--spacing-3);
}

.colors-documentation ul {
  margin-left: var(--spacing-4);
  margin-bottom: var(--spacing-4);
}

.colors-documentation li {
  margin-bottom: var(--spacing-2);
}

.colors-documentation pre {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-4);
  margin: var(--spacing-4) 0;
  overflow-x: auto;
}

.colors-documentation code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
}

.section {
  margin-bottom: var(--spacing-16);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
  border-bottom: 2px solid var(--theme-colors-border-default);
  padding-bottom: var(--spacing-4);
}

.section-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-8);
}

.colors-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
}

.common-colors-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
}

.color-group,
.common-color-group {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.color-group-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.color-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-3);
}

.color-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-3);
  border-radius: var(--border-radius-md);
  transition: transform 0.2s ease;
}

.color-card:hover {
  transform: translateY(-2px);
}

.color-swatch {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--theme-colors-border-default);
  margin-bottom: var(--spacing-2);
  box-shadow: var(--shadow-sm);
}

.color-info {
  text-align: center;
}

.color-name {
  display: block;
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-1);
}

.color-code-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  width: 100%;
}

.color-code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  flex: 1;
}

.copy-btn {
  opacity: 0;
  transition: opacity 0.2s ease;
  min-width: 32px !important;
  min-height: 24px !important;
  padding: var(--spacing-1) !important;
}

.color-card:hover .copy-btn {
  opacity: 1;
}

/* Style pour les descriptions des couleurs sémantiques */
.color-description {
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-muted);
  margin-top: var(--spacing-2);
  font-style: italic;
}

@media (max-width: 768px) {
  .colors-page {
    padding: var(--spacing-4);
  }
  
  .color-group,
  .common-color-group {
    padding: var(--spacing-4);
  }
  
  .color-row {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: var(--spacing-2);
  }
  
  .color-swatch {
    width: 50px;
    height: 50px;
  }
}

/* Forcer la sélection de texte sur toute la page */
:deep(*) {
  -webkit-user-select: text !important;
  -moz-user-select: text !important;
  -ms-user-select: text !important;
  user-select: text !important;
}

/* Garder user-select: none pour les éléments interactifs */
:deep(button),
:deep(.code-snippet summary) {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

@media (max-width: 480px) {
  .colors-page {
    padding: var(--spacing-2);
  }
  
  .color-group,
  .common-color-group {
    padding: var(--spacing-3);
  }
  
  .color-row {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: var(--spacing-1);
  }
  
  .color-swatch {
    width: 40px;
    height: 40px;
  }
}
</style>