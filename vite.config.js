import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site: https://wanqiu114.github.io/henryy.github.io/
  base: '/henryy.github.io/',
  publicDir: 'public',
})
