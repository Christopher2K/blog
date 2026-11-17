import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://christopher.engineering",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [
    solidJs(),
    expressiveCode({
      themes: ["gruvbox-dark-medium", "gruvbox-light-medium"],
      styleOverrides: {
        borderRadius: "2px",
      },
    }),
    mdx(),
  ],
});
