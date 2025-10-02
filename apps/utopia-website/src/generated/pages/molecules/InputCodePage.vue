<template>
  <ComponentLayout 
    title="InputCode" 
    icon="Lock" 
    type="Molecules"
    description="Composant de saisie de code 2FA avec champs individuels et navigation automatique"
  >
    <template #examples>
      <!-- Exemples de base -->
      <div class="showcase-item">
        <h3>Cas d'usage de base</h3>
        <div class="example">
          <div class="component-grid">
            <div class="component-example">
              <h4>Code 2FA numérique (6 chiffres)</h4>
                             <InputCode
                 v-model="code2FA"
                 label="Code de vérification"
                 :length="6"
                 inputmode="numeric"
                 type="number"
                 size="medium"
                 auto-focus
                 @complete="handleComplete"
               />
              <div class="selected-value">Valeur: {{ code2FA || 'Aucune' }}</div>
            </div>

            <div class="component-example">
              <h4>Code alphanumérique (4 caractères)</h4>
              <InputCode
                v-model="codeAlpha"
                label="Code d'accès"
                inputmode="text"
                :length="4"
                type="text"
                size="medium"
                @complete="handleComplete"
              />
              <div class="selected-value">Valeur: {{ codeAlpha || 'Aucune' }}</div>
            </div>

            <div class="component-example">
              <h4>Code PIN (4 chiffres)</h4>
              <InputCode
                v-model="codePIN"
                label="Code PIN"
                :length="4"
                type="number"
                size="medium"
                @complete="handleComplete"
              />
              <div class="selected-value">Valeur: {{ codePIN || 'Aucune' }}</div>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;InputCode
  v-model="code2FA"
  label="Code de vérification"
  :length="6"
  type="number"
  @complete="handleComplete"
/&gt;</code></pre>
        </details>
      </div>

      <!-- Tailles -->
      <div class="showcase-item">
        <h3>Tailles disponibles</h3>
        <div class="example">
          <div class="component-grid">
            <div class="component-example">
              <h4>Petite taille</h4>
              <InputCode
                v-model="codeSmall"
                label="Code court"
                :length="4"
                type="number"
                size="small"
              />
            </div>

            <div class="component-example">
              <h4>Taille moyenne (défaut)</h4>
              <InputCode
                v-model="codeMedium"
                label="Code standard"
                :length="6"
                type="number"
                size="medium"
              />
            </div>

            <div class="component-example">
              <h4>Grande taille</h4>
              <InputCode
                v-model="codeLarge"
                label="Code large"
                :length="8"
                type="number"
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
          <pre><code>&lt;InputCode size="small" :length="4" /&gt;
&lt;InputCode size="medium" :length="6" /&gt;
&lt;InputCode size="large" :length="8" /&gt;</code></pre>
        </details>
      </div>

      <!-- États -->
      <div class="showcase-item">
        <h3>États et validation</h3>
        <div class="example">
          <div class="component-grid">
            <div class="component-example">
              <h4>État d'erreur</h4>
              <InputCode
                v-model="codeError"
                label="Code incorrect"
                :length="6"
                type="number"
                state="error"
                message="Code incorrect, veuillez réessayer"
              />
            </div>

            <div class="component-example">
              <h4>État valide</h4>
              <InputCode
                v-model="codeValid"
                label="Code correct"
                :length="6"
                type="number"
                state="valid"
                message="Code vérifié avec succès"
              />
            </div>

            <div class="component-example">
              <h4>État désactivé</h4>
                             <InputCode
                 v-model="codeDisabled"
                 label="Code désactivé"
                 :length="6"
                 type="number"
                 disabled
                 message="Fonctionnalité temporairement indisponible"
               />
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;InputCode state="error" message="Code incorrect" /&gt;
&lt;InputCode state="valid" message="Code vérifié" /&gt;
&lt;InputCode :disabled="true" message="Indisponible" /&gt;</code></pre>
        </details>
      </div>

      <!-- Exemples avancés -->
      <div class="showcase-item">
        <h3>Exemples avancés</h3>
        <div class="example">
          <div class="component-grid">
            <div class="component-example">
              <h4>Code long (10 caractères)</h4>
              <InputCode
                v-model="codeLong"
                label="Code de sécurité"
                :length="10"
                type="text"
                size="medium"
                @complete="handleLongCodeComplete"
              />
              <div class="selected-value">Valeur: {{ codeLong || 'Aucune' }}</div>
            </div>

            <div class="component-example">
              <h4>Avec gestion d'événements</h4>
              <InputCode
                ref="inputCodeRef"
                v-model="codeEvents"
                label="Code avec événements"
                :length="6"
                type="number"
                @complete="handleComplete"
                @change="handleChange"
                @focus="handleFocus"
                @blur="handleBlur"
              />
              <div class="selected-value">Valeur: {{ codeEvents || 'Aucune' }}</div>
              <div class="event-log">
                <strong>Événements:</strong> {{ eventLog }}
              </div>
              <div class="button-group">
                <Button size="sm" @click="focusInput">Focus</Button>
                <Button size="sm" @click="clearInput">Effacer</Button>
                <Button size="sm" @click="setTestValue">Tester</Button>
              </div>
            </div>

            <div class="component-example">
              <h4>Code avec validation personnalisée</h4>
              <InputCode
                v-model="codeCustom"
                label="Code personnalisé"
                :length="6"
                type="number"
                :state="customState"
                :message="customMessage"
                @complete="handleCustomValidation"
              />
              <div class="selected-value">Valeur: {{ codeCustom || 'Aucune' }}</div>
              <div class="validation-info">
                <strong>Validation:</strong> Le code doit contenir au moins un "1" et un "9"
              </div>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;InputCode
  ref="inputCodeRef"
  v-model="code"
  :length="6"
  @complete="handleComplete"
  @change="handleChange"
/&gt;

// Méthodes programmatiques
const focusInput = () => inputCodeRef.value?.focus()
const clearInput = () => inputCodeRef.value?.clear()
const setValue = () => inputCodeRef.value?.setValue('123456')</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <h2>Documentation InputCode</h2>
      
      <p>
        Le composant <strong>InputCode</strong> est spécialement conçu pour la saisie de codes de vérification 
        (2FA, PIN, codes d'accès). Il utilise les composants atoms d'Utopia pour créer une interface 
        utilisateur moderne et accessible.
      </p>

      <h3>🎯 Fonctionnalités principales</h3>
      <ul>
        <li><strong>Champs individuels</strong> : Chaque caractère dans son propre champ</li>
        <li><strong>Navigation automatique</strong> : Passe au champ suivant après saisie</li>
        <li><strong>Navigation clavier</strong> : Flèches, Backspace, Tab</li>
        <li><strong>Coller</strong> : Support du collage de code complet</li>
        <li><strong>Validation</strong> : Types 'number' ou 'text' configurable</li>
        <li><strong>États</strong> : Error, valid, disabled avec messages</li>
        <li><strong>Responsive</strong> : S'adapte aux écrans mobiles</li>
      </ul>

      <h3>📋 Props principales</h3>
      <table class="props-table">
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
            <td><code>string</code></td>
            <td><code>''</code></td>
            <td>Valeur du code (v-model)</td>
          </tr>
          <tr>
            <td><code>label</code></td>
            <td><code>string</code></td>
            <td><code>''</code></td>
            <td>Label du formulaire</td>
          </tr>
          <tr>
            <td><code>length</code></td>
            <td><code>number</code></td>
            <td><code>6</code></td>
            <td>Nombre de caractères</td>
          </tr>
          <tr>
            <td><code>type</code></td>
            <td><code>'text' | 'number'</code></td>
            <td><code>'number'</code></td>
            <td>Type de saisie autorisé</td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td><code>'small' | 'medium' | 'large'</code></td>
            <td><code>'medium'</code></td>
            <td>Taille des champs</td>
          </tr>
          <tr>
            <td><code>state</code></td>
            <td><code>'default' | 'error' | 'valid'</code></td>
            <td><code>'default'</code></td>
            <td>État visuel du composant</td>
          </tr>
          <tr>
            <td><code>disabled</code></td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
            <td>Désactive le composant</td>
          </tr>
          <tr>
            <td><code>message</code></td>
            <td><code>string</code></td>
            <td><code>''</code></td>
            <td>Message d'erreur ou de validation</td>
          </tr>
          <tr>
            <td><code>autoFocus</code></td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
            <td>Focus automatique sur le premier champ</td>
          </tr>
        </tbody>
      </table>

      <h3>📋 Interface InputCodeProps</h3>
      <pre><code>interface InputCodeProps {
  modelValue?: string
  label?: string
  length?: number
  type?: 'text' | 'number'
  size?: 'small' | 'medium' | 'large'
  state?: 'default' | 'error' | 'valid'
  disabled?: boolean
  message?: string
  required?: boolean
  autoFocus?: boolean
}</code></pre>

      <h3>🎯 Événements disponibles</h3>
      <ul>
        <li><code>@update:modelValue</code> : Émis lors du changement de valeur (v-model)</li>
        <li><code>@complete</code> : Émis quand le code est entièrement saisi</li>
        <li><code>@change</code> : Émis à chaque modification</li>
        <li><code>@focus</code> : Émis lors du focus sur un champ</li>
        <li><code>@blur</code> : Émis lors de la perte de focus</li>
      </ul>

      <h3>🔧 Méthodes exposées</h3>
      <p>Le composant expose les méthodes suivantes via ref :</p>
      <ul>
        <li><code>focus()</code> : Focus sur le premier champ</li>
        <li><code>clear()</code> : Effacer tous les champs</li>
        <li><code>setValue(value: string)</code> : Définir une valeur</li>
      </ul>

      <h3>💡 Exemples d'utilisation</h3>
      
      <h4>Code 2FA basique</h4>
      <pre><code>&lt;InputCode
  v-model="code2FA"
  label="Code de vérification"
  :length="6"
  type="number"
  @complete="validateCode"
/&gt;</code></pre>

      <h4>Avec validation personnalisée</h4>
      <pre><code>&lt;InputCode
  v-model="code"
  label="Code PIN"
  :length="4"
  type="number"
  :state="validationState"
  :message="validationMessage"
  @complete="handleValidation"
/&gt;</code></pre>

      <h4>Avec gestion programmatique</h4>
      <pre><code>&lt;InputCode
  ref="inputCodeRef"
  v-model="code"
  :length="6"
  type="number"
  :auto-focus="true"
/&gt;

// Dans le script
const inputCodeRef = ref()

const focusInput = () => inputCodeRef.value?.focus()
const clearInput = () => inputCodeRef.value?.clear()
const setValue = () => inputCodeRef.value?.setValue('123456')</code></pre>

      <h3>🎨 Intégration Design System</h3>
      <p>Le composant InputCode utilise les composants atoms suivants :</p>
      <ul>
        <li><strong>InputText</strong> : Pour chaque champ individuel</li>
        <li><strong>Icon</strong> : Pour les icônes d'état (erreur, validation)</li>
      </ul>

      <h3>📱 Responsive</h3>
      <p>Le composant s'adapte automatiquement aux écrans mobiles :</p>
      <ul>
        <li>Espacement réduit entre les champs</li>
        <li>Largeur des champs optimisée</li>
        <li>Navigation tactile améliorée</li>
      </ul>

      <h3>♿ Accessibilité</h3>
      <ul>
        <li>Navigation clavier complète</li>
        <li>Labels associés aux champs</li>
        <li>Messages d'état pour les lecteurs d'écran</li>
        <li>Contraste et tailles respectant les standards WCAG</li>
      </ul>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components/layouts'
import { Button, Icon } from '@club-employes/utopia'
import { ref } from 'vue'
import { InputCode } from '../../../../../../packages/utopia/src/components/molecules/InputCode'

// Références
const inputCodeRef = ref<InstanceType<typeof InputCode> | null>(null)

// États pour les exemples
const code2FA = ref<string>('')
const codeAlpha = ref<string>('')
const codePIN = ref<string>('')
const codeSmall = ref<string>('')
const codeMedium = ref<string>('')
const codeLarge = ref<string>('')
const codeError = ref<string>('123456')
const codeValid = ref<string>('654321')
const codeDisabled = ref<string>('111111')
const codeLong = ref<string>('')
const codeEvents = ref<string>('')
const codeCustom = ref<string>('')

// État pour la validation personnalisée
const customState = ref<'default' | 'error' | 'valid'>('default')
const customMessage = ref<string>('')

// Log des événements
const eventLog = ref<string>('')

// Handlers
const handleComplete = (value: string): void => {
  eventLog.value = `Code complet: ${value}`
}

const handleChange = (value: string): void => {
  eventLog.value = `Code changé: ${value}`
}

const handleFocus = (): void => {
  eventLog.value = 'Focus sur un champ'
}

const handleBlur = (): void => {
  eventLog.value = 'Perte de focus'
}

const handleLongCodeComplete = (): void => {
  // Code long complet
}

const handleCustomValidation = (value: string): void => {
  // Validation personnalisée : doit contenir au moins un "1" et un "9"
  const hasOne = value.includes('1')
  const hasNine = value.includes('9')
  
  if (hasOne && hasNine) {
    customState.value = 'valid'
    customMessage.value = 'Code valide !'
  } else {
    customState.value = 'error'
    customMessage.value = 'Le code doit contenir au moins un "1" et un "9"'
  }
}

// Méthodes programmatiques
const focusInput = (): void => {
  inputCodeRef.value?.focus()
  eventLog.value = 'Focus programmatique'
}

const clearInput = (): void => {
  inputCodeRef.value?.clear()
  eventLog.value = 'Effacement programmatique'
}

const setTestValue = (): void => {
  inputCodeRef.value?.setValue('123456')
  eventLog.value = 'Valeur définie programmatiquement'
}
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

/* Styles pour les exemples */
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 1rem;
}

.component-example {
  padding: 1.5rem;
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  background: var(--theme-colors-surface-background);
}

.component-example h4 {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: var(--theme-colors-text-primary);
}

.selected-value {
  margin-top: 1rem;
  padding: 0.5rem;
  background: var(--theme-colors-surface-secondary);
  border-radius: var(--border-radius-sm);
  font-family: monospace;
  font-size: 0.875rem;
  color: var(--theme-colors-text-secondary);
}

.event-log {
  margin-top: 1rem;
  padding: 0.5rem;
  background: var(--theme-colors-surface-secondary);
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  color: var(--theme-colors-text-secondary);
}

.validation-info {
  margin-top: 1rem;
  padding: 0.5rem;
  background: var(--theme-colors-surface-secondary);
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  color: var(--theme-colors-text-secondary);
}

.button-group {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

/* Documentation */
.documentation-section {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--theme-colors-border-default);
}

.documentation-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--theme-colors-text-primary);
}

.documentation-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
  color: var(--theme-colors-text-primary);
}

.documentation-section h4 {
  font-size: 1.125rem;
  font-weight: 500;
  margin: 1.5rem 0 0.75rem 0;
  color: var(--theme-colors-text-primary);
}

.documentation-section p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--theme-colors-text-secondary);
}

.documentation-section ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.documentation-section li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
  color: var(--theme-colors-text-secondary);
}

.documentation-section strong {
  color: var(--theme-colors-text-primary);
  font-weight: 600;
}

/* Props table */
.props-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.875rem;
}

.props-table th,
.props-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--theme-colors-border-default);
}

.props-table th {
  background: var(--theme-colors-surface-secondary);
  font-weight: 600;
  color: var(--theme-colors-text-primary);
}

.props-table td {
  color: var(--theme-colors-text-secondary);
}

.props-table code {
  background: var(--theme-colors-surface-secondary);
  padding: 0.125rem 0.25rem;
  border-radius: var(--border-radius-sm);
  font-family: monospace;
  font-size: 0.8em;
  color: var(--theme-colors-text-primary);
}

/* Code blocks */
.documentation-section pre {
  background: var(--theme-colors-surface-secondary);
  padding: 1rem;
  border-radius: var(--border-radius-md);
  overflow-x: auto;
  margin: 1rem 0;
}

.documentation-section code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--theme-colors-text-primary);
}

/* Responsive */
@media (max-width: 768px) {
  .component-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .component-example {
    padding: 1rem;
  }
  
  .props-table {
    font-size: 0.8rem;
  }
  
  .props-table th,
  .props-table td {
    padding: 0.5rem;
  }
}
</style>