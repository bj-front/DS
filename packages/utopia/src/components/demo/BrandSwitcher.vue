<template>
  <div class="brand-switcher">
    <h3 class="switcher-title">🎨 Sélecteur de marque et mode</h3>
    
    <div class="switcher-controls">
      <!-- Brand selector -->
      <div class="control-group">
        <label class="control-label">Marque :</label>
        <div class="brand-options">
          <button 
            v-for="brand in brands" 
            :key="brand.key"
            @click="selectBrand(brand)"
            class="brand-btn"
            :class="{ 'active': currentBrand.key === brand.key }"
          >
            <div class="brand-logo" v-if="brand.lightTheme.logo">
              <img :src="brand.lightTheme.logo" :alt="`Logo ${brand.name}`" class="brand-logo-img" />
            </div>
            <div class="brand-content">
              <span class="brand-icon">{{ brand.icon }}</span>
              <span class="brand-name">{{ brand.name }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mode selector -->
      <div class="control-group">
        <label class="control-label">Mode :</label>
        <div class="mode-options">
          <button 
            @click="toggleMode"
            class="mode-toggle"
            :class="{ 'dark': isDarkMode }"
          >
            <span class="mode-icon">{{ isDarkMode ? '🌙' : '☀️' }}</span>
            <span class="mode-text">{{ isDarkMode ? 'Dark' : 'Light' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Current theme info -->
    <div class="current-theme">
      <div class="theme-preview">
        <div class="preview-colors">
          <div class="color-swatch primary" title="Primary 500"></div>
          <div class="color-swatch secondary" title="Secondary"></div>
          <div class="color-swatch surface" title="Surface"></div>
        </div>
        <div class="theme-details">
          <span class="theme-name">{{ currentTheme.name }}</span>
          <span class="theme-mode">{{ currentTheme.mode }}</span>
        </div>
      </div>
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
    icon: '💙',
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

const currentBrand = ref<Brand>(brands[0])
const isDarkMode = computed(() => props.currentTheme.mode === 'dark')

// Déterminer la marque actuelle basée sur le thème
const updateCurrentBrand = () => {
  const brandKey = props.currentTheme.name.includes('gifteo') ? 'gifteo' : 'club-employes'
  const brand = brands.find(b => b.key === brandKey)
  if (brand) {
    currentBrand.value = brand
  }
}

// Mettre à jour quand le thème change
updateCurrentBrand()

const selectBrand = (brand: Brand) => {
  currentBrand.value = brand
  const newTheme = isDarkMode.value ? brand.darkTheme : brand.lightTheme
  emit('themeChange', newTheme)
}

const toggleMode = () => {
  const newTheme = isDarkMode.value 
    ? currentBrand.value.lightTheme 
    : currentBrand.value.darkTheme
  emit('themeChange', newTheme)
}
</script>

<style scoped>
.brand-switcher {
  background-color: var(--theme-colors-surface-card);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
}

.switcher-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--theme-colors-text-primary);
  margin-bottom: var(--spacing-4);
  text-align: center;
}

.switcher-controls {
  display: grid;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-5);
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.control-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--theme-colors-text-secondary);
}

.brand-options {
  display: flex;
  gap: var(--spacing-2);
}

.brand-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  background-color: var(--theme-colors-border-muted);
  border: var(--border-width-1) solid var(--theme-colors-border-default);
  border-radius: var(--border-radius-base);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sm);
  color: var(--theme-colors-text-secondary);
}

.brand-logo {
  flex-shrink: 0;
}

.brand-logo-img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.brand-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.brand-btn:hover {
  background-color: var(--theme-colors-border-default);
  transform: translateY(-1px);
}

.brand-btn.active {
  background-color: var(--theme-colors-primary-500);
  color: var(--theme-colors-text-inverse);
  border-color: var(--theme-colors-primary-600);
}

.brand-btn.active:hover {
  background-color: var(--theme-colors-primary-600);
}

.brand-icon {
  font-size: var(--font-size-base);
}

.mode-options {
  display: flex;
}

.mode-toggle {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  background: linear-gradient(135deg, var(--theme-colors-primary-500), var(--theme-colors-primary-600));
  color: var(--theme-colors-text-inverse);
  border: none;
  border-radius: var(--border-radius-base);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-family-sans);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.mode-toggle:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.mode-toggle.dark {
  background: linear-gradient(135deg, var(--theme-colors-text-secondary), var(--theme-colors-text-primary));
}

.mode-icon {
  font-size: var(--font-size-base);
}

.current-theme {
  border-top: var(--border-width-1) solid var(--theme-colors-border-default);
  padding-top: var(--spacing-4);
}

.theme-preview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-4);
}

.preview-colors {
  display: flex;
  gap: var(--spacing-2);
}

.color-swatch {
  width: 24px;
  height: 24px;
  border-radius: var(--border-radius-sm);
  border: var(--border-width-1) solid var(--theme-colors-border-strong);
}

.color-swatch.primary {
  background-color: var(--theme-colors-primary-500);
}

.color-swatch.secondary {
  background-color: var(--theme-colors-primary-400);
}

.color-swatch.surface {
  background-color: var(--theme-colors-surface-background);
}

.theme-details {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-1);
}

.theme-name {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-secondary);
  background-color: var(--theme-colors-border-muted);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
}

.theme-mode {
  font-size: var(--font-size-xs);
  color: var(--theme-colors-text-muted);
  text-transform: capitalize;
}
</style> 