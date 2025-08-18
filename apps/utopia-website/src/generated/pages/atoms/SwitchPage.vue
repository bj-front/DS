<template>
  <ComponentLayout 
    :title="'Switch'"
    :icon="'Check-circle-2'"
    :type="'Atoms'"
  >
    <template #examples>
      <!-- États de base -->
      <div class="showcase-item">
        <h3>États de base</h3>
        <div class="example">
          <div class="switch-states">
            <div class="switch-demo">
              <Switch v-model="inactiveState">Inactif</Switch>
              <span class="state-label">{{ inactiveState ? 'Activé' : 'Inactif' }}</span>
            </div>
            <div class="switch-demo">
              <Switch v-model="activeState">Actif</Switch>
              <span class="state-label">{{ activeState ? 'Activé' : 'Inactif' }}</span>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Switch v-model="switchValue"&gt;Label du switch&lt;/Switch&gt;</code></pre>
        </details>
      </div>

      <!-- Tailles -->
      <div class="showcase-item">
        <h3>Tailles</h3>
        <div class="example">
          <div class="switch-sizes">
            <div class="switch-demo">
              <Switch v-model="smallState" size="small">Small</Switch>
              <span class="size-label">Small</span>
            </div>
            <div class="switch-demo">
              <Switch v-model="mediumState" size="medium">Medium</Switch>
              <span class="size-label">Medium (défaut)</span>
            </div>
            <div class="switch-demo">
              <Switch v-model="largeState" size="large">Large</Switch>
              <span class="size-label">Large</span>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Switch size="small"&gt;Small&lt;/Switch&gt;
&lt;Switch size="medium"&gt;Medium&lt;/Switch&gt;
&lt;Switch size="large"&gt;Large&lt;/Switch&gt;</code></pre>
        </details>
      </div>

      <!-- États disabled -->
      <div class="showcase-item">
        <h3>États désactivés</h3>
        <div class="example">
          <div class="switch-disabled">
            <div class="switch-demo">
              <Switch :model-value="false" disabled>Indisponible (inactif)</Switch>
              <span class="state-label">Désactivé - OFF</span>
            </div>
            <div class="switch-demo">
              <Switch model-value disabled>Indisponible (actif)</Switch>
              <span class="state-label">Désactivé - ON</span>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Switch :model-value="false" disabled&gt;Désactivé OFF&lt;/Switch&gt;
&lt;Switch :model-value="true" disabled&gt;Désactivé ON&lt;/Switch&gt;</code></pre>
        </details>
      </div>

      <!-- Sans label -->
      <div class="showcase-item">
        <h3>Sans label</h3>
        <div class="example">
          <div class="switch-no-label">
            <Switch v-model="noLabelState1" />
            <Switch v-model="noLabelState2" size="small" />
            <Switch v-model="noLabelState3" size="large" />
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Switch v-model="switchValue" /&gt;</code></pre>
        </details>
      </div>

      <!-- Exemples d'usage -->
      <div class="showcase-item">
        <h3>Exemples d'usage</h3>
        <div class="example">
          <div class="switch-usage">
            <div class="usage-group">
              <h4>Paramètres</h4>
              <div class="setting-item">
                <Switch v-model="notifications">Notifications push</Switch>
              </div>
              <div class="setting-item">
                <Switch v-model="darkMode">Mode sombre</Switch>
              </div>
              <div class="setting-item">
                <Switch v-model="autoSave" disabled>Sauvegarde auto (Pro uniquement)</Switch>
              </div>
            </div>
            <div class="usage-group">
              <h4>Préférences</h4>
              <div class="setting-item">
                <Switch v-model="emailUpdates" size="small">Mises à jour par email</Switch>
              </div>
              <div class="setting-item">
                <Switch v-model="analytics" size="small">Partage de données analytiques</Switch>
              </div>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;div class="setting-item"&gt;
  &lt;Switch v-model="notifications"&gt;Notifications push&lt;/Switch&gt;
&lt;/div&gt;
&lt;div class="setting-item"&gt;
  &lt;Switch v-model="darkMode"&gt;Mode sombre&lt;/Switch&gt;
&lt;/div&gt;</code></pre>
        </details>
      </div>

      <!-- Toutes les combinaisons -->
      <div class="showcase-item">
        <h3>Matrice complète</h3>
        <div class="example">
          <div class="switch-matrix">
            <table class="matrix-table">
              <thead>
                <tr>
                  <th>Taille</th>
                  <th>Inactif</th>
                  <th>Actif</th>
                  <th>Désactivé OFF</th>
                  <th>Désactivé ON</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Small</strong></td>
                  <td><Switch :model-value="false" size="small" /></td>
                  <td><Switch model-value size="small" /></td>
                  <td><Switch :model-value="false" size="small" disabled /></td>
                  <td><Switch model-value size="small" disabled /></td>
                </tr>
                <tr>
                  <td><strong>Medium</strong></td>
                  <td><Switch :model-value="false" size="medium" /></td>
                  <td><Switch model-value size="medium" /></td>
                  <td><Switch :model-value="false" size="medium" disabled /></td>
                  <td><Switch model-value size="medium" disabled /></td>
                </tr>
                <tr>
                  <td><strong>Large</strong></td>
                  <td><Switch :model-value="false" size="large" /></td>
                  <td><Switch model-value size="large" /></td>
                  <td><Switch :model-value="false" size="large" disabled /></td>
                  <td><Switch model-value size="large" disabled /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Toutes les combinaisons possibles --&gt;
&lt;Switch :model-value="false" size="small" /&gt;
&lt;Switch :model-value="true" size="small" /&gt;
&lt;Switch :model-value="false" size="small" disabled /&gt;
&lt;Switch :model-value="true" size="small" disabled /&gt;</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <div class="documentation-content">
        <h3>📋 À propos du composant Switch</h3>
        <p>Le composant <strong>Switch</strong> est un élément d'interface utilisateur qui permet aux utilisateurs d'activer ou de désactiver une option. Il est parfait pour les paramètres, préférences, et toute action binaire (on/off).</p>
        
        <h3>🎯 Utilisation</h3>
        <p>Le Switch utilise le pattern <code>v-model</code> de Vue.js pour la liaison bidirectionnelle des données :</p>
        <pre class="doc-code"><code>&lt;Switch v-model="isEnabled"&gt;Activer les notifications&lt;/Switch&gt;</code></pre>
        
        <h3>🔧 Props disponibles</h3>
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
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Valeur du switch (activé/désactivé)</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Désactive le switch</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'small' | 'medium' | 'large'</code></td>
                <td><code>'medium'</code></td>
                <td>Taille du switch</td>
              </tr>
              <tr>
                <td><code>label</code></td>
                <td><code>string</code></td>
                <td><code>undefined</code></td>
                <td>Label optionnel (ou utiliser le slot par défaut)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>📤 Événements</h3>
        <div class="events-table">
          <table>
            <thead>
              <tr>
                <th>Événement</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>update:modelValue</code></td>
                <td><code>(value: boolean) => void</code></td>
                <td>Émis quand la valeur du switch change</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>🎨 Design System</h3>
        <p>Le Switch respecte les tokens de couleur du design system :</p>
        <ul>
          <li><strong>Couleurs :</strong> Utilise les tokens <code>--theme-colors-brand-primary-*</code></li>
          <li><strong>États :</strong> Support complet des états hover, active, focus, et disabled</li>
          <li><strong>Accessibilité :</strong> Compatible avec les lecteurs d'écran et la navigation clavier</li>
          <li><strong>Mobile :</strong> Optimisé pour les interactions tactiles sans effets indésirables</li>
        </ul>

        <h3>💡 Bonnes pratiques</h3>
        <ul>
          <li>Utilisez des labels clairs qui décrivent l'action ou l'état</li>
          <li>Préférez les Switch aux Checkbox pour les actions immédiates</li>
          <li>Groupez les Switch liés dans des sections logiques</li>
          <li>Utilisez l'état <code>disabled</code> pour les fonctionnalités premium ou non disponibles</li>
        </ul>

        <div class="file-info">
          <p>📁 <strong>Fichier :</strong> <code>src/generated/pages/atoms/SwitchPage.vue</code></p>
          <p>🎨 <strong>Composant :</strong> <code>packages/utopia/src/components/atoms/Switch/</code></p>
        </div>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components'
import { Icon } from '@club-employes/utopia'
import { ref } from 'vue'
import Switch from '../../../../../../packages/utopia/src/components/atoms/Switch/Switch.vue'

// États de base
const inactiveState = ref(false)
const activeState = ref(true)

// Tailles
const smallState = ref(false)
const mediumState = ref(true)
const largeState = ref(false)

// Sans label
const noLabelState1 = ref(false)
const noLabelState2 = ref(true)
const noLabelState3 = ref(false)

// Exemples d'usage
const notifications = ref(true)
const darkMode = ref(false)
const autoSave = ref(true)
const emailUpdates = ref(false)
const analytics = ref(true)
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

/* Styles pour les variantes de composants */
.component-variants {
  display: flex;
  gap: var(--spacing-4, 16px);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

/* Styles pour la note importante */
.important-note {
  background: var(--theme-colors-warning-background, #fef3c7);
  border: 1px solid var(--theme-colors-warning-border, #f59e0b);
  border-radius: 8px;
  padding: var(--spacing-4, 16px);
  margin: var(--spacing-6, 24px) 0;
}

.important-note h3 {
  margin: 0 0 var(--spacing-3, 12px) 0;
  color: var(--theme-colors-warning-text, #d97706);
  font-size: 1rem;
  font-weight: 600;
}

.important-note p {
  margin: 0 0 var(--spacing-3, 12px) 0;
  color: var(--theme-colors-text-primary, #111827);
}

.important-note ol {
  margin: 0;
  padding-left: var(--spacing-5, 20px);
  color: var(--theme-colors-text-primary, #111827);
}

.important-note li {
  margin-bottom: var(--spacing-2, 8px);
}

.important-note code {
  background: var(--theme-colors-warning-code-background, #fbbf24);
  color: var(--theme-colors-warning-code-text, #92400e);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
}

/* Styles spécifiques pour les démos de Switch */
.switch-states,
.switch-sizes,
.switch-disabled,
.switch-no-label {
  display: flex;
  gap: var(--spacing-6, 24px);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.switch-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2, 8px);
  text-align: center;
}

.state-label,
.size-label {
  font-size: 0.875rem;
  color: var(--theme-colors-text-secondary, #6b7280);
  font-weight: 500;
}

/* Styles pour les exemples d'usage */
.switch-usage {
  display: flex;
  gap: var(--spacing-8, 32px);
  width: 100%;
  max-width: 600px;
}

.usage-group {
  flex: 1;
}

.usage-group h4 {
  margin: 0 0 var(--spacing-4, 16px) 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  padding-bottom: var(--spacing-2, 8px);
}

.setting-item {
  margin-bottom: var(--spacing-3, 12px);
  display: flex;
  align-items: center;
}

/* Styles pour la matrice */
.switch-matrix {
  width: 100%;
  max-width: 800px;
}

.matrix-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--theme-colors-surface-card, #ffffff);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.matrix-table th,
.matrix-table td {
  padding: var(--spacing-4, 16px);
  text-align: center;
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  vertical-align: middle;
}

.matrix-table th {
  background: var(--theme-colors-surface-background, #f9fafb);
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.matrix-table td:first-child {
  text-align: left;
  background: var(--theme-colors-surface-background, #f9fafb);
  font-weight: 500;
}

.matrix-table tbody tr:last-child td {
  border-bottom: none;
}

.matrix-table tbody tr:hover {
  background: var(--theme-colors-brand-primary-25, #eff6ff);
}

/* Responsive */
@media (max-width: 768px) {
  .switch-usage {
    flex-direction: column;
    gap: var(--spacing-6, 24px);
  }
  
  .switch-states,
  .switch-sizes,
  .switch-disabled {
    flex-direction: column;
    gap: var(--spacing-4, 16px);
  }
  
  .matrix-table {
    font-size: 0.875rem;
  }
  
  .matrix-table th,
  .matrix-table td {
    padding: var(--spacing-2, 8px);
  }
}

/* Styles pour la documentation */
.documentation-content h3 {
  color: var(--theme-colors-text-primary, #111827);
  font-size: 1.125rem;
  font-weight: 600;
  margin: var(--spacing-6, 24px) 0 var(--spacing-3, 12px) 0;
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  padding-bottom: var(--spacing-2, 8px);
}

.documentation-content h3:first-child {
  margin-top: 0;
}

.documentation-content p {
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.6;
  margin-bottom: var(--spacing-4, 16px);
}

.documentation-content ul {
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.6;
  margin-bottom: var(--spacing-4, 16px);
  padding-left: var(--spacing-5, 20px);
}

.documentation-content li {
  margin-bottom: var(--spacing-2, 8px);
}

.doc-code {
  background: var(--theme-colors-surface-background, #f9fafb);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 6px;
  padding: var(--spacing-3, 12px);
  margin: var(--spacing-4, 16px) 0;
  overflow-x: auto;
}

.doc-code code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
  color: var(--theme-colors-text-primary, #111827);
}

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

.file-info {
  margin-top: var(--spacing-6, 24px);
  padding: var(--spacing-4, 16px);
  background: var(--theme-colors-surface-background, #f9fafb);
  border-radius: 8px;
  border-left: 4px solid var(--theme-colors-brand-primary-500, #3b82f6);
}

.file-info p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--theme-colors-text-secondary, #6b7280);
}

.file-info p:not(:last-child) {
  margin-bottom: var(--spacing-2, 8px);
}

.file-info code {
  background: var(--theme-colors-surface-card, #ffffff);
  color: var(--theme-colors-text-primary, #111827);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.8125rem;
}
</style>