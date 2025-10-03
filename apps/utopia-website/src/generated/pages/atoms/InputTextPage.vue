<template>
  <ComponentLayout 
    title="InputText"
    icon="Type"
    type="Atoms"
  >
    <template #examples>
      <!-- États de base -->
      <div class="showcase-item">
        <h3>États de base</h3>
        <p>Différents états d'un champ de saisie de texte.</p>
        
        <div class="input-demo">
          <div class="input-group">
            <h4>Case active</h4>
            <InputText 
              label="Information demandée"
              placeholder="Information"
              state="default"
            />
          </div>
          
          <div class="input-group">
            <h4>Case disabled</h4>
            <InputText 
              label="Information demandée"
              placeholder="Information"
              disabled
            />
          </div>
          
 
        </div>
      </div>

      <!-- États de validation -->
      <div class="showcase-item">
        <h3>États de validation</h3>
        <p>Champs avec validation et messages d'erreur/succès. Les icônes utilisent automatiquement les couleurs <code>danger</code> et <code>success</code>.</p>
        
        <div class="input-demo">
          <div class="input-group">
            <h4>Erreur de saisie</h4>
            <InputText 
              label="Information demandée"
              placeholder="Information"
              state="error"
              model-value="Information"
              message="Saisie incorrecte"
            />
          </div>
          
          <div class="input-group">
            <h4>Validation réussie</h4>
            <InputText 
              label="Information demandée"
              placeholder="Information"
              state="valid"
              model-value="Information"
              message="Mot de passe valide"
            />
          </div>
          
          <div class="input-group">
            <h4>Erreur avec icône personnalisée</h4>
            <InputText 
              label="Email"
              placeholder="exemple@email.com"
              type="email"
              state="error"
              model-value="email-invalide"
              message="Format d'email invalide"
            />
          </div>
        </div>
      </div>

      <!-- États de complétion -->
      <div class="showcase-item">
        <h3>États de complétion</h3>
        <p>Champs montrant l'état de complétion d'un formulaire.</p>
        
        <div class="input-demo">
          <div class="input-group">
            <h4>Non-complété</h4>
            <InputText 
              label="Prénom"
              placeholder="Prénom"
              state="incomplete"
            />
          </div>
          
          <div class="input-group">
            <h4>Complété</h4>
            <InputText 
              label="Prénom"
              placeholder="Prénom"
              state="completed"
              model-value="Prénom"
            />
          </div>
        </div>
      </div>

      <!-- Tailles -->
      <div class="showcase-item">
        <h3>Tailles</h3>
        <p>Différentes tailles disponibles pour le composant.</p>
        
        <div class="input-demo">
          <div class="input-group">
            <h4>Petite taille</h4>
            <InputText 
              label="Petit champ"
              placeholder="Petit"
              size="small"
            />
          </div>
          
          <div class="input-group">
            <h4>Taille moyenne (défaut)</h4>
            <InputText 
              label="Champ moyen"
              placeholder="Moyen"
              size="medium"
            />
          </div>
          
          <div class="input-group">
            <h4>Grande taille</h4>
            <InputText 
              label="Grand champ"
              placeholder="Grand"
              size="large"
            />
          </div>
        </div>
      </div>

      <!-- Types d'input -->
      <div class="showcase-item">
        <h3>Types d'input</h3>
        <p>Différents types de champs de saisie.</p>
        
        <div class="input-demo">
          <div class="input-group">
            <h4>Email</h4>
            <InputText 
              label="Adresse email"
              placeholder="exemple@email.com"
              type="email"
            />
          </div>
          
          <div class="input-group">
            <h4>Mot de passe</h4>
            <InputText 
              label="Mot de passe"
              placeholder="Votre mot de passe"
              type="password"
            />
          </div>
          
          <div class="input-group">
            <h4>Numéro</h4>
            <InputText 
              label="Âge"
              placeholder="25"
              type="number"
            />
          </div>
        </div>
      </div>

      <!-- Avec icônes -->
      <div class="showcase-item">
        <h3>Avec icônes</h3>
        <p>Champs avec icônes personnalisées. Les icônes utilisent automatiquement la couleur <code>current</code> pour s'adapter au thème.</p>
        
        <div class="input-demo">
          <div class="input-group">
            <h4>Avec icône de recherche</h4>
            <InputText 
              label="Rechercher"
              placeholder="Rechercher..."
              icon="Search"
            />
          </div>
          
          <div class="input-group">
            <h4>Avec icône d'utilisateur</h4>
            <InputText 
              label="Nom d'utilisateur"
              placeholder="Votre nom"
              icon="User"
            />
          </div>
          
          <div class="input-group">
            <h4>Avec icône de localisation</h4>
            <InputText 
              label="Adresse"
              placeholder="Votre adresse"
              icon="Map-pin"
            />
          </div>
        </div>
      </div>

      <!-- Icônes cliquables -->
      <div class="showcase-item">
        <h3>Icônes cliquables</h3>
        <p>Champs avec icônes interactives permettant d'effectuer des actions au clic. Les icônes peuvent être positionnées à gauche ou à droite.</p>
        
        <div class="input-demo">
          <div class="input-group">
            <h4>Mot de passe avec toggle</h4>
            <InputText 
              v-model="passwordValue"
              :type="showPassword ? 'text' : 'password'"
              label="Mot de passe"
              :icon="showPassword ? 'Eye-off' : 'Eye'"
              icon-position="right"
              icon-clickable
              placeholder="Votre mot de passe"
              @icon-click="togglePasswordVisibility"
            />
            <div class="demo-info">
              <strong>Type:</strong> {{ showPassword ? 'text' : 'password' }} | <strong>Valeur:</strong> {{ passwordValue || 'Aucune' }}
            </div>
          </div>
          
          <div class="input-group">
            <h4>Recherche avec action</h4>
            <InputText 
              v-model="searchValue"
              label="Rechercher"
              icon="Search"
              icon-position="left"
              icon-clickable
              placeholder="Tapez votre recherche..."
              @icon-click="performSearch"
            />
            <div class="demo-info">
              <strong>Dernière recherche:</strong> {{ lastSearch || 'Aucune' }}
            </div>
          </div>
          
          <div class="input-group">
            <h4>Email avec vérification</h4>
            <InputText 
              v-model="emailValue"
              type="email"
              label="Email"
              icon="Mail"
              icon-position="right"
              icon-clickable
              placeholder="votre@email.com"
              @icon-click="sendVerification"
            />
            <div class="demo-info">
              <strong>Email:</strong> {{ emailValue || 'Aucun' }} | <strong>Dernière action:</strong> {{ lastAction || 'Aucune' }}
            </div>
          </div>
        </div>
      </div>

      <!-- Positions d'icônes -->
      <div class="showcase-item">
        <h3>Positions d'icônes</h3>
        <p>Comparaison des positions d'icônes (gauche vs droite) avec fonctionnalité cliquable.</p>
        
        <div class="input-demo">
          <div class="input-group">
            <h4>Icône à gauche</h4>
            <InputText 
              v-model="leftIconValue"
              label="Icône gauche"
              icon="Search"
              icon-position="left"
              icon-clickable
              placeholder="Icône à gauche"
              @icon-click="() => handleIconClick('gauche')"
            />
          </div>
          
          <div class="input-group">
            <h4>Icône à droite</h4>
            <InputText 
              v-model="rightIconValue"
              label="Icône droite"
              icon="Search"
              icon-position="right"
              icon-clickable
              placeholder="Icône à droite"
              @icon-click="() => handleIconClick('droite')"
            />
          </div>
        </div>
      </div>

      <!-- Mode code -->
      <div class="showcase-item">
        <h3>Mode code</h3>
        <p>Champs optimisés pour la saisie de codes (2FA, PIN, etc.) avec validation automatique et style adapté.</p>
        
        <div class="input-demo">
          <div class="input-group">
            <h4>Code numérique (6 chiffres)</h4>
            <InputText 
              label="Code PIN"
              placeholder="0"
              type="number"
              is-code
              size="medium"
              :maxlength="1"
            />
          </div>
          
          <div class="input-group">
            <h4>Code alphanumérique (4 caractères)</h4>
            <InputText 
              label="Code d'accès"
              placeholder="A"
              type="text"
              is-code
              size="medium"
              :maxlength="1"
            />
          </div>
          
          <div class="input-group">
            <h4>Code court (petite taille)</h4>
            <InputText 
              label="Code court"
              placeholder="0"
              type="number"
              is-code
              size="small"
              :maxlength="1"
            />
          </div>
          
          <div class="input-group">
            <h4>Code long (grande taille)</h4>
            <InputText 
              label="Code de sécurité"
              placeholder="A"
              type="text"
              is-code
              size="large"
              :maxlength="1"
            />
          </div>
        </div>
      </div>

      <!-- Mode code interactif -->
      <div class="showcase-item">
        <h3>Mode code interactif</h3>
        <p>Testez la validation automatique du mode code. Essayez de saisir des caractères invalides.</p>
        
        <div class="input-demo">
          <div class="input-group">
            <h4>Code numérique (validation stricte)</h4>
            <InputText 
              label="Code 2FA"
              placeholder="0"
              type="number"
              is-code
              size="medium"
              :maxlength="1"
              v-model="codeNumber"
              :state="codeNumberState"
              :message="codeNumberMessage"
            />
            <div class="demo-info">
              <strong>Valeur:</strong> {{ codeNumber || 'Aucune' }}
            </div>
          </div>
          
          <div class="input-group">
            <h4>Code alphanumérique (lettres + chiffres)</h4>
            <InputText 
              label="Code d'accès"
              placeholder="A"
              type="text"
              is-code
              size="medium"
              :maxlength="1"
              v-model="codeAlpha"
              :state="codeAlphaState"
              :message="codeAlphaMessage"
            />
            <div class="demo-info">
              <strong>Valeur:</strong> {{ codeAlpha || 'Aucune' }}
            </div>
          </div>
        </div>
      </div>

      <!-- Email interactif -->
      <div class="showcase-item">
        <h3>Validation email (interactif)</h3>
        <p>Le champ passe automatiquement à l'état <code>valid</code> ou <code>error</code> selon la saisie.</p>
        <div class="input-demo">
          <div class="input-group">
            <h4>Tester</h4>
            <InputText 
              label="Email"
              placeholder="exemple@email.com"
              type="email"
              v-model="email"
              :state="emailState"
              :message="emailMessage"
            />
          </div>
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
          <pre><code>&lt;!-- État inactif --&gt;
&lt;InputText 
  label="Information demandée"
  placeholder="Information"
  state="default"
/&gt;



&lt;!-- État disabled --&gt;
&lt;InputText 
  label="Information demandée"
  placeholder="Information"
  disabled
/&gt;

&lt;!-- État d'erreur --&gt;
&lt;InputText 
  label="Information demandée"
  placeholder="Information"
  state="error"
  model-value="Information"
  message="Saisie incorrecte"
/&gt;

&lt;!-- État valide --&gt;
&lt;InputText 
  label="Information demandée"
  placeholder="Information"
  state="valid"
  model-value="Information"
  message="Mot de passe valide"
/&gt;

&lt;!-- Non-complété --&gt;
&lt;InputText 
  label="Prénom"
  placeholder="Prénom"
  state="incomplete"
/&gt;

&lt;!-- Complété --&gt;
&lt;InputText 
  label="Prénom"
  placeholder="Prénom"
  state="completed"
  model-value="Prénom"
/&gt;

&lt;!-- Avec icône cliquable --&gt;
&lt;InputText 
  v-model="password"
  :type="showPassword ? 'text' : 'password'"
  label="Mot de passe"
  :icon="showPassword ? 'Eye-off' : 'Eye'"
  icon-position="right"
  icon-clickable
  placeholder="Votre mot de passe"
  @icon-click="togglePasswordVisibility"
/&gt;

&lt;!-- Icône à gauche --&gt;
&lt;InputText 
  v-model="searchQuery"
  label="Rechercher"
  icon="Search"
  icon-position="left"
  icon-clickable
  placeholder="Tapez votre recherche..."
  @icon-click="performSearch"
/&gt;</code></pre>
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
                <td><code>modelValue</code></td>
                <td><code>string</code></td>
                <td><code>''</code></td>
                <td>Valeur du champ (v-model)</td>
              </tr>
              <tr>
                <td><code>label</code></td>
                <td><code>string</code></td>
                <td><code>''</code></td>
                <td>Label du champ</td>
              </tr>
              <tr>
                <td><code>placeholder</code></td>
                <td><code>string</code></td>
                <td><code>''</code></td>
                <td>Texte d'aide</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td><code>'text' | 'email' | 'password' | 'number' | 'tel' | 'url'</code></td>
                <td><code>'text'</code></td>
                <td>Type d'input HTML</td>
              </tr>
              <tr>
                <td><code>state</code></td>
                <td><code>'default' | 'error' | 'valid' | 'incomplete' | 'completed'</code></td>
                <td><code>'default'</code></td>
                <td>État visuel du champ</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'small' | 'medium' | 'large'</code></td>
                <td><code>'medium'</code></td>
                <td>Taille du champ</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Désactive le champ</td>
              </tr>
              <tr>
                <td><code>readonly</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Champ en lecture seule</td>
              </tr>
              <tr>
                <td><code>icon</code></td>
                <td><code>string</code></td>
                <td><code>''</code></td>
                <td>Nom de l'icône à afficher</td>
              </tr>
              <tr>
                <td><code>iconPosition</code></td>
                <td><code>'left' | 'right'</code></td>
                <td><code>'right'</code></td>
                <td>Position de l'icône dans l'input</td>
              </tr>
              <tr>
                <td><code>iconClickable</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Rend l'icône cliquable</td>
              </tr>
              <tr>
                <td><code>message</code></td>
                <td><code>string</code></td>
                <td><code>''</code></td>
                <td>Message d'erreur ou de validation</td>
              </tr>
              <tr>
                <td><code>required</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Champ requis</td>
              </tr>
              <tr>
                <td><code>isCode</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Mode optimisé pour les codes (2FA, PIN, etc.)</td>
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
                <td><code>update:modelValue</code></td>
                <td><code>string</code></td>
                <td>Émis quand la valeur change</td>
              </tr>
              <tr>
                <td><code>focus</code></td>
                <td><code>FocusEvent</code></td>
                <td>Émis quand le champ reçoit le focus</td>
              </tr>
              <tr>
                <td><code>blur</code></td>
                <td><code>FocusEvent</code></td>
                <td>Émis quand le champ perd le focus</td>
              </tr>
              <tr>
                <td><code>input</code></td>
                <td><code>Event</code></td>
                <td>Émis à chaque frappe</td>
              </tr>
              <tr>
                <td><code>change</code></td>
                <td><code>Event</code></td>
                <td>Émis quand la valeur change et le champ perd le focus</td>
              </tr>
              <tr>
                <td><code>icon-click</code></td>
                <td><code>MouseEvent</code></td>
                <td>Émis lors du clic sur l'icône (si <code>iconClickable</code> est <code>true</code>)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components/layouts';
import { Icon, InputText } from '@club-employes/utopia';
import { computed, ref } from 'vue';

const email = ref('')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const emailState = computed(() => {
  if (email.value.length === 0) return 'default' as const
  return emailRegex.test(email.value) ? 'valid' as const : 'error' as const
})

const emailMessage = computed(() => {
  if (email.value.length === 0) return ''
  return emailState.value === 'valid' ? 'Adresse email valide' : 'Format d\'email invalide'
})

// Variables pour le mode code
const codeNumber = ref('')
const codeAlpha = ref('')

const codeNumberState = computed(() => {
  if (codeNumber.value.length === 0) return 'default' as const
  return /^\d$/.test(codeNumber.value) ? 'valid' as const : 'error' as const
})

const codeNumberMessage = computed(() => {
  if (codeNumber.value.length === 0) return ''
  return codeNumberState.value === 'valid' ? 'Code numérique valide' : 'Seuls les chiffres sont autorisés'
})

const codeAlphaState = computed(() => {
  if (codeAlpha.value.length === 0) return 'default' as const
  return /^[A-Z0-9]$/.test(codeAlpha.value) ? 'valid' as const : 'error' as const
})

const codeAlphaMessage = computed(() => {
  if (codeAlpha.value.length === 0) return ''
  return codeAlphaState.value === 'valid' ? 'Code alphanumérique valide' : 'Lettres et chiffres uniquement'
})

// Variables pour les icônes cliquables
const passwordValue = ref('')
const showPassword = ref(false)
const searchValue = ref('')
const lastSearch = ref('')
const emailValue = ref('')
const lastAction = ref('')
const leftIconValue = ref('')
const rightIconValue = ref('')

// Fonctions pour les icônes cliquables
const togglePasswordVisibility = (): void => {
  showPassword.value = !showPassword.value
}

const performSearch = (): void => {
  if (searchValue.value) {
    lastSearch.value = searchValue.value
    // Recherche effectuée - logique métier ici
  }
}

const sendVerification = (): void => {
  if (emailValue.value) {
    lastAction.value = `Vérification envoyée à ${emailValue.value}`
    // Vérification envoyée - logique métier ici
  } else {
    lastAction.value = 'Veuillez saisir un email'
  }
}

const handleIconClick = (position: string): void => {
  // Clic sur l'icône - logique métier ici
  if (position === 'gauche') {
    leftIconValue.value = `Clic gauche - ${new Date().toLocaleTimeString()}`
  } else {
    rightIconValue.value = `Clic droite - ${new Date().toLocaleTimeString()}`
  }
}
</script>

<style scoped>
.input-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6, 24px);
  margin: var(--spacing-4, 16px) 0;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3, 12px);
}

.input-group h4 {
  margin: 0;
  font-size: var(--font-size-sm, 14px);
  font-weight: var(--font-weight-semibold, 600);
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

/* Override showcase-item overflow pour permettre le scroll horizontal des tables */
.showcase-item:has(.props-table),
.showcase-item:has(.events-table) {
  overflow: auto;
}

.demo-info {
  margin-top: var(--spacing-2, 8px);
  padding: var(--spacing-2, 8px);
  background: var(--theme-colors-surface-secondary, #f3f4f6);
  border-radius: var(--border-radius-sm, 4px);
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-text-secondary, #6b7280);
}

/* Responsive */
@media (max-width: 768px) {
  .input-demo {
    grid-template-columns: 1fr;
    gap: var(--spacing-4, 16px);
  }
}
</style>