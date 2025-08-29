<template>
  <ComponentLayout 
    :title="'AuthLayout'"
    :icon="'Log-in'"
    :type="'Layouts'"
  >
    <template #examples>
      <div class="showcase-item">
        <h3>Défaut</h3>
        <div class="example">
          <AuthLayout>Click me</AuthLayout>
        </div>
        <details class="code-snippet">
          <summary>
            <Icon name="Code" class="code-icon" />
            Voir le code
          </summary>
          <pre><code>&lt;AuthLayout&gt;Click me&lt;/AuthLayout&gt;</code></pre>
        </details>
      </div>
      
      <!-- Ajoutez d'autres exemples ici -->
      <div class="showcase-item">
        <h3>Démo complète</h3>
        <div class="example">
          <!-- Exemple personnalisé à développer -->
          <div class="demo-link">
            <p>Le composant AuthLayout est conçu pour occuper tout l'écran et ne peut pas être affiché dans un cadre restreint.</p>
            <a href="/auth-demo" target="_blank" class="demo-button">
              <Icon name="External-link" class="link-icon" />
              Voir la démo complète
            </a>
          </div>
        </div>
      </div>
    </template>
    
    <template #documentation>
      <p>Cette page de documentation a été générée automatiquement pour le composant <strong>AuthLayout</strong>.</p>
      <p>📁 <strong>Fichier :</strong> <code>src/generated/pages/layouts/AuthLayoutPage.vue</code></p>
      <p>🎨 <strong>Composant :</strong> <code>packages/utopia/src/components/layouts/AuthLayout/</code></p>
      
      <div class="important-note">
        <h3>⚠️ Action requise</h3>
        <p><strong>N'oubliez pas de mettre à jour le fichier <code>packages/utopia/src/index.d.ts</code> :</strong></p>
        <ol>
          <li>Ajouter l'interface <code>AuthLayoutProps</code> avec les props du composant</li>
          <li>Ajouter <code>export declare const AuthLayout: DefineComponent&lt;AuthLayoutProps&gt;</code></li>
          <li>Rebuilder le DS avec <code>npm run build</code> dans <code>packages/utopia</code></li>
        </ol>
      </div>
      
      <p>📝 <strong>Personnalisation :</strong></p>
      <ul>
        <li>Modifiez les exemples dans les slots <code>#examples</code></li>
        <li>Ajoutez de la documentation dans le slot <code>#documentation</code></li>
        <li>Référez-vous à la documentation du design system</li>
      </ul>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import { ComponentLayout } from '@/components';
import { AuthLayout, Icon } from '@club-employes/utopia';
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

/* Styles pour la démo complète */
.demo-link {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4, 16px);
  align-items: center;
}

.demo-link p {
  margin: 0;
  color: var(--theme-colors-text-secondary, #6b7280);
  max-width: 400px;
}

.demo-button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2, 8px);
  padding: var(--spacing-3, 12px) var(--spacing-6, 24px);
  background-color: var(--theme-colors-brand-primary-500, #3b82f6);
  color: white;
  text-decoration: none;
  border-radius: var(--theme-radius-md, 6px);
  font-weight: 500;
  transition: all 0.2s ease;
}

.demo-button:hover {
  background-color: var(--theme-colors-brand-primary-600, #2563eb);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.link-icon {
  width: 16px;
  height: 16px;
}
</style>