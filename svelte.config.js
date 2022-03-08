import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import firebase from 'svelte-adapter-firebase';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [sveltePreprocess({}), mdsvex(mdsvexConfig)],

  kit: {
    adapter: firebase()
  }
};

export default config;
