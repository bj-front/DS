<script setup lang="ts">
import { ref } from 'vue'
import { ThemeProvider, clubEmployesLight, clubEmployesDark, gifteoLight, gifteoDark } from './index'
import TokensDemo from './components/demo/TokensDemo.vue'
import BrandSwitcher from './components/demo/BrandSwitcher.vue'
import type { ThemeConfig } from './theme-provider'

const currentTheme = ref<ThemeConfig>(clubEmployesLight)

const handleThemeChange = (newTheme: ThemeConfig) => {
  currentTheme.value = newTheme
}
</script>

<template>
  <ThemeProvider :theme="currentTheme">
    <div class="app">
      <header class="app-header">
        <h1>🎨 Design System Utopia</h1>
        <p>Système de tokens multi-marques - Club Employés & Gifteo</p>
      </header>
      
      <main class="app-main">
        <BrandSwitcher 
          :clubEmployesLight="clubEmployesLight"
          :clubEmployesDark="clubEmployesDark"
          :gifteoLight="gifteoLight"
          :gifteoDark="gifteoDark"
          :currentTheme="currentTheme"
          @themeChange="handleThemeChange"
        />
        
        <TokensDemo />
      </main>
    </div>
  </ThemeProvider>
</template>

<style scoped>
.app {
  min-height: 100vh;
  background-color: var(--theme-colors-surface-background);
  color: var(--theme-colors-text-primary);
}

.app-header {
  background: linear-gradient(135deg, var(--theme-colors-primary-600), var(--theme-colors-primary-800));
  color: var(--theme-colors-text-inverse);
  padding: var(--spacing-8);
  text-align: center;
}

.app-header h1 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-2);
}

.app-header p {
  font-size: var(--font-size-lg);
  opacity: 0.9;
}

.app-main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
