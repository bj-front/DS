<template>
  <ComponentLayout title="Logos & Identités" icon="Star" type="Components">
    <template #examples>
      <div class="intro">
        <p>
          Découvrez les logos et identités visuelles pour chaque marque du système.
        </p>
      </div>

    <!-- Club Employés -->
    <section class="section">
      <h2 class="section-title">🏢 Club Employés</h2>
      <p class="section-description">
        Logos et variations pour la marque Club Employés disponibles via le composant Logo du design system.
      </p>
      
      <div class="logos-grid">
        <div class="logo-card">
          <div class="logo-preview">
            <Logo brand="club-employes" variant="default" size="lg" />
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo principal</h4>
            <p class="logo-description">Version complète du logo</p>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Logo brand="club-employes" variant="default" size="lg" /&gt;</code>
                <Button 
                  variant="ghost" 
                  size="small" 
                  @click="copyToClipboard('&lt;Logo brand=&quot;club-employes&quot; variant=&quot;default&quot; size=&quot;lg&quot; /&gt;')"
                  class="copy-btn"
                  aria-label="Copier le code du composant"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="logo-card">
          <div class="logo-preview">
            <Logo brand="club-employes" variant="small" size="md" />
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo compact</h4>
            <p class="logo-description">Version compacte pour petits espaces</p>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Logo brand="club-employes" variant="small" size="md" /&gt;</code>
                <Button 
                  variant="ghost" 
                  size="small" 
                  @click="copyToClipboard('&lt;Logo brand=&quot;club-employes&quot; variant=&quot;small&quot; size=&quot;md&quot; /&gt;')"
                  class="copy-btn"
                  aria-label="Copier le code du composant"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="logo-card dark">
          <div class="logo-preview">
            <Logo brand="club-employes" variant="white" size="lg" />
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo blanc</h4>
            <p class="logo-description">Version pour fonds sombres</p>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Logo brand="club-employes" variant="white" size="lg" /&gt;</code>
                <Button 
                  variant="ghost" 
                  size="small" 
                  @click="copyToClipboard('&lt;Logo brand=&quot;club-employes&quot; variant=&quot;white&quot; size=&quot;lg&quot; /&gt;')"
                  class="copy-btn"
                  aria-label="Copier le code du composant"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="logo-card">
          <div class="logo-preview">
            <Logo size="lg" />
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo intelligent</h4>
            <p class="logo-description">S'adapte automatiquement au thème et à la marque</p>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Logo size="lg" /&gt;</code>
                <Button 
                  variant="ghost" 
                  size="small" 
                  @click="copyToClipboard('&lt;Logo size=&quot;lg&quot; /&gt;')"
                  class="copy-btn"
                  aria-label="Copier le code du composant"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gifteo -->
    <section class="section">
      <h2 class="section-title">❤️ Gifteo</h2>
      <p class="section-description">
        Logos et variations pour la marque Gifteo disponibles via le composant Logo du design system.
      </p>
      
      <div class="logos-grid">
        <div class="logo-card">
          <div class="logo-preview">
            <Logo brand="gifteo" variant="default" size="lg" />
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo principal</h4>
            <p class="logo-description">Version complète du logo</p>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Logo brand="gifteo" variant="default" size="lg" /&gt;</code>
                <Button 
                  variant="ghost" 
                  size="small" 
                  @click="copyToClipboard('&lt;Logo brand=&quot;gifteo&quot; variant=&quot;default&quot; size=&quot;lg&quot; /&gt;')"
                  class="copy-btn"
                  aria-label="Copier le code du composant"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="logo-card">
          <div class="logo-preview">
            <Logo brand="gifteo" variant="small" size="md" />
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo compact</h4>
            <p class="logo-description">Version compacte</p>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Logo brand="gifteo" variant="small" size="md" /&gt;</code>
                <Button 
                  variant="ghost" 
                  size="small" 
                  @click="copyToClipboard('&lt;Logo brand=&quot;gifteo&quot; variant=&quot;small&quot; size=&quot;md&quot; /&gt;')"
                  class="copy-btn"
                  aria-label="Copier le code du composant"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="logo-card dark">
          <div class="logo-preview">
            <Logo brand="gifteo" variant="white" size="lg" />
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo blanc</h4>
            <p class="logo-description">Version pour fonds sombres</p>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Logo brand="gifteo" variant="white" size="lg" /&gt;</code>
                <Button 
                  variant="ghost" 
                  size="small" 
                  @click="copyToClipboard('&lt;Logo brand=&quot;gifteo&quot; variant=&quot;white&quot; size=&quot;lg&quot; /&gt;')"
                  class="copy-btn"
                  aria-label="Copier le code du composant"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="logo-card">
          <div class="logo-preview">
            <Logo size="lg" />
          </div>
          <div class="logo-info">
            <h4 class="logo-name">Logo intelligent</h4>
            <p class="logo-description">S'adapte automatiquement au thème et à la marque</p>
            <div class="code-snippet">
              <div class="code-with-copy">
                <code>&lt;Logo size="lg" /&gt;</code>
                <Button 
                  variant="ghost" 
                  size="small" 
                  @click="copyToClipboard('&lt;Logo size=&quot;lg&quot; /&gt;')"
                  class="copy-btn"
                  aria-label="Copier le code du composant"
                >
                  📋
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Exemples d'utilisation -->
    <section class="section">
      <h2 class="section-title">💻 Exemples d'utilisation</h2>
      <p class="section-description">
        Comment utiliser les tokens de logos dans votre code.
      </p>
      
      <div class="example-grid">
        <div class="example-card">
          <h3 class="example-title">Composant Vue.js</h3>
          <pre class="code-block"><code>&lt;template&gt;
  &lt;!-- Logo intelligent (recommandé) --&gt;
  &lt;Logo /&gt;
  
  &lt;!-- Avec taille personnalisée --&gt;
  &lt;Logo size="lg" /&gt;
  
  &lt;!-- Logo spécifique pour une autre marque --&gt;
  &lt;Logo brand="gifteo" /&gt;
  
  &lt;!-- Logo blanc forcé --&gt;
  &lt;Logo variant="white" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Logo } from '@club-employes/utopia'
&lt;/script&gt;</code></pre>
        </div>

        <div class="example-card">
          <h3 class="example-title">Props disponibles</h3>
          <pre class="code-block"><code>interface LogoProps {
  // Marque (détectée automatiquement depuis le thème)
  brand?: 'club-employes' | 'gifteo'
  
  // Variante (auto = s'adapte au thème dark/light)
  variant?: 'auto' | 'default' | 'white' | 'small' | 'small-white'
  
  // Taille
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  
  // Accessibilité
  alt?: string
}

// Usage le plus simple :
&lt;Logo /&gt;  // ✨ Détecte tout automatiquement !</code></pre>
        </div>
      </div>
    </section>

    <!-- Guidelines d'utilisation -->
    <section class="section">
      <h2 class="section-title">📋 Guidelines d'utilisation</h2>
      <div class="guidelines-grid">
        <div class="guideline-card">
          <h4 class="guideline-title">✅ À faire</h4>
          <ul class="guideline-list">
            <li>Respecter l'espace minimum autour du logo</li>
            <li>Utiliser les versions officielles uniquement</li>
            <li>Maintenir les proportions originales</li>
            <li>Choisir la version adaptée au contraste</li>
          </ul>
        </div>
        
        <div class="guideline-card error">
          <h4 class="guideline-title">❌ À éviter</h4>
          <ul class="guideline-list">
            <li>Ne pas déformer ou étirer le logo</li>
            <li>Ne pas modifier les couleurs</li>
            <li>Ne pas ajouter d'effets ou filtres</li>
            <li>Ne pas placer sur un fond similaire</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Espacement minimum -->
    <section class="section">
      <h2 class="section-title">📐 Espacement minimum</h2>
      <p class="section-description">
        Respectez toujours un espace minimum autour des logos pour garantir leur lisibilité.
      </p>
      
      <div class="spacing-example">
        <div class="spacing-demo">
          <div class="spacing-lines">
            <div class="spacing-line horizontal top"></div>
            <div class="spacing-line horizontal bottom"></div>
            <div class="spacing-line vertical left"></div>
            <div class="spacing-line vertical right"></div>
          </div>
          <div class="demo-logo">
            <span>LOGO</span>
          </div>
        </div>
        <p class="spacing-note">
          L'espace minimum recommandé est équivalent à la hauteur de la lettre "x" du logo.
        </p>
      </div>
    </section>
    </template>

    <template #documentation>
      <div class="documentation">
        <h3>🎯 Guide d'utilisation</h3>
        <p>
          Le composant Logo d'Utopia offre une solution intelligente pour afficher les logos de marque avec adaptation automatique au thème et au contexte.
        </p>
        
        <h4>🔌 Props disponibles</h4>
        <ul>
          <li><strong>brand</strong> : 'club-employes' | 'gifteo' (détecté automatiquement depuis le thème)</li>
          <li><strong>variant</strong> : 'auto' | 'default' | 'white' | 'small' | 'small-white' (s'adapte au thème dark/light)</li>
          <li><strong>size</strong> : 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'</li>
          <li><strong>alt</strong> : Texte alternatif pour l'accessibilité</li>
        </ul>
        
        <h4>✨ Fonctionnalités intelligentes</h4>
        <ul>
          <li><strong>Détection automatique</strong> : Le logo s'adapte automatiquement à la marque du thème actuel</li>
          <li><strong>Mode sombre/clair</strong> : Basculement automatique entre les variantes selon le thème</li>
          <li><strong>Tailles responsives</strong> : Échelle cohérente avec le système de design</li>
          <li><strong>Accessibilité</strong> : Support complet des lecteurs d'écran</li>
        </ul>
        
        <h4>📋 Bonnes pratiques</h4>
        <ul>
          <li>Utilisez <code>&lt;Logo /&gt;</code> sans props pour un comportement intelligent</li>
          <li>Respectez l'espace minimum autour du logo (équivalent à la hauteur de la lettre "x")</li>
          <li>Choisissez la variante appropriée selon le contraste du fond</li>
          <li>Maintenez toujours les proportions originales</li>
        </ul>
        
        <h4>🚫 À éviter</h4>
        <ul>
          <li>Ne jamais déformer ou étirer le logo</li>
          <li>Ne pas modifier les couleurs officielles</li>
          <li>Ne pas ajouter d'effets ou de filtres</li>
          <li>Ne pas placer sur un fond avec un contraste insuffisant</li>
        </ul>
      </div>
    </template>
  </ComponentLayout>
</template>

<script setup lang="ts">
import ComponentLayout from '@/components/layouts/ComponentLayout.vue';
import { Button, Logo } from '@club-employes/utopia';

// Copy to clipboard function
const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    // You could add a toast notification here
    console.log('Copied to clipboard:', text);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};
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
  max-width: 600px;
  margin: 0 auto;
}

.section {
  margin-bottom: var(--spacing-16);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
  border-bottom: 2px solid var(--theme-colors-border-default);
  padding-bottom: var(--spacing-4);
}

.section-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-8);
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.logo-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.logo-card:hover {
  transform: translateY(-2px);
}

.logo-card.dark {
  background: var(--theme-colors-slate-800);
}

.logo-preview {
  padding: var(--spacing-8);
  text-align: center;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}



.logo-info {
  padding: var(--spacing-6);
  border-top: 1px solid var(--theme-colors-border-default);
}

.logo-card.dark .logo-info {
  background: var(--theme-colors-surface-card);
}

.logo-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-2);
}

.logo-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-4);
}

.code-with-copy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-2);
}

.copy-btn {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.copy-btn:hover {
  opacity: 1;
}



.code-snippet {
  margin-bottom: var(--spacing-4);
}

.code-snippet code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  word-break: break-all;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
}

.example-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.example-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.code-block {
  background: var(--theme-colors-slate-50);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-4);
  overflow-x: auto;
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.code-block code {
  color: var(--theme-colors-text-primary);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.guidelines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.guideline-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
}

.guideline-card.error {
  border-color: var(--theme-colors-danger-300);
  background: var(--theme-colors-danger-25);
}

.guideline-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.guideline-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.guideline-list li {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-2);
  padding-left: var(--spacing-4);
  position: relative;
}

.guideline-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--theme-colors-brand-primary-500);
  font-weight: var(--font-weight-bold);
}

.guideline-card.error .guideline-list li::before {
  color: var(--theme-colors-danger-500);
}

.spacing-example {
  text-align: center;
  margin-top: var(--spacing-8);
}

.spacing-demo {
  position: relative;
  display: inline-block;
  margin-bottom: var(--spacing-4);
}

.spacing-lines {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
}

.spacing-line {
  position: absolute;
  border: 1px dashed var(--theme-colors-brand-primary-400);
}

.horizontal {
  left: 0;
  right: 0;
}

.vertical {
  top: 0;
  bottom: 0;
}

.top {
  top: -20px;
}

.bottom {
  bottom: -20px;
}

.left {
  left: -20px;
}

.right {
  right: -20px;
}

.demo-logo {
  background: var(--theme-colors-brand-primary-100);
  color: var(--theme-colors-brand-primary-500);
  padding: var(--spacing-4) var(--spacing-6);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  border: 2px solid var(--theme-colors-brand-primary-300);
}

.spacing-note {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  font-style: italic;
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

@media (max-width: 768px) {
  .logos-grid,
  .guidelines-grid {
    grid-template-columns: 1fr;
  }
  
  .logo-preview {
    padding: var(--spacing-6);
    min-height: 100px;
  }
  
  .logo-info {
    padding: var(--spacing-4);
  }
}

@media (max-width: 480px) {
  .logo-preview {
    padding: var(--spacing-4);
    min-height: 80px;
  }
  
  .logo-info {
    padding: var(--spacing-3);
  }
}
</style>