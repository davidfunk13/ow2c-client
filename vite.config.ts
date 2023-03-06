import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';

// import liveReload from 'vite-plugin-live-reload'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        // changeOrigin: true,
        // secure: false
      }
    }
  },
  plugins: [
    react(),
    eslint()
    // liveReload('.path')
  ],
})
