<template>
  <div class="showcase-page">
    <div class="showcase-content">
      <h1>Showcase</h1>
      <p>Page de démonstrations et exemples (à venir)</p>
      <Button variant="outline" @click="goHome">
        Retour à l'accueil
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Button } from '@club-employes/utopia'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
.showcase-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8);
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