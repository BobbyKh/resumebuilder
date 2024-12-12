import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Separate React into a vendor chunk
          modal: ['react-modal'],        // Separate react-modal into its own chunk
        },
      },
    },
  },
});
