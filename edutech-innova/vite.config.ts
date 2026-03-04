import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),

    // PWA: permite instalar la app en Android e iPhone sin App Store
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/favicon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'EduTech Innova',
        short_name: 'EduTech',
        description: 'Plataforma educativa digital para colegios en Peru y LATAM',
        theme_color: '#028090',
        background_color: '#0D2B30',
        display: 'standalone',
        orientation: 'portrait-primary',
        start_url: '/dashboard',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        // Cache de assets estaticos en offline
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            // Datos del dashboard: cache con revalidacion en segundo plano
            urlPattern: /^https:\/\/.*supabase\.co\/rest\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'supabase-api-cache',
              expiration: { maxEntries: 50, maxAgeSeconds: 300 },
            },
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      // Alias para imports limpios en todo el proyecto
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@lib': resolve(__dirname, './src/lib'),
      '@pages': resolve(__dirname, './src/pages'),
      '@types': resolve(__dirname, '../../packages/types'),
      '@constants': resolve(__dirname, '../../packages/constants'),
    },
  },

  build: {
    // Separar vendors en chunks distintos para mejor cache en el navegador
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          supabase: ['@supabase/supabase-js'],
        },
      },
    },
    sourcemap: false,
    minify: 'esbuild',
  },

  server: {
    // Puerto fijo para Replit
    port: 5173,
    host: true,
  },

  preview: {
    port: 4173,
    host: true,
  },
});
