import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    files: {
      assets: "static",
      hooks: "src/renderer/hooks",
      lib: "src/renderer/lib",
      routes: "src/renderer/routes",
      serviceWorker: "src/renderer/service-worker",
      template: "src/renderer/app.html",
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    target: "#app",
  },

  preprocess: [preprocess({})],
};

export default config;
