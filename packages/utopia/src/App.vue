<script setup lang="ts">
import { ref } from 'vue'
import BrandSwitcher from './components/demo/BrandSwitcher.vue'
import FloatingNav from './components/demo/FloatingNav.vue'
import MobileMenuDemo from './components/demo/MobileMenuDemo.vue'
import { Header } from './components/layouts'

import ColorsPage from './components/pages/ColorsPage.vue'
import HomePage from './components/pages/HomePage.vue'
import LogosPage from './components/pages/LogosPage.vue'
import SpacingPage from './components/pages/SpacingPage.vue'
import SurfacesPage from './components/pages/SurfacesPage.vue'
import ThemeComparison from './components/pages/ThemeComparison.vue'
import TypographyPage from './components/pages/TypographyPage.vue'
import { ThemeProvider, clubEmployesDark, clubEmployesLight, gifteoDark, gifteoLight } from './index'
import type { ThemeConfig } from './theme-provider'

const currentTheme = ref<ThemeConfig>(clubEmployesLight)
const currentPage = ref<string>('home')

const handleThemeChange = (newTheme: ThemeConfig) => {
  currentTheme.value = newTheme
}

const handlePageChange = (page: string) => {
  currentPage.value = page
}

const handleNavClick = (page: string) => {
  console.log('Navigation mobile vers:', page)
  // Ici on peut gérer la navigation mobile
  // Pour l'instant, on affiche juste un message
}


</script>

<template>
  <ThemeProvider :theme="currentTheme">
    <div class="app">
      <Header @nav-click="handleNavClick">
        <template #left>
          <h1>🎨 Design System Utopia</h1>
        </template>
        <template #right>
          <p>Système de tokens multi-marques - Club Employés & Gifteo</p>
        </template>
      </Header>
      
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
        <MobileMenuDemo 
          v-else-if="currentPage === 'mobile-menu'"
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



.app-main {
  margin-top: calc(var(--spacing-8) + 60px); /* Espace pour les widgets flottants */
  min-height: calc(100vh - 160px);
}


</style>
