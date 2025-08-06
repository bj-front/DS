import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'



// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js',
      // En mode développement, utiliser les sources du design system pour le hot reload
      ...(mode === 'development' && {
        '@club-employes/utopia/styles': fileURLToPath(new URL('../../packages/utopia/src/style.css', import.meta.url)),
        '@club-employes/utopia': fileURLToPath(new URL('../../packages/utopia/src', import.meta.url))
      })
    },
  },
  // Optimiser la découverte des dépendances en mode dev
  optimizeDeps: {
    include: mode === 'development' ? ['vue'] : undefined,
    exclude: mode === 'development' ? ['@club-employes/utopia'] : undefined
  }
}))
