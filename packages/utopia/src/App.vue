<script setup lang="ts">
import { ref } from 'vue'
import { ThemeProvider, clubEmployesLight, clubEmployesDark, gifteoLight, gifteoDark } from './index'
import BrandSwitcher from './components/demo/BrandSwitcher.vue'
import FloatingNav from './components/demo/FloatingNav.vue'
import HomePage from './components/pages/HomePage.vue'
import ColorsPage from './components/pages/ColorsPage.vue'
import SurfacesPage from './components/pages/SurfacesPage.vue'
import TypographyPage from './components/pages/TypographyPage.vue'
import SpacingPage from './components/pages/SpacingPage.vue'
import LogosPage from './components/pages/LogosPage.vue'
import ThemeComparison from './components/pages/ThemeComparison.vue'
import type { ThemeConfig } from './theme-provider'

const currentTheme = ref<ThemeConfig>(clubEmployesLight)
const currentPage = ref<string>('home')

const handleThemeChange = (newTheme: ThemeConfig) => {
  currentTheme.value = newTheme
}

const handlePageChange = (page: string) => {
  currentPage.value = page
}
</script>

<template>
  <ThemeProvider :theme="currentTheme">
    <div class="app">
      <header class="app-header">
        <h1>🎨 Design System Utopia</h1>
        <p>Système de tokens multi-marques - Club Employés & Gifteo</p>
      </header>

      <!-- Floating Brand Switcher -->
      <BrandSwitcher
        :clubEmployesLight="clubEmployesLight"
        :clubEmployesDark="clubEmployesDark"
        :gifteoLight="gifteoLight"
        :gifteoDark="gifteoDark"
        :currentTheme="currentTheme"
        @themeChange="handleThemeChange"
      />

      <!-- Floating Navigation -->
      <FloatingNav
        :currentPage="currentPage"
        @pageChange="handlePageChange"
      />

      <main class="app-main">
        <!-- Page Content -->
        <HomePage
          v-if="currentPage === 'home'"
          :currentTheme="currentTheme"
          @navigate="handlePageChange"
        />
        <ColorsPage
          v-else-if="currentPage === 'colors'"
          :currentTheme="currentTheme"
        />
        <SurfacesPage
          v-else-if="currentPage === 'surfaces'"
          :currentTheme="currentTheme"
        />
        <TypographyPage
          v-else-if="currentPage === 'typography'"
        />
        <SpacingPage
          v-else-if="currentPage === 'spacing'"
        />
        <LogosPage
          v-else-if="currentPage === 'logos'"
          :currentTheme="currentTheme"
        />
        <ThemeComparison
          v-else-if="currentPage === 'theme-comparison'"
          :currentTheme="currentTheme"
        />
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
  margin-top: calc(var(--spacing-8) + 60px); /* Espace pour les widgets flottants */
  min-height: calc(100vh - 160px);
}


</style>
