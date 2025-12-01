import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // 允许所有的外部IP地址访问
    host: '0.0.0.0',
    port: 5173, // 可根据需要修改端口
    // open: true, // 可选，打开浏览器
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.0.139:8082',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
})
