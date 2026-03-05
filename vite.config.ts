import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    // server: {
    //   port: 3020,
    //   allowedHosts: ['cv.365liveitup.space'],
    //   host: 'localhost:3020',
    // },
    server: {
      host: true, // Enables external access
      watch: { usePolling: true }, // Recommended for HMR in some containers
      strictPort: true,
      allowedHosts: ['cv.365liveitup.space'],
      port: 5173,

    },
    plugins: [
      react(),
      checker({ typescript: true }), // Enables type checking
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
