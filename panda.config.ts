import {
  defineConfig,
  defineTextStyles,
  defineGlobalStyles,
} from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    scrollbarGutter: "stable",
  },
});

const textStyles = defineTextStyles({
  h1: {
    value: {
      fontSize: "2.027rem",
      fontWeight: "700",
      lineHeight: "1.30",
    },
  },

  h2: {
    value: {
      fontSize: "1.802rem",
      fontWeight: "700",
      lineHeight: "1.30",
    },
  },

  h3: {
    value: {
      fontSize: "1.602rem",
      fontWeight: "500",
      lineHeight: "1.40",
    },
  },

  h4: {
    value: {
      fontSize: "1.424rem",
      fontWeight: "500",
      lineHeight: "1.40",
    },
  },

  h5: {
    value: {
      fontSize: "1.266rem",
      fontWeight: "500",
      lineHeight: "1.40",
    },
  },

  h6: {
    value: {
      fontSize: "1.125rem",
      fontWeight: "500",
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
      fontSize: "0.889rem",
      fontWeight: "400",
      lineHeight: "1.6",
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
          site: {
            value: "1000px",
            description: "Site max width",
          },
          content: {
            value: "800px",
            description: "Content max width",
          },
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
