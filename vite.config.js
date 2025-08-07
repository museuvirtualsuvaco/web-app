import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 🔹 garante que assets usem caminhos relativos
  server: {
    // https: {
    //   key: fs.readFileSync('./localhost-key.pem'),
    //   cert: fs.readFileSync('./localhost.pem'),
    // },
    host: true,
    port: 4567,
  }
})
