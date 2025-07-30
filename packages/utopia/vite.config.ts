import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  // Optimisations pour la production
  build: {
    // Améliorer la taille des chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
        }
      }
    },
    // Réduire la taille du bundle
    minify: 'terser'
  },

  // Base URL pour GitHub Pages (optionnel)
  // Décommenter et ajuster si vous utilisez GitHub Pages
  // base: '/nom-de-votre-repo/',
  
  // Optimisations CSS
  css: {
    devSourcemap: true
  }
})
