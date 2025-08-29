<template>
  <ThemeProvider :theme="currentTheme">
    <!-- Conditional layout based on route meta -->
    <component :is="layoutComponent">
      <router-view v-if="useDefaultLayout" />
    </component>
    <!-- Direct router-view for pages without layout -->
    <router-view v-if="!useDefaultLayout" />
  </ThemeProvider>
</template>

<script setup lang="ts">
import { ThemeProvider } from '@club-employes/utopia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Import the shared layout component
import AppLayout from './domains/shared/components/AppLayout.vue'

// Import theme management composable
import { useTheme } from '@club-employes/utopia'

// Use theme composable for global theme management
const { currentTheme } = useTheme()

// Get current route
const route = useRoute()

// Determine if we should use the default layout
const useDefaultLayout = computed(() => {
  // Pages that should not use the default layout
  return !route.meta?.['noLayout']
})

// Get the layout component to use
const layoutComponent = computed(() => {
  return useDefaultLayout.value ? AppLayout : 'div'
})
</script>

<style>
/* Global styles reset using design system tokens */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: var(--font-family-sans);
  line-height: var(--font-line-height-normal);
  background-color: var(--theme-colors-surface-background);
  color: var(--theme-colors-text-primary);
}

#app {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--theme-colors-surface-background);
}

/* Les tokens CSS sont maintenant gérés par le design system Utopia */
/* Pas besoin de fallbacks - les tokens sont définis dans @club-employes/utopia */

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus styles for accessibility using design system tokens */
*:focus {
  outline: var(--border-width-2) solid var(--theme-colors-brand-primary-500);
  outline-offset: var(--border-width-2);
}

/* Remove focus outline for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}
</style>