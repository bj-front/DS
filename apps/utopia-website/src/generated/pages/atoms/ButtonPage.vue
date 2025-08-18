<template>
  <ComponentLayout 
    :title="'Button'"
    :icon="'Package-2'"
    :type="'Atoms'"
  >
    <template #examples>
      <!-- Variants -->
      <div class="showcase-item">
        <h3>Variants</h3>
        <div class="example">
          <div class="button-variants">
            <div class="variant-group">
              <h4>Primary Button</h4>
              <p>Action principale de la page ou action la plus importante.</p>
              <Button variant="primary">Primary Button</Button>
            </div>
            <div class="variant-group">
              <h4>Secondary Button</h4>
              <p>Action secondaire ou alternative moins prioritaire.</p>
              <Button variant="secondary">Secondary Button</Button>
            </div>
            <div class="variant-group">
              <h4>Tertiary Button</h4>
              <p>Actions mineures ou liens déguisés.</p>
              <Button variant="tertiary">Tertiary Button</Button>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Button variant="primary"&gt;Primary Button&lt;/Button&gt;
&lt;Button variant="secondary"&gt;Secondary Button&lt;/Button&gt;
&lt;Button variant="tertiary"&gt;Tertiary Button&lt;/Button&gt;</code></pre>
        </details>
      </div>

      <!-- Tailles -->
      <div class="showcase-item">
        <h3>Tailles</h3>
        <div class="example">
          <div class="size-demo">
            <div class="size-row">
              <span class="size-label">XS</span>
              <Button size="xs">Button</Button>
              <Button variant="secondary" size="xs">Button</Button>
              <Button variant="tertiary" size="xs">Button</Button>
            </div>
            <div class="size-row">
              <span class="size-label">SM</span>
              <Button size="sm">Button</Button>
              <Button variant="secondary" size="sm">Button</Button>
              <Button variant="tertiary" size="sm">Button</Button>
            </div>
            <div class="size-row">
              <span class="size-label">MD</span>
              <Button size="md">Button</Button>
              <Button variant="secondary" size="md">Button</Button>
              <Button variant="tertiary" size="md">Button</Button>
            </div>
            <div class="size-row">
              <span class="size-label">LG</span>
              <Button size="lg">Button</Button>
              <Button variant="secondary" size="lg">Button</Button>
              <Button variant="tertiary" size="lg">Button</Button>
            </div>
            <div class="size-row">
              <span class="size-label">XL</span>
              <Button size="xl">Button</Button>
              <Button variant="secondary" size="xl">Button</Button>
              <Button variant="tertiary" size="xl">Button</Button>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Button size="xs"&gt;Button&lt;/Button&gt;
&lt;Button size="sm"&gt;Button&lt;/Button&gt;
&lt;Button size="md"&gt;Button&lt;/Button&gt;
&lt;Button size="lg"&gt;Button&lt;/Button&gt;
&lt;Button size="xl"&gt;Button&lt;/Button&gt;</code></pre>
        </details>
      </div>
      
            <!-- États -->
      <div class="showcase-item">
        <h3>États</h3>
        <div class="example">
          <div class="state-demo">
            <div class="state-group">
              <h4>Default</h4>
              <div class="state-buttons">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
              </div>
            </div>
            <div class="state-group">
              <h4>Hover</h4>
              <p class="state-description">Passez la souris sur les boutons pour voir l'effet</p>
              <div class="state-buttons">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
              </div>
            </div>
            <div class="state-group">
              <h4>Focus</h4>
              <p class="state-description">Cliquez sur un bouton puis utilisez Tab pour voir l'état focus</p>
              <div class="state-buttons">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
              </div>
            </div>
            <div class="state-group">
              <h4>Focus + Hover</h4>
              <p class="state-description">Focus + survol : ombre supplémentaire</p>
              <div class="state-buttons">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
              </div>
            </div>
            <div class="state-group">
              <h4>Loading</h4>
              <div class="state-buttons">
                <Button variant="primary" loading>Primary</Button>
                <Button variant="secondary" loading>Secondary</Button>
                <Button variant="tertiary" loading>Tertiary</Button>
              </div>
            </div>
            <div class="state-group">
              <h4>Disabled</h4>
              <div class="state-buttons">
                <Button variant="primary" disabled>Primary</Button>
                <Button variant="secondary" disabled>Secondary</Button>
                <Button variant="tertiary" disabled>Tertiary</Button>
              </div>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Button variant="primary"&gt;Default&lt;/Button&gt;
&lt;Button variant="primary" loading&gt;Loading&lt;/Button&gt;
&lt;Button variant="primary" disabled&gt;Disabled&lt;/Button&gt;
&lt;!-- Les états hover et focus sont automatiques --&gt;</code></pre>
        </details>
      </div>

      <!-- États Loading -->
      <div class="showcase-item">
        <h3>États Loading</h3>
        <div class="example">
          <div class="loading-demo">
            <div class="loading-group">
              <h4>Avec texte</h4>
              <div class="loading-buttons">
                <Button variant="primary" loading>Chargement...</Button>
                <Button variant="secondary" loading>Traitement...</Button>
                <Button variant="tertiary" loading>Envoi...</Button>
              </div>
            </div>
            <div class="loading-group">
              <h4>Icône seule</h4>
              <div class="loading-buttons">
                <Button variant="primary" loading />
                <Button variant="secondary" loading />
                <Button variant="tertiary" loading />
              </div>
            </div>
            <div class="loading-group">
              <h4>Différentes tailles</h4>
              <div class="loading-buttons">
                <Button variant="primary" loading size="sm">Small</Button>
                <Button variant="primary" loading size="md">Medium</Button>
                <Button variant="primary" loading size="lg">Large</Button>
              </div>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Button variant="primary" loading&gt;Chargement...&lt;/Button&gt;
&lt;Button variant="primary" loading /&gt;</code></pre>
        </details>
      </div>

      <!-- Avec icônes -->
      <div class="showcase-item">
        <h3>Avec icônes</h3>
        <div class="example">
          <div class="icon-demo">
            <div class="icon-group">
              <h4>Icône à gauche</h4>
              <div class="icon-buttons">
                <Button variant="primary" icon="Plus" icon-position="left">Ajouter</Button>
                <Button variant="secondary" icon="Download" icon-position="left">Télécharger</Button>
                <Button variant="tertiary" icon="Settings" icon-position="left">Paramètres</Button>
              </div>
            </div>
            <div class="icon-group">
              <h4>Icône à droite</h4>
              <div class="icon-buttons">
                <Button variant="primary" icon="Arrow-right" icon-position="right">Suivant</Button>
                <Button variant="secondary" icon="External-link" icon-position="right">Ouvrir</Button>
                <Button variant="tertiary" icon="Chevron-right" icon-position="right">Voir plus</Button>
                <Button variant="primary" icon="Send" icon-position="right">Envoyer</Button>
                <Button variant="secondary" icon="Download" icon-position="right">Télécharger</Button>
              </div>
            </div>
            <div class="icon-group">
              <h4>Icône seule</h4>
              <div class="icon-buttons">
                <Button variant="primary" icon="Plus" />
                <Button variant="secondary" icon="Download" />
                <Button variant="tertiary" icon="Settings" />
              </div>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Button variant="primary" icon="Plus" icon-position="left"&gt;Ajouter&lt;/Button&gt;
&lt;Button variant="primary" icon="Arrow-right" icon-position="right"&gt;Suivant&lt;/Button&gt;
&lt;Button variant="primary" icon="Plus" /&gt;</code></pre>
        </details>
      </div>

      <!-- Test d'alignement -->
      <div class="showcase-item">
        <h3>Test d'alignement</h3>
        <div class="example">
          <div class="alignment-test">
            <h4>Tous les états alignés (même variant)</h4>
            <div class="alignment-row">
              <Button variant="primary">Default</Button>
              <Button variant="primary" loading>Loading</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
            <h4>Tous les variants alignés (même état)</h4>
            <div class="alignment-row">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </div>
            <h4>Avec icônes alignées</h4>
            <div class="alignment-row">
              <Button variant="primary" icon="Plus">Ajouter</Button>
              <Button variant="secondary" icon="Download" icon-position="right">Télécharger</Button>
              <Button variant="tertiary" loading>Chargement</Button>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Test d'alignement --&gt;
&lt;Button variant="primary"&gt;Default&lt;/Button&gt;
&lt;Button variant="primary" loading&gt;Loading&lt;/Button&gt;
&lt;Button variant="primary" disabled&gt;Disabled&lt;/Button&gt;</code></pre>
        </details>
      </div>

      <!-- Matrice complète -->
      <div class="showcase-item">
        <h3>Matrice complète</h3>
        <div class="example">
          <div class="matrix-demo">
            <table class="button-matrix">
              <thead>
                <tr>
                  <th>Variant / Size</th>
                  <th>XS</th>
                  <th>SM</th>
                  <th>MD</th>
                  <th>LG</th>
                  <th>XL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Primary</strong></td>
                  <td><Button variant="primary" size="xs">Button</Button></td>
                  <td><Button variant="primary" size="sm">Button</Button></td>
                  <td><Button variant="primary" size="md">Button</Button></td>
                  <td><Button variant="primary" size="lg">Button</Button></td>
                  <td><Button variant="primary" size="xl">Button</Button></td>
                </tr>
                <tr>
                  <td><strong>Secondary</strong></td>
                  <td><Button variant="secondary" size="xs">Button</Button></td>
                  <td><Button variant="secondary" size="sm">Button</Button></td>
                  <td><Button variant="secondary" size="md">Button</Button></td>
                  <td><Button variant="secondary" size="lg">Button</Button></td>
                  <td><Button variant="secondary" size="xl">Button</Button></td>
                </tr>
                <tr>
                  <td><strong>Tertiary</strong></td>
                  <td><Button variant="tertiary" size="xs">Button</Button></td>
                  <td><Button variant="tertiary" size="sm">Button</Button></td>
                  <td><Button variant="tertiary" size="md">Button</Button></td>
                  <td><Button variant="tertiary" size="lg">Button</Button></td>
                  <td><Button variant="tertiary" size="xl">Button</Button></td>
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
          <pre><code>&lt;Button variant="primary" size="xs"&gt;Button&lt;/Button&gt;
&lt;Button variant="secondary" size="md"&gt;Button&lt;/Button&gt;
&lt;Button variant="tertiary" size="xl"&gt;Button&lt;/Button&gt;</code></pre>
        </details>
      </div>

      <!-- Exemples d'usage -->
      <div class="showcase-item">
        <h3>Exemples d'usage</h3>
        <div class="example">
          <div class="usage-demo">
            <div class="usage-group">
              <h4>Actions principales</h4>
              <div class="usage-buttons">
                <Button variant="primary" icon="Save">Enregistrer</Button>
                <Button variant="primary" icon="Send" icon-position="right">Envoyer</Button>
                <Button variant="primary" icon="Arrow-right" icon-position="right">Continuer</Button>
                <Button variant="primary" icon="Plus">Créer</Button>
              </div>
            </div>
            <div class="usage-group">
              <h4>Actions secondaires</h4>
              <div class="usage-buttons">
                <Button variant="secondary" icon="Download" icon-position="right">Exporter</Button>
                <Button variant="secondary" icon="Copy">Dupliquer</Button>
                <Button variant="secondary" icon="External-link" icon-position="right">Ouvrir</Button>
                <Button variant="secondary" icon="Share">Partager</Button>
              </div>
            </div>
            <div class="usage-group">
              <h4>Actions tertiaires</h4>
              <div class="usage-buttons">
                <Button variant="tertiary" icon="Edit">Modifier</Button>
                <Button variant="tertiary" icon="Chevron-right" icon-position="right">Voir plus</Button>
                <Button variant="tertiary" icon="Arrow-up-right" icon-position="right">Détails</Button>
                <Button variant="tertiary" icon="Settings">Options</Button>
              </div>
            </div>
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;Button variant="primary" icon="Save"&gt;Enregistrer&lt;/Button&gt;
&lt;Button variant="primary" icon="Send" icon-position="right"&gt;Envoyer&lt;/Button&gt;
&lt;Button variant="secondary" icon="Download" icon-position="right"&gt;Exporter&lt;/Button&gt;
&lt;Button variant="tertiary" icon="Chevron-right" icon-position="right"&gt;Voir plus&lt;/Button&gt;</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <div class="documentation-content">
        <h3>📋 À propos du composant Button</h3>
        <p>Le composant <strong>Button</strong> est l'élément d'interface le plus utilisé. Il permet aux utilisateurs de déclencher des actions, naviguer, ou soumettre des formulaires. Il est disponible en 3 variants et 5 tailles.</p>
        
        <h3>🎯 Utilisation</h3>
        <p>Le Button émet un événement <code>click</code> et peut inclure une icône :</p>
        <pre class="doc-code"><code>&lt;Button variant="primary" icon="Plus" @click="handleClick"&gt;Ajouter&lt;/Button&gt;</code></pre>
        
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
                <td><code>variant</code></td>
                <td><code>'primary' | 'secondary' | 'tertiary'</code></td>
                <td><code>'primary'</code></td>
                <td>Style du bouton selon l'importance</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code></td>
                <td><code>'md'</code></td>
                <td>Taille du bouton</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Désactive le bouton</td>
              </tr>
              <tr>
                <td><code>loading</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Affiche l'icône de chargement et désactive les interactions</td>
              </tr>
              <tr>
                <td><code>icon</code></td>
                <td><code>string</code></td>
                <td><code>undefined</code></td>
                <td>Nom de l'icône à afficher</td>
              </tr>
              <tr>
                <td><code>iconPosition</code></td>
                <td><code>'left' | 'right'</code></td>
                <td><code>'left'</code></td>
                <td>Position de l'icône par rapport au texte</td>
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
                <td><code>click</code></td>
                <td><code>(event: MouseEvent) => void</code></td>
                <td>Émis lors du clic sur le bouton</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>🎨 Variants</h3>
        <ul>
          <li><strong>Primary :</strong> Action principale, la plus importante de la page</li>
          <li><strong>Secondary :</strong> Actions secondaires, alternatives</li>
          <li><strong>Tertiary :</strong> Actions mineures, liens déguisés</li>
        </ul>

        <h3>📏 Tailles</h3>
        <ul>
          <li><strong>XS :</strong> 12px - Pour les espaces très contraints</li>
          <li><strong>SM :</strong> 14px - Boutons secondaires dans les interfaces denses</li>
          <li><strong>MD :</strong> 16px - Taille standard pour la plupart des cas</li>
          <li><strong>LG :</strong> 18px - Boutons importants, call-to-action</li>
          <li><strong>XL :</strong> 20px - Boutons hero, actions critiques</li>
        </ul>

        <h3>🎨 États disponibles</h3>
        <ul>
          <li><strong>Default :</strong> État normal du bouton</li>
          <li><strong>Hover :</strong> Au survol de la souris - couleur plus claire + ombre</li>
          <li><strong>Focus :</strong> Navigation clavier - bordure bleue visible</li>
          <li><strong>Focus + Hover :</strong> Combine focus et survol - ombre supplémentaire</li>
          <li><strong>Active :</strong> Au clic - léger enfoncement + ombre réduite</li>
          <li><strong>Loading :</strong> Icône de chargement animée, interactions désactivées</li>
          <li><strong>Disabled :</strong> Bouton inactif - couleurs atténuées, pas d'interaction</li>
        </ul>

        <h3>🎨 Design System</h3>
        <p>Le Button respecte les tokens de couleur du design system :</p>
        <ul>
          <li><strong>Couleurs :</strong> Utilise les tokens <code>--theme-colors-brand-primary-*</code></li>
          <li><strong>Radius :</strong> Forme en pilule avec <code>border-radius: 50px</code></li>
          <li><strong>Accessibilité :</strong> Focus-visible, ARIA, navigation clavier</li>
          <li><strong>Mobile :</strong> Optimisé pour les interactions tactiles</li>
        </ul>

        <h3>💡 Bonnes pratiques</h3>
        <ul>
          <li>Utilisez un seul bouton Primary par écran ou section</li>
          <li>Préférez les icônes connues et universelles</li>
          <li>Gardez les labels courts et explicites</li>
          <li>Utilisez l'état disabled pour les actions non disponibles</li>
          <li>Groupez les boutons liés logiquement</li>
        </ul>

        <div class="file-info">
      <p>📁 <strong>Fichier :</strong> <code>src/generated/pages/atoms/ButtonPage.vue</code></p>
      <p>🎨 <strong>Composant :</strong> <code>packages/utopia/src/components/atoms/Button/</code></p>
        </div>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components';
import { Button, Icon } from '@club-employes/utopia';
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

/* Styles spécifiques pour les démos de Button */
.button-variants {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-6, 24px);
  width: 100%;
  max-width: 800px;
}

.variant-group {
  text-align: center;
  padding: var(--spacing-4, 16px);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  background: var(--theme-colors-surface-background, #f9fafb);
}

.variant-group h4 {
  margin: 0 0 var(--spacing-2, 8px) 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
}

.variant-group p {
  margin: 0 0 var(--spacing-4, 16px) 0;
  font-size: 0.875rem;
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.4;
}

/* Styles pour les tailles */
.size-demo {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4, 16px);
  width: 100%;
  max-width: 600px;
}

.size-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-4, 16px);
  padding: var(--spacing-3, 12px);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 6px;
  background: var(--theme-colors-surface-background, #f9fafb);
}

.size-label {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--theme-colors-text-secondary, #6b7280);
  min-width: 30px;
  text-align: center;
}

/* Styles pour les états */
.state-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--spacing-4, 16px);
  width: 100%;
  max-width: 1200px;
}

.state-group {
  text-align: center;
  padding: var(--spacing-4, 16px);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  background: var(--theme-colors-surface-background, #f9fafb);
}

.state-group h4 {
  margin: 0 0 var(--spacing-3, 12px) 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
}

.state-description {
  margin: 0 0 var(--spacing-3, 12px) 0;
  font-size: 0.875rem;
  color: var(--theme-colors-text-secondary, #6b7280);
  font-style: italic;
}

.state-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
  align-items: center;
}

/* Styles pour les loading */
.loading-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-6, 24px);
  width: 100%;
  max-width: 900px;
}

/* Styles pour le test d'alignement */
.alignment-test {
  width: 100%;
  max-width: 600px;
}

.alignment-test h4 {
  margin: var(--spacing-6, 24px) 0 var(--spacing-3, 12px) 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
  text-align: left;
}

.alignment-test h4:first-child {
  margin-top: 0;
}

.alignment-row {
  display: flex;
  gap: var(--spacing-3, 12px);
  align-items: center;
  margin-bottom: var(--spacing-4, 16px);
  padding: var(--spacing-3, 12px);
  background: var(--theme-colors-surface-background, #f9fafb);
  border-radius: 6px;
  border: 1px dashed var(--theme-colors-border-default, #e5e7eb);
}

.loading-group {
  text-align: center;
  padding: var(--spacing-4, 16px);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  background: var(--theme-colors-surface-background, #f9fafb);
}

.loading-group h4 {
  margin: 0 0 var(--spacing-3, 12px) 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
}

.loading-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
  align-items: center;
}

/* Styles pour les icônes */
.icon-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-6, 24px);
  width: 100%;
  max-width: 900px;
}

.icon-group {
  text-align: center;
  padding: var(--spacing-4, 16px);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  background: var(--theme-colors-surface-background, #f9fafb);
}

.icon-group h4 {
  margin: 0 0 var(--spacing-3, 12px) 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
}

.icon-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
  align-items: center;
}

/* Styles pour la matrice */
.matrix-demo {
  width: 100%;
  overflow-x: auto;
}

.button-matrix {
  width: 100%;
  border-collapse: collapse;
  background: var(--theme-colors-surface-card, #ffffff);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.button-matrix th,
.button-matrix td {
  padding: var(--spacing-3, 12px);
  text-align: center;
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  vertical-align: middle;
}

.button-matrix th {
  background: var(--theme-colors-surface-background, #f9fafb);
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
  font-size: 0.875rem;
}

.button-matrix td:first-child {
  text-align: left;
  background: var(--theme-colors-surface-background, #f9fafb);
  font-weight: 500;
}

.button-matrix tbody tr:last-child td {
  border-bottom: none;
}

.button-matrix tbody tr:hover {
  background: var(--theme-colors-brand-primary-25, #eff6ff);
}

/* Styles pour les exemples d'usage */
.usage-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6, 24px);
  width: 100%;
  max-width: 900px;
}

.usage-group {
  padding: var(--spacing-4, 16px);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  background: var(--theme-colors-surface-background, #f9fafb);
}

.usage-group h4 {
  margin: 0 0 var(--spacing-3, 12px) 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  padding-bottom: var(--spacing-2, 8px);
}

.usage-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2, 8px);
  align-items: flex-start;
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

/* Responsive */
@media (max-width: 768px) {
  .button-variants,
  .state-demo,
  .usage-demo {
    grid-template-columns: 1fr;
  }
  
  .size-row {
    flex-direction: column;
    gap: var(--spacing-2, 8px);
    text-align: center;
  }
  
  .size-label {
    min-width: auto;
  }
  
  .button-matrix {
    font-size: 0.875rem;
  }
  
  .button-matrix th,
  .button-matrix td {
    padding: var(--spacing-2, 8px);
  }
  
  .icon-demo {
    grid-template-columns: 1fr;
  }
}
</style>