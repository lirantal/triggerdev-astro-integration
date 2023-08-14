import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pluginName = "triggerdev-astro-integration";

export default function triggerdevAstroPlugin(options) {
  return {
    name: pluginName,
    hooks: {
      "astro:config:setup": ({
        config: astroConfig,
        injectScript,
        injectRoute,
        updateConfig,
      }) => {
        injectRoute({
          pattern: "/api/trigger",
          entryPoint: join(__dirname, "./route.js"),
        });
      },
    },
  };
}
