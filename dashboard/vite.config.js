import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // or '0.0.0.0' for LAN access
    port: 3000,         // change this to any available port you prefer
  },
})
