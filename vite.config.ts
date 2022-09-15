import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA as vitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tsconfigPaths(),
    vitePWA({
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'chEAT - Your personal coach',
        short_name: 'chEAT',
        icons: [
          {
            src: '/assets/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#0280a6',
        background_color: '#fcfcfc',
      },
      registerType: 'autoUpdate',
    }),
  ],
});
