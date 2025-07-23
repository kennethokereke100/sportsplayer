import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sports-player-lookup/', // replace with your repo name
  plugins: [react()]
})
