import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

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
        ],
        base: "/wedding-card/",
    };
};
