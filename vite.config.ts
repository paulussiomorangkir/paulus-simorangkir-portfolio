import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const r = (p: string) => path.resolve(__dirname, p);

// Base path: GitHub Pages serves project sites from /<repo-name>/.
// For Cloudflare Pages / Domainesia (root domain hosting) this should be "/".
// Override at build time with: VITE_BASE_PATH=/your-repo-name/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
  resolve: {
    alias: {
      "@": r("src"),
      "@components": r("src/components"),
      "@features": r("src/features"),
      "@layout": r("src/layout"),
      "@pages": r("src/pages"),
      "@hooks": r("src/hooks"),
      "@services": r("src/services"),
      "@integrations": r("src/integrations"),
      "@utils": r("src/utils"),
      "@types": r("src/types"),
      "@constants": r("src/constants"),
      "@styles": r("src/styles"),
      "@animations": r("src/animations"),
      "@assets": r("src/assets"),
      "@config": r("src/config"),
    },
  },
  build: {
    target: "es2020",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ["framer-motion"],
          icons: ["react-icons"],
        },
      },
    },
  },
});
