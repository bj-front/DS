<template>
  <ComponentLayout title="Default Layout" icon="Layout" type="Components">
    <template #examples>
      <div class="intro">
        <p>
          Le composant DefaultLayout fournit la structure de base pour les applications avec header, navigation et contenu principal.
        </p>
      </div>
      
      <div class="showcase-grid">
        <!-- Exemple par défaut -->
        <div class="showcase-item">
          <h3>Utilisation de base</h3>
          <div class="example">
            <DefaultLayout>Layout content</DefaultLayout>
          </div>
          <div class="code-snippet">
            <div class="code-with-copy">
              <code>&lt;DefaultLayout&gt;Votre contenu ici&lt;/DefaultLayout&gt;</code>
              <Button
                variant="ghost"
                size="small"
                @click="copyToClipboard('&lt;DefaultLayout&gt;Votre contenu ici&lt;/DefaultLayout&gt;')"
                class="copy-btn"
                aria-label="Copier le code de base"
              >
                📋
              </Button>
            </div>
          </div>
        </div>
        
        <!-- Exemple avec props -->
        <div class="showcase-item">
          <h3>Avec menu personnalisé</h3>
          <div class="example">
            <div class="layout-demo">
              <DefaultLayout 
                :menu-items="customMenu" 
                current-mode="light"
                :show-theme-switcher="false"
              >
                <div class="demo-content">
                  <h4>Contenu de démonstration</h4>
                  <p>Ceci est un exemple du DefaultLayout avec un menu personnalisé.</p>
                </div>
              </DefaultLayout>
            </div>
          </div>
          <div class="code-snippet">
            <div class="code-with-copy">
              <code>&lt;DefaultLayout :menu-items="customMenu"&gt;...&lt;/DefaultLayout&gt;</code>
              <Button
                variant="ghost"
                size="small"
                @click="copyToClipboard('&lt;DefaultLayout :menu-items=&quot;customMenu&quot;&gt;...&lt;/DefaultLayout&gt;')"
                class="copy-btn"
                aria-label="Copier le code avec menu"
              >
                📋
              </Button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #documentation>
      <div class="documentation">
        <h3>🎯 Composant DefaultLayout</h3>
        <p>
          Le DefaultLayout est le composant de mise en page principal qui structure l'application avec un header, 
          une navigation latérale et une zone de contenu principale. Il gère automatiquement la responsive et l'état du menu mobile.
        </p>
        
        <h4>🔌 Props disponibles</h4>
        <ul>
          <li><strong>menu-items</strong> : Array&lt;MenuItem&gt; (éléments du menu de navigation)</li>
          <li><strong>current-mode</strong> : 'light' | 'dark' (mode d'affichage actuel)</li>
          <li><strong>show-theme-switcher</strong> : boolean (afficher le basculeur de thème, défaut: true)</li>
          <li><strong>logo-brand</strong> : string (marque du logo à afficher)</li>
        </ul>
        
        <h4>🎯 Événements</h4>
        <ul>
          <li><strong>@nav-click</strong> : MenuItem (émis quand un élément de navigation est cliqué)</li>
          <li><strong>@theme-change</strong> : string (émis quand le thème est modifié)</li>
          <li><strong>@menu-toggle</strong> : boolean (émis quand le menu mobile est basculé)</li>
        </ul>
        
        <h4>📱 Fonctionnalités</h4>
        <ul>
          <li><strong>Navigation responsive</strong> : Menu latéral sur desktop, menu mobile sur tablet/mobile</li>
          <li><strong>Gestion des thèmes</strong> : Basculement automatique light/dark avec persistance</li>
          <li><strong>Logo intelligent</strong> : S'adapte automatiquement à la marque du thème</li>
          <li><strong>Breadcrumbs</strong> : Navigation hiérarchique automatique</li>
          <li><strong>Accessibilité</strong> : Support complet des raccourcis clavier et lecteurs d'écran</li>
        </ul>
        
        <h4>📋 Exemple d'utilisation complète</h4>
        <pre class="code-example">
&lt;template&gt;
  &lt;DefaultLayout 
    :menu-items="navigationMenu"
    :current-mode="themeMode"
    :show-theme-switcher="true"
    logo-brand="club-employes"
    @nav-click="handleNavigation"
    @theme-change="handleThemeChange"
  &gt;
    &lt;!-- Votre contenu de page ici --&gt;
    &lt;div class="page-content"&gt;
      &lt;h1&gt;Titre de la page&lt;/h1&gt;
      &lt;p&gt;Contenu principal...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/DefaultLayout&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { DefaultLayout } from '@club-employes/utopia'
import { ref } from 'vue'

const navigationMenu = ref([
  { key: 'home', label: 'Accueil', to: '/', icon: 'Home' },
  { key: 'docs', label: 'Documentation', to: '/docs', icon: 'Book' },
  // ... autres éléments
])

const themeMode = ref('light')

const handleNavigation = (menuItem) =&gt; {
  router.push(menuItem.to)
}

const handleThemeChange = (newTheme) =&gt; {
  themeMode.value = newTheme
}
&lt;/script&gt;</pre>
        
        <h4>🎨 Structure du layout</h4>
        <ul>
          <li><strong>Header</strong> : Logo, titre, basculeur de thème, menu mobile</li>
          <li><strong>Sidebar</strong> : Navigation principale avec icônes et labels</li>
          <li><strong>Main</strong> : Zone de contenu principal avec padding automatique</li>
          <li><strong>Footer</strong> : (optionnel) zone de pied de page</li>
        </ul>
        
        <h4>♿ Accessibilité</h4>
        <ul>
          <li>Navigation au clavier complète (Tab, Enter, Escape)</li>
          <li>Rôles ARIA appropriés pour la navigation</li>
          <li>Labels descriptifs pour les boutons et liens</li>
          <li>Support des lecteurs d'écran</li>
          <li>Contrastes conformes aux standards WCAG</li>
        </ul>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import ComponentLayout from '@/components/layouts/ComponentLayout.vue'
import { Button, DefaultLayout } from '@club-employes/utopia'
import { ref } from 'vue'

// Menu personnalisé pour l'exemple
const customMenu = ref([
  { key: 'home', label: 'Accueil', to: '/', icon: 'Home' },
  { key: 'components', label: 'Composants', to: '/components', icon: 'Package' },
  { key: 'docs', label: 'Documentation', to: '/docs', icon: 'Book' }
])

// Copy to clipboard function
const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text)
    // You could add a toast notification here
  } catch {
    // Handle copy error gracefully
  }
}
</script>

<style scoped>
/* Introduction */
.intro {
  margin-bottom: var(--spacing-8);
  text-align: center;
}

.intro p {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  max-width: 800px;
  margin: 0 auto;
}

/* Showcase */
.showcase-grid {
  display: grid;
  gap: var(--spacing-6);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.showcase-item {
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  background: var(--theme-colors-surface-card);
}

.showcase-item h3 {
  margin: 0;
  padding: var(--spacing-4);
  background: var(--theme-colors-surface-background);
  border-bottom: 1px solid var(--theme-colors-border-default);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
}

.example {
  padding: var(--spacing-6);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
}

/* Layout Preview */
.layout-preview {
  width: 100%;
  max-width: 200px;
  height: 120px;
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

/* Layout Demo */
.layout-demo {
  width: 100%;
  max-width: 600px;
  height: 300px;
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  background: var(--theme-colors-surface-background);
}

.demo-content {
  padding: var(--spacing-6);
}

.demo-content h4 {
  margin: 0 0 var(--spacing-4) 0;
  color: var(--theme-colors-text-primary);
}

.demo-content p {
  margin: 0;
  color: var(--theme-colors-text-secondary);
  line-height: 1.5;
}

.layout-header {
  background: var(--theme-colors-primary-100);
  color: var(--theme-colors-primary-700);
  padding: var(--spacing-2);
  text-align: center;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout-nav {
  background: var(--theme-colors-surface-background);
  color: var(--theme-colors-text-secondary);
  padding: var(--spacing-2);
  height: 25px;
  display: flex;
  align-items: center;
  font-size: 10px;
}

.layout-content {
  background: var(--theme-colors-surface-card);
  color: var(--theme-colors-text-primary);
  padding: var(--spacing-2);
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Code Snippets */
.code-snippet {
  padding: var(--spacing-4);
  border-top: 1px solid var(--theme-colors-border-default);
}

.code-with-copy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-2);
}

.code-with-copy code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  flex: 1;
  word-break: break-all;
}

.copy-btn {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.copy-btn:hover {
  opacity: 1;
}

/* Documentation */
.documentation {
  color: var(--theme-colors-text-secondary);
}

.documentation h3 {
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.documentation h4 {
  color: var(--theme-colors-text-primary);
  margin-top: var(--spacing-6);
  margin-bottom: var(--spacing-3);
}

.documentation ul {
  margin: var(--spacing-4) 0;
  padding-left: var(--spacing-6);
}

.documentation li {
  margin-bottom: var(--spacing-2);
}

.documentation code {
  background: var(--theme-colors-surface-overlay);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
}

.documentation .code-example {
  background: var(--theme-colors-surface-background);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--radius-md);
  padding: var(--spacing-4);
  margin: var(--spacing-4) 0;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  line-height: 1.5;
  overflow-x: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }
  
  .layout-preview {
    max-width: 150px;
    height: 100px;
  }
  
  .layout-header,
  .layout-nav,
  .layout-content {
    font-size: 9px;
  }
}
</style>