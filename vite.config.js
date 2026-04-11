import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  // Base path: "/" for Vercel, "/3d-portfolio/" for GitHub Pages
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      // Use `@` to import from `/src`, e.g. `import App from '@/App'`
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
