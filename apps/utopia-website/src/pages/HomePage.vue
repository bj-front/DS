<template>
  <div class="home-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <h1 class="hero-title">🎨 Design System Utopia</h1>
      <p class="hero-description">
        Système de design moderne et multi-marques pour Club Employés et Gifteo.
        Composants Vue 3, tokens CSS et thèmes adaptatifs.
      </p>

      <!-- UTOPIA Acronym -->
      <div class="utopia-meaning">
        <div class="utopia-grid">
          <Card variant="elevated" class="utopia-item" interactive>
            <div class="utopia-content">
              <span class="utopia-letter">U</span>
              <div class="utopia-definition">
                <strong>Universal</strong>
                <span>across brands and platforms</span>
              </div>
            </div>
          </Card>
          <Card variant="elevated" class="utopia-item" interactive>
            <div class="utopia-content">
              <span class="utopia-letter">T</span>
              <div class="utopia-definition">
                <strong>Transparent</strong>
                <span>clear rules, shared vision</span>
              </div>
            </div>
          </Card>
          <Card variant="elevated" class="utopia-item" interactive>
            <div class="utopia-content">
              <span class="utopia-letter">O</span>
              <div class="utopia-definition">
                <strong>Open</strong>
                <span>collaborative and evolving</span>
              </div>
            </div>
          </Card>
          <Card variant="elevated" class="utopia-item" interactive>
            <div class="utopia-content">
              <span class="utopia-letter">P</span>
              <div class="utopia-definition">
                <strong>Persistent</strong>
                <span>durable, maintainable</span>
              </div>
            </div>
          </Card>
          <Card variant="elevated" class="utopia-item" interactive>
            <div class="utopia-content">
              <span class="utopia-letter">I</span>
              <div class="utopia-definition">
                <strong>Inspiring</strong>
                <span>sparks creativity</span>
              </div>
            </div>
          </Card>
          <Card variant="elevated" class="utopia-item" interactive>
            <div class="utopia-content">
              <span class="utopia-letter">A</span>
              <div class="utopia-definition">
                <strong>Accessible</strong>
                <span>barrier-free for all users</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <div class="quick-actions">
        <Button variant="primary" size="lg" @click="navigateTo('/design-system/colors')">
          🎨 Explorer les couleurs
        </Button>
        <Button variant="secondary" size="lg" @click="navigateTo('/design-system/atoms/button')">
          🧩 Voir les composants
        </Button>
      </div>
    </div>

    <!-- Installation Section -->
    <div class="installation-section">
      <h2>🚀 Installation</h2>
      <div class="install-grid">
        <Card variant="outlined" class="install-card">
          <h3>npm</h3>
          <div class="code-block">
            <code>npm install @club-employes/utopia</code>
            <Button variant="tertiary" size="sm" @click="copyToClipboard('npm install @club-employes/utopia')" class="copy-btn">
              📋
            </Button>
          </div>
        </Card>
        
        <Card variant="outlined" class="install-card">
          <h3>Utilisation</h3>
          <div class="code-block">
            <code>import { Button } from '@club-employes/utopia'</code>
            <Button variant="tertiary" size="sm" @click="copyToClipboard('import { Button } from \'@club-employes/utopia\'')" class="copy-btn">
              📋
            </Button>
          </div>
        </Card>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="features-section">
      <h2>✨ Fonctionnalités</h2>
      <div class="features-grid">
        <Card 
          v-for="feature in features" 
          :key="feature.path" 
          variant="elevated" 
          class="feature-card" 
          interactive
          @click="navigateTo(feature.path)"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
          <div class="feature-badge">{{ feature.count }}</div>
        </Card>
      </div>
    </div>

    <!-- Links Section -->
    <div class="links-section">
      <h2>🔗 Liens utiles</h2>
      <div class="links-grid">
        <Card variant="elevated" class="link-card" interactive>
          <a href="https://npmjs.com/package/@club-employes/utopia" target="_blank" class="link-content">
            <div class="link-icon">📦</div>
            <h3>Package NPM</h3>
            <p>Version officielle publiée</p>
          </a>
        </Card>
        
        <Card variant="elevated" class="link-card" interactive>
          <a href="https://github.com/bj-front/DS" target="_blank" class="link-content">
            <div class="link-icon">🐙</div>
            <h3>GitHub Repository</h3>
            <p>Code source et contributions</p>
          </a>
        </Card>
        
        <Card variant="elevated" class="link-card" interactive>
          <a href="https://github.com/bj-front/DS/issues" target="_blank" class="link-content">
            <div class="link-icon">🐛</div>
            <h3>Issues & Support</h3>
            <p>Bugs et demandes de fonctionnalités</p>
          </a>
        </Card>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats-section">
      <div class="stats-grid">
        <Card variant="outlined" class="stat-card">
          <div class="stat-number">2</div>
          <div class="stat-label">Marques supportées</div>
        </Card>
        <Card variant="outlined" class="stat-card">
          <div class="stat-number">10+</div>
          <div class="stat-label">Composants</div>
        </Card>
        <Card variant="outlined" class="stat-card">
          <div class="stat-number">1200+</div>
          <div class="stat-label">Icônes</div>
        </Card>
        <Card variant="outlined" class="stat-card">
          <div class="stat-number">200+</div>
          <div class="stat-label">Tokens CSS</div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Card } from '@club-employes/utopia';
import { useRouter } from 'vue-router';

const router = useRouter()

const navigateTo = (path: string): void => {
  router.push(path)
}

const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text)
    // Optionnel: ajouter un feedback visuel
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to copy: ', err)
  }
}

const features = [
  {
    icon: '🎨',
    title: 'Couleurs',
    description: 'Palettes brand et couleurs communes adaptatives',
    path: '/design-system/colors',
    count: '50+ tokens'
  },
  {
    icon: '🧩',
    title: 'Composants',
    description: 'Composants Vue 3 prêts à utiliser',
    path: '/design-system/atoms/button',
    count: '10+ composants'
  },
  {
    icon: '📝',
    title: 'Typographie',
    description: 'Système typographique complet',
    path: '/design-system/typography',
    count: '20+ styles'
  },
  {
    icon: '📏',
    title: 'Espacement',
    description: 'Échelle d\'espacement cohérente',
    path: '/design-system/spacing',
    count: '16 tokens'
  },
  {
    icon: '🏢',
    title: 'Logos',
    description: 'Identités visuelles multi-marques',
    path: '/design-system/logos',
    count: '2 marques'
  },
  {
    icon: '🎯',
    title: 'Icônes',
    description: 'Bibliothèque d\'icônes complète',
    path: '/design-system/icons',
    count: '1200+ icônes'
  }
]
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-8);
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: var(--spacing-16);
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-6);
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-500), var(--theme-colors-brand-primary-300));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: var(--font-size-xl);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-8);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.utopia-meaning {
  margin: var(--spacing-12) 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.utopia-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
}


.utopia-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
}

.utopia-letter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-500), var(--theme-colors-brand-primary-300));
  color: white;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius-full);
  flex-shrink: 0;
}

.utopia-definition {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  flex: 1;
  text-align: left;
}

.utopia-definition strong {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  min-width: 120px;
  display: block;
}

.utopia-definition span {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  font-style: italic;
  display: block;
}

.quick-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

/* Installation Section */
.installation-section {
  margin-bottom: var(--spacing-16);
}

.installation-section h2 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-8);
  text-align: center;
}

.install-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.install-card {
  padding: var(--spacing-6) !important;
}

.install-card h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
}

.code-block {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  background: var(--theme-colors-surface-background);
  padding: var(--spacing-3);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--theme-colors-border-default);
}

.code-block code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
  flex: 1;
}

.copy-btn {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.copy-btn:hover {
  opacity: 1;
}

/* Features Section */
.features-section {
  margin-bottom: var(--spacing-16);
}

.features-section h2 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-8);
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-6);
}

.feature-card {
  padding: var(--spacing-6) !important;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.feature-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-4);
}

.feature-card h3 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.feature-card p {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-4);
}

.feature-badge {
  position: absolute;
  top: var(--spacing-3);
  right: var(--spacing-3);
  background: var(--theme-colors-brand-primary-500);
  color: white;
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

/* Links Section */
.links-section {
  margin-bottom: var(--spacing-16);
}

.links-section h2 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-8);
  text-align: center;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
}

.link-card {
  padding: var(--spacing-6) !important;
  text-align: center;
}

.link-content {
  text-decoration: none;
  color: inherit;
  display: block;
}

.link-icon {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-3);
}

.link-card h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-2);
}

.link-card p {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  margin: 0;
}

/* Stats Section */
.stats-section {
  margin-bottom: var(--spacing-8);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-4);
}

.stat-card {
  padding: var(--spacing-6) !important;
  text-align: center;
}

.stat-number {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-brand-primary-500);
  margin-bottom: var(--spacing-2);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
  font-weight: var(--font-weight-medium);
}

/* Responsive */
@media (max-width: 768px) {
  .home-page {
    padding: var(--spacing-4);
  }
  
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-description {
    font-size: var(--font-size-lg);
  }
  
  .quick-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .utopia-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-3);
  }
  
  .utopia-content {
    padding: var(--spacing-3);
  }
  
  .utopia-letter {
    width: 35px;
    height: 35px;
    font-size: var(--font-size-lg);
  }
  
  .install-grid,
  .features-grid,
  .links-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .home-page {
    padding: var(--spacing-2);
  }
  
  .hero-title {
    font-size: var(--font-size-2xl);
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>