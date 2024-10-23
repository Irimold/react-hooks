import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'
import preserveDirectives from 'rollup-plugin-preserve-directives'

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        }),
        preserveDirectives(),
    ],
    build: {
        lib: {
            entry   : './src/index.ts',
            name    : 'IriReactComponent',
            formats : ['es'],
            fileName: (format, name) => `${name}.js`,
        },
        rollupOptions: {
            external: [
                '@types/react',
                'react'
            ],
            output: {
                preserveModules: true
            }
        },
    },
    resolve: {
        alias: {
            "@" : path.resolve(__dirname, './src/'),
        }
    }
})