<template>
  <ComponentLayout 
    :title="'DropDown'"
    :icon="'Droplet'"
    :type="'Atoms'"
  >
    <template #examples>
      <!-- États de base -->
      <div class="showcase-item">
        <h3>États de base</h3>
        <div class="example">
          <div class="component-grid">
            <div class="component-example">
              <label class="example-label">Default</label>
              <DropDown 
                v-model="defaultValue"
                :options="basicOptions"
                placeholder="Choisir une option"
                state="default"
              />
            </div>
            <div class="component-example">
              <label class="example-label">Error</label>
              <DropDown 
                v-model="errorValue"
                :options="basicOptions"
                placeholder="Choisir une option"
                state="error"
                message="Une erreur s'est produite"
              />
            </div>
            <div class="component-example">
              <label class="example-label">Valid</label>
              <DropDown 
                v-model="validValue"
                :options="basicOptions"
                placeholder="Choisir une option"
                state="valid"
                message="Sélection validée"
              />
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;DropDown 
  v-model="value"
  :options="options"
  placeholder="Choisir une option"
  state="default|error|valid"
  message="Message optionnel"
/&gt;</code></pre>
        </details>
      </div>

      <!-- Sélection simple vs multiple -->
      <div class="showcase-item">
        <h3>Sélection simple vs multiple</h3>
        <div class="example">
          <div class="component-grid">
            <div class="component-example">
              <label class="example-label">Sélection simple</label>
              <DropDown 
                v-model="singleValue"
                :options="extendedOptions"
                placeholder="Choisir une option"
                label="Option préférée"
              />
              <div class="selected-value">Valeur: {{ singleValue || 'Aucune' }}</div>
            </div>
            <div class="component-example">
              <label class="example-label">Sélection multiple</label>
              <DropDown 
                v-model="multipleValues"
                :options="extendedOptions"
                placeholder="Choisir des options"
                label="Options multiples"
                multiple
                clearable
              />
              <div class="selected-value">Valeurs: {{ multipleValues.length || 'Aucune' }}</div>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Simple --&gt;
&lt;DropDown 
  v-model="singleValue"
  :options="options"
  placeholder="Choisir une option"
/&gt;

&lt;!-- Multiple --&gt;
&lt;DropDown 
  v-model="multipleValues"
  :options="options"
  placeholder="Choisir des options"
  multiple
  clearable
/&gt;</code></pre>
        </details>
      </div>

      <!-- Fonctionnalités avancées -->
      <div class="showcase-item">
        <h3>Fonctionnalités avancées</h3>
        <div class="example">
          <div class="component-grid">
            <div class="component-example">
              <label class="example-label">Recherche</label>
              <DropDown 
                v-model="searchValue"
                :options="longOptions"
                placeholder="Rechercher et sélectionner"
                label="Avec recherche"
                searchable
                clearable
              />
            </div>
            <div class="component-example">
              <label class="example-label">Recherche + Multiple</label>
              <DropDown 
                v-model="searchMultipleValues"
                :options="longOptions"
                placeholder="Rechercher et sélectionner"
                label="Recherche multiple"
                searchable
                multiple
                clearable
              />
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;DropDown 
  v-model="value"
  :options="options"
  placeholder="Rechercher et sélectionner"
  searchable
  clearable
  multiple
/&gt;</code></pre>
        </details>
      </div>

      <!-- Tailles -->
      <div class="showcase-item">
        <h3>Tailles</h3>
        <div class="example">
          <div class="component-grid">
            <div class="component-example">
              <label class="example-label">Small</label>
              <DropDown 
                v-model="smallValue"
                :options="basicOptions"
                placeholder="Small dropdown"
                size="small"
              />
            </div>
            <div class="component-example">
              <label class="example-label">Medium (défaut)</label>
              <DropDown 
                v-model="mediumValue"
                :options="basicOptions"
                placeholder="Medium dropdown"
                size="medium"
              />
            </div>
            <div class="component-example">
              <label class="example-label">Large</label>
              <DropDown 
                v-model="largeValue"
                :options="basicOptions"
                placeholder="Large dropdown"
                size="large"
              />
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;DropDown size="small" ... /&gt;
&lt;DropDown size="medium" ... /&gt;
&lt;DropDown size="large" ... /&gt;</code></pre>
        </details>
      </div>

      <!-- États désactivés -->
      <div class="showcase-item">
        <h3>États désactivés et lecture seule</h3>
        <div class="example">
          <div class="component-grid">
            <div class="component-example">
              <label class="example-label">Disabled</label>
              <DropDown 
                v-model="disabledValue"
                :options="basicOptions"
                placeholder="Dropdown désactivé"
                label="Non disponible"
                disabled
              />
            </div>
            <div class="component-example">
              <label class="example-label">Readonly</label>
              <DropDown 
                v-model="readonlyValue"
                :options="basicOptions"
                placeholder="Dropdown en lecture seule"
                label="Lecture seule"
                readonly
              />
            </div>
            <div class="component-example">
              <label class="example-label">Avec options désactivées</label>
              <DropDown 
                v-model="disabledOptionsValue"
                :options="optionsWithDisabled"
                placeholder="Certaines options désactivées"
                label="Options mixtes"
              />
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;DropDown disabled ... /&gt;
&lt;DropDown readonly ... /&gt;

&lt;!-- Options avec disabled --&gt;
const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2', disabled: true }
]</code></pre>
        </details>
      </div>

      <!-- Cas d'usage réels -->
      <div class="showcase-item">
        <h3>Cas d'usage réels</h3>
        <div class="example">
          <div class="component-grid">
            <div class="component-example">
              <label class="example-label">Sélection de pays</label>
              <DropDown 
                v-model="countryValue"
                :options="countryOptions"
                placeholder="Sélectionner un pays"
                label="Pays de résidence"
                searchable
                clearable
              />
            </div>
            <div class="component-example">
              <label class="example-label">Sélection de compétences</label>
              <DropDown 
                v-model="skillsValues"
                :options="skillsOptions"
                placeholder="Choisir vos compétences"
                label="Compétences techniques"
                multiple
                searchable
                clearable
                maxHeight="150px"
              />
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Pays --&gt;
&lt;DropDown 
  v-model="country"
  :options="countries"
  searchable
  clearable
/&gt;

&lt;!-- Compétences multiples --&gt;
&lt;DropDown 
  v-model="skills"
  :options="skillsList"
  multiple
  searchable
  maxHeight="150px"
/&gt;</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <h2>Documentation DropDown</h2>
      
      <p>Le composant <strong>DropDown</strong> est un élément d'interface utilisateur flexible permettant la sélection d'une ou plusieurs options dans une liste déroulante. Il intègre les composants natifs d'Utopia pour une cohérence parfaite avec le design system.</p>
      
      <h3>🎯 Fonctionnalités principales</h3>
      
      <div class="doc-section">
        <h4>Modes de sélection</h4>
        <ul>
          <li><strong>Sélection simple :</strong> L'utilisateur peut choisir une seule option</li>
          <li><strong>Sélection multiple :</strong> Permet de choisir plusieurs options avec des checkboxes</li>
          <li><strong>Affichage avec chips :</strong> Les sélections multiples sont affichées sous forme de chips supprimables</li>
        </ul>
      </div>
      
      <div class="doc-section">
        <h4>États et validation</h4>
        <ul>
          <li><strong>default :</strong> État normal du composant</li>
          <li><strong>error :</strong> Indique une erreur avec bordure et icône rouge</li>
          <li><strong>valid :</strong> Confirme une sélection valide avec bordure et icône verte</li>
          <li><strong>disabled :</strong> Composant désactivé et non-interactif</li>
          <li><strong>readonly :</strong> Valeur visible mais non-modifiable</li>
        </ul>
      </div>
      
      <div class="doc-section">
        <h4>Fonctionnalités avancées</h4>
        <ul>
          <li><strong>Recherche intégrée :</strong> Utilise le composant InputText pour filtrer les options</li>
          <li><strong>Bouton clear :</strong> Permet d'effacer facilement les sélections</li>
          <li><strong>Tooltips intelligents :</strong> Affichage automatique pour les textes trop longs</li>
          <li><strong>Positionnement intelligent :</strong> S'ouvre vers le haut si manque d'espace en bas</li>
          <li><strong>Hauteur adaptive :</strong> 400px pour le mode multiple+recherche, 300px sinon</li>
        </ul>
      </div>
      
      <h3>⚙️ Props principales</h3>
      
      <div class="props-table">
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Défaut</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>modelValue</code></td>
              <td>string | number | Array</td>
              <td>''</td>
              <td>Valeur sélectionnée (simple ou multiple)</td>
            </tr>
            <tr>
              <td><code>options</code></td>
              <td>DropDownOption[]</td>
              <td>[]</td>
              <td>Liste des options disponibles</td>
            </tr>
            <tr>
              <td><code>multiple</code></td>
              <td>boolean</td>
              <td>false</td>
              <td>Active la sélection multiple</td>
            </tr>
            <tr>
              <td><code>searchable</code></td>
              <td>boolean</td>
              <td>false</td>
              <td>Active la recherche dans les options</td>
            </tr>
            <tr>
              <td><code>clearable</code></td>
              <td>boolean</td>
              <td>false</td>
              <td>Affiche le bouton pour effacer la sélection</td>
            </tr>
            <tr>
              <td><code>state</code></td>
              <td>'default' | 'error' | 'valid'</td>
              <td>'default'</td>
              <td>État visuel du composant</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>'small' | 'medium' | 'large'</td>
              <td>'medium'</td>
              <td>Taille du composant</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>boolean</td>
              <td>false</td>
              <td>Désactive le composant</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>🎨 Intégration avec le Design System</h3>
      
      <div class="doc-section">
        <h4>Composants utilisés</h4>
        <ul>
          <li><strong>Checkbox :</strong> Pour les sélections multiples avec labels cliquables</li>
          <li><strong>Chip :</strong> Affichage des sélections multiples avec suppression</li>
          <li><strong>InputText :</strong> Champ de recherche intégré avec icône</li>
          <li><strong>Icon :</strong> Icônes pour les états, chevrons et actions</li>
        </ul>
      </div>
      
      <div class="doc-section">
        <h4>Couleurs personnalisées</h4>
        <ul>
          <li><strong>Background :</strong> <code>--theme-colors-brand-secondary-25</code> pour l'input et la liste</li>
          <li><strong>États :</strong> Couleurs cohérentes avec InputText (rouge pour error, vert pour valid)</li>
          <li><strong>Hover :</strong> États interactifs sur les options et boutons</li>
        </ul>
      </div>
      
      <h3>📋 Interface DropDownOption</h3>
      
      <div class="code-block">
        <pre><code>interface DropDownOption {
  value: string | number    // Valeur unique de l'option
  label: string            // Texte affiché à l'utilisateur
  disabled?: boolean       // Option désactivée individuellement
}</code></pre>
      </div>
      
      <h3>🚀 Utilisation de base</h3>
      
      <div class="code-block">
        <pre><code>// Simple
&lt;DropDown
  v-model="selectedValue"
  :options="options"
  placeholder="Choisir une option"
/&gt;

// Multiple avec recherche
&lt;DropDown
  v-model="selectedValues"
  :options="options"
  multiple
  searchable
  clearable
  placeholder="Choisir des options"
/&gt;</code></pre>
      </div>
      
      <h3>🛠️ Événements</h3>
      
      <ul>
        <li><code>@update:modelValue</code> : Émis lors d'un changement de valeur</li>
        <li><code>@change</code> : Émis lors d'un changement (avec la nouvelle valeur)</li>
        <li><code>@open</code> : Émis à l'ouverture du dropdown</li>
        <li><code>@close</code> : Émis à la fermeture du dropdown</li>
        <li><code>@focus</code> / <code>@blur</code> : Gestion du focus</li>
      </ul>
      
      <div class="important-note">
        <h3>💡 Bonnes pratiques</h3>
        <ul>
          <li>Utilisez <code>multiple + searchable</code> pour les listes de plus de 10 options</li>
          <li>Activez <code>clearable</code> pour améliorer l'expérience utilisateur</li>
          <li>Préférez des labels courts et explicites pour les options</li>
          <li>Utilisez les états <code>error/valid</code> avec des messages appropriés</li>
          <li>Testez avec de longues listes pour vérifier les performances de défilement</li>
        </ul>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components'
import { DropDown, Icon } from '@club-employes/utopia'
import { ref } from 'vue'

// États de base
const defaultValue = ref('')
const errorValue = ref('')
const validValue = ref('option2')

// Sélection simple vs multiple
const singleValue = ref('')
const multipleValues = ref([])

// Fonctionnalités avancées
const searchValue = ref('')
const searchMultipleValues = ref([])

// Tailles
const smallValue = ref('')
const mediumValue = ref('')
const largeValue = ref('')

// États désactivés
const disabledValue = ref('')
const readonlyValue = ref('option1')
const disabledOptionsValue = ref('')

// Cas d'usage réels
const countryValue = ref('')
const skillsValues = ref([])

// Options de base
const basicOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]

// Options étendues
const extendedOptions = [
  { value: 'web', label: 'Développement Web' },
  { value: 'mobile', label: 'Développement Mobile' },
  { value: 'backend', label: 'Développement Backend' },
  { value: 'devops', label: 'DevOps' },
  { value: 'design', label: 'UI/UX Design' }
]

// Options longues pour la recherche
const longOptions = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'node', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' }
]

// Options avec certaines désactivées
const optionsWithDisabled = [
  { value: 'available1', label: 'Option disponible 1' },
  { value: 'disabled1', label: 'Option désactivée 1', disabled: true },
  { value: 'available2', label: 'Option disponible 2' },
  { value: 'disabled2', label: 'Option désactivée 2', disabled: true },
  { value: 'available3', label: 'Option disponible 3' }
]

// Options pays
const countryOptions = [
  { value: 'fr', label: 'France' },
  { value: 'be', label: 'Belgique' },
  { value: 'ch', label: 'Suisse' },
  { value: 'ca', label: 'Canada' },
  { value: 'de', label: 'Allemagne' },
  { value: 'it', label: 'Italie' },
  { value: 'es', label: 'Espagne' },
  { value: 'uk', label: 'Royaume-Uni' },
  { value: 'us', label: 'États-Unis' },
  { value: 'jp', label: 'Japon' }
]

// Options compétences
const skillsOptions = [
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'express', label: 'Express.js' },
  { value: 'python', label: 'Python' },
  { value: 'django', label: 'Django' },
  { value: 'flask', label: 'Flask' },
  { value: 'java', label: 'Java' },
  { value: 'spring', label: 'Spring Boot' },
  { value: 'csharp', label: 'C#' },
  { value: 'dotnet', label: '.NET' },
  { value: 'php', label: 'PHP' },
  { value: 'laravel', label: 'Laravel' },
  { value: 'symfony', label: 'Symfony' },
  { value: 'mysql', label: 'MySQL' },
  { value: 'postgresql', label: 'PostgreSQL' },
  { value: 'mongodb', label: 'MongoDB' },
  { value: 'redis', label: 'Redis' },
  { value: 'docker', label: 'Docker' },
  { value: 'kubernetes', label: 'Kubernetes' },
  { value: 'aws', label: 'AWS' },
  { value: 'azure', label: 'Azure' },
  { value: 'gcp', label: 'Google Cloud' }
]
</script>

<style scoped>
/* Styles standard pour les pages de composants */
.showcase-item {
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: var(--spacing-6, 24px);
  overflow: auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  background: var(--theme-colors-surface-card, #ffffff);
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

/* Styles pour les variantes de composants */
.component-variants {
  display: flex;
  gap: var(--spacing-4, 16px);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

/* Grille de composants */
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-6, 24px);
  width: 100%;
  max-width: 1200px;
}

.component-example {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3, 12px);
}

.example-label {
  font-size: var(--font-size-sm, 14px);
  font-weight: var(--font-weight-medium, 500);
  color: var(--theme-colors-text-secondary, #6b7280);
  margin-bottom: var(--spacing-1, 4px);
}

.selected-value {
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-text-muted, #9ca3af);
  font-style: italic;
  margin-top: var(--spacing-2, 8px);
  padding: var(--spacing-2, 8px);
  background: var(--theme-colors-surface-secondary, rgba(0,0,0,0.02));
  border-radius: var(--border-radius-sm);
  border-left: 3px solid var(--theme-colors-brand-secondary-300, #93c5fd);
}

/* Responsive pour petits écrans */
@media (max-width: 768px) {
  .component-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-4, 16px);
  }
  
  .example {
    padding: 1rem;
    min-height: auto;
  }
}

/* Styles pour la documentation */
.doc-section {
  margin-bottom: var(--spacing-6, 24px);
}

.doc-section h4 {
  margin: var(--spacing-4, 16px) 0 var(--spacing-2, 8px) 0;
  color: var(--theme-colors-text-primary, #111827);
  font-size: 1.1rem;
  font-weight: 600;
}

.doc-section ul {
  margin: 0;
  padding-left: var(--spacing-4, 16px);
}

.doc-section li {
  margin-bottom: var(--spacing-2, 8px);
  line-height: 1.5;
}

/* Table des props */
.props-table {
  margin: var(--spacing-4, 16px) 0;
  overflow-x: auto;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
}

.props-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.props-table th {
  background: var(--theme-colors-surface-background, #f9fafb);
  padding: var(--spacing-3, 12px);
  text-align: left;
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
}

.props-table td {
  padding: var(--spacing-3, 12px);
  border-bottom: 1px solid var(--theme-colors-border-muted, #f3f4f6);
  vertical-align: top;
}

.props-table code {
  background: var(--theme-colors-surface-secondary, rgba(0,0,0,0.04));
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.8rem;
  color: var(--theme-colors-text-primary, #111827);
}

/* Blocs de code */
.code-block {
  margin: var(--spacing-4, 16px) 0;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
}

.code-block pre {
  margin: 0;
  padding: var(--spacing-4, 16px);
  background: var(--theme-colors-surface-background, #f9fafb);
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.5;
}

.code-block code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  color: var(--theme-colors-text-primary, #111827);
}

/* Styles pour la note importante */
.important-note {
  background: var(--theme-colors-brand-secondary-25, rgba(59, 130, 246, 0.05));
  border: 1px solid var(--theme-colors-brand-secondary-200, #bfdbfe);
  border-radius: 8px;
  padding: var(--spacing-4, 16px);
  margin: var(--spacing-6, 24px) 0;
}

.important-note h3 {
  margin: 0 0 var(--spacing-3, 12px) 0;
  color: var(--theme-colors-brand-secondary-700, #1d4ed8);
  font-size: 1rem;
  font-weight: 600;
}

.important-note p {
  margin: 0 0 var(--spacing-3, 12px) 0;
  color: var(--theme-colors-text-primary, #111827);
}

.important-note ul {
  margin: 0;
  padding-left: var(--spacing-5, 20px);
  color: var(--theme-colors-text-primary, #111827);
}

.important-note li {
  margin-bottom: var(--spacing-2, 8px);
}

.important-note code {
  background: var(--theme-colors-brand-secondary-100, rgba(59, 130, 246, 0.2));
  color: var(--theme-colors-brand-secondary-800, #1e40af);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
}

/* Titres de documentation */
h2 {
  color: var(--theme-colors-text-primary, #111827);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-4, 16px);
  border-bottom: 2px solid var(--theme-colors-brand-secondary-200, #bfdbfe);
  padding-bottom: var(--spacing-2, 8px);
}

h3 {
  color: var(--theme-colors-text-primary, #111827);
  font-size: 1.2rem;
  font-weight: 600;
  margin: var(--spacing-6, 24px) 0 var(--spacing-3, 12px) 0;
}
</style>