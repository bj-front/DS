<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button, ThemeProvider } from '@club-employes/utopia'
import { clubEmployesLight } from '@club-employes/utopia'
</script>

<template>
  <ThemeProvider :theme="clubEmployesLight">
    <div id="app">
      <header class="header">
        <h1>Utopia Website</h1>
        <p>Démonstration du Design System Utopia</p>
        
        <nav class="navigation">
          <RouterLink to="/" class="nav-link">
            <Button variant="secondary" size="medium">Accueil</Button>
          </RouterLink>
          <RouterLink to="/about" class="nav-link">
            <Button variant="outline" size="medium">À propos</Button>
          </RouterLink>
          <RouterLink to="/demo" class="nav-link">
            <Button variant="primary" size="medium">Démo</Button>
          </RouterLink>
        </nav>
      </header>

      <main class="main">
        <RouterView />
      </main>
    </div>
  </ThemeProvider>
</template>

<style scoped>
.header {
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid var(--color-border-default);
  background: var(--color-surface-background);
}

.header h1 {
  margin: 0 0 0.5rem 0;
  color: var(--color-text-primary);
  font-size: 2.5rem;
}

.header p {
  margin: 0 0 2rem 0;
  color: var(--color-text-secondary);
  font-size: 1.1rem;
}

.navigation {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.nav-link {
  text-decoration: none;
}

.main {
  min-height: calc(100vh - 200px);
  padding: 2rem;
}

@media (max-width: 768px) {
  .navigation {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .header {
    padding: 1.5rem;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .main {
    padding: 1.5rem;
  }
}
</style>
