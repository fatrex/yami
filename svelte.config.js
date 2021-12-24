import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

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
    adapter: adapter(),
    target: "#app",
  },

  preprocess: [preprocess({})],
};

export default config;
