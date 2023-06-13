import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    port: 44450,
    https: true
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
