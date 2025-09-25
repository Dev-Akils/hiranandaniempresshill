import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Base public path
  build: {
    chunkSizeWarningLimit: 2000, // Increase chunk size warning to 2000 KB
  },
});
