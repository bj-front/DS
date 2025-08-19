<template>
  <div class="not-found-page">
    <div class="not-found-content">
      <div class="error-code">404</div>
      <h1 class="error-title">Page non trouvée</h1>
      <p class="error-description">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <div class="error-actions">
        <Button variant="primary" @click="goHome">
          Retour à l'accueil
        </Button>
        <Button variant="secondary" @click="goBack">
          Page précédente
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@club-employes/utopia'
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = (): void => {
  router.push('/')
}

const goBack = (): void => {
  router.go(-1)
}
</script>

<style scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8);
  background: linear-gradient(135deg, var(--theme-colors-brand-primary-50) 0%, var(--theme-colors-surface-background) 100%);
  flex: 1;
}

.not-found-content {
  text-align: center;
  max-width: 500px;
}

.error-code {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  color: var(--theme-colors-brand-primary-500);
  line-height: var(--font-line-height-tight);
  margin-bottom: var(--spacing-4);
  font-family: var(--font-family-sans);
  font-size: 8rem;
}

.error-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
  font-family: var(--font-family-sans);
}

.error-description {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-8);
  line-height: var(--font-line-height-relaxed);
  font-family: var(--font-family-sans);
}

.error-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .not-found-page {
    padding: var(--spacing-4);
  }
  
  .error-code {
    font-size: 6rem;
  }
  
  .error-title {
    font-size: var(--font-size-2xl);
  }
  
  .error-description {
    font-size: var(--font-size-base);
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>