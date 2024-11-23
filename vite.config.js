import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import VitePluginStyleInject from 'vite-plugin-style-inject';

export default defineConfig({
    plugins: [
        vue(),
        VitePluginStyleInject()
    ],
    base: '/NPMDemo/',
    build: {
        lib: {
            // 指定组件库的入口文件
            entry: path.resolve(__dirname, './src/packages/JToastify/index.js'),
            name: 'j-toastify', // 全局变量名称（适用于 UMD 格式）
            fileName: (format) => `j-toastify.${format}.js`, // 输出文件名格式
        },
        outDir: '../NPMpackages/j-toastify', // 打包输出目录
        rollupOptions: {
            // 指定外部依赖，防止将其打包到最终文件中
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    }
});
