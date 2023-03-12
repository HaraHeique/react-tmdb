import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-tmdb/', // Tem que ser o nome do repo no github
  plugins: [react()],
})
