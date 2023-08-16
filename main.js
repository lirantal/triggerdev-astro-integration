import { join, dirname } from "path";
import { fileURLToPath } from "url";
import packageMeta from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));
const astroIntegrationName = packageMeta.name;

export default function triggerdevAstroIntegration(options) {
  return {
    name: astroIntegrationName,
    hooks: {
      "astro:config:setup": ({ injectRoute }) => {
        injectRoute({
          pattern: "/api/trigger",
          entryPoint: join(__dirname, "./route.js"),
        });
      },

      "astro:config:done": ({ config }) => {
        if (config.output === "static") {
          throw new Error(
            `[${astroIntegrationName}] \`output: "server"\` or \`output: "hybrid"\` is required to use this Astro integration.`
          );
        }
      },
    },
  };
}
