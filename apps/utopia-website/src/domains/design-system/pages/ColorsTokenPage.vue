<template>
  <div class="colors-token-page">
    <div class="page-header">
      <div class="header-title">
        <Icon name="Palette" class="component-icon" />
        <h1>🏷️ Tokens de Couleurs</h1>
      </div>
      <p class="page-description">
        Référence complète de tous les tokens de couleurs du design system avec leurs valeurs hexadécimales, 
        leurs labels et leurs correspondances light/dark. Changez de thème pour voir les variations.
      </p>
    </div>

    <!-- Couleurs Sémantiques -->
    <section class="section">
      <h2 class="section-title">🎯 Couleurs Sémantiques</h2>
      <p class="section-description">
        Couleurs utilisées selon leur signification et leur contexte d'usage.
      </p>
      
      <div class="semantic-groups">
        <!-- Brand Colors -->
        <div class="token-group">
          <h3 class="group-title">🏢 Brand</h3>
          <div class="tokens-grid">
            <div class="token-group-section">
              <h4 class="subgroup-title">Primary</h4>
              <div class="token-row">
                <div 
                  v-for="shade in brandPrimaryTokens" 
                  :key="shade.token"
                  class="token-card"
                >
                  <div class="color-swatch" :style="{ backgroundColor: `var(${shade.cssVar})` }"></div>
                  <div class="token-info">
                    <span class="token-name">{{ shade.name }}</span>
                    <div class="token-details">
                      <div class="token-code-group">
                        <code class="token-code">{{ shade.cssVar }}</code>
                        <Button 
                          variant="ghost" 
                          size="small" 
                          @click="copyToClipboard(shade.cssVar)"
                          class="copy-btn"
                          :aria-label="`Copier ${shade.cssVar}`"
                        >
                          📋
                        </Button>
                      </div>
                    </div>
                    <p class="token-description" v-if="shade.description">{{ shade.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="token-group-section">
              <h4 class="subgroup-title">Secondary</h4>
              <div class="token-row">
                <div 
                  v-for="shade in brandSecondaryTokens" 
                  :key="shade.token"
                  class="token-card"
                >
                  <div class="color-swatch" :style="{ backgroundColor: `var(${shade.cssVar})` }"></div>
                  <div class="token-info">
                    <span class="token-name">{{ shade.name }}</span>
                    <div class="token-details">
                      <div class="token-code-group">
                        <code class="token-code">{{ shade.cssVar }}</code>
                        <Button 
                          variant="ghost" 
                          size="small" 
                          @click="copyToClipboard(shade.cssVar)"
                          class="copy-btn"
                          :aria-label="`Copier ${shade.cssVar}`"
                        >
                          📋
                        </Button>
                      </div>
                    </div>
                    <p class="token-description" v-if="shade.description">{{ shade.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="token-group-section">
              <h4 class="subgroup-title">Accent</h4>
              <div class="token-row">
                <div 
                  v-for="shade in brandAccentTokens" 
                  :key="shade.token"
                  class="token-card"
                >
                  <div class="color-swatch" :style="{ backgroundColor: `var(${shade.cssVar})` }"></div>
                  <div class="token-info">
                    <span class="token-name">{{ shade.name }}</span>
                    <div class="token-details">
                      <div class="token-code-group">
                        <code class="token-code">{{ shade.cssVar }}</code>
                        <Button 
                          variant="ghost" 
                          size="small" 
                          @click="copyToClipboard(shade.cssVar)"
                          class="copy-btn"
                          :aria-label="`Copier ${shade.cssVar}`"
                        >
                          📋
                        </Button>
                      </div>
                    </div>
                    <p class="token-description" v-if="shade.description">{{ shade.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Surface Colors -->
        <div class="token-group">
          <h3 class="group-title">🎨 Surface</h3>
          <div class="tokens-grid">
            <div class="token-row">
              <div 
                v-for="token in surfaceTokens" 
                :key="token.token"
                class="token-card"
              >
                <div class="color-swatch" :style="{ backgroundColor: `var(${token.cssVar})` }"></div>
                <div class="token-info">
                  <span class="token-name">{{ token.name }}</span>
                  <div class="token-details">
                    <div class="token-code-group">
                      <code class="token-code">{{ token.cssVar }}</code>
                      <Button 
                        variant="ghost" 
                        size="small" 
                        @click="copyToClipboard(token.cssVar)"
                        class="copy-btn"
                        :aria-label="`Copier ${token.cssVar}`"
                      >
                        📋
                      </Button>
                    </div>
                  </div>
                  <p class="token-description" v-if="token.description">{{ token.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text Colors -->
        <div class="token-group">
          <h3 class="group-title">📝 Text</h3>
          <div class="tokens-grid">
            <div class="token-row">
              <div 
                v-for="token in textTokens" 
                :key="token.token"
                class="token-card"
              >
                <div class="color-swatch" :style="{ backgroundColor: `var(${token.cssVar})` }"></div>
                <div class="token-info">
                  <span class="token-name">{{ token.name }}</span>
                  <div class="token-details">
                    <div class="token-code-group">
                      <code class="token-code">{{ token.cssVar }}</code>
                      <Button 
                        variant="ghost" 
                        size="small" 
                        @click="copyToClipboard(token.cssVar)"
                        class="copy-btn"
                        :aria-label="`Copier ${token.cssVar}`"
                      >
                        📋
                      </Button>
                    </div>
                  </div>
                  <p class="token-description" v-if="token.description">{{ token.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Border Colors -->
        <div class="token-group">
          <h3 class="group-title">🔲 Border</h3>
          <div class="tokens-grid">
            <div class="token-row">
              <div 
                v-for="token in borderTokens" 
                :key="token.token"
                class="token-card"
              >
                <div class="color-swatch" :style="{ backgroundColor: `var(${token.cssVar})` }"></div>
                <div class="token-info">
                  <span class="token-name">{{ token.name }}</span>
                  <div class="token-details">
                    <div class="token-code-group">
                      <code class="token-code">{{ token.cssVar }}</code>
                      <Button 
                        variant="ghost" 
                        size="small" 
                        @click="copyToClipboard(token.cssVar)"
                        class="copy-btn"
                        :aria-label="`Copier ${token.cssVar}`"
                      >
                        📋
                      </Button>
                    </div>
                  </div>
                  <p class="token-description" v-if="token.description">{{ token.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- State Colors -->
        <div class="token-group">
          <h3 class="group-title">⚡ States</h3>
          <div class="tokens-grid">
            <div class="token-group-section">
              <h4 class="subgroup-title">Success</h4>
              <div class="token-row">
                <div 
                  v-for="token in successTokens" 
                  :key="token.token"
                  class="token-card"
                >
                  <div class="color-swatch" :style="{ backgroundColor: `var(${token.cssVar})` }"></div>
                  <div class="token-info">
                    <span class="token-name">{{ token.name }}</span>
                    <div class="token-details">
                      <div class="token-code-group">
                        <code class="token-code">{{ token.cssVar }}</code>
                        <Button 
                          variant="ghost" 
                          size="small" 
                          @click="copyToClipboard(token.cssVar)"
                          class="copy-btn"
                          :aria-label="`Copier ${token.cssVar}`"
                        >
                          📋
                        </Button>
                      </div>
                    </div>
                    <p class="token-description" v-if="token.description">{{ token.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="token-group-section">
              <h4 class="subgroup-title">Warning</h4>
              <div class="token-row">
                <div 
                  v-for="token in warningTokens" 
                  :key="token.token"
                  class="token-card"
                >
                  <div class="color-swatch" :style="{ backgroundColor: `var(${token.cssVar})` }"></div>
                  <div class="token-info">
                    <span class="token-name">{{ token.name }}</span>
                    <div class="token-details">
                      <div class="token-code-group">
                        <code class="token-code">{{ token.cssVar }}</code>
                        <Button 
                          variant="ghost" 
                          size="small" 
                          @click="copyToClipboard(token.cssVar)"
                          class="copy-btn"
                          :aria-label="`Copier ${token.cssVar}`"
                        >
                          📋
                        </Button>
                      </div>
                    </div>
                    <p class="token-description" v-if="token.description">{{ token.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="token-group-section">
              <h4 class="subgroup-title">Danger</h4>
              <div class="token-row">
                <div 
                  v-for="token in dangerTokens" 
                  :key="token.token"
                  class="token-card"
                >
                  <div class="color-swatch" :style="{ backgroundColor: `var(${token.cssVar})` }"></div>
                  <div class="token-info">
                    <span class="token-name">{{ token.name }}</span>
                    <div class="token-details">
                      <div class="token-code-group">
                        <code class="token-code">{{ token.cssVar }}</code>
                        <Button 
                          variant="ghost" 
                          size="small" 
                          @click="copyToClipboard(token.cssVar)"
                          class="copy-btn"
                          :aria-label="`Copier ${token.cssVar}`"
                        >
                          📋
                        </Button>
                      </div>
                    </div>
                    <p class="token-description" v-if="token.description">{{ token.description }}</p>
                  </div>
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
        Couleurs de base partagées entre toutes les marques.
      </p>
      
      <div class="common-groups">
        <div class="token-group">
          <h3 class="group-title">⚫ Slate</h3>
          <div class="token-row">
            <div 
              v-for="token in slateTokens" 
              :key="token.token"
              class="token-card"
            >
              <div class="color-swatch" :style="{ backgroundColor: `var(${token.cssVar})` }"></div>
              <div class="token-info">
                <span class="token-name">{{ token.name }}</span>
                <div class="token-details">
                  <div class="token-code-group">
                    <code class="token-code">{{ token.cssVar }}</code>
                    <Button 
                      variant="ghost" 
                      size="small" 
                      @click="copyToClipboard(token.cssVar)"
                      class="copy-btn"
                      :aria-label="`Copier ${token.cssVar}`"
                    >
                      📋
                    </Button>
                  </div>
                </div>
                <p class="token-description" v-if="token.description">{{ token.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="token-group">
          <h3 class="group-title">🤎 Background</h3>
          <div class="token-row">
            <div 
              v-for="token in backgroundTokens" 
              :key="token.token"
              class="token-card"
            >
              <div class="color-swatch" :style="{ backgroundColor: `var(${token.cssVar})` }"></div>
              <div class="token-info">
                <span class="token-name">{{ token.name }}</span>
                <div class="token-details">
                  <div class="token-code-group">
                    <code class="token-code">{{ token.cssVar }}</code>
                    <Button 
                      variant="ghost" 
                      size="small" 
                      @click="copyToClipboard(token.cssVar)"
                      class="copy-btn"
                      :aria-label="`Copier ${token.cssVar}`"
                    >
                      📋
                    </Button>
                  </div>
                </div>
                <p class="token-description" v-if="token.description">{{ token.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Theme Switcher Info -->
    <section class="section">
      <div class="theme-info">
        <h3>💡 Information</h3>
        <p>
          Les valeurs hexadécimales affichées correspondent au thème actuellement sélectionné. 
          Utilisez le sélecteur de thème pour voir les correspondances light/dark et les variations par marque.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button, Icon } from '@club-employes/utopia'
import { computed } from 'vue'

// Fonction pour copier dans le presse-papiers
const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text)
    // Vous pourriez ajouter une notification ici
  } catch (err) {
    console.error('Erreur lors de la copie:', err)
  }
}

// Définition des tokens par catégorie sémantique
const brandPrimaryTokens = computed(() => [
  { token: 'brand.primary.25', name: '25', cssVar: '--theme-colors-brand-primary-25', description: 'Très clair' },
  { token: 'brand.primary.50', name: '50', cssVar: '--theme-colors-brand-primary-50', description: 'Clair' },
  { token: 'brand.primary.100', name: '100', cssVar: '--theme-colors-brand-primary-100', description: 'Clair' },
  { token: 'brand.primary.200', name: '200', cssVar: '--theme-colors-brand-primary-200', description: 'Léger' },
  { token: 'brand.primary.300', name: '300', cssVar: '--theme-colors-brand-primary-300', description: 'Moyen clair' },
  { token: 'brand.primary.400', name: '400', cssVar: '--theme-colors-brand-primary-400', description: 'Moyen' },
  { token: 'brand.primary.500', name: '500', cssVar: '--theme-colors-brand-primary-500', description: 'Principal' }
])

const brandSecondaryTokens = computed(() => [
  { token: 'brand.secondary.25', name: '25', cssVar: '--theme-colors-brand-secondary-25', description: 'Très clair' },
  { token: 'brand.secondary.50', name: '50', cssVar: '--theme-colors-brand-secondary-50', description: 'Clair' },
  { token: 'brand.secondary.100', name: '100', cssVar: '--theme-colors-brand-secondary-100', description: 'Clair' },
  { token: 'brand.secondary.200', name: '200', cssVar: '--theme-colors-brand-secondary-200', description: 'Léger' },
  { token: 'brand.secondary.300', name: '300', cssVar: '--theme-colors-brand-secondary-300', description: 'Moyen clair' },
  { token: 'brand.secondary.400', name: '400', cssVar: '--theme-colors-brand-secondary-400', description: 'Moyen' },
  { token: 'brand.secondary.500', name: '500', cssVar: '--theme-colors-brand-secondary-500', description: 'Principal' }
])

const brandAccentTokens = computed(() => [
  { token: 'brand.accent.25', name: '25', cssVar: '--theme-colors-brand-accent-25', description: 'Très clair' },
  { token: 'brand.accent.50', name: '50', cssVar: '--theme-colors-brand-accent-50', description: 'Clair' },
  { token: 'brand.accent.100', name: '100', cssVar: '--theme-colors-brand-accent-100', description: 'Clair' },
  { token: 'brand.accent.200', name: '200', cssVar: '--theme-colors-brand-accent-200', description: 'Léger' },
  { token: 'brand.accent.300', name: '300', cssVar: '--theme-colors-brand-accent-300', description: 'Moyen clair' },
  { token: 'brand.accent.400', name: '400', cssVar: '--theme-colors-brand-accent-400', description: 'Moyen' },
  { token: 'brand.accent.500', name: '500', cssVar: '--theme-colors-brand-accent-500', description: 'Principal' }
])

const surfaceTokens = computed(() => [
  { token: 'surface.background', name: 'Background', cssVar: '--theme-colors-surface-background', description: 'Arrière-plan principal' },
  { token: 'surface.card', name: 'Card', cssVar: '--theme-colors-surface-card', description: 'Arrière-plan des cartes' },
  { token: 'surface.overlay', name: 'Overlay', cssVar: '--theme-colors-surface-overlay', description: 'Superposition' }
])

const textTokens = computed(() => [
  { token: 'text.primary', name: 'Primary', cssVar: '--theme-colors-text-primary', description: 'Texte principal' },
  { token: 'text.secondary', name: 'Secondary', cssVar: '--theme-colors-text-secondary', description: 'Texte secondaire' },
  { token: 'text.muted', name: 'Muted', cssVar: '--theme-colors-text-muted', description: 'Texte discret' },
  { token: 'text.inverse', name: 'Inverse', cssVar: '--theme-colors-text-inverse', description: 'Texte inversé' }
])

const borderTokens = computed(() => [
  { token: 'border.default', name: 'Default', cssVar: '--theme-colors-border-default', description: 'Bordure par défaut' },
  { token: 'border.muted', name: 'Muted', cssVar: '--theme-colors-border-muted', description: 'Bordure discrète' },
  { token: 'border.strong', name: 'Strong', cssVar: '--theme-colors-border-strong', description: 'Bordure forte' }
])

const successTokens = computed(() => [
  { token: 'common.succeed.50', name: '50', cssVar: '--theme-colors-common-succeed-50', description: 'Très clair' },
  { token: 'common.succeed.200', name: '200', cssVar: '--theme-colors-common-succeed-200', description: 'Clair' },
  { token: 'common.succeed.400', name: '400', cssVar: '--theme-colors-common-succeed-400', description: 'Moyen' },
  { token: 'common.succeed.600', name: '600', cssVar: '--theme-colors-common-succeed-600', description: 'Foncé' },
  { token: 'common.succeed.800', name: '800', cssVar: '--theme-colors-common-succeed-800', description: 'Très foncé' }
])

const warningTokens = computed(() => [
  { token: 'common.warning.50', name: '50', cssVar: '--theme-colors-common-warning-50', description: 'Très clair' },
  { token: 'common.warning.200', name: '200', cssVar: '--theme-colors-common-warning-200', description: 'Clair' },
  { token: 'common.warning.400', name: '400', cssVar: '--theme-colors-common-warning-400', description: 'Moyen' },
  { token: 'common.warning.600', name: '600', cssVar: '--theme-colors-common-warning-600', description: 'Foncé' },
  { token: 'common.warning.800', name: '800', cssVar: '--theme-colors-common-warning-800', description: 'Très foncé' }
])

const dangerTokens = computed(() => [
  { token: 'common.danger.50', name: '50', cssVar: '--theme-colors-common-danger-50', description: 'Très clair' },
  { token: 'common.danger.200', name: '200', cssVar: '--theme-colors-common-danger-200', description: 'Clair' },
  { token: 'common.danger.400', name: '400', cssVar: '--theme-colors-common-danger-400', description: 'Moyen' },
  { token: 'common.danger.600', name: '600', cssVar: '--theme-colors-common-danger-600', description: 'Foncé' },
  { token: 'common.danger.800', name: '800', cssVar: '--theme-colors-common-danger-800', description: 'Très foncé' }
])

const slateTokens = computed(() => [
  { token: 'common.slate.50', name: '50', cssVar: '--theme-colors-common-slate-50', description: 'Très clair' },
  { token: 'common.slate.200', name: '200', cssVar: '--theme-colors-common-slate-200', description: 'Clair' },
  { token: 'common.slate.400', name: '400', cssVar: '--theme-colors-common-slate-400', description: 'Moyen' },
  { token: 'common.slate.600', name: '600', cssVar: '--theme-colors-common-slate-600', description: 'Foncé' },
  { token: 'common.slate.800', name: '800', cssVar: '--theme-colors-common-slate-800', description: 'Très foncé' },
  { token: 'common.slate.950', name: '950', cssVar: '--theme-colors-common-slate-950', description: 'Très très foncé' }
])

const backgroundTokens = computed(() => [
  { token: 'common.background.50', name: '50', cssVar: '--theme-colors-common-background-50', description: 'Très clair' },
  { token: 'common.background.100', name: '100', cssVar: '--theme-colors-common-background-100', description: 'Clair' },
  { token: 'common.background.200', name: '200', cssVar: '--theme-colors-common-background-200', description: 'Léger' },
  { token: 'common.background.300', name: '300', cssVar: '--theme-colors-common-background-300', description: 'Moyen clair' },
  { token: 'common.background.400', name: '400', cssVar: '--theme-colors-common-background-400', description: 'Moyen' },
  { token: 'common.background.500', name: '500', cssVar: '--theme-colors-common-background-500', description: 'Principal' },
  { token: 'common.background.600', name: '600', cssVar: '--theme-colors-common-background-600', description: 'Foncé' },
  { token: 'common.background.700', name: '700', cssVar: '--theme-colors-common-background-700', description: 'Plus foncé' },
  { token: 'common.background.800', name: '800', cssVar: '--theme-colors-common-background-800', description: 'Très foncé' },
  { token: 'common.background.900', name: '900', cssVar: '--theme-colors-common-background-900', description: 'Très très foncé' },
  { token: 'common.background.950', name: '950', cssVar: '--theme-colors-common-background-950', description: 'Noir' }
])
</script>

<style scoped>
.colors-token-page {
  padding: var(--spacing-8);
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: var(--spacing-12);
  text-align: center;
}

.header-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-4);
}

.header-title h1 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin: 0;
}

.component-icon {
  font-size: var(--font-size-2xl);
}

.page-description {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.section {
  margin-bottom: var(--spacing-12);
}

.section-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.section-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-8);
}

.semantic-groups,
.common-groups {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
}

.token-group {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.group-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
}

.tokens-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.token-group-section {
  margin-bottom: var(--spacing-4);
}

.subgroup-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
  padding-bottom: var(--spacing-2);
  border-bottom: 1px solid var(--theme-colors-border-muted);
}

.token-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
}

.token-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-4);
  border: 1px solid var(--theme-colors-border-muted);
  border-radius: var(--border-radius-md);
  transition: all 0.2s ease;
  background: var(--theme-colors-surface-background);
}

.token-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--theme-colors-border-strong);
}

.color-swatch {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--theme-colors-border-default);
  margin-bottom: var(--spacing-3);
  box-shadow: var(--shadow-sm);
}

.token-info {
  text-align: center;
  width: 100%;
}

.token-name {
  display: block;
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-2);
  font-size: var(--font-size-sm);
}

.token-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-2);
}

.token-code-group,
.hex-value {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  width: 100%;
}

.token-code,
.hex-code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  background: var(--theme-colors-surface-card);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  flex: 1;
  border: 1px solid var(--theme-colors-border-muted);
}

.hex-code {
  color: var(--theme-colors-brand-primary-500);
  font-weight: var(--font-weight-medium);
}

.token-description {
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-muted);
  margin: 0;
  font-style: italic;
}

.copy-btn {
  opacity: 0;
  transition: opacity 0.2s ease;
  min-width: 28px !important;
  min-height: 24px !important;
  padding: var(--spacing-1) !important;
}

.token-card:hover .copy-btn {
  opacity: 1;
}

.theme-info {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  text-align: center;
}

.theme-info h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.theme-info p {
  color: var(--theme-colors-text-secondary);
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .colors-token-page {
    padding: var(--spacing-4);
  }
  
  .token-row {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: var(--spacing-3);
  }
  
  .color-swatch {
    width: 50px;
    height: 50px;
  }
  
  .header-title {
    flex-direction: column;
    gap: var(--spacing-2);
  }
  
  .header-title h1 {
    font-size: var(--font-size-2xl);
  }
}
</style>