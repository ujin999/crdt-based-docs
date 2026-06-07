import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],

  root: resolve(__dirname, 'src/client'),

  server: {
    host: true,
    port: 5173,
  },
});