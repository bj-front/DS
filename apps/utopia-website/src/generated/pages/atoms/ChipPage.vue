<template>
  <ComponentLayout 
    title="Chip"
    icon="Tag"
    type="Atoms"
  >
    <template #examples>
      <!-- Variants -->
      <div class="showcase-item">
        <h3>Variants</h3>
        <p>Différents styles de chips avec leurs couleurs associées.</p>
        
        <div class="chip-demo">
          <div class="chip-group">
            <h4>Default</h4>
            <div class="chip-examples">
              <Chip>Default chip</Chip>
              <Chip left-icon="User">User chip</Chip>
              <Chip removable @remove="handleRemove">Removable chip</Chip>
            </div>
          </div>
          
          <div class="chip-group">
            <h4>Primary</h4>
            <div class="chip-examples">
              <Chip variant="primary">Primary chip</Chip>
              <Chip variant="primary" left-icon="Star">Star chip</Chip>
              <Chip variant="primary" removable @remove="handleRemove">Removable primary</Chip>
            </div>
          </div>
          
          <div class="chip-group">
            <h4>Secondary</h4>
            <div class="chip-examples">
              <Chip variant="secondary">Secondary chip</Chip>
              <Chip variant="secondary" left-icon="Heart">Heart chip</Chip>
              <Chip variant="secondary" removable @remove="handleRemove">Removable secondary</Chip>
            </div>
          </div>
          
          <div class="chip-group">
            <h4>Success</h4>
            <div class="chip-examples">
              <Chip variant="success">Success chip</Chip>
              <Chip variant="success" left-icon="Check">Check chip</Chip>
              <Chip variant="success" removable @remove="handleRemove">Removable success</Chip>
            </div>
          </div>
          
          <div class="chip-group">
            <h4>Warning</h4>
            <div class="chip-examples">
              <Chip variant="warning">Warning chip</Chip>
              <Chip variant="warning" left-icon="Alert-triangle">Warning chip</Chip>
              <Chip variant="warning" removable @remove="handleRemove">Removable warning</Chip>
            </div>
          </div>
          
          <div class="chip-group">
            <h4>Danger</h4>
            <div class="chip-examples">
              <Chip variant="danger">Danger chip</Chip>
              <Chip variant="danger" left-icon="X-circle">Error chip</Chip>
              <Chip variant="danger" removable @remove="handleRemove">Removable danger</Chip>
            </div>
          </div>
        </div>
      </div>

      <!-- Tailles -->
      <div class="showcase-item">
        <h3>Tailles</h3>
        <p>Différentes tailles disponibles pour le composant.</p>
        
        <div class="chip-demo">
          <div class="chip-group">
            <h4>Petite taille</h4>
            <div class="chip-examples">
              <Chip size="small">Small chip</Chip>
              <Chip size="small" left-icon="User">User</Chip>
              <Chip size="small" removable @remove="handleRemove">Remove</Chip>
            </div>
          </div>
          
          <div class="chip-group">
            <h4>Taille moyenne (défaut)</h4>
            <div class="chip-examples">
              <Chip size="medium">Medium chip</Chip>
              <Chip size="medium" left-icon="User">User</Chip>
              <Chip size="medium" removable @remove="handleRemove">Remove</Chip>
            </div>
          </div>
          
          <div class="chip-group">
            <h4>Grande taille</h4>
            <div class="chip-examples">
              <Chip size="large">Large chip</Chip>
              <Chip size="large" left-icon="User">User</Chip>
              <Chip size="large" removable @remove="handleRemove">Remove</Chip>
            </div>
          </div>
        </div>
      </div>

      <!-- États -->
      <div class="showcase-item">
        <h3>États</h3>
        <p>Différents états du composant.</p>
        
        <div class="chip-demo">
          <div class="chip-group">
            <h4>Normal</h4>
            <div class="chip-examples">
              <Chip>Normal chip</Chip>
              <Chip left-icon="User">With icon</Chip>
              <Chip removable @remove="handleRemove">Removable</Chip>
            </div>
          </div>
          
          <div class="chip-group">
            <h4>Désactivé</h4>
            <div class="chip-examples">
              <Chip disabled>Disabled chip</Chip>
              <Chip disabled left-icon="User">Disabled with icon</Chip>
              <Chip disabled removable @remove="handleRemove">Disabled removable</Chip>
            </div>
          </div>
        </div>
      </div>

      <!-- Actionable vs Non-actionable -->
      <div class="showcase-item">
        <h3>Actionable vs Non-actionable</h3>
        <p>Différence entre les chips avec et sans action. Seuls les chips avec <code>actionable</code> affichent une ombre au hover et un cursor pointer.</p>
        
        <div class="chip-demo">
          <div class="chip-group">
            <h4>Sans action (défaut)</h4>
            <div class="chip-examples">
              <Chip>Tag simple</Chip>
              <Chip left-icon="User">Avec icône</Chip>
              <Chip variant="primary">Primary</Chip>
            </div>
            <p class="demo-note">Pas d'ombre au hover, cursor par défaut</p>
          </div>
          
          <div class="chip-group">
            <h4>Avec action</h4>
            <div class="chip-examples">
              <Chip actionable @click="handleClick">Tag cliquable</Chip>
              <Chip actionable left-icon="User" @click="handleClick">Avec icône</Chip>
              <Chip actionable variant="primary" @click="handleClick">Primary cliquable</Chip>
            </div>
            <p class="demo-note">Ombre au hover, cursor pointer</p>
          </div>
        </div>
      </div>

      <!-- Exemple d'utilisation dans un input multi -->
      <div class="showcase-item">
        <h3>Utilisation dans un input multi</h3>
        <p>Exemple d'utilisation des chips dans un contexte d'input multi-sélection.</p>
        
        <div class="multi-input-demo">
          <div class="input-container">
            <div class="chips-container">
              <Chip 
                v-for="(tag, index) in selectedTags" 
                :key="index"
                variant="primary"
                removable
                @remove="removeTag(index)"
              >
                {{ tag }}
              </Chip>
            </div>
            <input 
              type="text" 
              placeholder="Ajouter un tag..."
              class="multi-input"
              @keydown.enter="addTag"
              v-model="newTag"
            />
          </div>
          <p class="demo-note">Tapez un tag et appuyez sur Entrée pour l'ajouter, ou cliquez sur X pour supprimer.</p>
        </div>
      </div>

      <!-- Code d'exemple -->
      <div class="showcase-item">
        <h3>Code d'exemple</h3>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Variants --&gt;
&lt;Chip variant="default"&gt;Default chip&lt;/Chip&gt;
&lt;Chip variant="primary"&gt;Primary chip&lt;/Chip&gt;
&lt;Chip variant="secondary"&gt;Secondary chip&lt;/Chip&gt;
&lt;Chip variant="success"&gt;Success chip&lt;/Chip&gt;
&lt;Chip variant="warning"&gt;Warning chip&lt;/Chip&gt;
&lt;Chip variant="danger"&gt;Danger chip&lt;/Chip&gt;

&lt;!-- Avec icône à gauche --&gt;
&lt;Chip left-icon="User"&gt;User chip&lt;/Chip&gt;
&lt;Chip variant="primary" left-icon="Star"&gt;Star chip&lt;/Chip&gt;

&lt;!-- Supprimable --&gt;
&lt;Chip removable @remove="handleRemove"&gt;Removable chip&lt;/Chip&gt;

&lt;!-- Tailles --&gt;
&lt;Chip size="small"&gt;Small chip&lt;/Chip&gt;
&lt;Chip size="medium"&gt;Medium chip&lt;/Chip&gt;
&lt;Chip size="large"&gt;Large chip&lt;/Chip&gt;

&lt;!-- États --&gt;
&lt;Chip disabled&gt;Disabled chip&lt;/Chip&gt;

&lt;!-- Combinaison --&gt;
&lt;Chip 
  variant="primary" 
  size="medium" 
  left-icon="User" 
  removable 
  actionable
  @remove="handleRemove"
  @click="handleClick"
&gt;
  User chip
&lt;/Chip&gt;

&lt;!-- Avec action --&gt;
&lt;Chip actionable @click="handleClick"&gt;Tag cliquable&lt;/Chip&gt;

&lt;!-- Sans action (défaut) --&gt;
&lt;Chip&gt;Tag simple&lt;/Chip&gt;</code></pre>
        </details>
      </div>

      <!-- Propriétés -->
      <div class="showcase-item">
        <h3>Propriétés</h3>
        <div class="props-table">
          <table>
            <thead>
              <tr>
                <th>Propriété</th>
                <th>Type</th>
                <th>Défaut</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>variant</code></td>
                <td><code>'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'</code></td>
                <td><code>'default'</code></td>
                <td>Style visuel du chip</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'small' | 'medium' | 'large'</code></td>
                <td><code>'medium'</code></td>
                <td>Taille du chip</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Désactive le chip</td>
              </tr>
              <tr>
                <td><code>removable</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Affiche un bouton de suppression</td>
              </tr>
              <tr>
                <td><code>leftIcon</code></td>
                <td><code>string</code></td>
                <td><code>undefined</code></td>
                <td>Nom de l'icône à afficher à gauche</td>
              </tr>
              <tr>
                <td><code>actionable</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Active les effets de hover (ombre, cursor pointer) pour les chips cliquables</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Événements -->
      <div class="showcase-item">
        <h3>Événements</h3>
        <div class="props-table">
          <table>
            <thead>
              <tr>
                <th>Événement</th>
                <th>Payload</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>remove</code></td>
                <td><code>void</code></td>
                <td>Émis quand le bouton de suppression est cliqué</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components'
import { Chip, Icon } from '@club-employes/utopia'
import { ref } from 'vue'

// État pour la démo d'input multi
const selectedTags = ref(['Vue.js', 'TypeScript', 'Design System'])
const newTag = ref('')

const handleRemove = (): void => {
  // Chip removed
}

const handleClick = (): void => {
  // Chip clicked
}

const addTag = (event: KeyboardEvent): void => {
  const target = event.target as HTMLInputElement
  const value = target.value.trim()
  
  if (value && !selectedTags.value.includes(value)) {
    selectedTags.value.push(value)
    newTag.value = ''
  }
}

const removeTag = (index: number): void => {
  selectedTags.value.splice(index, 1)
}
</script>

<style scoped>
.showcase-item {

  overflow: auto;
}
.chip-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6, 24px);
  margin: var(--spacing-4, 16px) 0;
}

.chip-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3, 12px);
}

.chip-group h4 {
  margin: 0;
  font-size: var(--font-size-sm, 14px);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--theme-colors-text-primary, #111827);
}

.chip-examples {
  display: flex;
  gap: var(--spacing-3, 12px);
  flex-wrap: wrap;
  align-items: center;
}

/* Multi-input demo */
.multi-input-demo {
  margin: var(--spacing-4, 16px) 0;
}

.input-container {
  border: 1px solid var(--theme-colors-border-default, #d1d5db);
  border-radius: var(--radius-md, 6px);
  padding: var(--spacing-3, 12px);
  background: var(--theme-colors-surface-background, #ffffff);
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2, 8px);
  align-items: center;
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2, 8px);
  align-items: center;
}

.multi-input {
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family-sans, system-ui);
  font-size: var(--font-size-base, 16px);
  color: var(--theme-colors-text-primary, #111827);
  min-width: 120px;
  flex: 1;
}

.multi-input::placeholder {
  color: var(--theme-colors-text-muted, #6b7280);
}

.demo-note {
  margin: var(--spacing-3, 12px) 0 0 0;
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-text-secondary, #6b7280);
  font-style: italic;
}

.props-table {
  margin: var(--spacing-4, 16px) 0;
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.props-table table {
  width: 100%;
  border-collapse: collapse;
  background: var(--theme-colors-surface-card, #ffffff);
  border-radius: 8px;
  overflow: hidden;
  min-width: 600px; /* Largeur minimale pour éviter la compression */
}

.props-table th,
.props-table td {
  padding: var(--spacing-3, 12px);
  text-align: left;
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  vertical-align: top;
}

.props-table th {
  background: var(--theme-colors-surface-background, #f9fafb);
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
  font-size: 0.875rem;
}

.props-table td code {
  background: var(--theme-colors-brand-primary-25, #eff6ff);
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.8125rem;
}

.props-table tbody tr:last-child td {
  border-bottom: none;
}

/* Responsive */
@media (max-width: 768px) {
  .chip-demo {
    grid-template-columns: 1fr;
    gap: var(--spacing-4, 16px);
  }
  
  .chip-examples {
    justify-content: center;
  }
}
</style>