import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig(async ({ command }) => ({
  root: 'src',
  build: {
    outDir: path.resolve(__dirname, 'dist')
  }
}))
