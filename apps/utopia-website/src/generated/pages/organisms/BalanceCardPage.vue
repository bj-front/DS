<template>
  <ComponentLayout 
    :title="'BalanceCard'"
    :icon="'Cable-car'"
    :type="'Organisms'"
  >
    <template #examples>
      <!-- Exemple de base -->
      <div class="showcase-item">
        <h3>Exemple de base</h3>
        <div class="example">
          <BalanceCard
            campaign-name="Campagne Culture"
            category="culture"
            :total-amount="1000"
            :spent-amount="350"
            expiration-date="2024-12-31"
          />
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;BalanceCard
  campaign-name="Campagne Culture"
  category="culture"
  :total-amount="1000"
  :spent-amount="350"
  expiration-date="2024-12-31"
/&gt;</code></pre>
        </details>
      </div>
      
      <!-- Variants -->
      <div class="showcase-item">
        <h3>Variants</h3>
        <div class="example">
          <div class="component-variants">
            <BalanceCard
              campaign-name="Campagne Noël avec un titre tres tres long !!!! en anglais !!!!!"
              category="noel"
              :total-amount="500"
              :spent-amount="200"
              expiration-date="2024-12-25"
              variant="default"
            />
            <BalanceCard
              campaign-name="Campagne Voyages"
              category="voyages"
              :total-amount="2000"
              :spent-amount="1200"
              expiration-date="2024-08-15"
              variant="primary"
            />
            <BalanceCard
              campaign-name="Campagne Mariage"
              category="mariage"
              :total-amount="1500"
              :spent-amount="800"
              expiration-date="2024-06-20"
              variant="secondary"
            />
            <BalanceCard
              campaign-name="Campagne avec action et titre tres tres tresres tres tresres tres tresres tres tresres tres tresres tres tres long!!!! "
              category="noel"
              :total-amount="100"
              :spent-amount="64"
              expiration-date="2024-12-25"
              :actionable="handleCardClick"
            />
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;BalanceCard
  campaign-name="Campagne Noël"
  category="noel"
  :total-amount="500"
  :spent-amount="200"
  expiration-date="2024-12-25"
  variant="default"
/&gt;

&lt;BalanceCard
  campaign-name="Campagne Voyages"
  category="voyages"
  :total-amount="2000"
  :spent-amount="1200"
  expiration-date="2024-08-15"
  variant="primary"
/&gt;

&lt;BalanceCard
  campaign-name="Campagne Mariage"
  category="mariage"
  :total-amount="1500"
  :spent-amount="800"
  expiration-date="2024-06-20"
  variant="secondary"
/&gt;

&lt;BalanceCard
  campaign-name="Campagne avec action"
  category="noel"
  :total-amount="100"
  :spent-amount="64"
  expiration-date="2024-12-25"
  :actionable="() => alert('Carte cliquée!')"
/&gt;</code></pre>
        </details>
      </div>

      <!-- Tailles -->
      <div class="showcase-item">
        <h3>Tailles</h3>
        <div class="example">
          <div class="component-sizes">
            <BalanceCard
              campaign-name="Petite campagne"
              category="sport"
              :total-amount="300"
              :spent-amount="150"
              expiration-date="2024-05-30"
              size="small"
            />
            <BalanceCard
              campaign-name="Campagne moyenne"
              category="naissance"
              :total-amount="800"
              :spent-amount="400"
              expiration-date="2024-07-15"
              size="medium"
            />
            <BalanceCard
              campaign-name="Grande campagne"
              category="retraite"
              :total-amount="5000"
              :spent-amount="2500"
              expiration-date="2024-12-31"
              size="large"
            />
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;BalanceCard
  campaign-name="Petite campagne"
  category="sport"
  :total-amount="300"
  :spent-amount="150"
  expiration-date="2024-05-30"
  size="small"
/&gt;

&lt;BalanceCard
  campaign-name="Campagne moyenne"
  category="naissance"
  :total-amount="800"
  :spent-amount="400"
  expiration-date="2024-07-15"
  size="medium"
/&gt;

&lt;BalanceCard
  campaign-name="Grande campagne"
  category="retraite"
  :total-amount="5000"
  :spent-amount="2500"
  expiration-date="2024-12-31"
  size="large"
/&gt;</code></pre>
        </details>
      </div>

      <!-- Exemples avec devises et langues -->
      <div class="showcase-item">
        <h3>Devises et langues</h3>
        <div class="example">
          <div class="component-states">
            <BalanceCard
              campaign-name="Campagne EUR"
              category="culture"
              :total-amount="1000"
              :spent-amount="500"
              expiration-date="2024-12-31"
              currency="EUR"
            />
            <BalanceCard
              campaign-name="US Campaign"
              category="sport"
              :total-amount="1500"
              :spent-amount="750"
              expiration-date="2024-12-31"
              language="en"
              currency="USD"
            />
            <BalanceCard
              campaign-name="UK Campaign"
              category="voyages"
              :total-amount="800"
              :spent-amount="400"
              expiration-date="2024-12-31"
              language="en"
              currency="GBP"
            />
            <BalanceCard
              campaign-name="Campagne expirée EUR"
              category="noel"
              :total-amount="600"
              :spent-amount="300"
              expiration-date="2024-01-15"
              currency="EUR"
              disabled
              expired-label="Expirée le"
            />
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Campagne en EUR --&gt;
&lt;BalanceCard
  campaign-name="Campagne EUR"
  category="culture"
  :total-amount="1000"
  :spent-amount="500"
  expiration-date="2024-12-31"
  currency="EUR"
/&gt;

&lt;!-- Campagne en USD avec langue anglaise --&gt;
&lt;BalanceCard
  campaign-name="US Campaign"
  category="sport"
  :total-amount="1500"
  :spent-amount="750"
  expiration-date="2024-12-31"
  language="en"
  currency="USD"
/&gt;

&lt;!-- Campagne expirée --&gt;
&lt;BalanceCard
  campaign-name="Campagne expirée EUR"
  category="noel"
  :total-amount="600"
  :spent-amount="300"
  expiration-date="2024-01-15"
  currency="EUR"
  disabled
/&gt;</code></pre>
        </details>
      </div>

      <!-- Toutes les catégories -->
      <div class="showcase-item">
        <h3>Catégories disponibles</h3>
        <div class="example">
          <div class="categories-grid">
            <BalanceCard
              campaign-name="Culture"
              category="culture"
              :total-amount="1000"
              :spent-amount="300"
              expiration-date="2024-12-31"
            />
            <BalanceCard
              campaign-name="Noël"
              category="noel"
              :total-amount="500"
              :spent-amount="200"
              expiration-date="2024-12-25"
            />
            <BalanceCard
              campaign-name="Voyages"
              category="voyages"
              :total-amount="2000"
              :spent-amount="1200"
              expiration-date="2024-08-15"
            />
            <BalanceCard
              campaign-name="Rentrée"
              category="rentree"
              :total-amount="400"
              :spent-amount="150"
              expiration-date="2024-09-01"
            />
            <BalanceCard
              campaign-name="Retraite"
              category="retraite"
              :total-amount="3000"
              :spent-amount="1800"
              expiration-date="2024-12-31"
            />
            <BalanceCard
              campaign-name="Naissance"
              category="naissance"
              :total-amount="800"
              :spent-amount="400"
              expiration-date="2024-07-15"
            />
            <BalanceCard
              campaign-name="Mariage"
              category="mariage"
              :total-amount="1500"
              :spent-amount="800"
              expiration-date="2024-06-20"
            />
            <BalanceCard
              campaign-name="Sport"
              category="sport"
              :total-amount="300"
              :spent-amount="150"
              expiration-date="2024-05-30"
            />
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Culture --&gt;
&lt;BalanceCard
  campaign-name="Culture"
  category="culture"
  :total-amount="1000"
  :spent-amount="300"
  expiration-date="2024-12-31"
/&gt;

&lt;!-- Noël --&gt;
&lt;BalanceCard
  campaign-name="Noël"
  category="noel"
  :total-amount="500"
  :spent-amount="200"
  expiration-date="2024-12-25"
/&gt;

&lt;!-- Voyages --&gt;
&lt;BalanceCard
  campaign-name="Voyages"
  category="voyages"
  :total-amount="2000"
  :spent-amount="1200"
  expiration-date="2024-08-15"
/&gt;

&lt;!-- Rentrée --&gt;
&lt;BalanceCard
  campaign-name="Rentrée"
  category="rentree"
  :total-amount="400"
  :spent-amount="150"
  expiration-date="2024-09-01"
/&gt;

&lt;!-- Retraite --&gt;
&lt;BalanceCard
  campaign-name="Retraite"
  category="retraite"
  :total-amount="3000"
  :spent-amount="1800"
  expiration-date="2024-12-31"
/&gt;

&lt;!-- Naissance --&gt;
&lt;BalanceCard
  campaign-name="Naissance"
  category="naissance"
  :total-amount="800"
  :spent-amount="400"
  expiration-date="2024-07-15"
/&gt;

&lt;!-- Mariage --&gt;
&lt;BalanceCard
  campaign-name="Mariage"
  category="mariage"
  :total-amount="1500"
  :spent-amount="800"
  expiration-date="2024-06-20"
/&gt;

&lt;!-- Sport --&gt;
&lt;BalanceCard
  campaign-name="Sport"
  category="sport"
  :total-amount="300"
  :spent-amount="150"
  expiration-date="2024-05-30"
/&gt;</code></pre>
        </details>
      </div>

      <!-- États -->
      <div class="showcase-item">
        <h3>États</h3>
        <div class="example">
          <div class="component-states">
            <BalanceCard
              campaign-name="Campagne active"
              category="culture"
              :total-amount="1000"
              :spent-amount="350"
              expiration-date="2024-12-31"
            />
            <BalanceCard
              campaign-name="Campagne désactivée"
              category="sport"
              :total-amount="500"
              :spent-amount="200"
              expiration-date="2024-05-30"
              disabled
            />
            <BalanceCard
              campaign-name="Campagne sans action"
              category="culture"
              :total-amount="800"
              :spent-amount="400"
              expiration-date="2024-07-15"
            />
            <BalanceCard
              campaign-name="Campagne avec action"
              category="sport"
              :total-amount="600"
              :spent-amount="300"
              expiration-date="2024-09-20"
              :actionable="handleCardClick"
            />
            <BalanceCard
              campaign-name="English Campaign"
              category="culture"
              :total-amount="800"
              :spent-amount="400"
              expiration-date="2024-10-15"
              language="en"
            />
            <BalanceCard
              campaign-name="Campagne expirée"
              category="noel"
              :total-amount="500"
              :spent-amount="300"
              expiration-date="2024-01-15"
              disabled
            />
          </div>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;!-- Campagne active --&gt;
&lt;BalanceCard
  campaign-name="Campagne active"
  category="culture"
  :total-amount="1000"
  :spent-amount="350"
  expiration-date="2024-12-31"
/&gt;

&lt;!-- Campagne désactivée --&gt;
&lt;BalanceCard
  campaign-name="Campagne désactivée"
  category="sport"
  :total-amount="500"
  :spent-amount="200"
  expiration-date="2024-05-30"
  disabled
/&gt;

&lt;!-- Campagne sans action (lecture seule) --&gt;
&lt;BalanceCard
  campaign-name="Campagne sans action"
  category="culture"
  :total-amount="800"
  :spent-amount="400"
  expiration-date="2024-07-15"
/&gt;

&lt;!-- Campagne avec action --&gt;
&lt;BalanceCard
  campaign-name="Campagne avec action"
  category="sport"
  :total-amount="600"
  :spent-amount="300"
  expiration-date="2024-09-20"
  :actionable="() => alert('Carte cliquée!')"
/&gt;

&lt;!-- Version anglaise --&gt;
&lt;BalanceCard
  campaign-name="English Campaign"
  category="culture"
  :total-amount="800"
  :spent-amount="400"
  expiration-date="2024-10-15"
  language="en"
/&gt;

&lt;!-- Campagne expirée --&gt;
&lt;BalanceCard
  campaign-name="Campagne expirée"
  category="noel"
  :total-amount="500"
  :spent-amount="300"
  expiration-date="2024-01-15"
  disabled
/&gt;</code></pre>
        </details>
      </div>
    </template>
    
    <template #documentation>
      <div class="documentation-content">
        <h2>BalanceCard</h2>
        <p>Le composant <strong>BalanceCard</strong> permet d'afficher une carte de campagne avec toutes les informations essentielles : nom, catégorie, montants, progression et date d'expiration.</p>
        
        <h3>🎯 Fonctionnalités</h3>
        <ul>
          <li><strong>Affichage des campagnes</strong> : Nom, catégorie avec icône 3D, montants et date d'expiration</li>
          <li><strong>États de campagne</strong> : 
            <ul>
              <li><strong>Active</strong> : Affiche le slider de progression avec montants au-dessus</li>
              <li><strong>Expirée</strong> : Affiche "Campagne expirée" et "Expiré le [date]"</li>
            </ul>
          </li>
          <li><strong>Support multilingue</strong> : Français et anglais avec formatage localisé des dates</li>
          <li><strong>Support multi-devises</strong> : EUR, USD, GBP et autres devises ISO avec formatage automatique</li>
          <li><strong>8 catégories supportées</strong> : Culture, Noël, Voyages, Rentrée, Retraite, Naissance, Mariage, Sport</li>
          <li><strong>Layout en 2 rangées</strong> : Icône/titre/date/chevron en haut, progression en bas</li>
          <li><strong>Interactivité conditionnelle</strong> : Chevron et cursor pointer uniquement pour les cartes actionables</li>
          <li><strong>3 variants</strong> : Default, Primary, Secondary</li>
          <li><strong>3 tailles</strong> : Small, Medium, Large</li>
          <li><strong>Responsive</strong> : S'adapte à tous les écrans</li>
          <li><strong>Dark mode</strong> : Support du mode sombre</li>
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
                <td><code>campaignName</code></td>
                <td><code>string</code></td>
                <td>-</td>
                <td>Nom de la campagne (obligatoire)</td>
              </tr>
              <tr>
                <td><code>category</code></td>
                <td><code>'culture' | 'noel' | 'voyages' | 'rentree' | 'retraite' | 'naissance' | 'mariage' | 'sport'</code></td>
                <td>-</td>
                <td>Catégorie de la campagne (obligatoire)</td>
              </tr>
              <tr>
                <td><code>totalAmount</code></td>
                <td><code>number</code></td>
                <td>-</td>
                <td>Montant total de la campagne (obligatoire)</td>
              </tr>
              <tr>
                <td><code>spentAmount</code></td>
                <td><code>number</code></td>
                <td>-</td>
                <td>Montant dépensé (obligatoire)</td>
              </tr>
              <tr>
                <td><code>expirationDate</code></td>
                <td><code>string | Date</code></td>
                <td>-</td>
                <td>Date d'expiration de la campagne (obligatoire)</td>
              </tr>
              <tr>
                <td><code>variant</code></td>
                <td><code>'default' | 'primary' | 'secondary'</code></td>
                <td><code>'default'</code></td>
                <td>Variant visuel de la carte</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'small' | 'medium' | 'large'</code></td>
                <td><code>'medium'</code></td>
                <td>Taille de la carte</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Désactive la carte</td>
              </tr>
              <tr>
                <td><code>actionable</code></td>
                <td><code>() => void</code></td>
                <td><code>undefined</code></td>
                <td>Fonction appelée lors du clic sur la carte. Si définie, rend la carte interactive</td>
              </tr>
              <tr>
                <td><code>language</code></td>
                <td><code>'fr' | 'en'</code></td>
                <td><code>'fr'</code></td>
                <td>Langue pour les traductions et formats (français ou anglais)</td>
              </tr>
              <tr>
                <td><code>currency</code></td>
                <td><code>string</code></td>
                <td><code>'EUR'</code></td>
                <td>Code de devise ISO pour le formatage des montants (ex: 'EUR', 'USD', 'GBP')</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>🎨 Catégories disponibles</h3>
        <div class="categories-info">
          <div class="category-item">
            <strong>culture</strong> - <em>3D_Ticket.webp</em> - Pour les événements culturels
          </div>
          <div class="category-item">
            <strong>noel</strong> - <em>3D_SapinNoel.webp</em> - Pour les campagnes de Noël
          </div>
          <div class="category-item">
            <strong>voyages</strong> - <em>3D_Valise.webp</em> - Pour les voyages et vacances
          </div>
          <div class="category-item">
            <strong>rentree</strong> - <em>3D_Cartable.webp</em> - Pour la rentrée scolaire
          </div>
          <div class="category-item">
            <strong>retraite</strong> - <em>3D_ChaiseBascule.webp</em> - Pour les événements de retraite
          </div>
          <div class="category-item">
            <strong>naissance</strong> - <em>3D_Peluche.webp</em> - Pour les naissances
          </div>
          <div class="category-item">
            <strong>mariage</strong> - <em>3D_Alliance.webp</em> - Pour les mariages
          </div>
          <div class="category-item">
            <strong>sport</strong> - <em>3D_sport.webp</em> - Pour les événements sportifs
          </div>
        </div>

        <h3>💡 Exemples d'utilisation</h3>
        <div class="usage-examples">
          <h4>Campagne de base</h4>
          <pre><code>&lt;BalanceCard
  campaign-name="Campagne Culture"
  category="culture"
  :total-amount="1000"
  :spent-amount="350"
  expiration-date="2024-12-31"
/&gt;</code></pre>

          <h4>Avec variant primary</h4>
          <pre><code>&lt;BalanceCard
  campaign-name="Campagne Voyages"
  category="voyages"
  :total-amount="2000"
  :spent-amount="1200"
  expiration-date="2024-08-15"
  variant="primary"
/&gt;</code></pre>

          <h4>Petite taille</h4>
          <pre><code>&lt;BalanceCard
  campaign-name="Petite campagne"
  category="sport"
  :total-amount="300"
  :spent-amount="150"
  expiration-date="2024-05-30"
  size="small"
/&gt;</code></pre>

          <h4>Avec action</h4>
          <pre><code>&lt;BalanceCard
  campaign-name="Campagne cliquable"
  category="culture"
  :total-amount="1000"
  :spent-amount="500"
  expiration-date="2024-12-31"
  :actionable="() => console.log('Carte cliquée!')"
/&gt;</code></pre>

          <h4>Sans action (lecture seule)</h4>
          <pre><code>&lt;BalanceCard
  campaign-name="Campagne en lecture seule"
  category="culture"
  :total-amount="1000"
  :spent-amount="500"
  expiration-date="2024-12-31"
/&gt;</code></pre>

          <h4>Version anglaise</h4>
          <pre><code>&lt;BalanceCard
  campaign-name="English Campaign"
  category="sport"
  :total-amount="1500"
  :spent-amount="750"
  expiration-date="2024-12-31"
  language="en"
/&gt;</code></pre>

          <h4>Avec devise personnalisée</h4>
          <pre><code>&lt;BalanceCard
  campaign-name="US Campaign"
  category="culture"
  :total-amount="1000"
  :spent-amount="500"
  expiration-date="2024-12-31"
  language="en"
  currency="USD"
/&gt;</code></pre>

          <h4>Campagne expirée</h4>
          <pre><code>&lt;BalanceCard
  campaign-name="Campagne expirée"
  category="noel"
  :total-amount="500"
  :spent-amount="300"
  expiration-date="2024-01-15"
  disabled
/&gt;</code></pre>

          <h4>Campagne avec action et devise</h4>
          <pre><code>&lt;BalanceCard
  campaign-name="Campagne interactive"
  category="voyages"
  :total-amount="2000"
  :spent-amount="1200"
  expiration-date="2024-12-31"
  currency="EUR"
  :actionable="() => router.push('/campaign-details')"
/&gt;</code></pre>

      </div>
      
        <h3>🎨 Design</h3>
        <p>Le composant suit les principes du design system Utopia :</p>
        <ul>
          <li><strong>Couleurs</strong> : Utilise les tokens de couleur du thème</li>
          <li><strong>Typographie</strong> : Respecte la hiérarchie typographique</li>
          <li><strong>Espacement</strong> : Utilise le système de spacing cohérent</li>
          <li><strong>Interactions</strong> : Hover effects et transitions fluides</li>
          <li><strong>Accessibilité</strong> : Contraste et navigation clavier</li>
      </ul>

        <div class="technical-info">
          <h3>🔧 Informations techniques</h3>
          <p>📁 <strong>Fichier :</strong> <code>packages/utopia/src/components/organisms/BalanceCard/BalanceCard.vue</code></p>
          <p>📦 <strong>Export :</strong> Disponible via <code>@club-employes/utopia</code></p>
          <p>🎯 <strong>Type :</strong> Organism (composant complexe)</p>
        </div>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components';
import { BalanceCard, Icon } from '@club-employes/utopia';

const handleCardClick = (): void => {
  // eslint-disable-next-line no-console
  console.log('Carte cliquée!');
};
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

/* Styles pour la grille des catégories */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-4, 16px);
  width: 100%;
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

/* Informations sur les catégories */
.categories-info {
  background: var(--theme-colors-surface-background, #f9fafb);
  border: 1px solid var(--theme-colors-border-default, #e5e7eb);
  border-radius: 8px;
  padding: var(--spacing-4, 16px);
  margin: var(--spacing-4, 16px) 0;
}

.category-item {
  padding: var(--spacing-2, 8px) 0;
  border-bottom: 1px solid var(--theme-colors-border-default, #e5e7eb);
  color: var(--theme-colors-text-primary, #111827);
}

.category-item:last-child {
  border-bottom: none;
}

.category-item strong {
  color: var(--theme-colors-brand-primary-500, #2563eb);
}

.category-item em {
  color: var(--theme-colors-text-muted, #6b7280);
  font-style: italic;
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