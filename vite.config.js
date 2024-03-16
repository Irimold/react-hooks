import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        }),
    ],
    build: {
        lib: {
            entry : './src/index.ts',
            name : 'IriReactComponent',
            formats: ['es', 'umd'],
            fileName: format => `index.${format}.js`,
        },
        rollupOptions: {
            external: [
                '@types/react',
                'react'
            ],
            onwarn(warning, defaultHandler) {
                if (warning.code === 'SOURCEMAP_ERROR') {
                    return
                }
          
                defaultHandler(warning)
            },
        },
    },
    resolve: {
        alias: {
            "@" : path.resolve(__dirname, './src/'),
        }
    }
})