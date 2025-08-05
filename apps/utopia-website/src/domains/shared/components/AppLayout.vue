<template>
  <div class="app-layout">
    <!-- Header Navigation -->
    <Header>
      <!-- Left Slot: Brand/Logo -->
      <template #left>
        <router-link to="/" class="brand-link">
          <Logo size="xs" />
          <span class="brand-text">Utopia</span>
        </router-link>
        
        <!-- Navigation Links -->
        <div class="nav-links">
          <router-link 
            v-for="link in navigationLinks"
            :key="link.key"
            :to="link.to"
            class="nav-link"
            :class="{ 'active': isLinkActive(link) }"
          >
            {{ link.label }}
          </router-link>
        </div>
      </template>
      
      <!-- Right Slot: Actions -->
      <template #right>
        <!-- Brand Switcher -->
        <div class="brand-buttons">
          <button 
            v-for="brand in availableBrands" 
            :key="brand.key"
            @click="setBrand(brand.key)"
            class="brand-btn"
            :class="{ 'active': currentBrand === brand.key }"
            :title="brand.name"
          >
            <div class="brand-logo">
              <Logo :brand="brand.key" variant="small" size="xs" />
            </div>
          </button>
        </div>
        
        <!-- Theme Toggle -->
        <Button 
          variant="ghost" 
          size="small"
          @click="toggleMode"
          :aria-label="`Basculer vers le mode ${currentMode === 'light' ? 'sombre' : 'clair'}`"
          class="mode-toggle"
          :class="{ 'dark': currentMode === 'dark' }"
        >
          <span class="mode-icon">
            {{ currentMode === 'light' ? '🌙' : '☀️' }}
          </span>
        </Button>
      </template>
    </Header>

    <!-- Main Content -->
    <main class="app-main">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <Logo variant="small" size="xs" />
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
import { Button, Header, Logo, useFavicon, useTheme } from '@club-employes/utopia';
import { useRoute } from 'vue-router';

// Use theme composable
const { 
  currentBrand, 
  currentMode, 
  availableBrands, 
  toggleMode, 
  setBrand 
} = useTheme()

// Use favicon composable for dynamic favicon
useFavicon()

// Use route for active link detection
const route = useRoute()

// Navigation links configuration
const navigationLinks = [
  {
    key: 'home',
    label: 'Design System',
    component: 'router-link',
    to: '/'
  },
  {
    key: 'showcase', 
    label: 'Showcase',
    component: 'router-link',
    to: '/showcase'
  }
]

// Function to check if a link is active
const isLinkActive = (link: { key?: string; [key: string]: unknown }): boolean => {
  if (link.key === 'home') {
    return route.name === 'home'
  }
  if (link.key === 'showcase') {
    return route.name === 'showcase'
  }
  return false
}


</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Header Content Styles */
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
  margin-left: var(--spacing-8);
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

/* Brand Buttons */
.brand-buttons {
  display: flex;
  gap: var(--spacing-1);
}

.brand-btn {
  width: 36px;
  height: 36px;
  border: 2px solid transparent;
  border-radius: var(--border-radius-full);
  background: var(--theme-colors-slate-100);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  opacity: 0.95;
}

.brand-btn:hover {
  background: var(--theme-colors-primary-50);
  opacity: 1;
  transform: scale(1.05);
}

.brand-btn.active {
  border-color: var(--theme-colors-primary-500);
  background: var(--theme-colors-primary-500);
  opacity: 1;
  box-shadow: 0 0 0 2px var(--theme-colors-primary-200);
}

/* Force logo blanc quand le bouton est actif (fond bleu) */
.brand-btn.active .brand-logo :deep(.logo) {
  filter: brightness(0) invert(1);
}

.brand-logo {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.brand-logo :deep(.logo) {
  width: 100% !important;
  height: 100% !important;
  max-width: 24px;
  max-height: 24px;
}

/* Mode Toggle */
.mode-toggle {
  padding: var(--spacing-2) !important;
  min-width: 36px !important;
  height: 36px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: var(--border-radius-full) !important;
  transition: all 0.2s ease !important;
}

.mode-toggle.dark {
  background: var(--theme-colors-primary-500) !important;
  border-color: var(--theme-colors-primary-500) !important;
  color: white !important;
  box-shadow: 0 0 0 2px var(--theme-colors-primary-200) !important;
}

.mode-toggle:hover {
  transform: scale(1.05) !important;
}

.mode-icon {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  .nav-links {
    gap: var(--spacing-4);
    margin-left: var(--spacing-4);
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
    margin-left: var(--spacing-2);
  }
  
  .brand-btn,
  .mode-toggle {
    width: 32px !important;
    height: 32px !important;
  }
  
  .brand-btn {
    padding: 2px !important;
  }
  
  .brand-logo {
    width: 20px !important;
    height: 20px !important;
  }
  
  .brand-logo :deep(.logo) {
    max-width: 20px !important;
    max-height: 20px !important;
  }
}
</style>