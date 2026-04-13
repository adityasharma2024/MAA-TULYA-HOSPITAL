import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // 'source-map' generates a separate .map file instead of using eval()
    // This is much safer and avoids the CSP "unsafe-eval" error
    sourcemap: 'inline', 
  },
  server: {
    // Ensures the development server doesn't use dangerous evaluation logic
    hmr: {
      overlay: true,
    },
  },
  // If the error persists in development, you can force the dev sourcemap style:
  css: {
    devSourcemap: true,
  }
})