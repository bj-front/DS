import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            tsconfigPath: resolve(__dirname, './tsconfig.json'),
            rollupTypes: true
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'Utopia',
            formats: ['es'],
            fileName: () => 'index.js'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                // Réduire la verbosité du build
                manualChunks: undefined,
                chunkFileNames: 'chunks/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]'
            }
        },
        minify: false,
        // Réduire les logs de build
        reportCompressedSize: false,
        cssCodeSplit: false
    },
    // Réduire les logs en mode dev
    logLevel: 'warn'
})