import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

// import { version } from "./package.json";

// https://vitejs.dev/config/
// export default defineConfig({
export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    return {
        plugins: [
            react(),
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        naverClientId: env.VITE_NAVER_MAP_CLIENT_ID,
                    },
                },
            }),
            splitVendorChunkPlugin(),
        ],
        base: "/wedding-card/",
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: `[name].0.0.3.js`,
                    chunkFileNames: `[name].0.0.3.js`,
                    assetFileNames: `[name].0.0.3.[ext]`,
                },
            },
        },
    };
};
