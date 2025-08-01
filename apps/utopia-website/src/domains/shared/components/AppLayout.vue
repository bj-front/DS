<template>
  <div class="app-layout">
    <!-- Header Navigation -->
    <header class="app-header">
      <nav class="nav-container">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">
            <Logo variant="primary" size="small" />
            <span class="brand-text">Utopia</span>
          </router-link>
        </div>

        <div class="nav-links">
          <router-link
            to="/"
            class="nav-link"
            :class="{ 'active': $route.name === 'home' }"
          >
            Design System
          </router-link>
          <router-link
            to="/showcase"
            class="nav-link"
            :class="{ 'active': $route.name === 'showcase' }"
          >
            Showcase
          </router-link>
        </div>

        <!-- Theme Toggle (placeholder for later) -->
        <div class="nav-actions">
          <Button
            variant="ghost"
            size="small"
            @click="toggleTheme"
            aria-label="Changer de thème"
          >
            <Icon name="sun" size="small" />
          </Button>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="app-main">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <Logo variant="primary" size="small" />
          <span class="footer-text">Utopia Design System</span>
        </div>
        <div class="footer-links">
          <a href="https://github.com/club-employes/ds" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://npmjs.com/package/@club-employes/utopia" target="_blank" rel="noopener noreferrer">
            npm
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@club-employes/utopia'

// Import temporaire - à remplacer par les vrais composants
const Logo = { template: '<div class="logo">LOGO</div>' }
const Icon = { template: '<span class="icon"><slot /></span>' }

// Placeholder for theme toggle functionality
const toggleTheme = () => {
  console.log('Theme toggle - à implémenter')
}
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Header */
.app-header {
  height: 60px;
  background-color: var(--theme-colors-primary-25);
  border-bottom: 1px solid var(--theme-colors-primary-300);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(var(--spacing-2));
  width: 100%;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-3) var(--spacing-12);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  text-decoration: none;
  color: var(--theme-colors-text-primary);
}

.brand-text {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  font-family: var(--font-family-sans);
}

.nav-links {
  display: flex;
  gap: var(--spacing-8);
}

.nav-link {
  text-decoration: none;
  color: var(--theme-colors-text-secondary);
  font-weight: var(--font-weight-medium);
  font-family: var(--font-family-sans);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--border-radius-sm);
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--theme-colors-primary-600);
  background: var(--theme-colors-primary-50);
}

.nav-link.active {
  color: var(--theme-colors-primary-600);
  background: var(--theme-colors-primary-50);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

/* Main Content */
.app-main {
  flex: 1;
  width: 100%;
}

/* Footer */
.app-footer {
  background: var(--theme-colors-surface-background);
  border-top: var(--border-width-1) solid var(--theme-colors-border-default);
  padding: var(--spacing-8) 0;
  margin-top: auto;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.footer-text {
  color: var(--theme-colors-text-secondary);
  font-size: var(--font-size-sm);
  font-family: var(--font-family-sans);
}

.footer-links {
  display: flex;
  gap: var(--spacing-8);
}

.footer-links a {
  color: var(--theme-colors-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-family: var(--font-family-sans);
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--theme-colors-primary-600);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 var(--spacing-4);
  }

  .nav-links {
    gap: var(--spacing-4);
  }

  .nav-link {
    padding: var(--spacing-1) var(--spacing-2);
    font-size: var(--font-size-sm);
  }

  .footer-content {
    flex-direction: column;
    gap: var(--spacing-4);
    text-align: center;
    padding: 0 var(--spacing-4);
  }
}

@media (max-width: 640px) {
  .brand-text {
    display: none;
  }

  .nav-links {
    gap: var(--spacing-2);
  }

  .nav-actions {
    gap: var(--spacing-2);
  }
}
</style>
