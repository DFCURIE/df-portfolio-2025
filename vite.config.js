import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		chunkSizeWarningLimit: 1000, // Naikkan batas warning jika diperlukan
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Strategi code-splitting
					if (id.includes('node_modules')) {
						// Pisahkan library-library besar
						if (id.includes('three')) return 'vendor-three';
						if (id.includes('animejs')) return 'vendor-anime';
						return 'vendor'; // Chunk untuk node_modules lainnya
					}
				}
			}
		}
	}
});