import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',                           // Use absolute path for custom domain
  build: {
    outDir: 'docs',                    // Build directly into docs/
    emptyOutDir: true                  // Clean old files from docs/
  }
})
