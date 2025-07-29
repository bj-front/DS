<template>
  <div class="floating-brand-switcher">
    <div class="widget-content">
      <!-- Brand buttons -->
      <div class="brand-buttons">
        <button 
          v-for="brand in brands" 
          :key="brand.key"
          @click="selectBrand(brand)"
          class="brand-widget-btn"
          :class="{ 'active': currentBrand.key === brand.key }"
          :title="brand.name"
        >
          <span class="brand-widget-icon">{{ brand.icon }}</span>
        </button>
      </div>
      
      <!-- Separator -->
      <div class="separator"></div>
      
      <!-- Mode toggle -->
      <button 
        @click="toggleMode"
        class="mode-widget-toggle"
        :class="{ 'dark': isDarkMode }"
        :title="isDarkMode ? 'Mode Sombre' : 'Mode Clair'"
      >
        <span class="mode-widget-icon">{{ isDarkMode ? '🌙' : '☀️' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ThemeConfig } from '../../theme-provider'

interface Brand {
  key: string
  name: string
  icon: string
  lightTheme: ThemeConfig
  darkTheme: ThemeConfig
}

interface Props {
  clubEmployesLight: ThemeConfig
  clubEmployesDark: ThemeConfig
  gifteoLight: ThemeConfig
  gifteoDark: ThemeConfig
  currentTheme: ThemeConfig
}

interface Emits {
  (e: 'themeChange', theme: ThemeConfig): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const brands: Brand[] = [
  {
    key: 'club-employes',
    name: 'Club Employés',
    icon: '🏢',
    lightTheme: props.clubEmployesLight,
    darkTheme: props.clubEmployesDark
  },
  {
    key: 'gifteo',
    name: 'Gifteo',
    icon: '❤️',
    lightTheme: props.gifteoLight,
    darkTheme: props.gifteoDark
  }
]

const isDarkMode = ref(false)

const currentBrand = computed(() => {
  return brands.find(brand => 
    brand.lightTheme.name === props.currentTheme.name || 
    brand.darkTheme.name === props.currentTheme.name
  ) || brands[0]
})

// Initialize dark mode based on current theme
isDarkMode.value = props.currentTheme.mode === 'dark'

const selectBrand = (brand: Brand) => {
  const newTheme = isDarkMode.value ? brand.darkTheme : brand.lightTheme
  emit('themeChange', newTheme)
}

const toggleMode = () => {
  isDarkMode.value = !isDarkMode.value
  const newTheme = isDarkMode.value 
    ? currentBrand.value.darkTheme 
    : currentBrand.value.lightTheme
  emit('themeChange', newTheme)
}
</script>

<style scoped>
.floating-brand-switcher {
  position: fixed;
  top: var(--spacing-6);
  right: var(--spacing-6);
  z-index: 1000;
  background: var(--theme-colors-surface-card);
  border: 1px solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-full);
  padding: var(--spacing-2);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
}

.floating-brand-switcher:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-1px);
}

.widget-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.brand-buttons {
  display: flex;
  gap: var(--spacing-1);
}

.brand-widget-btn {
  width: 36px;
  height: 36px;
  border: 2px solid transparent;
  border-radius: var(--border-radius-full);
  background: transparent;
  color: var(--theme-colors-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
}

.brand-widget-btn:hover {
  background: var(--theme-colors-surface-background);
  color: var(--theme-colors-text-primary);
  transform: scale(1.05);
}

.brand-widget-btn.active {
  border-color: var(--theme-colors-primary-500);
  background: var(--theme-colors-primary-500);
  color: white;
  box-shadow: 0 0 0 2px var(--theme-colors-primary-200);
}

.brand-widget-icon {
  font-size: inherit;
}

.separator {
  width: 1px;
  height: 24px;
  background: var(--theme-colors-border-default);
  margin: 0 var(--spacing-1);
}

.mode-widget-toggle {
  width: 36px;
  height: 36px;
  border: 2px solid transparent;
  border-radius: var(--border-radius-full);
  background: var(--theme-colors-surface-background);
  color: var(--theme-colors-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
}

.mode-widget-toggle:hover {
  color: var(--theme-colors-text-primary);
  transform: scale(1.05);
}

.mode-widget-toggle.dark {
  background: var(--theme-colors-primary-500);
  border-color: var(--theme-colors-primary-500);
  color: white;
  box-shadow: 0 0 0 2px var(--theme-colors-primary-200);
}

.mode-widget-icon {
  font-size: inherit;
}

@media (max-width: 768px) {
  .floating-brand-switcher {
    top: var(--spacing-4);
    right: var(--spacing-4);
  }
  
  .brand-widget-btn,
  .mode-widget-toggle {
    width: 32px;
    height: 32px;
    font-size: var(--font-size-base);
  }
}
</style> 