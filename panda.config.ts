import {
  defineConfig,
  defineTextStyles,
  defineGlobalStyles,
} from "@pandacss/dev";

const globalCss = defineGlobalStyles({});

const textStyles = defineTextStyles({
  h1: {
    value: {
      fontSize: "3.815rem",
      fontWeight: "700",
    },
  },

  h2: {
    value: {
      fontSize: "3.052rem",
      fontWeight: "700",
    },
  },

  h3: {
    value: {
      fontSize: "2.441rem",
      fontWeight: "500",
    },
  },

  h4: {
    value: {
      fontSize: "1.953rem",
      fontWeight: "500",
    },
  },

  h5: {
    value: {
      fontSize: "1.563rem",
      fontWeight: "500",
    },
  },

  h6: {
    value: {
      fontSize: "1.25rem",
      fontWeight: "500",
    },
  },

  body: {
    value: {
      fontSize: "1rem",
      fontWeight: "500",
    },
  },

  small: {
    value: {
      fontSize: "0.8rem",
      fontWeight: "400",
    },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{ts,tsx,html,astro}"],

  // Files to exclude
  exclude: [],

  globalCss,

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        sizes: {
          nav: {
            value: "4rem",
            description: "Navigation bar height",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
