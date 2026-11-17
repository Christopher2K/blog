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
  body: {
    minWidth: "320px",
  },
  "a, button, select, summary": {
    WebkitTapHighlightColor: "transparent",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "button, select": {
    font: "inherit",
  },
  "button, summary, select": {
    cursor: "pointer",
  },
  ":focus-visible": {
    outline: "2px solid",
    outlineColor: "accent",
    outlineOffset: "3px",
  },
  "::selection": {
    backgroundColor: "accent",
    color: "bg",
  },
});

const textStyles = defineTextStyles({
  heading1: {
    value: {
      fontSize: { base: "2.375rem", md: "3rem", lg: "3.5rem" },
      fontFamily: "body",
      lineHeight: { base: "1.08", lg: "1.06" },
      fontWeight: "bold",
      letterSpacing: "-0.045em",
    },
  },
  heading2: {
    value: {
      fontSize: { base: "1.875rem", md: "2.5rem" },
      fontFamily: "body",
      lineHeight: "1.15",
      fontWeight: "bold",
      letterSpacing: "-0.035em",
    },
  },
  heading3: {
    value: {
      fontSize: { base: "1.5625rem", md: "1.875rem" },
      fontFamily: "body",
      lineHeight: "1.25",
      fontWeight: "bold",
      letterSpacing: "-0.025em",
    },
  },
  heading4: {
    value: {
      fontSize: "1.25rem",
      fontFamily: "body",
      lineHeight: "1.4",
      fontWeight: "bold",
    },
  },
  body: {
    value: {
      fontFamily: "body",
      fontSize: { base: "0.875rem", md: "1rem" },
      lineHeight: { base: "1.75", md: "1.8" },
    },
  },
  label: {
    value: {
      fontFamily: "body",
      fontSize: "0.625rem",
      lineHeight: "1.5",
      fontWeight: "bold",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },
  small: {
    value: {
      fontFamily: "body",
      fontSize: "0.75rem",
      lineHeight: "1.6",
    },
  },
});

export default defineConfig({
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  preflight: true,
  include: ["./src/**/*.{ts,tsx,html,astro,md,mdx}"],
  exclude: [],
  globalCss,
  theme: {
    extend: {
      textStyles,
      tokens: {
        colors: {
          bg: { value: "var(--console-bg)" },
          panel: { value: "var(--console-panel)" },
          ink: { value: "var(--console-ink)" },
          dim: { value: "var(--console-dim)" },
          accent: { value: "var(--console-accent)" },
          secondary: { value: "var(--console-secondary)" },
          live: { value: "var(--console-live)" },
          ruleSubtle: { value: "var(--console-rule-subtle)" },
          rule: { value: "var(--console-rule)" },
          ruleStrong: { value: "var(--console-rule-strong)" },
          ruleAccent: { value: "var(--console-rule-accent)" },
        },
        radii: {
          none: { value: "0" },
          sm: { value: "2px" },
          md: { value: "4px" },
        },
        sizes: {
          contentWidth: { value: "1440px" },
          sidebarWidth: { value: "282px" },
          articleWidth: { value: "760px" },
          articleHeaderWidth: { value: "780px" },
          indexWidth: { value: "920px" },
        },
        fonts: {
          body: { value: '"IBM Plex Mono", monospace' },
        },
      },
    },
  },
  outdir: "styled-system",
});
