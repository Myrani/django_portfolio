import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'static/dist'),
    emptyOutDir: true,
  },
  root: resolve(__dirname, 'templates/threeJS/'),
})
