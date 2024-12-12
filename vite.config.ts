import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Set to 2000 KB or an appropriate limit
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Example of chunking React and ReactDOM
        },
      },
    },
  },
});
