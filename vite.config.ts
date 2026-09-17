import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
export default defineConfig({
  base: "/bankbi-kompass/",
  plugins: [react()],
  server: { fs: { strict: true, allow: [process.cwd()] } },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (/fuse\.js|yaml|zod/.test(id)) return "content-tools";
            return "vendor";
          }
        },
      },
    },
  },
  test: { environment: "jsdom", setupFiles: "./src/test/setup.ts" },
});
