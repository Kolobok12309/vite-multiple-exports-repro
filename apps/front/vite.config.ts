import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    extensions: ['.json', '.ts', '.js', '/index.json']
  }
})