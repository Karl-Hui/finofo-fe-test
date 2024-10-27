// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { FRUITS_ENDPOINT } from './src/config/index';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: FRUITS_ENDPOINT,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
