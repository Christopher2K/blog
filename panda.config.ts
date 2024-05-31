import {
  defineConfig,
  defineTextStyles,
  defineGlobalStyles,
  defineRecipe,
} from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    scrollbarGutter: "stable",
    fontFamily: "body",
  },
});

const textStyles = defineTextStyles({
  h1: {
    value: {
      fontFamily: "title",
      fontSize: "2.027rem",
      fontWeight: "bold",
      lineHeight: "1.6",
    },
  },

  h2: {
    value: {
      fontFamily: "title",
      fontSize: "1.802rem",
      fontWeight: "bold",
      lineHeight: "1.6",
    },
  },

  h3: {
    value: {
      fontFamily: "title",
      fontSize: "1.602rem",
      fontWeight: "bold",
      lineHeight: "1.6",
    },
  },

  h4: {
    value: {
      fontFamily: "title",
      fontSize: "1.424rem",
      fontWeight: "bold",
      lineHeight: "1.6",
    },
  },

  h5: {
    value: {
      fontFamily: "title",
      fontSize: "1.266rem",
      fontWeight: "bold",
      lineHeight: "1.6",
    },
  },

  h6: {
    value: {
      fontFamily: "title",
      fontSize: "1.125rem",
      fontWeight: "bold",
      lineHeight: "1.6",
    },
  },

  body: {
    value: {
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.6",
    },
  },

  small: {
    value: {
      fontSize: "0.9rem",
      fontWeight: "400",
      lineHeight: "1.6",
    },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx,html,astro,md,mdx}"],

  // Files to exclude
  exclude: [],

  globalCss,

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        sizes: {
          content: {
            value: "960px",
            description: "Content max width",
          },
          navWidth: {
            value: "340px",
            description: "Navigation bar size",
          },
        },
        fonts: {
          body: { value: "var(--font-body)" },
          title: { value: "var(--font-title)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
