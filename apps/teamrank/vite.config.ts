/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  // cacheDir: '../../node_modules/.vite/apps/teamrank',
  server: {
    port: 4200,
    host: 'localhost',
  },
  // preview: {
  //   port: 4300,
  //   host: 'localhost',
  // },
  plugins: [react(), basicSsl(), nxViteTsPaths()],
  build: {
    outDir: '../../dist/apps/teamrank',
    emptyOutDir: true,
    // reportCompressedSize: true,
    // commonjsOptions: {
      // transformMixedEsModules: true,
    // },
  },
  base: './'
});
