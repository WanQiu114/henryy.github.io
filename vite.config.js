import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This repository is the GitHub Pages user site: https://henryy.github.io/
  base: '/',
})
