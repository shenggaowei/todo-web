import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import pxToViewport from 'postcss-px-to-viewport'
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src") 
    },
  },
  css: {
    modules: {},
    postcss: {
      plugins: [
        pxToViewport({
          viewportWidth: 375
        })
      ]
    }
  }
})
