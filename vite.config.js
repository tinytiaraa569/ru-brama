import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
