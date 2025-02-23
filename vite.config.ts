import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Setze den Port 5173 für die lokale Entwicklung im Container
    host: '0.0.0.0',  // Wichtige Einstellung: Der Server hört auf allen Netzwerk-Schnittstellen
  },
});
