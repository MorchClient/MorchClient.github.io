import { resolve } from 'path'
import { defineConfig } from 'vite'
import { dirname } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/MorchClient/MorchClient.github.io/tree/gh-pages",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(dirname("./"), '404.html'),
      },
    },
  },
})