<template>
  <div class="showcase-page">
    <div class="showcase-content">
      <h1>Showcase</h1>
      <p>Page de démonstrations et exemples (à venir)</p>
      <Button variant="secondary" @click="goHome">
        Retour à l'accueil
      </Button>
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
</script>

<style scoped>
.showcase-page {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8);
  flex: 1;
}

.showcase-content {
  text-align: center;
}

h1 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-4);
  color: var(--theme-colors-text-primary);
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-bold);
}

p {
  font-size: var(--font-size-lg);
  color: var(--theme-colors-text-secondary);
  margin-bottom: var(--spacing-8);
  font-family: var(--font-family-sans);
}
</style>