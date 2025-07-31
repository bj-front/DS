<template>
  <div class="presentation-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="logo-section">
          <Logo variant="primary" size="large" />
          <h1 class="title">Utopia Design System</h1>
        </div>
        <p class="subtitle">
          Un système de design cohérent et modulaire pour créer des expériences utilisateur exceptionnelles
        </p>
        <div class="cta-buttons">
          <Button variant="primary" size="large" @click="scrollToComponents">
            Découvrir les composants
          </Button>
          <Button variant="outline" size="large" @click="scrollToTokens">
            Explorer les tokens
          </Button>
        </div>
      </div>
    </section>

    <!-- Components Preview -->
    <section id="components" class="components-preview">
      <div class="section-header">
        <h2>Composants</h2>
        <p>Des composants réutilisables pour accélérer votre développement</p>
      </div>
      
      <div class="component-grid">
        <!-- Buttons -->
        <div class="component-card">
          <h3>Buttons</h3>
          <div class="component-showcase">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>

        <!-- Badges -->
        <div class="component-card">
          <h3>Badges</h3>
          <div class="component-showcase">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </div>

        <!-- Icons -->
        <div class="component-card">
          <h3>Icons</h3>
          <div class="component-showcase">
            <Icon name="heart" size="medium" color="primary" />
            <Icon name="star" size="medium" color="secondary" />
            <Icon name="check" size="medium" color="success" />
            <Icon name="alert" size="medium" color="warning" />
          </div>
        </div>

        <!-- Logo -->
        <div class="component-card">
          <h3>Logos</h3>
          <div class="component-showcase">
            <Logo variant="primary" size="small" />
            <Logo variant="white" size="small" />
          </div>
        </div>
      </div>
    </section>

    <!-- Design Tokens -->
    <section id="tokens" class="tokens-preview">
      <div class="section-header">
        <h2>Design Tokens</h2>
        <p>Les fondations visuelles de notre système</p>
      </div>
      
      <div class="tokens-grid">
        <!-- Colors -->
        <div class="token-category">
          <h3>Couleurs</h3>
          <div class="color-palette">
            <div class="color-item">
              <div class="color-swatch primary-color"></div>
              <span>Primary</span>
            </div>
            <div class="color-item">
              <div class="color-swatch secondary-color"></div>
              <span>Secondary</span>
            </div>
            <div class="color-item">
              <div class="color-swatch success-color"></div>
              <span>Success</span>
            </div>
            <div class="color-item">
              <div class="color-swatch warning-color"></div>
              <span>Warning</span>
            </div>
          </div>
        </div>

        <!-- Typography -->
        <div class="token-category">
          <h3>Typographie</h3>
          <div class="typography-samples">
            <div class="type-sample h1">Heading 1</div>
            <div class="type-sample h2">Heading 2</div>
            <div class="type-sample body">Body text</div>
            <div class="type-sample caption">Caption text</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Getting Started -->
    <section class="getting-started">
      <div class="section-header">
        <h2>Commencer</h2>
        <p>Installation et utilisation en quelques étapes</p>
      </div>
      
      <div class="installation-steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>Installation</h3>
            <code>npm install @club-employes/utopia</code>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>Import</h3>
            <code>import { Button, Badge } from '@club-employes/utopia'</code>
          </div>
        </div>
        
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>Utilisation</h3>
            <code>&lt;Button variant="primary"&gt;Hello World&lt;/Button&gt;</code>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  Button
  // Badge, 
  // Icon, 
  // Logo
} from '@club-employes/utopia'

// Import temporaire - à remplacer par les vrais composants
const Badge = { template: '<span class="badge"><slot /></span>' }
const Icon = { template: '<span class="icon"><slot /></span>' }
const Logo = { template: '<div class="logo">LOGO</div>' }

const scrollToComponents = () => {
  document.getElementById('components')?.scrollIntoView({ 
    behavior: 'smooth' 
  })
}

const scrollToTokens = () => {
  document.getElementById('tokens')?.scrollIntoView({ 
    behavior: 'smooth' 
  })
}
</script>

<style scoped>
.presentation-page {
  min-height: 100vh;
  width: 100%;
}

/* Hero Section */
.hero {
  padding: var(--spacing-32) 0;
  text-align: center;
  background: linear-gradient(135deg, var(--theme-colors-primary-50) 0%, var(--theme-colors-surface-background) 100%);
  min-height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 0 var(--spacing-8);
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
}

.title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  margin: 0;
  color: var(--theme-colors-text-primary);
  font-family: var(--font-family-sans);
}

.subtitle {
  font-size: var(--font-size-xl);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-12);
  line-height: var(--font-line-height-relaxed);
  font-family: var(--font-family-sans);
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

/* Sections */
section {
  padding: var(--spacing-32) 0;
  width: 100%;
}

/* Container pour le contenu des sections */
.section-header,
.component-grid,
.tokens-grid,
.installation-steps {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-8);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.section-header h2 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-4);
  color: var(--theme-colors-text-primary);
  font-family: var(--font-family-sans);
}

.section-header p {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  font-family: var(--font-family-sans);
}

/* Components Preview */
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-8);
}

.component-card {
  padding: var(--spacing-8);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-surface-card);
  box-shadow: var(--shadow-base);
}

.component-card h3 {
  margin-bottom: var(--spacing-6);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  font-family: var(--font-family-sans);
}

.component-showcase {
  display: flex;
  gap: var(--spacing-4);
  flex-wrap: wrap;
  align-items: center;
}

/* Tokens Preview */
.tokens-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-8);
}

.token-category {
  padding: var(--spacing-8);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-md);
  background: var(--theme-colors-surface-card);
  box-shadow: var(--shadow-base);
}

.token-category h3 {
  margin-bottom: var(--spacing-6);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  font-family: var(--font-family-sans);
}

.color-palette {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-4);
}

.color-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
}

.color-swatch {
  width: var(--spacing-8);
  height: var(--spacing-8);
  border-radius: var(--border-radius-sm);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
}

.primary-color { background-color: var(--theme-colors-primary-500); }
.secondary-color { background-color: var(--theme-colors-brand-secondary-500); }
.success-color { background-color: var(--theme-colors-state-success); }
.warning-color { background-color: var(--theme-colors-state-warning); }

.typography-samples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.type-sample {
  font-family: var(--font-family-sans);
}

.type-sample.h1 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
}

.type-sample.h2 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
}

.type-sample.body {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  color: var(--theme-colors-text-primary);
}

.type-sample.caption {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  color: var(--theme-colors-text-secondary);
}

/* Getting Started */
.installation-steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  max-width: 600px;
  margin: 0 auto;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-6);
}

.step-number {
  width: var(--spacing-10);
  height: var(--spacing-10);
  background: var(--theme-colors-primary-500);
  color: var(--theme-colors-text-inverse);
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-family-sans);
  flex-shrink: 0;
}

.step-content h3 {
  margin-bottom: var(--spacing-2);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  font-family: var(--font-family-sans);
}

.step-content code {
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-primary-600);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  display: block;
  overflow-x: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: var(--spacing-24) var(--spacing-4);
  }
  
  .title {
    font-size: var(--font-size-3xl);
  }
  
  .subtitle {
    font-size: var(--font-size-lg);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  section {
    padding: var(--spacing-24) var(--spacing-4);
  }
  
  .component-grid,
  .tokens-grid {
    grid-template-columns: 1fr;
  }
  
  .step {
    flex-direction: column;
    text-align: center;
  }
}
</style>