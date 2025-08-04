<template>
  <div class="home-page">
    <div class="welcome-section">
      <h1 class="welcome-title">🎨 Design System Utopia</h1>
      <p class="welcome-description">
        Bienvenue dans notre système de design multi-marques pour Club Employés et Gifteo.
        🚀 Test déploiement Vercel optimisé !
      </p>
      <p class="welcome-subtitle">
        Explorez notre documentation complète et nos exemples interactifs.
      </p>
      
      <div class="theme-info-card">
        <h3 class="theme-info-title">Informations</h3>
        <div class="theme-details">
          <div class="theme-item">
            <span class="theme-label">Version :</span>
            <span class="theme-value">🚀 Latest</span>
          </div>
          <div class="theme-item">
            <span class="theme-label">Marques :</span>
            <span class="theme-value">🏢 Club Employés & ❤️ Gifteo</span>
          </div>
        </div>
        
        <div class="theme-preview">
          <div class="preview-colors">
            <div class="color-swatch primary" title="Couleur primaire"></div>
            <div class="color-swatch surface" title="Fond de surface"></div>
            <div class="color-swatch text" title="Couleur de texte"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="features-grid">
      <div 
        v-for="feature in features" 
        :key="feature.page"
        class="feature-card"
      >
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">
          {{ feature.description }}
        </p>
        <div class="feature-actions">
          <Button 
            :variant="feature.buttonVariant"
            size="medium"
            @click="navigateToPage(feature.page)"
          >
            Explorer {{ feature.title }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@club-employes/utopia'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToPage = (page: string): void => {
  router.push({ name: page })
}

const features = [
  {
    icon: '🎨',
    title: 'Couleurs',
    description: 'Palettes brand spécifiques et couleurs communes partagées entre les marques.',
    page: 'design-system-colors',
    buttonVariant: 'outline' as const
  },
  {
    icon: '🖼️',
    title: 'Surfaces',
    description: 'Différentes surfaces et arrière-plans adaptés aux thèmes.',
    page: 'design-system-surfaces',
    buttonVariant: 'outline' as const
  },
  {
    icon: '📝',
    title: 'Typographie',
    description: 'Système typographique complet avec tailles, poids et styles.',
    page: 'design-system-typography',
    buttonVariant: 'outline' as const
  },
  {
    icon: '📏',
    title: 'Espacement',
    description: 'Échelle d\'espacement cohérente pour des layouts harmonieux.',
    page: 'design-system-spacing',
    buttonVariant: 'outline' as const
  },
  {
    icon: '🏢',
    title: 'Logos',
    description: 'Logos et identités visuelles pour chaque marque.',
    page: 'design-system-logos',
    buttonVariant: 'outline' as const
  },
  {
    icon: '🌓',
    title: 'Thèmes',
    description: 'Comparaison entre les modes clair et sombre.',
    page: 'design-system-themes',
    buttonVariant: 'outline' as const
  }
]
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-8);
}

.welcome-section {
  text-align: center;
  margin-bottom: var(--spacing-16);
}

.welcome-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
  background: linear-gradient(135deg, var(--theme-colors-primary-500), var(--theme-colors-primary-300));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-description {
  font-size: var(--font-size-xl);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-4);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.welcome-subtitle {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-12);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.theme-info-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-8);
  max-width: 400px;
  margin: 0 auto var(--spacing-12) auto;
  box-shadow: var(--shadow-md);
}

.theme-info-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
}

.theme-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-6);
}

.theme-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.theme-label {
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-secondary);
}

.theme-value {
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
}

.theme-preview {
  display: flex;
  justify-content: center;
}

.preview-colors {
  display: flex;
  gap: var(--spacing-2);
}

.color-swatch {
  width: 30px;
  height: 30px;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--theme-colors-border-default);
  box-shadow: var(--shadow-sm);
}

.color-swatch.primary {
  background-color: var(--theme-colors-primary-500);
}

.color-swatch.surface {
  background-color: var(--theme-colors-surface-background);
}

.color-swatch.text {
  background-color: var(--theme-colors-text-primary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-6);
}

.feature-card {
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  text-align: center;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--theme-colors-primary-300);
}

.feature-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-4);
}

.feature-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-3);
}

.feature-description {
  font-size: var(--font-size-base);
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-6);
}

.feature-actions {
  margin-top: auto;
}

@media (max-width: 768px) {
  .home-page {
    padding: var(--spacing-4);
  }
  
  .welcome-title {
    font-size: var(--font-size-3xl);
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
  
  .theme-info-card {
    padding: var(--spacing-6);
  }
}
</style>