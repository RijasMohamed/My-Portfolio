import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const isGitHubPages = process.env.DEPLOY_TARGET === "gh-pages";
const basePath = isGitHubPages ? "/Rijas_Portfolio/" : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: basePath,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
}));
