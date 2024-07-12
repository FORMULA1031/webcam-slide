import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BUILD ? "/webcam-slide/" : "/",
  build: {
    outDir: process.env.VITE_BUILD ? 'docs' : 'dist',
  },
  server: {
    host: true,
  },
  plugins: [react()],
})
