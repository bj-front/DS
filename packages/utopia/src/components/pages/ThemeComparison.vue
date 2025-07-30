<template>
  <div class="theme-comparison-page">
    <div class="page-header">
      <h1 class="page-title">🌓 Correspondances Light/Dark</h1>
      <p class="page-description">
        Comprenez comment les couleurs s'adaptent automatiquement entre les modes clair et sombre.
      </p>
    </div>

    <!-- Current Theme Info -->
    <section class="section">
      <div class="current-theme-info">
        <h2 class="section-title">Thème actuel : {{ currentTheme.mode === 'dark' ? '🌙 Mode Sombre' : '☀️ Mode Clair' }}</h2>
        <p class="section-description">
          Basculez entre les thèmes avec le widget en haut à droite pour voir les correspondances en temps réel.
        </p>
      </div>
    </section>

    <!-- Brand Colors Correspondences -->
    <section class="section">
      <h2 class="section-title">🏢 Correspondances des couleurs {{ currentBrand.name }}</h2>
      <p class="section-description">
        Couleurs spécifiques à cette marque qui s'adaptent automatiquement au mode {{ currentTheme.mode === 'dark' ? 'sombre' : 'clair' }}.
      </p>
      
      <div class="correspondences-grid">
        <!-- Primary Brand Colors -->
        <div class="correspondence-group">
          <h3 class="group-title">🎯 Primary</h3>
          <div class="correspondence-items">
            <div class="correspondence-item" v-for="shade in brandPrimaryShades" :key="shade.name">
              <div class="variable-info">
                <code class="css-variable">--theme-colors-brand-primary-{{ shade.name }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(`--theme-colors-brand-primary-${shade.name}`)"
                  class="copy-btn"
                  :aria-label="`Copier --theme-colors-brand-primary-${shade.name}`"
                >
                  📋
                </Button>
              </div>
              <div class="theme-values">
                <div class="theme-value">
                  <div class="color-preview" 
                       :style="{ backgroundColor: `var(--theme-colors-brand-primary-${shade.name})` }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Dark' : 'Light' }}</span>
                    <span class="hex-value">{{ shade.currentValue }}</span>
                  </div>
                </div>
                <div class="arrow">↔️</div>
                <div class="theme-value opposite">
                  <div class="color-preview" 
                       :style="{ backgroundColor: shade.oppositeValue }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Light' : 'Dark' }}</span>
                    <span class="hex-value">{{ shade.oppositeValue }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Secondary Brand Colors -->
        <div class="correspondence-group">
          <h3 class="group-title">🔘 Secondary</h3>
          <div class="correspondence-items">
            <div class="correspondence-item" v-for="shade in brandSecondaryShades" :key="shade.name">
              <div class="variable-info">
                <code class="css-variable">--theme-colors-brand-secondary-{{ shade.name }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(`--theme-colors-brand-secondary-${shade.name}`)"
                  class="copy-btn"
                  :aria-label="`Copier --theme-colors-brand-secondary-${shade.name}`"
                >
                  📋
                </Button>
              </div>
              <div class="theme-values">
                <div class="theme-value">
                  <div class="color-preview" 
                       :style="{ backgroundColor: `var(--theme-colors-brand-secondary-${shade.name})` }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Dark' : 'Light' }}</span>
                    <span class="hex-value">{{ shade.currentValue }}</span>
                  </div>
                </div>
                <div class="arrow">↔️</div>
                <div class="theme-value opposite">
                  <div class="color-preview" 
                       :style="{ backgroundColor: shade.oppositeValue }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Light' : 'Dark' }}</span>
                    <span class="hex-value">{{ shade.oppositeValue }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Accent Brand Colors -->
        <div class="correspondence-group">
          <h3 class="group-title">✨ Accent</h3>
          <div class="correspondence-items">
            <div class="correspondence-item" v-for="shade in brandAccentShades" :key="shade.name">
              <div class="variable-info">
                <code class="css-variable">--theme-colors-brand-accent-{{ shade.name }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(`--theme-colors-brand-accent-${shade.name}`)"
                  class="copy-btn"
                  :aria-label="`Copier --theme-colors-brand-accent-${shade.name}`"
                >
                  📋
                </Button>
              </div>
              <div class="theme-values">
                <div class="theme-value">
                  <div class="color-preview" 
                       :style="{ backgroundColor: `var(--theme-colors-brand-accent-${shade.name})` }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Dark' : 'Light' }}</span>
                    <span class="hex-value">{{ shade.currentValue }}</span>
                  </div>
                </div>
                <div class="arrow">↔️</div>
                <div class="theme-value opposite">
                  <div class="color-preview" 
                       :style="{ backgroundColor: shade.oppositeValue }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Light' : 'Dark' }}</span>
                    <span class="hex-value">{{ shade.oppositeValue }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Color Correspondences -->
    <section class="section">
      <h2 class="section-title">🌐 Correspondances des couleurs communes</h2>
      <p class="section-description">
        Couleurs partagées entre toutes les marques, la même variable CSS donne des valeurs différentes selon le thème actuel.
      </p>
      
      <div class="correspondences-grid">
        <!-- Slate Colors -->
        <div class="correspondence-group">
          <h3 class="group-title">⚫ Slate</h3>
          <div class="correspondence-items">
            <div class="correspondence-item" v-for="shade in slateShades" :key="shade.name">
              <div class="variable-info">
                <code class="css-variable">--theme-colors-common-slate-{{ shade.name }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(`--theme-colors-common-slate-${shade.name}`)"
                  class="copy-btn"
                  :aria-label="`Copier --theme-colors-common-slate-${shade.name}`"
                >
                  📋
                </Button>
              </div>
              <div class="theme-values">
                <div class="theme-value">
                  <div class="color-preview" 
                       :style="{ backgroundColor: `var(--theme-colors-common-slate-${shade.name})` }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Dark' : 'Light' }}</span>
                    <span class="hex-value">{{ shade.currentValue }}</span>
                  </div>
                </div>
                <div class="arrow">↔️</div>
                <div class="theme-value opposite">
                  <div class="color-preview" 
                       :style="{ backgroundColor: shade.oppositeValue }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Light' : 'Dark' }}</span>
                    <span class="hex-value">{{ shade.oppositeValue }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Colors -->
        <div class="correspondence-group">
          <h3 class="group-title">✅ Success</h3>
          <div class="correspondence-items">
            <div class="correspondence-item" v-for="shade in successShades" :key="shade.name">
              <div class="variable-info">
                <code class="css-variable">--theme-colors-common-succeed-{{ shade.name }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(`--theme-colors-common-succeed-${shade.name}`)"
                  class="copy-btn"
                  :aria-label="`Copier --theme-colors-common-succeed-${shade.name}`"
                >
                  📋
                </Button>
              </div>
              <div class="theme-values">
                <div class="theme-value">
                  <div class="color-preview" 
                       :style="{ backgroundColor: `var(--theme-colors-common-succeed-${shade.name})` }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Dark' : 'Light' }}</span>
                    <span class="hex-value">{{ shade.currentValue }}</span>
                  </div>
                </div>
                <div class="arrow">↔️</div>
                <div class="theme-value opposite">
                  <div class="color-preview" 
                       :style="{ backgroundColor: shade.oppositeValue }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Light' : 'Dark' }}</span>
                    <span class="hex-value">{{ shade.oppositeValue }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Warning Colors -->
        <div class="correspondence-group">
          <h3 class="group-title">⚠️ Warning</h3>
          <div class="correspondence-items">
            <div class="correspondence-item" v-for="shade in warningShades" :key="shade.name">
              <div class="variable-info">
                <code class="css-variable">--theme-colors-common-warning-{{ shade.name }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(`--theme-colors-common-warning-${shade.name}`)"
                  class="copy-btn"
                  :aria-label="`Copier --theme-colors-common-warning-${shade.name}`"
                >
                  📋
                </Button>
              </div>
              <div class="theme-values">
                <div class="theme-value">
                  <div class="color-preview" 
                       :style="{ backgroundColor: `var(--theme-colors-common-warning-${shade.name})` }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Dark' : 'Light' }}</span>
                    <span class="hex-value">{{ shade.currentValue }}</span>
                  </div>
                </div>
                <div class="arrow">↔️</div>
                <div class="theme-value opposite">
                  <div class="color-preview" 
                       :style="{ backgroundColor: shade.oppositeValue }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Light' : 'Dark' }}</span>
                    <span class="hex-value">{{ shade.oppositeValue }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Danger Colors -->
        <div class="correspondence-group">
          <h3 class="group-title">🚨 Danger</h3>
          <div class="correspondence-items">
            <div class="correspondence-item" v-for="shade in dangerShades" :key="shade.name">
              <div class="variable-info">
                <code class="css-variable">--theme-colors-common-danger-{{ shade.name }}</code>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  @click="copyToClipboard(`--theme-colors-common-danger-${shade.name}`)"
                  class="copy-btn"
                  :aria-label="`Copier --theme-colors-common-danger-${shade.name}`"
                >
                  📋
                </Button>
              </div>
              <div class="theme-values">
                <div class="theme-value">
                  <div class="color-preview" 
                       :style="{ backgroundColor: `var(--theme-colors-common-danger-${shade.name})` }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Dark' : 'Light' }}</span>
                    <span class="hex-value">{{ shade.currentValue }}</span>
                  </div>
                </div>
                <div class="arrow">↔️</div>
                <div class="theme-value opposite">
                  <div class="color-preview" 
                       :style="{ backgroundColor: shade.oppositeValue }">
                  </div>
                  <div class="value-info">
                    <span class="mode-label">{{ currentTheme.mode === 'dark' ? 'Light' : 'Dark' }}</span>
                    <span class="hex-value">{{ shade.oppositeValue }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section">
      <h2 class="section-title">⚙️ Comment ça fonctionne</h2>
      <div class="explanation-grid">
        <div class="explanation-card">
          <h3 class="card-title">1. Couleurs de base</h3>
          <div class="code-example">
            <h4>📁 core/colors.json (Light)</h4>
            <pre><code>"slate": {
  "50": "#F8FAFC",  // très clair
  "950": "#020618"  // très sombre
}</code></pre>
          </div>
          <div class="code-example">
            <h4>📁 core/colors-dark.json (Dark)</h4>
            <pre><code>"slate-dark": {
  "50": "#020618",  // très sombre ← inversé !
  "950": "#F8FAFC" // très clair ← inversé !
}</code></pre>
          </div>
        </div>

        <div class="explanation-card">
          <h3 class="card-title">2. Mapping dans les thèmes</h3>
          <div class="code-example">
            <h4>📁 themes/club-employes-light.json</h4>
            <pre><code>"slate": {
  "50": "{color.slate.50}"
  // → #F8FAFC
}</code></pre>
          </div>
          <div class="code-example">
            <h4>📁 themes/club-employes-dark.json</h4>
            <pre><code>"slate": {
  "50": "{color.slate-dark.50}"
  // → #020618
}</code></pre>
          </div>
        </div>

        <div class="explanation-card">
          <h3 class="card-title">3. Résultat</h3>
          <p>
            La même variable CSS donne automatiquement la bonne valeur selon le thème !
          </p>
          <div class="result-example">
            <h4>Couleurs communes :</h4>
            <div class="theme-result">
              <span class="theme-name">☀️ Light</span>
              <code>--theme-colors-common-slate-50</code>
              <span class="equals">→</span>
              <span class="hex-result">#F8FAFC</span>
            </div>
            <div class="theme-result">
              <span class="theme-name">🌙 Dark</span>
              <code>--theme-colors-common-slate-50</code>
              <span class="equals">→</span>
              <span class="hex-result">#020618</span>
            </div>
            <h4>Couleurs brand :</h4>
            <div class="theme-result">
              <span class="theme-name">☀️ Light</span>
              <code>--theme-colors-brand-primary-25</code>
              <span class="equals">→</span>
              <span class="hex-result">{{ currentBrand.key === 'club-employes' ? '#FAFBFE' : '#FFFBFB' }}</span>
            </div>
            <div class="theme-result">
              <span class="theme-name">🌙 Dark</span>
              <code>--theme-colors-brand-primary-25</code>
              <span class="equals">→</span>
              <span class="hex-result">{{ currentBrand.key === 'club-employes' ? '#0A1B3E' : '#2A0A0A' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Button } from '../atoms/Button'
import type { ThemeConfig } from '../../theme-provider'

interface Props {
  currentTheme: ThemeConfig
}

const props = defineProps<Props>()

// Get current brand info
const currentBrand = computed(() => {
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

// Color correspondences data
const slateShades = [
  { 
    name: '50', 
    currentValue: props.currentTheme.mode === 'dark' ? '#020618' : '#F8FAFC',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#F8FAFC' : '#020618'
  },
  { 
    name: '200', 
    currentValue: props.currentTheme.mode === 'dark' ? '#1D293D' : '#E2E8F0',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#E2E8F0' : '#1D293D'
  },
  { 
    name: '400', 
    currentValue: props.currentTheme.mode === 'dark' ? '#45556C' : '#90A1B9',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#90A1B9' : '#45556C'
  },
  { 
    name: '600', 
    currentValue: props.currentTheme.mode === 'dark' ? '#90A1B9' : '#45556C',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#45556C' : '#90A1B9'
  },
  { 
    name: '800', 
    currentValue: props.currentTheme.mode === 'dark' ? '#E2E8F0' : '#1D293D',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#1D293D' : '#E2E8F0'
  },
  { 
    name: '950', 
    currentValue: props.currentTheme.mode === 'dark' ? '#F8FAFC' : '#020618',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#020618' : '#F8FAFC'
  }
]

const successShades = [
  { 
    name: '50', 
    currentValue: props.currentTheme.mode === 'dark' ? '#052e16' : '#e2fcf0',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#e2fcf0' : '#052e16'
  },
  { 
    name: '200', 
    currentValue: props.currentTheme.mode === 'dark' ? '#166534' : '#a7f3d0',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#a7f3d0' : '#166534'
  },
  { 
    name: '400', 
    currentValue: props.currentTheme.mode === 'dark' ? '#22c55e' : '#4ade80',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#4ade80' : '#22c55e'
  }
]

const warningShades = [
  { 
    name: '50', 
    currentValue: props.currentTheme.mode === 'dark' ? '#451a03' : '#fff5db',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#fff5db' : '#451a03'
  },
  { 
    name: '200', 
    currentValue: props.currentTheme.mode === 'dark' ? '#a16207' : '#fed7aa',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#fed7aa' : '#a16207'
  },
  { 
    name: '400', 
    currentValue: props.currentTheme.mode === 'dark' ? '#f59e0b' : '#fb923c',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#fb923c' : '#f59e0b'
  }
]

const dangerShades = [
  { 
    name: '50', 
    currentValue: props.currentTheme.mode === 'dark' ? '#450a0a' : '#fef2f2',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#fef2f2' : '#450a0a'
  },
  { 
    name: '200', 
    currentValue: props.currentTheme.mode === 'dark' ? '#dc2626' : '#fecaca',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#fecaca' : '#dc2626'
  },
  { 
    name: '400', 
    currentValue: props.currentTheme.mode === 'dark' ? '#ef4444' : '#f87171',
    oppositeValue: props.currentTheme.mode === 'dark' ? '#f87171' : '#ef4444'
  }
]

// Brand colors correspondences - dynamic based on current brand
const brandPrimaryShades = computed(() => {
  if (currentBrand.value.key === 'club-employes') {
    return [
      { 
        name: '25', 
        currentValue: props.currentTheme.mode === 'dark' ? '#0A1B3E' : '#FAFBFE',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FAFBFE' : '#0A1B3E'
      },
      { 
        name: '50', 
        currentValue: props.currentTheme.mode === 'dark' ? '#172554' : '#F6F8FE',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#F6F8FE' : '#172554'
      },
      { 
        name: '100', 
        currentValue: props.currentTheme.mode === 'dark' ? '#1E3A8A' : '#F2F5FE',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#F2F5FE' : '#1E3A8A'
      },
      { 
        name: '200', 
        currentValue: props.currentTheme.mode === 'dark' ? '#1E40AF' : '#E9EEFE',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#E9EEFE' : '#1E40AF'
      },
      { 
        name: '300', 
        currentValue: props.currentTheme.mode === 'dark' ? '#2563EB' : '#C9D6FB',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#C9D6FB' : '#2563EB'
      },
      { 
        name: '400', 
        currentValue: props.currentTheme.mode === 'dark' ? '#3B82F6' : '#93AEF8',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#93AEF8' : '#3B82F6'
      },
      { 
        name: '500', 
        currentValue: props.currentTheme.mode === 'dark' ? '#275CF1' : '#275CF1',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#275CF1' : '#275CF1'
      }
    ]
  } else {
    // Gifteo brand
    return [
      { 
        name: '25', 
        currentValue: props.currentTheme.mode === 'dark' ? '#2A0A0A' : '#FFFBFB',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FFFBFB' : '#2A0A0A'
      },
      { 
        name: '50', 
        currentValue: props.currentTheme.mode === 'dark' ? '#7F1D1D' : '#FFF7F7',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FFF7F7' : '#7F1D1D'
      },
      { 
        name: '100', 
        currentValue: props.currentTheme.mode === 'dark' ? '#991B1B' : '#FEF3F4',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FEF3F4' : '#991B1B'
      },
      { 
        name: '200', 
        currentValue: props.currentTheme.mode === 'dark' ? '#B91C1C' : '#FEECEC',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FEECEC' : '#B91C1C'
      },
      { 
        name: '300', 
        currentValue: props.currentTheme.mode === 'dark' ? '#DC2626' : '#FCCFCF',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FCCFCF' : '#DC2626'
      },
      { 
        name: '400', 
        currentValue: props.currentTheme.mode === 'dark' ? '#EF4444' : '#FA9FA0',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FA9FA0' : '#EF4444'
      },
      { 
        name: '500', 
        currentValue: props.currentTheme.mode === 'dark' ? '#F43E40' : '#F43E40',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#F43E40' : '#F43E40'
      }
    ]
  }
})

const brandSecondaryShades = computed(() => {
  if (currentBrand.value.key === 'club-employes') {
    return [
      { 
        name: '25', 
        currentValue: props.currentTheme.mode === 'dark' ? '#0A0A0A' : '#FAFAFE',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FAFAFE' : '#0A0A0A'
      },
      { 
        name: '50', 
        currentValue: props.currentTheme.mode === 'dark' ? '#1F2937' : '#F5F6F8',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#F5F6F8' : '#1F2937'
      },
      { 
        name: '100', 
        currentValue: props.currentTheme.mode === 'dark' ? '#374151' : '#F0F1F4',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#F0F1F4' : '#374151'
      },
      { 
        name: '200', 
        currentValue: props.currentTheme.mode === 'dark' ? '#4B5563' : '#E7E8ED',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#E7E8ED' : '#4B5563'
      },
      { 
        name: '300', 
        currentValue: props.currentTheme.mode === 'dark' ? '#6B7280' : '#C8CAD1',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#C8CAD1' : '#6B7280'
      },
      { 
        name: '400', 
        currentValue: props.currentTheme.mode === 'dark' ? '#9CA3AF' : '#A1A6B4',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#A1A6B4' : '#9CA3AF'
      },
      { 
        name: '500', 
        currentValue: props.currentTheme.mode === 'dark' ? '#3E424A' : '#3E424A',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#3E424A' : '#3E424A'
      }
    ]
  } else {
    // Gifteo brand
    return [
      { 
        name: '25', 
        currentValue: props.currentTheme.mode === 'dark' ? '#0A0101' : '#FAFAFA',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FAFAFA' : '#0A0101'
      },
      { 
        name: '50', 
        currentValue: props.currentTheme.mode === 'dark' ? '#130101' : '#F6F5F5',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#F6F5F5' : '#130101'
      },
      { 
        name: '100', 
        currentValue: props.currentTheme.mode === 'dark' ? '#292524' : '#F1F0F0',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#F1F0F0' : '#292524'
      },
      { 
        name: '200', 
        currentValue: props.currentTheme.mode === 'dark' ? '#44403C' : '#E7E6E6',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#E7E6E6' : '#44403C'
      },
      { 
        name: '300', 
        currentValue: props.currentTheme.mode === 'dark' ? '#78716C' : '#C8C5C2',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#C8C5C2' : '#78716C'
      },
      { 
        name: '400', 
        currentValue: props.currentTheme.mode === 'dark' ? '#A8A29E' : '#A1A099',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#A1A099' : '#A8A29E'
      },
      { 
        name: '500', 
        currentValue: props.currentTheme.mode === 'dark' ? '#423F3C' : '#423F3C',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#423F3C' : '#423F3C'
      }
    ]
  }
})

const brandAccentShades = computed(() => {
  if (currentBrand.value.key === 'club-employes') {
    return [
      { 
        name: '25', 
        currentValue: props.currentTheme.mode === 'dark' ? '#0F0C1A' : '#FAFBFE',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FAFBFE' : '#0F0C1A'
      },
      { 
        name: '50', 
        currentValue: props.currentTheme.mode === 'dark' ? '#1E1835' : '#F6F8FE',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#F6F8FE' : '#1E1835'
      },
      { 
        name: '100', 
        currentValue: props.currentTheme.mode === 'dark' ? '#3C2F6B' : '#F2F5FE',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#F2F5FE' : '#3C2F6B'
      },
      { 
        name: '200', 
        currentValue: props.currentTheme.mode === 'dark' ? '#5B4BA1' : '#E9EEFE',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#E9EEFE' : '#5B4BA1'
      },
      { 
        name: '300', 
        currentValue: props.currentTheme.mode === 'dark' ? '#7A67D7' : '#C9D6FB',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#C9D6FB' : '#7A67D7'
      },
      { 
        name: '400', 
        currentValue: props.currentTheme.mode === 'dark' ? '#9A83ED' : '#93AEF8',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#93AEF8' : '#9A83ED'
      },
      { 
        name: '500', 
        currentValue: props.currentTheme.mode === 'dark' ? '#6D3FF5' : '#6D3FF5',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#6D3FF5' : '#6D3FF5'
      }
    ]
  } else {
    // Gifteo brand
    return [
      { 
        name: '25', 
        currentValue: props.currentTheme.mode === 'dark' ? '#7C2D12' : '#FFFAF7',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FFFAF7' : '#7C2D12'
      },
      { 
        name: '50', 
        currentValue: props.currentTheme.mode === 'dark' ? '#9A3412' : '#FFF8F3',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FFF8F3' : '#9A3412'
      },
      { 
        name: '100', 
        currentValue: props.currentTheme.mode === 'dark' ? '#C2410C' : '#FFF3EC',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FFF3EC' : '#C2410C'
      },
      { 
        name: '200', 
        currentValue: props.currentTheme.mode === 'dark' ? '#EA580C' : '#FFE2CF',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FFE2CF' : '#EA580C'
      },
      { 
        name: '300', 
        currentValue: props.currentTheme.mode === 'dark' ? '#F97316' : '#FFC59E',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FFC59E' : '#F97316'
      },
      { 
        name: '400', 
        currentValue: props.currentTheme.mode === 'dark' ? '#FF8B3D' : '#FF8B3D',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FF8B3D' : '#FF8B3D'
      },
      { 
        name: '500', 
        currentValue: props.currentTheme.mode === 'dark' ? '#FF8B3D' : '#FF8B3D',
        oppositeValue: props.currentTheme.mode === 'dark' ? '#FF8B3D' : '#FF8B3D'
      }
    ]
  }
})
</script>

<style scoped>
.theme-comparison-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--spacing-8);
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.page-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.page-description {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.section {
  margin-bottom: var(--spacing-16);
}

.section-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.section-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-8);
}

.current-theme-info {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  text-align: center;
}

.correspondences-grid {
  display: grid;
  gap: var(--spacing-8);
}

.correspondence-group {
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
  text-align: center;
}

.correspondence-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.correspondence-item {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-muted);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-4);
}

.variable-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-4);
}

.css-variable {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  background: var(--theme-colors-surface-overlay);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-primary);
  flex: 1;
}

.copy-btn {
  opacity: 0;
  transition: opacity 0.2s ease;
  min-width: 32px !important;
  min-height: 24px !important;
  padding: var(--spacing-1) !important;
}

.correspondence-item:hover .copy-btn {
  opacity: 1;
}

.theme-values {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--spacing-4);
  align-items: center;
}

.theme-value {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.theme-value.opposite {
  opacity: 0.7;
}

.color-preview {
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--theme-colors-border-default);
  box-shadow: var(--shadow-sm);
}

.value-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.mode-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-secondary);
  text-transform: uppercase;
}

.hex-value {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
}

.arrow {
  font-size: var(--font-size-lg);
  text-align: center;
}

.explanation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-6);
}

.explanation-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.card-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.code-example {
  margin-bottom: var(--spacing-4);
}

.code-example h4 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-2);
}

.code-example pre {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-muted);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-3);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-primary);
  overflow-x: auto;
  margin: 0;
}

.result-example {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.result-example h4 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
  margin: var(--spacing-3) 0 var(--spacing-2) 0;
}

.theme-result {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2);
  background: var(--theme-colors-surface-background);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
}

.theme-name {
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
  min-width: 50px;
}

.theme-result code {
  font-family: var(--font-family-mono);
  background: var(--theme-colors-surface-overlay);
  padding: var(--spacing-1);
  border-radius: var(--border-radius-sm);
  color: var(--theme-colors-text-primary);
  flex: 1;
}

.equals {
  color: var(--theme-colors-text-secondary);
}

.hex-result {
  font-family: var(--font-family-mono);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
  min-width: 70px;
}

@media (max-width: 768px) {
  .theme-comparison-page {
    padding: var(--spacing-4);
  }

  .theme-values {
    grid-template-columns: 1fr;
    gap: var(--spacing-3);
    text-align: center;
  }

  .arrow {
    transform: rotate(90deg);
  }

  .explanation-grid {
    grid-template-columns: 1fr;
  }

  .theme-result {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
}
</style> 