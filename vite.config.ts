import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  base: getBasePath(command, mode),
  resolve: {
    alias: {
      '@': '/src',
    },
  },
}))

function getBasePath(command: string, mode: string): string {
  // For development
  if (command === 'serve') {
    return '/'
  }

  // For production builds
  if (command === 'build') {
    // GitHub Pages mode
    if (mode === 'gh-pages') {
      return '/quibo/'
    }
    // Vercel and other deployments (default)
    return '/'
  }

  // Fallback
  return '/'
}
