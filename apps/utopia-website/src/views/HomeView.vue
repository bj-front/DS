<script setup lang="ts">
import { Button, Icon } from '@club-employes/utopia'
</script>

<template>
  <div class="home">
    <section class="hero">
      <h1>Bienvenue sur Utopia Website</h1>
      <p class="hero-subtitle">
        Cette application démontre l'utilisation du design system Utopia comme librairie externe
      </p>

      <div class="hero-actions">
        <router-link to="/demo">
          <Button variant="primary" size="large">
            <Icon name="star" size="small" />
            Voir la démo
          </Button>
        </router-link>
        <router-link to="/about">
          <Button variant="outline" size="large">
            En savoir plus
          </Button>
        </router-link>
      </div>
    </section>

    <section class="features">
      <h2>Fonctionnalités</h2>
      <div class="features-grid">
        <div class="feature-card">
          <Icon name="palette" size="large" />
          <h3>Design System Intégré</h3>
          <p>Utilisation du package @club-employes/utopia comme dépendance externe</p>
        </div>
        <div class="feature-card">
          <Icon name="component" size="large" />
          <h3>Composants Réutilisables</h3>
          <p>Boutons, icônes et autres composants prêts à l'emploi</p>
        </div>
        <div class="feature-card">
          <Icon name="token" size="large" />
          <h3>Design Tokens</h3>
          <p>Variables CSS générées automatiquement pour les couleurs, espacements, etc.</p>
        </div>
      </div>
    </section>

    <section class="quick-demo">
      <h2>Aperçu rapide</h2>
      <div class="demo-preview">
        <div class="demo-item">
          <h4>Boutons</h4>
          <div class="button-showcase">
            <Button variant="primary" size="medium">Primary</Button>
            <Button variant="secondary" size="medium">Secondary</Button>
            <Button variant="outline" size="medium">Outline</Button>
          </div>
        </div>

        <div class="demo-item">
          <h4>Icônes</h4>
          <div class="icon-showcase">
            <Icon name="heart" size="medium" />
            <Icon name="star" size="medium" />
            <Icon name="bell" size="medium" />
            <Icon name="calendar" size="medium" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--color-brand-primary-25) 0%, var(--color-brand-accent-25) 100%);
  border-radius: 12px;
  margin-bottom: 4rem;
}

.hero h1 {
  font-size: 3rem;
  color: var(--color-text-primary);
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin: 0 0 2rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-actions a {
  text-decoration: none;
}

.features {
  margin-bottom: 4rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--color-text-primary);
  margin: 0 0 3rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border: 1px solid var(--color-border-default);
  border-radius: 8px;
  background: var(--color-surface-card);
  transition: all 0.2s ease;
}

.feature-card:hover {
  border-color: var(--color-brand-primary-300);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  color: var(--color-text-primary);
  margin: 1rem 0 0.5rem 0;
  font-size: 1.3rem;
}

.feature-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.quick-demo {
  background: var(--color-surface-card);
  border: 1px solid var(--color-border-default);
  border-radius: 12px;
  padding: 3rem 2rem;
}

.quick-demo h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--color-text-primary);
  margin: 0 0 2rem 0;
}

.demo-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.demo-item {
  text-align: center;
}

.demo-item h4 {
  color: var(--color-text-primary);
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.button-showcase {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.icon-showcase {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .features h2 {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .quick-demo {
    padding: 2rem 1rem;
  }

  .demo-preview {
    grid-template-columns: 1fr;
  }

  .button-showcase {
    flex-direction: column;
    align-items: center;
  }
}
</style>
