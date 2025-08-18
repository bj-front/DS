import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'



// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js',
      // Alias pour les tokens (fonctionne en dev et prod)
      '@club-employes/utopia/tokens/club-employes/light': fileURLToPath(new URL('../../packages/utopia/src/tokens/generated/club-employes/light.css', import.meta.url)),
      '@club-employes/utopia/tokens/club-employes/dark': fileURLToPath(new URL('../../packages/utopia/src/tokens/generated/club-employes/dark.css', import.meta.url)),
      // Toujours utiliser les sources du design system pour éviter les problèmes de versions
      '@club-employes/utopia/styles': fileURLToPath(new URL('../../packages/utopia/src/style.css', import.meta.url)),
      '@club-employes/utopia': fileURLToPath(new URL('../../packages/utopia/src', import.meta.url))
    },
  },
  // Optimiser la découverte des dépendances
  optimizeDeps: {
    include: ['vue'],
    exclude: ['@club-employes/utopia'] // Toujours exclure pour utiliser les sources
  }
}))
