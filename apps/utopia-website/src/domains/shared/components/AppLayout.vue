<template>
  <DefaultLayout
    :menu-items="menuItems"
    :current-mode="currentMode"
    @nav-click="handleNavClick"
    @mode-toggle="toggleMode"
    @navigate="navigateTo"
  >
    <!-- Header Right Slot -->
    <template #header-right>
      <div class="header-actions">
        <!-- Brand Switcher -->
        <div class="brand-buttons">
          <!-- Lock indicator -->
          <div v-if="isBrandLocked" class="lock-indicator" title="La marque est verrouillée (déterminée par le domaine)">
            🔒
          </div>
          
          <button 
            v-for="brand in availableBrands" 
            :key="brand.key"
            @click="setBrand(brand.key)"
            class="brand-btn"
            :class="{ 
              'active': currentBrand === brand.key,
              'locked': isBrandLocked
            }"
            :disabled="isBrandLocked"
            :title="isBrandLocked ? `${brand.name} - Verrouillé` : brand.name"
          >
            <div class="brand-logo">
              <Logo :brand="(brand.key as 'club-employes' | 'gifteo')" variant="small" size="xs" />
            </div>
          </button>
        </div>
        
        <!-- Theme Toggle Button -->
        <button 
          @click="toggleMode"
          class="mode-toggle"
          :class="{ 'dark': currentMode === 'dark' }"
          :aria-label="`Basculer vers le mode ${currentMode === 'light' ? 'sombre' : 'clair'}`"
        >
          <span class="mode-icon">
            {{ currentMode === 'light' ? '🌙' : '☀️' }}
          </span>
        </button>
      </div>
    </template>
    
    <router-view />
  </DefaultLayout>
</template>

<script setup lang="ts">
import { useGeneratedMenu } from '@/composables/useGeneratedMenu';
import { DefaultLayout, Logo, useFavicon, useTheme } from '@club-employes/utopia';
import { useRouter } from 'vue-router';

// Use theme composable
const { 
  currentBrand, 
  currentMode, 
  availableBrands, 
  isBrandLocked,
  toggleMode, 
  setBrand 
} = useTheme()

// Use favicon composable for dynamic favicon
useFavicon()

// Use router for navigation
const router = useRouter()

// Use generated menu from design system structure
const { menuItems } = useGeneratedMenu()

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
.header-actions {
  display: flex;
  gap: var(--spacing-3);
  align-items: center;
}

.brand-buttons {
  display: flex;
  gap: var(--spacing-2);
  align-items: center;
  position: relative;
}

.lock-indicator {
  font-size: 14px;
  display: flex;
  align-items: center;
  opacity: 0.7;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.brand-btn {
  cursor: pointer;
  padding: var(--spacing-2);
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s ease, opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: var(--theme-colors-text-primary);
}

.brand-btn:hover:not(:disabled) {
  background-color: var(--theme-colors-background-secondary);
}

.brand-btn.active {
  background-color: var(--theme-colors-brand-primary-50);
  color: var(--theme-colors-brand-primary-500);
}

.brand-btn.locked {
  cursor: not-allowed;
  opacity: 0.5;
  filter: grayscale(50%);
}

.brand-btn.locked.active {
  opacity: 0.7;
  filter: grayscale(30%);
}

.brand-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mode Toggle Button */
.mode-toggle {
  padding: var(--spacing-2);
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-full);
  transition: all 0.2s ease;
  border: 1px solid var(--theme-colors-border-default);
  background: var(--theme-colors-background-primary);
  color: var(--theme-colors-text-primary);
  cursor: pointer;
}

.mode-toggle:hover {
  transform: scale(1.05);
  background: var(--theme-colors-background-secondary);
}

.mode-toggle.dark {
  background: var(--theme-colors-brand-primary-500);
  border-color: var(--theme-colors-brand-primary-500);
  color: white;
  box-shadow: 0 0 0 2px var(--theme-colors-brand-primary-200);
}

.mode-icon {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>