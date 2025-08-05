<template>
  <div class="icons-page">
    <div class="page-header">
      <h1 class="page-title">🎯 Icônes</h1>
      <p class="page-description">
        Explorez la bibliothèque complète de {{ totalIcons }} icônes disponibles dans le design system.
        Chaque icône est optimisée et prête à être utilisée dans vos projets.
      </p>
    </div>

    <!-- Contrôles de recherche et filtres -->
    <section class="controls-section">
      <div class="search-controls">
        <div class="search-input-container">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher une icône... (ex: 'user', 'arrow', 'home')"
            class="search-input"
          />
          <Icon name="Search" class="search-icon" />
        </div>
        
        <div class="filter-controls">
          <label class="control-label">Taille :</label>
          <div class="size-buttons">
            <button
              v-for="size in sizeOptions"
              :key="size"
              @click="selectedSize = size"
              :class="['size-btn', { 'active': selectedSize === size }]"
            >
              {{ size }}
            </button>
          </div>
          
          <label class="control-label">Couleur :</label>
          <select v-model="selectedColor" class="color-select">
            <option v-for="color in colorOptions" :key="color" :value="color">
              {{ color }}
            </option>
          </select>
        </div>
      </div>
      
      <div class="results-info">
        <span class="results-count">{{ filteredIcons.length }} icône(s) trouvée(s)</span>
        <Button
          v-if="searchQuery || selectedColor !== 'current'"
          variant="ghost"
          size="small"
          @click="resetFilters"
        >
          Réinitialiser les filtres
        </Button>
      </div>
    </section>

    <!-- Grille d'icônes -->
    <section class="icons-section">
      <div class="icons-grid">
        <div
          v-for="iconName in filteredIcons"
          :key="iconName"
          class="icon-card"
          @click="selectIcon(iconName)"
          :class="{ 'selected': selectedIcon === iconName }"
        >
          <div class="icon-preview">
            <Icon
              :name="iconName"
              :size="selectedSize"
              :color="selectedColor"
            />
          </div>
          <div class="icon-info">
            <h4 class="icon-name">{{ formatIconName(iconName) }}</h4>
            <p class="icon-filename">{{ iconName }}.svg</p>
          </div>
        </div>
      </div>
      
      <!-- Message si aucune icône trouvée -->
      <div v-if="filteredIcons.length === 0" class="no-results">
        <Icon name="Search" size="large" color="neutral" />
        <h3>Aucune icône trouvée</h3>
        <p>Essayez d'ajuster vos critères de recherche ou de réinitialiser les filtres.</p>
      </div>
    </section>

    <!-- Panneau de détails de l'icône sélectionnée -->
    <section v-if="selectedIcon" class="icon-details">
      <div class="details-header">
        <h2 class="details-title">🔍 Détails de l'icône</h2>
        <Button
          variant="ghost"
          size="small"
          @click="selectedIcon = null"
          aria-label="Fermer les détails"
        >
          ✕
        </Button>
      </div>
      
      <div class="details-content">
        <div class="details-preview">
          <div class="preview-large">
            <Icon :name="selectedIcon" size="large" :color="selectedColor" />
          </div>
          <h3 class="selected-icon-name">{{ formatIconName(selectedIcon) }}</h3>
          <p class="selected-icon-filename">{{ selectedIcon }}.svg</p>
        </div>

        <!-- Variantes de couleurs -->
        <div class="color-variants">
          <h4 class="variants-title">🌈 Couleurs disponibles</h4>
          <div class="color-grid">
            <div 
              v-for="color in colorOptions" 
              :key="color"
              class="color-variant"
              @click="selectedColor = color"
              :class="{ 'active': selectedColor === color }"
            >
              <div class="variant-preview">
                <Icon :name="selectedIcon" size="medium" :color="color" />
              </div>
              <div class="variant-info">
                <span class="variant-name">{{ formatColorName(color) }}</span>
                <code class="variant-code">{{ color }}</code>
              </div>
            </div>
          </div>
        </div>
        
        <div class="usage-examples">
          <h4 class="usage-title">💻 Utilisation</h4>
          
          <!-- Exemple de base -->
          <div class="code-example">
            <h5>Utilisation de base</h5>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Icon name="{{ selectedIcon }}" /&gt;</code>
                <Button
                  variant="ghost"
                  size="small"
                  @click="copyToClipboard(`&lt;Icon name=&quot;${selectedIcon}&quot; /&gt;`)"
                  class="copy-btn"
                  aria-label="Copier le code de base"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
          
          <!-- Exemple avec taille -->
          <div class="code-example">
            <h5>Avec taille personnalisée</h5>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Icon name="{{ selectedIcon }}" size="{{ selectedSize }}" /&gt;</code>
                <Button
                  variant="ghost"
                  size="small"
                  @click="copyToClipboard(`&lt;Icon name=&quot;${selectedIcon}&quot; size=&quot;${selectedSize}&quot; /&gt;`)"
                  class="copy-btn"
                  aria-label="Copier le code avec taille"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
          
          <!-- Exemple avec couleur -->
          <div class="code-example">
            <h5>Avec couleur personnalisée</h5>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Icon name="{{ selectedIcon }}" color="{{ selectedColor }}" /&gt;</code>
                <Button
                  variant="ghost"
                  size="small"
                  @click="copyToClipboard(`&lt;Icon name=&quot;${selectedIcon}&quot; color=&quot;${selectedColor}&quot; /&gt;`)"
                  class="copy-btn"
                  aria-label="Copier le code avec couleur"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
          
          <!-- Exemple complet -->
          <div class="code-example">
            <h5>Exemple complet</h5>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Icon name="{{ selectedIcon }}" size="{{ selectedSize }}" color="{{ selectedColor }}" alt="Description de l'icône" /&gt;</code>
                <Button
                  variant="ghost"
                  size="small"
                  @click="copyToClipboard(`&lt;Icon name=&quot;${selectedIcon}&quot; size=&quot;${selectedSize}&quot; color=&quot;${selectedColor}&quot; alt=&quot;Description de l'icône&quot; /&gt;`)"
                  class="copy-btn"
                  aria-label="Copier le code complet"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Guide d'utilisation -->
    <section class="usage-guide">
      <h2 class="section-title">📚 Guide d'utilisation</h2>
      
      <div class="guide-content">
        <div class="guide-item">
          <h3>🎨 Tailles disponibles</h3>
          <div class="size-examples">
            <div v-for="size in sizeOptions" :key="size" class="size-example">
              <Icon name="Basket" :size="size" />
              <span class="size-label">{{ size }}</span>
            </div>
          </div>
        </div>
        
        <div class="guide-item">
          <h3>🌈 Couleurs disponibles</h3>
          <div class="color-examples">
            <div v-for="color in colorOptions" :key="color" class="color-example">
              <Icon name="Happy" :color="color" size="medium" />
              <span class="color-label">{{ color }}</span>
            </div>
          </div>
        </div>
        
        <div class="guide-item">
          <h3>♿ Accessibilité</h3>
          <p>
            Utilisez toujours l'attribut <code>alt</code> pour décrire l'icône :
          </p>
          <div class="code-snippet">
            <code>&lt;Icon name="User" alt="Profil utilisateur" /&gt;</code>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button, Icon } from '@club-employes/utopia'
import { computed, onMounted, ref } from 'vue'

// Types
type IconSize = 'small' | 'medium' | 'large'
type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'current'

// État réactif
const searchQuery = ref('')
const selectedSize = ref<IconSize>('medium')
const selectedColor = ref<IconColor>('current')
const selectedIcon = ref<string | null>(null)
const allIcons = ref<string[]>([])

// Options
const sizeOptions: IconSize[] = ['small', 'medium', 'large']
const colorOptions: IconColor[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral', 'current']

// Computed
const totalIcons = computed(() => allIcons.value.length)

const filteredIcons = computed(() => {
  let filtered = allIcons.value

  // Filtrer par recherche
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(iconName =>
      iconName.toLowerCase().includes(query) ||
      formatIconName(iconName).toLowerCase().includes(query)
    )
  }

  return filtered
})

// Méthodes
const formatIconName = (iconName: string): string => {
  return iconName
    .replace(/[-_]/g, ' ')
    .replace(/\.svg$/, '')
    .replace(/\b\w/g, l => l.toUpperCase())
}

const formatColorName = (color: string): string => {
  const colorNames: Record<string, string> = {
    primary: 'Primary',
    secondary: 'Secondary', 
    success: 'Success',
    warning: 'Warning',
    danger: 'Danger',
    neutral: 'Neutral',
    current: 'Current'
  }
  return colorNames[color] ?? color
}

const selectIcon = (iconName: string): void => {
  selectedIcon.value = iconName
}

const resetFilters = (): void => {
  searchQuery.value = ''
  selectedColor.value = 'current'
}

const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text)
    // Optionnel : afficher une notification de succès
  } catch (err) {
    console.error('Impossible de copier le texte: ', err)
  }
}

// Charger la liste des icônes disponibles
const loadAvailableIcons = async (): Promise<void> => {
  try {
    // Charger la liste des icônes depuis le design system
    const response = await fetch('/icons-list.json')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    allIcons.value = data.icons ?? []
    
    console.log(`🎯 ${data.count} icônes chargées depuis le design system`)
  } catch (error) {
    console.error('Erreur lors du chargement des icônes:', error)
    // Fallback: utiliser une liste d'icônes de base en cas d'erreur
    allIcons.value = [
      'Add_round', 'Alarm', 'Angry', 'Archive_alt_big', 'Arrow_down_long', 'Arrow_left_long', 
      'Arrow_right_long', 'Arrow_top_long', 'Atom', 'Back', 'Bag', 'Basket', 'Bell', 'Book', 
      'Bookmark', 'Box', 'Bug', 'Calendar', 'Camera', 'Cancel', 'Chart', 'Chat', 'Check_ring', 
      'Clock', 'Close_round', 'Cloud', 'Copy', 'CPU', 'Database', 'Desktop', 'Direction', 
      'Done', 'Download_circle', 'Happy', 'Home', 'Lightning', 'Link', 'Mobile', 'Phone', 
      'Search', 'User', 'Video', 'Wallet', 'Widget'
    ]
  }
}

// Lifecycle
onMounted(() => {
  loadAvailableIcons()
})
</script>

<style scoped>
.icons-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-8);
}

/* Header */
.page-header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.page-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin: 0 0 var(--spacing-4) 0;
}

.page-description {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Controls */
.controls-section {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-8);
}

.search-controls {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-4);
}

.search-input-container {
  position: relative;
  flex: 1;
}

.search-input {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4) var(--spacing-3) var(--spacing-12);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  transition: border-color 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--theme-colors-primary-500);
  box-shadow: 0 0 0 3px var(--theme-colors-primary-100);
}

.search-icon {
  position: absolute;
  left: var(--spacing-3);
  top: 50%;
  transform: translateY(-50%);
  color: var(--theme-colors-text-secondary);
}

.filter-controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  flex-wrap: wrap;
}

.control-label {
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
  white-space: nowrap;
}

.size-buttons {
  display: flex;
  gap: var(--spacing-1);
}

.size-btn {
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid var(--theme-colors-border-default);
  background: var(--theme-colors-surface-background);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: var(--font-size-sm);
  text-transform: capitalize;
}

.size-btn:hover {
  border-color: var(--theme-colors-primary-500);
}

.size-btn.active {
  background: var(--theme-colors-primary-500);
  border-color: var(--theme-colors-primary-500);
  color: white;
}

.color-select {
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-sm);
  background: var(--theme-colors-surface-background);
  font-size: var(--font-size-sm);
  text-transform: capitalize;
}

.results-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--theme-colors-border-default);
}

.results-count {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
}

/* Icons Grid */
.icons-section {
  margin-bottom: var(--spacing-12);
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-4);
}

.icon-card {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-4);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.icon-card:hover {
  border-color: var(--theme-colors-primary-300);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon-card.selected {
  border-color: var(--theme-colors-primary-500);
  background: var(--theme-colors-primary-50);
}

.icon-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-bottom: var(--spacing-3);
}

.icon-name {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
  margin: 0 0 var(--spacing-1) 0;
}

.icon-filename {
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  font-family: var(--font-family-mono);
  margin: 0;
}

/* No Results */
.no-results {
  text-align: center;
  padding: var(--spacing-12);
  color: var(--theme-colors-text-secondary);
}

.no-results h3 {
  margin: var(--spacing-4) 0;
  color: var(--theme-colors-text-primary);
}

/* Icon Details */
.icon-details {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-8);
}

.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-6);
}

.details-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin: 0;
}

.details-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-8);
}

.details-preview {
  text-align: center;
}

.preview-large {
  background: var(--theme-colors-primary-25);
  border: 1px solid var(--theme-colors-primary-200);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-8);
  margin-bottom: var(--spacing-4);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
}

.selected-icon-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin: 0 0 var(--spacing-2) 0;
}

.selected-icon-filename {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  font-family: var(--font-family-mono);
  margin: 0;
}

.usage-examples {
  space-y: var(--spacing-4);
}

.usage-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin: 0 0 var(--spacing-4) 0;
}

.code-example {
  margin-bottom: var(--spacing-4);
}

.code-example h5 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-secondary);
  margin: 0 0 var(--spacing-2) 0;
}

.code-snippet {
  background: var(--theme-colors-slate-50);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-3);
}

.code-with-copy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-2);
}

.code-with-copy code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
  flex: 1;
  word-break: break-all;
}

.copy-btn {
  min-width: 36px;
  flex-shrink: 0;
}

/* Variantes de couleurs */
.color-variants {
  margin: var(--spacing-6) 0;
}

.variants-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin: 0 0 var(--spacing-4) 0;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-3);
}

.color-variant {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-3);
  border: 2px solid var(--theme-colors-border-subtle);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-background-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.color-variant:hover {
  border-color: var(--theme-colors-border-primary);
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}

.color-variant.active {
  border-color: var(--theme-colors-primary-500);
  background: var(--theme-colors-primary-25);
  box-shadow: var(--shadow-md);
}

.variant-preview {
  margin-bottom: var(--spacing-2);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
}

.variant-info {
  text-align: center;
}

.variant-name {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-1);
}

.variant-code {
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  background: var(--theme-colors-background-subtle);
  padding: 2px 6px;
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-mono);
}

.color-variant.active .variant-code {
  background: var(--theme-colors-primary-100);
  color: var(--theme-colors-primary-700);
}

/* Usage Guide */
.usage-guide {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.section-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin: 0 0 var(--spacing-6) 0;
}

.guide-content {
  display: grid;
  gap: var(--spacing-6);
}

.guide-item h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-primary);
  margin: 0 0 var(--spacing-3) 0;
}

.size-examples,
.color-examples {
  display: flex;
  gap: var(--spacing-4);
  flex-wrap: wrap;
}

.size-example,
.color-example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-sm);
  background: var(--theme-colors-primary-25);
}

.size-label,
.color-label {
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  text-transform: capitalize;
}

/* Responsive */
@media (max-width: 768px) {
  .icons-page {
    padding: var(--spacing-4);
  }
  
  .icons-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: var(--spacing-3);
  }
  
  .details-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
  
  .filter-controls {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .size-examples,
  .color-examples {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .icons-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .search-controls {
    gap: var(--spacing-3);
  }
}
</style>