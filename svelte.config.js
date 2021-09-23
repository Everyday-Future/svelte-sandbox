import node from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node({
			out: 'build',
			precompress: false,
			env: {
				host: '127.0.0.1',
				port: 3001
			}
		}),
		vite: {
			optimizeDeps: {
				include: ['cookie', 'url'],
				exclude: ['node-fetch']
			}
		}
	}
}

export default config
