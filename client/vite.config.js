import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //run on ip6
  server: {
    host:"::",
    port: 8000,
  },
  plugins: [react()],
})
