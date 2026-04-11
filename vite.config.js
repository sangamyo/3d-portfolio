import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  // Base for GitHub Pages (change if your repo name differs)
  base: "/3d-portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      // Use `@` to import from `/src`, e.g. `import App from '@/App'`
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
