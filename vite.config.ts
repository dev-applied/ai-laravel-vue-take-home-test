import { fileURLToPath, URL } from 'node:url'
import eslint from 'vite-plugin-eslint'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/assets/main.scss', 'resources/main.ts'],
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    eslint()
  ],
  resolve: {
    alias: {
      // @ts-expect-error Modules are supported
      '@': fileURLToPath(new URL('./resources', import.meta.url))
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: ['@import "resources/assets/variables";', ''].join('\n')
      }
    }
  }
})
