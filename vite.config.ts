import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
    server: {
        strictPort: false,
        host: true,
        https: true
    },
    preview: {
        port: 443,
        strictPort: true,
        host: true,
        https: true
    },
    plugins: [
        react(),
        mkcert()
    ]
})
