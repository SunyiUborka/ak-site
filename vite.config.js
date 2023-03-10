import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from "@vitejs/plugin-vue";

export default ({ mode }) => {
    process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

    return defineConfig({
        server: {
            hmr:{
                host: 'bubooo.ddns.net',
            },
            port:  process.env.VITE_PORT
        },
        plugins: [
            laravel({
                input: ['resources/css/app.scss', 'resources/js/app.js'],
                refresh: true,
            }),
            vuePlugin({
                template:{
                    transformAssetUrls:{
                        base:null,
                        includeAbsolute: false
                    }
                }
            })
        ],

    });
}
