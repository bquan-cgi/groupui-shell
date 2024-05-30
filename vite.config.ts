import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell_app",
      filename: "remoteEntry.js",
      exposes: {
        "./CounterButton": "./src/CounterButton",
        "./MainLayout": "./src/MainLayout",
      },
      remotes: {
        app2: "http://localhost:3002/assets/remoteEntry.js",
      },
    shared: ["react", "react-dom", "@group-ui/group-ui-react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})