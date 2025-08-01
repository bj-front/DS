<template>
  <div class="icon-showcase">
    <h2>🎯 Composant Icon</h2>
    <p>Démonstration du composant Icon avec {{ totalIcons }} icônes SVG et changement de couleurs.</p>

    <!-- Section Tailles -->
    <div class="showcase-section">
      <h3>📏 Tailles disponibles</h3>
      <div class="size-grid">
        <div v-for="size in iconSizes" :key="size.key" class="size-item">
          <div class="icon-container">
            <Icon :name="'User'" :size="size.key" color="primary" />
          </div>
          <div class="size-info">
            <h4>{{ size.name }}</h4>
            <code>&lt;Icon name="User" size="{{ size.key }}" /&gt;</code>
            <p class="dimensions">{{ size.dimensions }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Couleurs -->
    <div class="showcase-section">
      <h3>🎨 Couleurs disponibles</h3>
      <div class="color-grid">
        <div v-for="color in iconColors" :key="color.key" class="color-item">
          <div class="icon-container" :class="color.background">
            <Icon name="Star" size="lg" :color="color.key" />
          </div>
          <div class="color-info">
            <h4>{{ color.name }}</h4>
            <code>&lt;Icon color="{{ color.key }}" /&gt;</code>
            <p class="description">{{ color.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Icônes populaires -->
    <div class="showcase-section">
      <h3>⭐ Icônes populaires</h3>
      <div class="popular-grid">
        <div v-for="icon in popularIcons" :key="icon.name" class="popular-item">
          <div class="icon-container">
            <Icon :name="icon.name" size="lg" color="primary" />
          </div>
          <div class="icon-info">
            <h4>{{ icon.displayName }}</h4>
            <code>&lt;Icon name="{{ icon.name }}" /&gt;</code>
            <p class="category">Catégorie: {{ icon.category }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section par catégories -->
    <div class="showcase-section">
      <h3>📂 Icônes par catégories</h3>

      <div class="category-selector">
        <button
          v-for="category in Object.keys(iconsByCategory)"
          :key="category"
          @click="selectedCategory = category"
          class="category-btn"
          :class="{ 'active': selectedCategory === category }"
        >
          {{ categoryLabels[category] || category }} ({{ iconsByCategory[category].length }})
        </button>
      </div>

      <div class="category-icons">
        <div v-for="icon in iconsByCategory[selectedCategory]" :key="icon" class="category-icon-item">
          <div class="icon-container">
            <Icon :name="icon" size="md" color="primary" />
          </div>
          <code class="icon-name">{{ icon }}</code>
        </div>
      </div>
    </div>

    <!-- Section Cas d'usage -->
    <div class="showcase-section">
      <h3>💼 Cas d'usage</h3>
      <div class="use-cases">
        <div class="use-case">
          <h4>🔘 Boutons avec icônes</h4>
          <div class="example-container">
            <button class="example-btn primary">
              <Icon name="Save" size="sm" color="current" />
              Sauvegarder
            </button>
            <button class="example-btn secondary">
              <Icon name="Copy" size="sm" color="current" />
              Copier
            </button>
            <button class="example-btn danger">
              <Icon name="Trash" size="sm" color="current" />
              Supprimer
            </button>
          </div>
        </div>

        <div class="use-case">
          <h4>📊 Indicateurs d'état</h4>
          <div class="example-container">
            <div class="status-item success">
              <Icon name="Done" size="sm" color="success" />
              <span>Succès</span>
            </div>
            <div class="status-item warning">
              <Icon name="Info" size="sm" color="warning" />
              <span>Attention</span>
            </div>
            <div class="status-item danger">
              <Icon name="Critical" size="sm" color="danger" />
              <span>Erreur</span>
            </div>
          </div>
        </div>

        <div class="use-case">
          <h4>🧭 Navigation</h4>
          <div class="example-container">
            <div class="nav-item">
              <Icon name="Home" size="sm" color="primary" />
              <span>Accueil</span>
            </div>
            <div class="nav-item">
              <Icon name="User" size="sm" color="primary" />
              <span>Profil</span>
            </div>
            <div class="nav-item">
              <Icon name="Setting_line" size="sm" color="primary" />
              <span>Paramètres</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Code d'exemple -->
    <div class="showcase-section">
      <h3>💻 Exemples de code</h3>
      <div class="code-examples">
        <div class="code-example">
          <h4>Utilisation basique</h4>
          <pre class="code-block"><code>&lt;template&gt;
  &lt;!-- Icône simple --&gt;
  &lt;Icon name="User" /&gt;

  &lt;!-- Avec taille et couleur --&gt;
  &lt;Icon name="Star" size="lg" color="warning" /&gt;

  &lt;!-- Dans un bouton --&gt;
  &lt;button&gt;
    &lt;Icon name="Save" size="sm" /&gt;
    Sauvegarder
  &lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Icon } from '@/components/atoms/Icon'
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '../atoms/Icon'
import type { IconSize, IconColor } from '../atoms/Icon'

// État réactif
const selectedCategory = ref<string>('general')
const totalIcons = 495

// Définition des tailles
const iconSizes: Array<{
  key: IconSize
  name: string
  dimensions: string
}> = [
  { key: 'xs', name: 'Extra Small', dimensions: '16×16px' },
  { key: 'sm', name: 'Small', dimensions: '20×20px' },
  { key: 'md', name: 'Medium', dimensions: '24×24px' },
  { key: 'lg', name: 'Large', dimensions: '32×32px' },
  { key: 'xl', name: 'Extra Large', dimensions: '48×48px' }
]

// Définition des couleurs
const iconColors: Array<{
  key: IconColor
  name: string
  description: string
  background: string
}> = [
  {
    key: 'current',
    name: 'Current',
    description: 'Hérite de la couleur du parent',
    background: 'neutral'
  },
  {
    key: 'primary',
    name: 'Primary',
    description: 'Couleur principale de la marque',
    background: 'neutral'
  },
  {
    key: 'secondary',
    name: 'Secondary',
    description: 'Couleur secondaire de la marque',
    background: 'neutral'
  },
  {
    key: 'success',
    name: 'Success',
    description: 'Pour les états de succès',
    background: 'neutral'
  },
  {
    key: 'warning',
    name: 'Warning',
    description: 'Pour les alertes et avertissements',
    background: 'neutral'
  },
  {
    key: 'danger',
    name: 'Danger',
    description: 'Pour les erreurs et actions destructives',
    background: 'neutral'
  },
  {
    key: 'neutral',
    name: 'Neutral',
    description: 'Couleur neutre gris',
    background: 'neutral'
  }
]

// Icônes populaires
const popularIcons = [
  { name: 'User', displayName: 'Utilisateur', category: 'users' },
  { name: 'Home', displayName: 'Accueil', category: 'general' },
  { name: 'Search', displayName: 'Recherche', category: 'general' },
  { name: 'Star', displayName: 'Étoile', category: 'feedback' },
  { name: 'Save', displayName: 'Sauvegarder', category: 'general' },
  { name: 'Copy', displayName: 'Copier', category: 'general' },
  { name: 'Trash', displayName: 'Corbeille', category: 'general' },
  { name: 'Done', displayName: 'Terminé', category: 'general' },
  { name: 'Info', displayName: 'Information', category: 'general' },
  { name: 'Setting_line', displayName: 'Paramètres', category: 'settings' },
  { name: 'Time', displayName: 'Temps', category: 'time' },
  { name: 'Critical', displayName: 'Critique', category: 'general' }
]

// Icônes organisées par catégories (échantillon)
const iconsByCategory: Record<string, string[]> = {
  general: ['User', 'Home', 'Search', 'Star', 'Save', 'Copy', 'Trash', 'Done', 'Info', 'Critical', 'Book', 'Camera', 'Chat', 'Cloud', 'Database', 'Eye', 'Filter', 'Folder', 'Gift', 'Heart', 'Key', 'Lock', 'Message', 'Money', 'Music', 'Print', 'Question'],
  navigation: ['Up', 'Sort', 'Sort_up', 'Sort_down', 'Sort_arrow', 'Expand_left', 'Expand_right', 'Refund_back', 'Refund_forward', 'Navigate'],
  users: ['User', 'User_add', 'User_alt', 'User_box', 'User_cicrle', 'User_scan'],
  time: ['Time', 'Time_sleep', 'Time_progress', 'Time_atack', 'Time_del_light', 'watch', 'watch_alt', 'Hourglass'],
  settings: ['Setting_line', 'Setting_alt_line', 'Setting_vert', 'Widget', 'Widget_add', 'Widget_alt'],
  media: ['Video', 'Video_file', 'Sound', 'sound_max', 'sound_min', 'sound_mute', 'Music'],
  files: ['Upload', 'Folder', 'Folder_add', 'Folder_open', 'Paper', 'Text'],
  commerce: ['Shop', 'Wallet', 'Wallet_alt', 'Ticket', 'Ticket_alt', 'Money'],
  weather: ['Sun', 'Storm', 'Rain', 'Moon'],
  feedback: ['Star', 'thumb_up'],
  text: ['Text', 'typo'],
  location: ['world', 'world_alt', 'Compass', 'Road']
}

// Labels des catégories
const categoryLabels: Record<string, string> = {
  general: 'Général',
  navigation: 'Navigation',
  users: 'Utilisateurs',
  time: 'Temps',
  settings: 'Paramètres',
  media: 'Média',
  files: 'Fichiers',
  commerce: 'Commerce',
  weather: 'Météo',
  feedback: 'Feedback',
  text: 'Texte',
  location: 'Localisation'
}
</script>

<style scoped>
.icon-showcase {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h2, h3, h4 {
  color: var(--theme-colors-brand-primary-600);
}

h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

h4 {
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

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  border: 1px dashed var(--theme-colors-common-slate-300);
}

.icon-container.neutral {
  background: var(--theme-colors-common-slate-25);
}

.size-info code, .color-info code, .icon-info code {
  background: var(--theme-colors-common-slate-100);
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  display: block;
  margin: 0.5rem 0;
}

.dimensions, .description, .category {
  color: var(--theme-colors-common-slate-600);
  font-size: 0.875rem;
  margin: 0;
}

/* Section Couleurs */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.color-item {
  text-align: center;
  padding: 1.5rem;
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-common-slate-50);
}

/* Section Icônes populaires */
.popular-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.popular-item {
  text-align: center;
  padding: 1rem;
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-surface-background);
  transition: transform 0.2s ease;
}

.popular-item:hover {
  transform: translateY(-2px);
}

/* Section Catégories */
.category-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.category-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--theme-colors-common-slate-300);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-surface-background);
  color: var(--theme-colors-common-slate-700);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.category-btn:hover {
  background: var(--theme-colors-common-slate-50);
}

.category-btn.active {
  background: var(--theme-colors-brand-primary-100);
  color: var(--theme-colors-brand-primary-700);
  border-color: var(--theme-colors-brand-primary-300);
}

.category-icons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

.category-icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-surface-background);
  transition: transform 0.2s ease;
}

.category-icon-item:hover {
  transform: translateY(-1px);
}

.icon-name {
  font-size: 0.75rem;
  margin-top: 0.5rem;
  text-align: center;
  word-break: break-all;
}

/* Section Cas d'usage */
.use-cases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.use-case {
  padding: 1.5rem;
  border: 1px solid var(--theme-colors-common-slate-200);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-surface-background);
}

.example-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.example-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.example-btn.primary {
  background: var(--theme-colors-brand-primary-600);
  color: white;
}

.example-btn.secondary {
  background: var(--theme-colors-common-slate-200);
  color: var(--theme-colors-common-slate-700);
}

.example-btn.danger {
  background: var(--theme-colors-common-danger-600);
  color: white;
}

.status-item, .nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
}

.status-item.success {
  color: var(--theme-colors-common-succeed-700);
}

.status-item.warning {
  color: var(--theme-colors-common-warning-700);
}

.status-item.danger {
  color: var(--theme-colors-common-danger-700);
}

.nav-item {
  color: var(--theme-colors-brand-primary-700);
}

/* Section Code */
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
  .category-selector {
    justify-content: center;
  }

  .category-icons {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }

  .use-cases {
    grid-template-columns: 1fr;
  }
}
</style>
