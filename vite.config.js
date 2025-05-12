import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: process.env.PORT || 3000,
    host: true,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    cors: {
      origin: ["www.suvacodocristo.com", "www.suvacodocristo.com.br", "suvacodocristo.com", "suvacodocristo.com.br"],
      credentials: true,
    },
    clientPort: 443,
  },
  preview: {
    allowedHosts: ["www.suvacodocristo.com", "www.suvacodocristo.com.br", "suvacodocristo.com", "suvacodocristo.com.br"],
  },
  plugins: [react()],
})