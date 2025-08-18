<template>
  <div class="component-page">
    <div class="page-header">
      <div class="header-title">
        <Icon name="Home" class="component-icon" />
        <h1>Home</h1>
      </div>
      <p class="component-meta">
        <span class="section-badge">Hors section</span>
      </p>
    </div>
    
    <div class="component-showcase">
      <h2>Contenu</h2>
      <div class="showcase-grid">
        <div class="showcase-item">
          <h3>Section Principale</h3>
          <div class="example">
            <p>Bienvenue sur la page <strong>Home</strong>.</p>
            <p>Cette page a été générée automatiquement. Vous pouvez la personnaliser selon vos besoins.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="component-props">
      <h2>Documentation</h2>
      <p>Cette page a été générée automatiquement pour <strong>Home</strong>.</p>
      <p>Vous pouvez la personnaliser en modifiant le fichier : <code>src/pages/HomePage.vue</code></p>
      <p>Pour ajouter du contenu spécifique, modifiez la section "Contenu" ci-dessus.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@club-employes/utopia';
</script>

<style scoped>
.component-page {
  padding: var(--spacing-8);
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: var(--spacing-8);
  padding-bottom: var(--spacing-6);
  border-bottom: 1px solid var(--theme-colors-border-default);
}

.header-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}

.header-title h1 {
  margin: 0;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-text-primary);
}

.component-icon {
  font-size: var(--font-size-2xl);
  color: var(--theme-colors-brand-primary-500);
}

.component-meta {
  margin: 0;
}

.section-badge {
  display: inline-block;
  padding: var(--spacing-1) var(--spacing-3);
  background: var(--theme-colors-brand-primary-100);
  color: var(--theme-colors-brand-primary-500);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-transform: capitalize;
}

.component-showcase {
  margin-bottom: var(--spacing-8);
}

.component-showcase h2 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
}

.showcase-grid {
  display: grid;
  gap: var(--spacing-6);
}

.showcase-item {
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.showcase-item h3 {
  background: var(--theme-colors-surface-muted);
  padding: var(--spacing-4);
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  border-bottom: 1px solid var(--theme-colors-border-default);
}

.example {
  padding: var(--spacing-6);
  background: var(--theme-colors-surface-card);
}

.example p {
  margin: 0 0 var(--spacing-4) 0;
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
}

.example p:last-child {
  margin-bottom: 0;
}

.component-props {
  margin-bottom: var(--spacing-8);
}

.component-props h2 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-6);
}

.component-props p {
  color: var(--theme-colors-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-4);
}

.component-props code {
  background: var(--theme-colors-surface-muted);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-primary);
}

/* Responsive mobile */
@media (max-width: 768px) {
  .component-page {
    padding: var(--spacing-4);
  }
  
  .page-header {
    margin-bottom: var(--spacing-6);
    padding-bottom: var(--spacing-4);
  }
}

@media (max-width: 480px) {
  .component-page {
    padding: var(--spacing-2);
  }
  
  .page-header {
    margin-bottom: var(--spacing-4);
    padding-bottom: var(--spacing-3);
  }
}
</style>