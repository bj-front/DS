<template>
  <ComponentLayout title="Icônes" icon="Star" type="Components">
    <template #examples>
      <div class="intro">
        <p>
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
          
          <label class="control-label">Épaisseur du trait :</label>
          <div class="stroke-width-controls">
            <button
              v-for="width in strokeWidthOptions"
              :key="width"
              @click="selectedStrokeWidth = width"
              :class="['stroke-btn', { 'active': selectedStrokeWidth === width }]"
            >
              {{ width }}
            </button>
          </div>
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
              :stroke-width="selectedStrokeWidth"
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
        <Icon name="Search" size="large" color="neutral" :stroke-width="selectedStrokeWidth" />
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
            <Icon :name="selectedIcon" size="large" :color="selectedColor" :stroke-width="selectedStrokeWidth" />
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
                <Icon :name="selectedIcon" size="medium" :color="color" :stroke-width="selectedStrokeWidth" />
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
          
          <!-- Exemple avec stroke-width -->
          <div class="code-example">
            <h5>Avec épaisseur de trait personnalisée</h5>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Icon name="{{ selectedIcon }}" :stroke-width="{{ selectedStrokeWidth }}" /&gt;</code>
                <Button
                  variant="ghost"
                  size="small"
                  @click="copyToClipboard(`&lt;Icon name=&quot;${selectedIcon}&quot; :stroke-width=&quot;${selectedStrokeWidth}&quot; /&gt;`)"
                  class="copy-btn"
                  aria-label="Copier le code avec stroke-width"
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
                <code>&lt;Icon name="{{ selectedIcon }}" size="{{ selectedSize }}" color="{{ selectedColor }}" :stroke-width="{{ selectedStrokeWidth }}" alt="Description de l'icône" /&gt;</code>
                <Button
                  variant="ghost"
                  size="small"
                  @click="copyToClipboard(`&lt;Icon name=&quot;${selectedIcon}&quot; size=&quot;${selectedSize}&quot; color=&quot;${selectedColor}&quot; :stroke-width=&quot;${selectedStrokeWidth}&quot; alt=&quot;Description de l'icône&quot; /&gt;`)"
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
              <Icon name="Shopping-basket" :size="size" :stroke-width="selectedStrokeWidth" />
              <span class="size-label">{{ size }}</span>
            </div>
          </div>
        </div>
        
        <div class="guide-item">
          <h3>🌈 Couleurs disponibles</h3>
          <div class="color-examples">
            <div v-for="color in colorOptions" :key="color" class="color-example">
              <Icon name="Smile" :color="color" size="medium" :stroke-width="selectedStrokeWidth" />
              <span class="color-label">{{ color }}</span>
            </div>
          </div>
        </div>
        
        <div class="guide-item">
          <h3>✏️ Épaisseur du trait</h3>
          <div class="stroke-examples">
            <div v-for="width in strokeWidthOptions" :key="width" class="stroke-example">
              <Icon name="Settings" :stroke-width="width" size="medium" color="primary" />
              <span class="stroke-label">{{ width }}px</span>
            </div>
          </div>
          <p class="stroke-description">
            Contrôlez l'épaisseur du trait des icônes avec la propriété <code>stroke-width</code>.
          </p>
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
    </template>

    <template #documentation>
      <div class="documentation">
        <h3>🎯 Composant Icon</h3>
        <p>
          Le composant Icon d'Utopia offre un accès unifié à une bibliothèque de plus de {{ totalIcons }} icônes optimisées. 
          Chaque icône est vectorielle, responsive et personnalisable.
        </p>
        
        <h4>🔌 Props disponibles</h4>
        <ul>
          <li><strong>name</strong> : string (nom de l'icône, ex: "User", "Search")</li>
          <li><strong>size</strong> : 'small' | 'medium' | 'large' (taille de l'icône)</li>
          <li><strong>color</strong> : 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'current'</li>
          <li><strong>stroke-width</strong> : number (1, 2, 3 - épaisseur du trait)</li>
          <li><strong>alt</strong> : string (description pour l'accessibilité)</li>
        </ul>
        
        <h4>✨ Fonctionnalités</h4>
        <ul>
          <li><strong>Bibliothèque complète</strong> : {{ totalIcons }}+ icônes disponibles</li>
          <li><strong>Personnalisables</strong> : Taille, couleur et épaisseur de trait ajustables</li>
          <li><strong>Optimisées</strong> : Format SVG pour une qualité parfaite à toutes les tailles</li>
          <li><strong>Accessibles</strong> : Support complet des technologies d'assistance</li>
          <li><strong>Cohérentes</strong> : Style unifié avec le design system</li>
        </ul>
        
        <h4>📋 Exemples d'utilisation</h4>
        <pre class="code-example">
&lt;template&gt;
  &lt;!-- Utilisation de base --&gt;
  &lt;Icon name="User" /&gt;
  
  &lt;!-- Avec taille personnalisée --&gt;
  &lt;Icon name="Search" size="large" /&gt;
  
  &lt;!-- Avec couleur --&gt;
  &lt;Icon name="Alert" color="warning" /&gt;
  
  &lt;!-- Exemple complet --&gt;
  &lt;Icon 
    name="Settings" 
    size="medium" 
    color="primary" 
    :stroke-width="2"
    alt="Paramètres de l'application" 
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Icon } from '@club-employes/utopia'
&lt;/script&gt;</pre>
        
        <h4>♿ Accessibilité</h4>
        <ul>
          <li>Utilisez toujours l'attribut <code>alt</code> pour décrire l'icône</li>
          <li>Préférez <code>color="current"</code> pour hériter de la couleur du texte parent</li>
          <li>Vérifiez le contraste suffisant avec l'arrière-plan</li>
        </ul>
        
        <h4>🎨 Personnalisation</h4>
        <ul>
          <li><strong>Tailles</strong> : small (16px), medium (20px), large (24px)</li>
          <li><strong>Couleurs</strong> : Utilise la palette du design system</li>
          <li><strong>Épaisseur</strong> : 1px (fine), 2px (normale), 3px (épaisse)</li>
        </ul>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import ComponentLayout from '@/components/layouts/ComponentLayout.vue'
import { Button, Icon } from '@club-employes/utopia'
import { computed, onMounted, ref } from 'vue'

// Types
type IconSize = 'small' | 'medium' | 'large'
type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'current'

// État réactif
const searchQuery = ref('')
const selectedSize = ref<IconSize>('medium')
const selectedColor = ref<IconColor>('current')
const selectedStrokeWidth = ref<number>(1)
const selectedIcon = ref<string | null>(null)
const allIcons = ref<string[]>([])

// Options
const sizeOptions: IconSize[] = ['small', 'medium', 'large']
const colorOptions: IconColor[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral', 'current']
const strokeWidthOptions: number[] = [1, 2, 3]

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
  selectedSize.value = 'medium'
  selectedStrokeWidth.value = 1
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
              'Arrow_right_long', 'Arrow_top_long', 'Atom', 'Back', 'Bag', 'Shopping-basket', 'Bell', 'Book', 
      'Bookmark', 'Box', 'Bug', 'Calendar', 'Camera', 'Cancel', 'Chart', 'Chat', 'Check_ring', 
      'Clock', 'Close_round', 'Cloud', 'Copy', 'CPU', 'Database', 'Desktop', 'Direction', 
              'Done', 'Download_circle', 'Smile', 'Home', 'Lightning', 'Link', 'Mobile', 'Phone', 
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
/* Introduction */
.intro {
  margin-bottom: var(--spacing-8);
  text-align: center;
}

.intro p {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
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

.stroke-width-controls {
  display: flex;
  gap: var(--spacing-1);
}

.stroke-btn {
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid var(--theme-colors-border-default);
  background: var(--theme-colors-surface-background);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: var(--font-size-sm);
  min-width: 40px;
}

.size-btn:hover,
.stroke-btn:hover {
  border-color: var(--theme-colors-primary-500);
}

.size-btn.active,
.stroke-btn.active {
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
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
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
  margin-bottom: var(--spacing-4);
}

.code-with-copy {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-2);
}

.code-with-copy code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
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
  border-color: var(--theme-colors-primary);
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
.color-label,
.stroke-label {
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  text-transform: capitalize;
}

.stroke-label {
  font-family: var(--font-family-mono);
}

.stroke-examples {
  display: flex;
  gap: var(--spacing-4);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-3);
}

.stroke-example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-sm);
  background: var(--theme-colors-primary-25);
}

.stroke-description {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  line-height: 1.5;
  margin: 0;
}

.stroke-description code {
  font-family: var(--font-family-mono);
  background: var(--theme-colors-slate-100);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  font-size: 0.9em;
}

/* Documentation */
.documentation {
  color: var(--theme-colors-text-secondary);
}

.documentation h3 {
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.documentation h4 {
  color: var(--theme-colors-text-primary);
  margin-top: var(--spacing-6);
  margin-bottom: var(--spacing-3);
}

.documentation ul {
  margin: var(--spacing-4) 0;
  padding-left: var(--spacing-6);
}

.documentation li {
  margin-bottom: var(--spacing-2);
}

.documentation code {
  background: var(--theme-colors-surface-overlay);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
}

.documentation .code-example {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--radius-md);
  padding: var(--spacing-4);
  margin: var(--spacing-4) 0;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  line-height: 1.5;
  overflow-x: auto;
}

/* Responsive */
@media (max-width: 768px) {
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
  .color-examples,
  .stroke-examples {
    justify-content: center;
  }
  
  .controls-section {
    padding: var(--spacing-4);
  }
}

@media (max-width: 480px) {
  .icons-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  
  .search-controls {
    gap: var(--spacing-3);
  }
  
  .controls-section {
    padding: var(--spacing-3);
  }
}
</style>