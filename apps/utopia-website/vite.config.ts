import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  
  return {
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'vue': 'vue/dist/vue.esm-bundler.js',
        // En mode développement seulement, utiliser les sources du design system
        ...(isDev && {
          '@club-employes/utopia': fileURLToPath(new URL('../../packages/utopia/src', import.meta.url))
        })
      },
    },
    optimizeDeps: {
      // Exclure seulement en développement
      exclude: isDev ? ['@club-employes/utopia'] : []
    },
  }
})
