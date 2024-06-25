import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
import dtsPlugin from 'vite-plugin-dts'
import copy from 'rollup-plugin-copy'


export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),

    copy({
      targets: [{ src: 'src/shared/assets/scss', dest: 'dist' }],
      verbose: true,
      hook: 'writeBundle',
    }),

    dtsPlugin({
      // skipDiagnostics: false,
    }),

    checker({
      vueTsc: true,
    }),
  ],

  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      name: 'components',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          Vue: 'vue',
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
