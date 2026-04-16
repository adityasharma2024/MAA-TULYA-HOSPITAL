import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import os from "os";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  cacheDir: path.join(os.tmpdir(), "vite-cache-hospital"),
  build: {
    // disable production sourcemaps for smaller bundlemake the website follow css and faster site load
    sourcemap: false,
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
  },
});
