import {
  defineConfig,
  defineTextStyles,
  defineGlobalStyles,
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
      fontWeight: "900",
      lineHeight: "1.6",
    },
  },

  h2: {
    value: {
      fontFamily: "title",
      fontSize: "1.802rem",
      fontWeight: "bold",
      lineHeight: "1.8",
    },
  },

  h3: {
    value: {
      fontFamily: "title",
      fontSize: "1.602rem",
      fontWeight: "bold",
      lineHeight: "1.8",
    },
  },

  h4: {
    value: {
      fontFamily: "title",
      fontSize: "1.424rem",
      fontWeight: "bold",
      lineHeight: "1.8",
    },
  },

  h5: {
    value: {
      fontFamily: "title",
      fontSize: "1.266rem",
      fontWeight: "bold",
      lineHeight: "1.8",
    },
  },

  h6: {
    value: {
      fontFamily: "title",
      fontSize: "1.125rem",
      fontWeight: "bold",
      lineHeight: "1.8",
    },
  },

  body: {
    value: {
      fontSize: "1.266rem",
      fontWeight: "500",
      lineHeight: "1.8",
    },
  },

  small: {
    value: {
      fontSize: "0.9rem",
      fontWeight: "500",
      lineHeight: "1.8",
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
