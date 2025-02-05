import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteAliases } from 'vite-aliases';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react(), tailwindcss(), ViteAliases({ prefix: '@' })],
	base:'./'
});
