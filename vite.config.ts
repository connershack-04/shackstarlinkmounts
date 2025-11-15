import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/shackstarlinkmounts/',   // keep this
  plugins: [react()],
  build: {
    outDir: 'docs',                // 👈 NEW: build into docs/
  },
})

