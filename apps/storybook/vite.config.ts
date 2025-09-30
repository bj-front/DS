import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  server: {
    host: true, // Permet l'accès depuis le réseau local
    port: 6006
  },
  resolve: {
    alias: {
      // En mode développement, utiliser les sources du design system pour le hot reload
      ...(mode === 'development' && {
        '@club-employes/utopia/styles': fileURLToPath(new URL('../../packages/utopia/src/style.css', import.meta.url)),
        '@club-employes/utopia/tokens/club-employes/light': fileURLToPath(new URL('../../packages/utopia/src/tokens/generated/club-employes/light.css', import.meta.url)),
        '@club-employes/utopia/tokens/club-employes/dark': fileURLToPath(new URL('../../packages/utopia/src/tokens/generated/club-employes/dark.css', import.meta.url)),
        '@club-employes/utopia/tokens/gifteo/light': fileURLToPath(new URL('../../packages/utopia/src/tokens/generated/gifteo/light.css', import.meta.url)),
        '@club-employes/utopia/tokens/gifteo/dark': fileURLToPath(new URL('../../packages/utopia/src/tokens/generated/gifteo/dark.css', import.meta.url)),
        '@club-employes/utopia/tokens': fileURLToPath(new URL('../../packages/utopia/src/tokens/generated', import.meta.url)),
        '@club-employes/utopia': fileURLToPath(new URL('../../packages/utopia/src', import.meta.url))
      })
    },
  },
  // Optimiser la découverte des dépendances en mode dev
  optimizeDeps: {
    include: mode === 'development' ? ['vue'] : undefined,
    exclude: mode === 'development' ? ['@club-employes/utopia'] : undefined
  }
}));