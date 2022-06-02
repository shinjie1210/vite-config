import {
    defineConfig,
    loadEnv
} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import legacyPlugin from '@vitejs/plugin-legacy'
import zip from 'vite-plugin-zip'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
    base: '/aProject/',
    plugins: [vue(), viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }), legacyPlugin({
            targets: ['chrome 52'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
            // modernPolyfills: true,
            // renderLegacyChunks: false
        }), //if i use this plugin,rollupoption's assetFileNames set will invalid
        zip({
            dir: 'dist',
            outputName: 'test'
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        visualizer({ open: true, filename: 'report.html' })
    ],
    build: {
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    }
})