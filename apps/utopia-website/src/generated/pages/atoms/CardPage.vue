<template>
  <ComponentLayout 
    title="Card"
    icon="Wallet-cards"
    type="Atoms"
  >
    <template #examples>
      <!-- Variants avec états -->
      <div class="showcase-item">
        <h3>Variants avec états</h3>
        <p>Différents styles de cartes avec leurs états actif/inactif.</p>
        
        <div class="card-demo">
          <div class="card-group">
            <h4>Default</h4>
            <Card variant="default" class="demo-card">
              <h3>Carte par défaut</h3>
              <p>Style de base avec bordure et ombre légère.</p>
            </Card>
            <Card variant="default" :interactive="false" class="demo-card">
              <h3>Carte par défaut inactive</h3>
              <p>État actif avec fond coloré.</p>
            </Card>
          </div>
          
          <div class="card-group">
            <h4>Elevated</h4>
            <Card variant="elevated" class="demo-card">
              <h3>Carte surélevée</h3>
              <p>Avec ombre et effet de survol qui soulève la carte.</p>
            </Card>
            <Card variant="elevated" :interactive="false" class="demo-card">
              <h3>Carte surélevée inactive</h3>
              <p>État actif avec fond coloré.</p>
            </Card>
          </div>
          
          <div class="card-group">
            <h4>Outlined</h4>
            <Card variant="outlined" class="demo-card">
              <h3>Carte contourée</h3>
              <p>Fond transparent avec bordure visible.</p>
            </Card>
            <Card variant="outlined" :interactive="false" class="demo-card">
              <h3>Carte contourée inactive</h3>
              <p>État actif avec fond coloré.</p>
            </Card>
          </div>
        </div>
      </div>

      <!-- Tailles -->
      <div class="showcase-item">
        <h3>Tailles</h3>
        <p>Différentes tailles disponibles pour le composant.</p>
        
        <div class="card-demo">
          <div class="card-group">
            <h4>Petite taille</h4>
            <Card size="small" class="demo-card">
              <h3>Petite carte</h3>
              <p>Padding réduit</p>
            </Card>
          </div>
          
          <div class="card-group">
            <h4>Taille moyenne (défaut)</h4>
            <Card size="medium" class="demo-card">
              <h3>Carte moyenne</h3>
              <p>Padding standard</p>
            </Card>
          </div>
          
          <div class="card-group">
            <h4>Grande taille</h4>
            <Card size="large" class="demo-card">
              <h3>Grande carte</h3>
              <p>Padding augmenté</p>
            </Card>
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
          <pre><code>&lt;!-- Variants avec états --&gt;
&lt;Card variant="default"&gt;...&lt;/Card&gt;
&lt;Card variant="default" :interactive="true"&gt;...&lt;/Card&gt;

&lt;Card variant="elevated"&gt;...&lt;/Card&gt;
&lt;Card variant="elevated" :interactive="true"&gt;...&lt;/Card&gt;

&lt;Card variant="outlined"&gt;...&lt;/Card&gt;
&lt;Card variant="outlined" :interactive="true"&gt;...&lt;/Card&gt;

&lt;!-- États --&gt;
&lt;Card :disabled="true"&gt;...&lt;/Card&gt;
&lt;Card :interactive="false"&gt;...&lt;/Card&gt;

&lt;!-- Tailles --&gt;
&lt;Card size="small"&gt;...&lt;/Card&gt;
&lt;Card size="medium"&gt;...&lt;/Card&gt;
&lt;Card size="large"&gt;...&lt;/Card&gt;</code></pre>
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
                <td><code>'default' | 'elevated' | 'outlined'</code></td>
                <td><code>'default'</code></td>
                <td>Style visuel de la carte</td>
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
                <td><code>interactive</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>Active les interactions (hover, active)</td>
              </tr>
              <tr>
                <td><code>active</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>État actif de la carte</td>
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
                <td><code>click</code></td>
                <td><code>MouseEvent</code></td>
                <td>Émis quand la carte est cliquée</td>
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
import { Card, Icon } from '@club-employes/utopia';
</script>

<style scoped>
.card-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6, 24px);
  margin: var(--spacing-4, 16px) 0;
}

.card-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3, 12px);
}

.card-group h4 {
  margin: 0;
  font-size: var(--font-size-sm, 14px);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--theme-colors-text-primary, #111827);
}

.demo-card {
  min-height: 120px;
  cursor: pointer;
}

.demo-card h3 {
  margin: 0 0 var(--spacing-2, 8px) 0;
  font-size: var(--font-size-lg, 18px);
  font-weight: var(--font-weight-semibold, 600);
}

.demo-card p {
  margin: 0;
  font-size: var(--font-size-sm, 14px);
  color: var(--theme-colors-text-secondary, #6b7280);
  line-height: 1.5;
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

/* Responsive */
@media (max-width: 768px) {
  .card-demo {
    grid-template-columns: 1fr;
    gap: var(--spacing-4, 16px);
  }
}
</style>