import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            postcss: true
        })
    ],
    kit: {
        adapter: adapter({ precompress: true })
    }
};

export default {
    // preprocess: [vitePreprocess()]
} && config;
