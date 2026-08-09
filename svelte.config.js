import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: { runes: true },
	kit: { adapter: adapter(), paths: { base: '' } },
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) => filename.includes('node_modules') ? undefined : { runes: true }
	}
};

export default config;
