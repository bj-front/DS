<template>
  <ComponentLayout 
    :title="'Checkbox'"
    :icon="'Badge-check'"
    :type="'Atoms'"
  >
    <template #examples>
      <div class="showcase-item">
        <h3>États de base</h3>
        <div class="example">
          <div class="checkbox-states">
            <Checkbox v-model="basicChecked">Non coché</Checkbox>
            <Checkbox v-model="defaultChecked">Coché</Checkbox>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Checkbox v-model="isChecked"&gt;Label de la checkbox&lt;/Checkbox&gt;</code></pre>
        </details>
      </div>

      <div class="showcase-item">
        <h3>États désactivés</h3>
        <div class="example">
          <div class="checkbox-states">
            <Checkbox v-model="disabledUnchecked" disabled>Désactivé non coché</Checkbox>
            <Checkbox v-model="disabledChecked" disabled>Désactivé coché</Checkbox>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Checkbox v-model="isChecked" disabled&gt;Checkbox désactivée&lt;/Checkbox&gt;</code></pre>
        </details>
      </div>

      <div class="showcase-item">
        <h3>Tailles</h3>
        <div class="example">
          <div class="checkbox-sizes">
            <Checkbox v-model="smallChecked" size="small">Petite</Checkbox>
            <Checkbox v-model="mediumChecked" size="medium">Moyenne</Checkbox>
            <Checkbox v-model="largeChecked" size="large">Grande</Checkbox>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Checkbox v-model="isChecked" size="small"&gt;Petite&lt;/Checkbox&gt;
&lt;Checkbox v-model="isChecked" size="medium"&gt;Moyenne&lt;/Checkbox&gt;
&lt;Checkbox v-model="isChecked" size="large"&gt;Grande&lt;/Checkbox&gt;</code></pre>
        </details>
      </div>

      <div class="showcase-item">
        <h3>Sans label</h3>
        <div class="example">
          <div class="checkbox-states">
            <Checkbox v-model="basicChecked" />
            <Checkbox v-model="defaultChecked" />
            <Checkbox v-model="disabledChecked" disabled />
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Checkbox v-model="isChecked" /&gt;</code></pre>
        </details>
      </div>

      <div class="showcase-item">
        <h3>États interactifs</h3>
        <div class="example">
          <div class="checkbox-interactive">
            <p><strong>Testez les interactions :</strong></p>
            <div class="checkbox-states">
              <Checkbox v-model="basicChecked">Survolez-moi</Checkbox>
              <Checkbox v-model="defaultChecked">Cliquez-moi</Checkbox>
            </div>
            <p class="state-info">
              État 1: {{ basicChecked ? 'Coché' : 'Non coché' }} | 
              État 2: {{ defaultChecked ? 'Coché' : 'Non coché' }}
            </p>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Checkbox v-model="isChecked"&gt;Checkbox interactive&lt;/Checkbox&gt;</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <p>Le composant <strong>Checkbox</strong> permet aux utilisateurs de sélectionner une ou plusieurs options dans une liste. Il supporte différentes tailles, états et s'adapte automatiquement au thème actuel.</p>
      
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
              <td><code>v-model</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>État de la checkbox (cochée/non cochée)</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Désactive la checkbox</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>'small' | 'medium' | 'large'</code></td>
              <td><code>'medium'</code></td>
              <td>Taille de la checkbox</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>États supportés</h3>
      <ul>
        <li><strong>Normal :</strong> État par défaut, interactive</li>
        <li><strong>Hover :</strong> Effet au survol avec légère animation</li>
        <li><strong>Active :</strong> Effet au clic avec animation de pression</li>
        <li><strong>Checked :</strong> Checkbox cochée avec dégradé Brand Primary</li>
        <li><strong>Disabled :</strong> Checkbox désactivée, non interactive</li>
        <li><strong>Focus :</strong> Contour visible pour l'accessibilité</li>
      </ul>

      <h3>Caractéristiques</h3>
      <ul>
        <li>🎨 <strong>Thème adaptatif :</strong> S'adapte automatiquement au mode light/dark</li>
        <li>✨ <strong>Animations :</strong> Transitions fluides et effet "pop" au clic</li>
        <li>🎯 <strong>Accessibilité :</strong> Support complet du clavier et lecteurs d'écran</li>
        <li>📱 <strong>Responsive :</strong> Trois tailles disponibles</li>
        <li>🎭 <strong>Dégradé :</strong> Utilise les couleurs Brand Primary du design system</li>
      </ul>

      <h3>Utilisation</h3>
      <p>Utilisez le composant Checkbox pour :</p>
      <ul>
        <li>Sélections multiples dans des listes</li>
        <li>Acceptation de conditions d'utilisation</li>
        <li>Activation/désactivation d'options</li>
        <li>Filtres et préférences utilisateur</li>
      </ul>

      <p>📁 <strong>Fichier :</strong> <code>packages/utopia/src/components/atoms/Checkbox/</code></p>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components'
import { Checkbox, Icon } from '@club-employes/utopia'
import { ref } from 'vue'

// États réactifs pour les exemples
const basicChecked = ref(false)
const defaultChecked = ref(true)
const disabledUnchecked = ref(false)
const disabledChecked = ref(true)
const smallChecked = ref(true)
const mediumChecked = ref(true)
const largeChecked = ref(true)
</script>

<style scoped>
/* Styles standard pour les pages de composants */
.showcase-item {
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: var(--spacing-6, 24px);
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

/* Styles pour les exemples de checkbox */
.checkbox-states {
  display: flex;
  gap: var(--spacing-6, 24px);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.checkbox-sizes {
  display: flex;
  gap: var(--spacing-8, 32px);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.checkbox-interactive {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4, 16px);
  align-items: center;
  text-align: center;
}

.state-info {
  font-size: 0.875rem;
  color: var(--theme-colors-text-secondary, #6b7280);
  margin: 0;
  padding: var(--spacing-2, 8px) var(--spacing-4, 16px);
  background: var(--theme-colors-surface-background, #f9fafb);
  border-radius: 6px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
}

/* Styles pour le tableau des propriétés */
.props-table,
.events-table {
  margin: var(--spacing-4, 16px) 0;
  overflow-x: auto;
}

.props-table table,
.events-table table {
  width: 100%;
  border-collapse: collapse;
  background: var(--theme-colors-surface-card, #ffffff);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.props-table th,
.props-table td,
.events-table th,
.events-table td {
  padding: var(--spacing-3, 12px);
  text-align: left;
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  vertical-align: top;
}

.props-table th,
.events-table th {
  background: var(--theme-colors-surface-background, #f9fafb);
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
  font-size: 0.875rem;
}

.props-table td code,
.events-table td code {
  background: var(--theme-colors-brand-primary-25, #eff6ff);
  color: var(--theme-colors-brand-primary-500, #3b82f6);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.8125rem;
}

.props-table tbody tr:last-child td,
.events-table tbody tr:last-child td {
  border-bottom: none;
}

/* Override showcase-item overflow pour permettre le scroll horizontal des tables */
.showcase-item:has(.props-table),
.showcase-item:has(.events-table) {
  overflow: auto;
}

/* Styles pour la documentation */
:deep(h3) {
  color: var(--theme-colors-text-primary, #111827);
  font-size: 1.25rem;
  font-weight: 600;
  margin: var(--spacing-6, 24px) 0 var(--spacing-4, 16px) 0;
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  padding-bottom: var(--spacing-2, 8px);
}
</style>