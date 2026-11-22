import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' //configuring the tailwind library in vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],  // this thing was the problem we  just tells vite to resolve react and reactdom to the same version and avoid duplicate instances of react in the project which was causing the error.
  }
})
