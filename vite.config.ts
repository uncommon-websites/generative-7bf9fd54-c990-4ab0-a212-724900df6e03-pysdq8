import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		allowedHosts: ['75fsrc-5173.csb.app'],
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
		}
	}
});
