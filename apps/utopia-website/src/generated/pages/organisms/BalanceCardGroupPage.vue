<template>
  <ComponentLayout 
    :title="'BalanceCardGroup'"
    :icon="'Cable-car'"
    :type="'Organisms'"
  >
    <template #examples>
      <!-- Exemple de base -->
      <div class="showcase-item">
        <h3>Exemple de base</h3>
        <div class="example">
          <BalanceCardGroup :cards="sampleCards" />
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;BalanceCardGroup :cards="sampleCards" /&gt;</code></pre>
        </details>
      </div>
      
      <!-- Avec actions -->
      <div class="showcase-item">
        <h3>Avec actions</h3>
        <div class="example">
          <BalanceCardGroup :cards="cardsWithActions" />
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;BalanceCardGroup :cards="cardsWithActions" /&gt;</code></pre>
        </details>
      </div>


      <!-- Devises et langues -->
      <div class="showcase-item">
        <h3>Devises et langues</h3>
        <div class="example">
          <div class="component-states">
            <BalanceCardGroup :cards="sampleCards" currency="EUR" language="fr" />
            <BalanceCardGroup :cards="sampleCards" currency="USD" language="en" />
            <BalanceCardGroup :cards="sampleCards" currency="GBP" language="en" />
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- EUR français --&gt;
&lt;BalanceCardGroup :cards="sampleCards" currency="EUR" language="fr" /&gt;

&lt;!-- USD anglais --&gt;
&lt;BalanceCardGroup :cards="sampleCards" currency="USD" language="en" /&gt;

&lt;!-- GBP anglais --&gt;
&lt;BalanceCardGroup :cards="sampleCards" currency="GBP" language="en" /&gt;</code></pre>
        </details>
      </div>

      <!-- Responsive -->
      <div class="showcase-item">
        <h3>Comportement responsive</h3>
        <div class="example">
          <div class="responsive-demo">
            <BalanceCardGroup :cards="sampleCards" />
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;BalanceCardGroup :cards="sampleCards" /&gt;</code></pre>
        </details>
        <div class="important-note">
          <h3>📱 Comportement responsive</h3>
          <p>Le composant BalanceCardGroup s'adapte automatiquement selon la taille d'écran :</p>
          <ol>
            <li><strong>Desktop (≥768px)</strong> : Les cartes sont disposées horizontalement côte à côte</li>
            <li><strong>Mobile (&lt;768px)</strong> : Les cartes sont empilées verticalement</li>
          </ol>
          <p>Redimensionnez votre fenêtre pour voir le comportement en action !</p>
        </div>
      </div>
    </template>
    
    <template #documentation>
      <div class="documentation-content">
        <h2>BalanceCardGroup</h2>
        <p>Le composant <strong>BalanceCardGroup</strong> permet de grouper plusieurs cartes BalanceCard avec le variant "grouped" dans un layout responsive.</p>
        
        <h3>🎯 Fonctionnalités</h3>
        <ul>
          <li><strong>Layout responsive</strong> : Horizontal sur desktop, vertical sur mobile</li>
          <li><strong>Gestion automatique des espacements</strong> : Espacement adaptatif selon la taille d'écran</li>
          <li><strong>Support multilingue</strong> : Français et anglais</li>
          <li><strong>Support multi-devises</strong> : EUR, USD, GBP et autres devises ISO</li>
          <li><strong>3 tailles</strong> : Small, Medium, Large</li>
          <li><strong>Actions personnalisables</strong> : Chaque carte peut avoir sa propre action</li>
          <li><strong>Breakpoints adaptatifs</strong> : 
            <ul>
              <li>Mobile : &lt;768px (layout vertical)</li>
              <li>Tablet : 768px-1199px (layout horizontal avec espacement moyen)</li>
              <li>Desktop : ≥1200px (layout horizontal avec espacement large)</li>
            </ul>
          </li>
        </ul>

        <h3>📋 Propriétés</h3>
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
                <td><code>cards</code></td>
                <td><code>BalanceCardData[]</code></td>
                <td>-</td>
                <td>Tableau des données des cartes (obligatoire)</td>
              </tr>
              <tr>
                <td><code>language</code></td>
                <td><code>'fr' | 'en'</code></td>
                <td><code>'fr'</code></td>
                <td>Langue pour les traductions et formats</td>
              </tr>
              <tr>
                <td><code>currency</code></td>
                <td><code>string</code></td>
                <td><code>'EUR'</code></td>
                <td>Code de devise ISO pour le formatage des montants</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>📊 Interface BalanceCardData</h3>
        <div class="props-table">
          <table>
            <thead>
              <tr>
                <th>Propriété</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>campaignName</code></td>
                <td><code>string</code></td>
                <td>Nom de la campagne</td>
              </tr>
              <tr>
                <td><code>category</code></td>
                <td><code>'culture' | 'noel' | 'voyages' | 'rentree' | 'retraite' | 'naissance' | 'mariage' | 'sport'</code></td>
                <td>Catégorie de la campagne</td>
              </tr>
              <tr>
                <td><code>totalAmount</code></td>
                <td><code>number</code></td>
                <td>Montant total de la campagne</td>
              </tr>
              <tr>
                <td><code>amount</code></td>
                <td><code>number</code></td>
                <td>Montant restant</td>
              </tr>
              <tr>
                <td><code>campaignCount</code></td>
                <td><code>number</code></td>
                <td>Nombre de campagnes dans la catégorie</td>
              </tr>
              <tr>
                <td><code>actionable</code></td>
                <td><code>() => void</code></td>
                <td>Fonction appelée lors du clic sur la carte (optionnel)</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td>Désactive la carte (optionnel)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>💡 Exemples d'utilisation</h3>
        <div class="usage-examples">
          <h4>Groupe de base</h4>
          <pre><code>&lt;BalanceCardGroup :cards="sampleCards" /&gt;</code></pre>

          <h4>Avec actions personnalisées</h4>
          <pre><code>&lt;BalanceCardGroup :cards="cardsWithActions" /&gt;</code></pre>


          <h4>Version anglaise avec USD</h4>
          <pre><code>&lt;BalanceCardGroup 
  :cards="sampleCards" 
  language="en" 
  currency="USD" 
/&gt;</code></pre>

          <h4>Données d'exemple</h4>
          <pre><code>const sampleCards = [
  {
    campaignName: 'Culture',
    category: 'culture',
    totalAmount: 100,
    amount: 70, // Montant restant
    campaignCount: 5
  },
  {
    campaignName: 'Noël',
    category: 'noel',
    totalAmount: 100,
    amount: 36, // Montant restant
    campaignCount: 3
  }
]</code></pre>
        </div>
      
        <h3>🎨 Design</h3>
        <p>Le composant suit les principes du design system Utopia :</p>
        <ul>
          <li><strong>Couleurs</strong> : Utilise les tokens de couleur du thème</li>
          <li><strong>Typographie</strong> : Respecte la hiérarchie typographique</li>
          <li><strong>Espacement</strong> : Utilise le système de spacing cohérent</li>
          <li><strong>Responsive</strong> : Breakpoints adaptatifs pour tous les écrans</li>
          <li><strong>Accessibilité</strong> : Contraste et navigation clavier</li>
        </ul>

        <div class="technical-info">
          <h3>🔧 Informations techniques</h3>
          <p>📁 <strong>Fichier :</strong> <code>packages/utopia/src/components/organisms/BalanceCardGroup/BalanceCardGroup.vue</code></p>
          <p>📦 <strong>Export :</strong> Disponible via <code>@club-employes/utopia</code></p>
          <p>🎯 <strong>Type :</strong> Organism (composant complexe)</p>
          <p>📱 <strong>Responsive :</strong> CSS Media Queries avec breakpoints adaptatifs</p>
        </div>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components';
import type { BalanceCardData } from '@club-employes/utopia';
import { BalanceCardGroup, Icon } from '@club-employes/utopia';

const handleCardClick = (category: string): void => {
  // eslint-disable-next-line no-console
  console.log(`Carte ${category} cliquée!`);
};

const sampleCards: BalanceCardData[] = [
  {
    campaignName: 'Culture',
    category: 'culture',
    totalAmount: 100,
    amount: 70, // Montant restant
    campaignCount: 5
  },
  {
    campaignName: 'Noël',
    category: 'noel',
    totalAmount: 100,
    amount: 36, // Montant restant
    campaignCount: 3
  }
];

const cardsWithActions: BalanceCardData[] = [
  {
    campaignName: 'Culture',
    category: 'culture',
    totalAmount: 100,
    amount: 70, // Montant restant
    campaignCount: 5,
    actionable: () => handleCardClick('Culture')
  },
  {
    campaignName: 'Noël',
    category: 'noel',
    totalAmount: 100,
    amount: 36, // Montant restant
    campaignCount: 3,
    actionable: () => handleCardClick('Noël')
  },
  {
    campaignName: 'Noël',
    category: 'noel',
    totalAmount: 100,
    amount: 36, // Montant restant
    campaignCount: 3,
    actionable: () => handleCardClick('Noël')
  },
  {
    campaignName: 'Noël',
    category: 'noel',
    totalAmount: 100,
    amount: 36, // Montant restant
    campaignCount: 3,
    actionable: () => handleCardClick('Noël')
  }
];
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

/* Styles pour les tailles de composants */
.component-sizes {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4, 16px);
  align-items: center;
}

/* Styles pour les états de composants */
.component-states {
  display: flex;
  gap: var(--spacing-4, 16px);
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

/* Styles pour la démo responsive */
.responsive-demo {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
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

/* Styles pour la documentation */
.documentation-content {
  line-height: 1.6;
}

.documentation-content h2 {
  color: var(--theme-colors-text-primary, #111827);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 var(--spacing-4, 16px) 0;
  border-bottom: 2px solid var(--theme-colors-brand-primary-200, #bfdbfe);
  padding-bottom: var(--spacing-2, 8px);
}

.documentation-content h3 {
  color: var(--theme-colors-text-primary, #111827);
  font-size: 1.25rem;
  font-weight: 600;
  margin: var(--spacing-6, 24px) 0 var(--spacing-3, 12px) 0;
}

.documentation-content h4 {
  color: var(--theme-colors-text-primary, #111827);
  font-size: 1.125rem;
  font-weight: 600;
  margin: var(--spacing-4, 16px) 0 var(--spacing-2, 8px) 0;
}

.documentation-content p {
  margin: 0 0 var(--spacing-4, 16px) 0;
  color: var(--theme-colors-text-primary, #111827);
}

.documentation-content ul {
  margin: 0 0 var(--spacing-4, 16px) 0;
  padding-left: var(--spacing-5, 20px);
}

.documentation-content li {
  margin-bottom: var(--spacing-2, 8px);
  color: var(--theme-colors-text-primary, #111827);
}

/* Table des propriétés */
.props-table {
  overflow-x: auto;
  margin: var(--spacing-4, 16px) 0;
}

.props-table table {
  width: 100%;
  border-collapse: collapse;
  background: var(--theme-colors-surface-background, #f9fafb);
  border-radius: 8px;
  overflow: hidden;
}

.props-table th,
.props-table td {
  padding: var(--spacing-3, 12px);
  text-align: left;
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
}

.props-table th {
  background: var(--theme-colors-surface-card, #ffffff);
  font-weight: 600;
  color: var(--theme-colors-text-primary, #111827);
}

.props-table td {
  color: var(--theme-colors-text-primary, #111827);
}

.props-table code {
  background: var(--theme-colors-surface-background, #f3f4f6);
  color: var(--theme-colors-text-primary, #111827);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
}

/* Exemples d'utilisation */
.usage-examples {
  margin: var(--spacing-4, 16px) 0;
}

.usage-examples pre {
  background: var(--theme-colors-surface-background, #f3f4f6);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  padding: var(--spacing-4, 16px);
  overflow-x: auto;
  margin: var(--spacing-3, 12px) 0;
}

.usage-examples code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
  color: var(--theme-colors-text-primary, #111827);
}

/* Informations techniques */
.technical-info {
  background: var(--theme-colors-brand-primary-50, #eff6ff);
  border: 1px solid var(--theme-colors-brand-primary-200, #bfdbfe);
  border-radius: 8px;
  padding: var(--spacing-4, 16px);
  margin: var(--spacing-6, 24px) 0;
}

.technical-info h3 {
  margin-top: 0;
  color: var(--theme-colors-brand-primary-700, #1d4ed8);
}

.technical-info p {
  margin: var(--spacing-2, 8px) 0;
  color: var(--theme-colors-text-primary, #111827);
}

.technical-info code {
  background: var(--theme-colors-brand-primary-100, #dbeafe);
  color: var(--theme-colors-brand-primary-800, #1e40af);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
}
</style>
