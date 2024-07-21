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
  heading1: {
    value: {
      fontSize: "2.75rem",
      fontFamily: "title",
      lineHeight: "110%",
      fontWeight: "bold",
    },
  },
  heading2: {
    value: {
      fontSize: "2.5rem",
      fontFamily: "title",
      lineHeight: "110%",
      fontWeight: "bold",
    },
  },
  heading3: {
    value: {
      fontSize: "2.25rem",
      fontFamily: "title",
      lineHeight: "110%",
    },
  },

  heading4: {
    value: {
      fontSize: "2rem",
      fontFamily: "title",
      lineHeight: "110%",
    },
  },

  body: {
    value: {
      fontFamily: "body",
      fontSize: "1.125rem",
      lineHeight: "160%",
    },
  },

  label: {
    value: {
      fontFamily: "body",
      fontSize: "0.75rem",
      lineHeight: "160%",
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
          contentWidth: {
            value: "1200px",
            description: "Max width of the content",
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
