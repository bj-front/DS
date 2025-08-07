<template>
  <div class="app-layout">
    <!-- Sidebar Menu (fixe à gauche) -->
    <Menu 
      :collapsed="menuCollapsed" 
      @update:collapsed="handleMenuCollapsedChange"
      v-model:headerCollapsed="headerCollapsed"
    >
      <template #header>
        <div class="menu-header-content">
          <Logo size="xs" />
        </div>
      </template>
      
      <template #nav-items>
        <NavItem 
          v-for="item in menuItems"
          :key="item.key"
          :icon="item.icon"
          :label="item.label"
          :active="isMenuActive(item)"
          :collapsed="menuCollapsed"
          :headerCollapsed="headerCollapsed"
          @click="navigateTo(item.to)"
        />
      </template>
    </Menu>

    <!-- Main Content Area -->
    <div class="main-content" :class="{ 'menu-collapsed': menuCollapsed }">
      <!-- Header Navigation -->
      <Header @nav-click="handleNavClick">
        <!-- Left Slot: Brand/Logo -->
        <template #left>

        </template>
        
        <!-- Right Slot: Actions -->
        <template #right>
          <!-- Brand Switcher Slot -->
          <slot name="brand-switcher" />
          
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
        
        <!-- Mobile Menu Navigation Items -->
        <template #mobile-nav-items>
          <NavItem 
            v-for="item in menuItems"
            :key="item.key"
            :icon="item.icon"
            :label="item.label"
            :active="isMenuActive(item)"
            @click="navigateTo(item.to)"
          />
        </template>
      </Header>

      <!-- Main Content -->
      <main class="app-main">
        <slot />
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
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '../../../composables'
import { Button, Logo } from '../../atoms'
import { Header, Menu, NavItem } from './components'

interface MenuItem {
  key: string
  label: string
  icon: string
  to: string
}

interface Props {
  menuItems?: MenuItem[]
  currentMode?: 'light' | 'dark'
}

interface Emits {
  (e: 'nav-click', page: string): void
  (e: 'mode-toggle'): void
  (e: 'navigate', to: string): void
}

withDefaults(defineProps<Props>(), {
  menuItems: () => [
    {
      key: 'home',
      label: 'Design System',
      icon: 'Settings',
      to: '/'
    },
    {
      key: 'colors',
      label: 'Couleurs',
      icon: 'Palette',
      to: '/design-system/colors'
    },
    {
      key: 'icons',
      label: 'Icônes',
      icon: 'Search',
      to: '/design-system/icons'
    },
    {
      key: 'showcase',
      label: 'Showcase',
      icon: 'Frame',
      to: '/showcase'
    }
  ],
  currentMode: 'light'
})

const emit = defineEmits<Emits>()

// Get current route
const route = useRoute()

// Menu state
// Use theme composable for menu state persistence
const { menuCollapsed, setMenuCollapsed } = useTheme()
const headerCollapsed = ref(false)

// Handle menu collapsed changes
const handleMenuCollapsedChange = (collapsed: boolean) => {
  setMenuCollapsed(collapsed)
}



// Function to check if a menu item is active
const isMenuActive = (item: MenuItem): boolean => {
  // Utiliser la route réactive de Vue Router
  const currentPath = route.path
  return currentPath === item.to || currentPath.startsWith(item.to + '/')
}

// Function to navigate to a route
const navigateTo = (to: string): void => {
  emit('navigate', to)
}

// Function to handle mobile navigation
const handleNavClick = (page: string): void => {
  emit('nav-click', page)
}

// Function to toggle mode
const toggleMode = (): void => {
  emit('mode-toggle')
}
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  width: 100%;
  display: flex;
}

.main-content {
  flex: 1;
  margin-left: 200px; /* Espace pour le menu fixe */
  transition: margin-left 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Hauteur minimale au lieu de fixe */
  overflow: visible; /* Permet le scroll */
}

.main-content.menu-collapsed {
  margin-left: 80px; /* Espace réduit quand le menu est rétracté */
}

/* Responsive mobile */
@media (max-width: 768px) {
  .main-content {
    margin-left: 0; /* Prend toute la largeur sur mobile */
    width: 100%;
  }
  
  .main-content.menu-collapsed {
    margin-left: 0; /* Pas de marge même quand le menu est rétracté */
  }
  
  /* Menu passe au-dessus du contenu sur mobile */
  .app-layout :deep(.utopia-menu) {
    z-index: 1000; /* Plus haut que le contenu */
  }
  
  /* Contenu passe sous le menu quand il est ouvert */
  .app-layout :deep(.utopia-menu:not(.collapsed)) + .main-content {
    position: relative;
    z-index: 1;
  }
  
  /* Header s'adapte au mobile */
  .app-layout :deep(.utopia-header) {
    width: 100%;
    left: 0;
  }
  
  /* Footer s'adapte au mobile */
  .app-footer {
    width: 100%;
    left: 0;
    right: 0;
  }
}

.app-main {
  flex: 1;
  padding: var(--spacing-6);
  padding-bottom: calc(var(--spacing-6) + 200px); /* Marge en bas pour déclencher le footer */
  overflow-y: auto; /* Permet le scroll dans le contenu principal */
  overflow-x: hidden;
  margin-top: -60px; /* Permet au contenu de passer derrière le header */
  padding-top: calc(var(--spacing-6) + 60px); /* Compense la marge négative */
  min-height: calc(100vh - 60px - 80px); /* Hauteur minimale : viewport - header - footer */
  z-index: 60; /* Passe au-dessus du footer */
  position: relative; /* Pour que le z-index fonctionne */
  background-color: var(--theme-colors-surface-background);
  border-bottom: 1px solid var(--theme-colors-border-default);
}

.app-footer {
  position: sticky;
  bottom: 0;
  padding: var(--spacing-4) var(--spacing-6);
  background-color: var(--theme-colors-background-primary);
  z-index: 40; /* En dessous du contenu */
  backdrop-filter: blur(13px);
  background-color: rgba(255, 255, 255, 0.9);
  margin-top: auto; /* Pousse le footer en bas */
  flex-shrink: 0; /* Empêche le footer de se rétrécir */
}

/* Footer adapté quand le menu est rétracté */
.main-content.menu-collapsed .app-footer {
  left: 80px;
}

/* Dark mode support for footer */
@media (prefers-color-scheme: dark) {
  .app-footer {
    background-color: rgba(0, 0, 0, 0.9);
  }
}

.menu-header-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.menu-brand-text {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
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