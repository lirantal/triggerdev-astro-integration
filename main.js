import { join, dirname } from "path";
import { fileURLToPath } from "url";
import packageMeta from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pluginName = packageMeta.name;

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
