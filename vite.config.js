import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const prod = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: prod ? './' : '/',
  plugins: [react()],
  server: prod ? undefined : {
    port: process.env.PORT || 3000,
    host: true,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    cors: {
      origin: [
        "www.suvacodocristo.com",
        "www.suvacodocristo.com.br",
        "suvacodocristo.com",
        "suvacodocristo.com.br",
      ],
      credentials: true,
    },
    clientPort: 443,
  },
  preview: prod ? undefined : {
    allowedHosts: [
      "www.suvacodocristo.com",
      "www.suvacodocristo.com.br",
      "suvacodocristo.com",
      "suvacodocristo.com.br",
    ],
  },
})
