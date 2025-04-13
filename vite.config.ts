import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/knv-1/",
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure this points to the right directory for output files
  },

})
