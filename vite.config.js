import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	build: {
		minify: false,
	},
	base: "/client",
  plugins: [react()],
});
