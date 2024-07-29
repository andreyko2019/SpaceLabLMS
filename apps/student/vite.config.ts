import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
import path from 'path'

export default defineConfig(({ mode }) => {
  const envDir = path.resolve(__dirname, '../..')
  const env = loadEnv(mode, envDir)

  return {
    base: env.VITE_STUDENT_PATH_PREFIX,

    envDir,

    server: {
      open: true,
      host: '0.0.0.0',
      port: Number(env.VITE_STUDENT_PORT) || 3000,
    },

    plugins: [
      vue({
        script: {
          defineModel: true,
        },
      }),

      checker({
        vueTsc: true,
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
