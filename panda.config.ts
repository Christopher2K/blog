import {
  defineConfig,
  defineTextStyles,
  defineGlobalStyles,
} from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "html, body": {
    scrollbarGutter: "stable",
    fontFamily: "body",
    backgroundColor: "bg",
    color: "ink",
  },
});

const textStyles = defineTextStyles({
  heading1: {
    value: {
      fontSize: "2.75rem",
      fontFamily: "title",
      lineHeight: "1.15",
      fontWeight: "bold",
    },
  },
  heading2: {
    value: {
      fontSize: "2rem",
      fontFamily: "title",
      lineHeight: "1.25",
      fontWeight: "bold",
    },
  },
  heading3: {
    value: {
      fontSize: "1.5rem",
      fontFamily: "title",
      lineHeight: "1.3",
      fontWeight: "bold",
    },
  },
  heading4: {
    value: {
      fontSize: "1.25rem",
      fontFamily: "title",
      lineHeight: "1.4",
      fontWeight: "bold",
    },
  },
  body: {
    value: {
      fontFamily: "body",
      fontSize: "1.125rem",
      lineHeight: "1.75",
    },
  },
  label: {
    value: {
      fontFamily: "body",
      fontSize: "0.75rem",
      lineHeight: "1.5",
      fontWeight: "bold",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
  },
  small: {
    value: {
      fontFamily: "body",
      fontSize: "0.875rem",
      lineHeight: "1.6",
    },
  },
});

export default defineConfig({
  // Panda v2 no longer adds the default presets for you, so list them
  // explicitly to keep the base utilities, conditions and patterns.
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],

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
        colors: {
          bg: { value: "#FAF5EC" },
          surface: { value: "#F6EDDD" },
          surfaceAlt: { value: "#EFE3CC" },
          border: { value: "#E7D9BD" },
          borderStrong: { value: "#D8C39B" },
          ink: { value: "#3B3122" },
          inkMuted: { value: "#8B7B64" },
          accent: { value: "#C09964" },
          accentHover: { value: "#A87E47" },
          accentSoft: { value: "#EBDCBF" },
          onAccent: { value: "#FFFDF8" },
          tagText: { value: "#6B4E29" },
          codeBg: { value: "#F2E8D5" },
        },
        radii: {
          card: { value: "16px" },
          pill: { value: "999px" },
        },
        shadows: {
          card: {
            value:
              "0 1px 2px rgba(60, 42, 20, 0.04), 0 6px 20px rgba(60, 42, 20, 0.06)",
          },
          cardHover: {
            value:
              "0 2px 4px rgba(60, 42, 20, 0.06), 0 12px 28px rgba(60, 42, 20, 0.10)",
          },
        },
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
