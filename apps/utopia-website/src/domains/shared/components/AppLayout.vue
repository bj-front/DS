<template>
  <DefaultLayout
    :menu-items="menuItems"
    :current-mode="currentMode"
    @nav-click="handleNavClick"
    @mode-toggle="toggleMode"
    @navigate="navigateTo"
  >
    <!-- Brand Switcher Slot -->
    <template #brand-switcher>
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
            <Logo :brand="(brand.key as 'club-employes' | 'gifteo')" variant="small" size="xs" />
          </div>
        </button>
      </div>
    </template>
    
    <router-view />
  </DefaultLayout>
</template>

<script setup lang="ts">
import { DefaultLayout, Logo, useFavicon, useTheme } from '@club-employes/utopia';
import { useRouter } from 'vue-router';

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

// Use router for navigation
const router = useRouter()

// Menu items configuration
const menuItems = [
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
]

// Function to navigate to a route
const navigateTo = (to: string): void => {
  router.push(to)
}

// Function to handle mobile navigation
const handleNavClick = (page: string): void => {
  // Handle mobile navigation
  navigateTo(page)
}
</script>

<style scoped>
.brand-buttons {
  display: flex;
  gap: var(--spacing-2);
  align-items: center;
}

.brand-btn {
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: var(--theme-colors-text-primary);
}

.brand-btn:hover {
  background-color: var(--theme-colors-background-secondary);
}

.brand-btn.active {
  background-color: var(--theme-colors-primary-50);
  color: var(--theme-colors-primary-700);
}

.brand-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>