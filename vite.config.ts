import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
console.log(__dirname, path.resolve(__dirname, './src'),)
