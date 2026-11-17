# Design Language — Gruvbox Console

**Source design:** `design.pen`  
**Scope:** Gruvbox B homepage, article page, full articles index, and full
projects index, each at desktop, 768 px portrait tablet, and 390 px mobile, in
dark/light  
**Last updated:** 2026-11-16

## Scope and principles

This document records the current Pencil design system for the B homepage,
article page, full articles index, and full projects index, each at desktop, 768
px portrait tablet, and 390 px mobile, in dark/light. The shared language is a
restrained editorial console: warm Gruvbox surfaces, monospaced typography,
structural rules, and deliberate spacing.

Root frames declare their theme with `theme: { mode: "dark" }` or
`theme: { mode: "light" }`. Components consume semantic Pencil variables; they
must not contain hardcoded Gruvbox color values.

Design priorities:

- Keep content primary and terminal references secondary.
- Establish hierarchy through surface, rules, spacing, and type—not elevation or
  decoration.
- Give each screen one dominant region rather than turning every element into a
  card.
- Preserve the same semantic structure across breakpoints and themes.

## Color tokens

| Variable              | Dark        | Light       | Usage                                                    |
| --------------------- | ----------- | ----------- | -------------------------------------------------------- |
| `console-bg`          | `#282828`   | `#fbf1c7`   | Page background and text on accent buttons               |
| `console-panel`       | `#32302f`   | `#f2e5bc`   | Sidebar, session/status bars, quotes, selected surfaces  |
| `console-ink`         | `#ebdbb2`   | `#3c3836`   | Primary text and headings                                |
| `console-dim`         | `#bdae93`   | `#7c6f64`   | Metadata and secondary text                              |
| `console-accent`      | `#fabd2f`   | `#b57614`   | Short bold labels, icons, active values, primary actions |
| `console-secondary`   | `#83a598`   | `#458588`   | Tags and technical metadata                              |
| `console-live`        | `#fb4934`   | `#cc241d`   | Live indicator only                                      |
| `console-transparent` | `#28282800` | `#fbf1c700` | Transparent themed surfaces                              |
| `console-rule-subtle` | `#3c3836`   | `#ebdbb2`   | Dense list row separators                                |
| `console-rule`        | `#504945`   | `#d5c4a1`   | Default section and content dividers                     |
| `console-rule-strong` | `#665c54`   | `#bdae93`   | Session bars, status bars, workspace/sidebar boundaries  |
| `console-rule-accent` | `#fabd2f`   | `#b57614`   | Selected rows and blockquote rails                       |

Body copy uses `console-ink`, not `console-accent`. Reserve accent for short
bold labels, icons, active values, and actions, especially in light mode where
long accent-colored passages lose readability.

## Rules and borders

| Weight | Application            |
| ------ | ---------------------- |
| 1 px   | Default divider        |
| 2 px   | Selected or active row |
| 3 px   | Blockquote rail        |

- Use `console-rule-subtle` for dense rows, `console-rule` for section
  boundaries, and `console-rule-strong` for outer chrome.
- Use `console-rule-accent` only for current, selected, or emphasized content.
- Rules are structural, not decorative. Do not add a divider where whitespace
  already separates content.
- Do not introduce glow, gradient borders, or neon shadows.

## Spacing

All spacing values are number variables in Pencil. The system follows a 4 px
base rhythm.

| Token     | Value | Token      | Value |
| --------- | ----: | ---------- | ----: |
| `space-0` |     0 | `space-9`  |    36 |
| `space-1` |     4 | `space-10` |    40 |
| `space-2` |     8 | `space-12` |    48 |
| `space-3` |    12 | `space-14` |    56 |
| `space-4` |    16 | `space-16` |    64 |
| `space-5` |    20 | `space-18` |    72 |
| `space-6` |    24 | `space-20` |    80 |
| `space-7` |    28 | `space-30` |   120 |
| `space-8` |    32 |            |       |

Use the scale by relationship:

| Tokens                | Typical use                      |
| --------------------- | -------------------------------- |
| `space-1`–`space-2`   | Inline and icon relationships    |
| `space-3`             | Metadata groups                  |
| `space-4`–`space-5`   | Control and content groups       |
| `space-6`–`space-8`   | Component and section groups     |
| `space-9`–`space-14`  | Major header and section padding |
| `space-16`–`space-30` | Canvas-level separation          |

Do not use arbitrary 5/9/10/11/13/15/18/22/26/30/34/38/42/52 px gap or padding
values. Choose the nearest token deliberately. Widths and heights are component
sizing, not spacing tokens.

## Typography

| Variable            | Typeface                | Application                                                        |
| ------------------- | ----------------------- | ------------------------------------------------------------------ |
| `font-source-body`  | IBM Plex Mono           | UI, article body, metadata                                         |
| `font-source-title` | IBM Plex Sans Condensed | Reserved for editorial directions; not required in Gruvbox console |

| Text style              | Desktop            | Tablet             | Mobile             |
| ----------------------- | ------------------ | ------------------ | ------------------ |
| Homepage name           | 56 px / 1.06, bold | 48 px, bold        | 38 px / 1.08, bold |
| Article title           | 48 px / 1.12, bold | 42 px / 1.14, bold | 32 px / 1.16, bold |
| Article body            | 16 px / 1.8        | 16 px / 1.8        | 14 px / 1.75       |
| Article section heading | 30 px / 1.25, bold | 28 px, bold        | 25 px / 1.25, bold |
| Index titles            | 40 px              | 40 px              | 30 px              |

- UI headings are 20–24 px and bold.
- UI and general body text range from 10–16 px.
- Metadata is 8–10 px with modest positive tracking; essential information must
  not rely on tiny text.
- Long-form body copy uses `console-ink` on `console-bg` or `console-panel`.
- Accent remains a labeling and action color, not a body-copy color.

## Radii, icons, and elevation

| Token         | Value | Application                  |
| ------------- | ----- | ---------------------------- |
| `radius-none` | 0     | Default                      |
| `radius-sm`   | 2     | Controls and selected rows   |
| `radius-md`   | 4     | Avatars and project previews |

- Do not default to pills or large rounded cards.
- Use Lucide icons, normally at 14–20 px.
- Never use emoji as UI icons.
- There is no elevation system. Hierarchy comes from surface, rules, spacing,
  and type.

## Layout and responsive behavior

| Measure                              | Value                      |
| ------------------------------------ | -------------------------- |
| Desktop artboard                     | 1440 px                    |
| Tablet artboard                      | 768 px                     |
| Console sidebar                      | 282 px                     |
| Article body measure                 | 760 px                     |
| Article header measure               | 780 px                     |
| Desktop index content measure        | 920 px                     |
| Tablet article/index content measure | 688 px                     |
| Desktop project preview              | 300 × 168 px               |
| Tablet project-index preview         | 240 × 135 px               |
| Tablet homepage project preview      | 220 × 124 px               |
| Mobile project preview               | Content width; 160 px high |
| Mobile artboard                      | 390 px                     |

Typical tablet gutters are 32 px on homepage/navigation and 40 px on
article/index regions. Mobile gutters follow the region: navigation/status
typically use 20 px, and introduction/article body use 24 px (`space-6`).

- Tablet removes desktop sidebars and uses compact session navigation plus
  context/navigation strips; mobile remains single-column.
- Tablet index filters remain inline, and tablet project entries stay
  horizontal.
- The article table of contents becomes an inline collapsed disclosure on tablet
  and a collapsed disclosure on mobile.
- On mobile, article index desktop year/topic sidebars collapse into a year
  selector, and project entries reflow from horizontal to stacked with
  full-width imagery.
- Mobile touch targets are at least 44 px high.
- Text wraps using fixed-width/fill-container behavior; horizontal scrolling and
  clipped text are not acceptable.
- The session and status bars remain fixed at the top and bottom of the
  viewport. The central content region owns scrolling; on desktop, the sidebar
  stays in place while the main content scrolls.

## Component guidance

Apply the shared tokens consistently to session/status bars, the navigation
strip, directory/sidebar, article rows, project entries, blockquotes, and
next-article links.

- **Session/status bars:** Use panel surfaces and strong outer rules; keep
  terminal language in small utility chrome and status details.
- **Navigation strip:** Favor clear labels and restrained active states over
  decorative terminal syntax.
- **Directory/sidebar:** Use dense rows, subtle separators, and accent rules
  only for selection.
- **Article rows and project entries:** Preserve a clear reading hierarchy with
  ink titles, dim metadata, and secondary tags.
- **Full article index:** Group rows by year with consistent metadata and clear
  row separation.
- **Full project index:** Include real imagery, a concise description, stack,
  and external project link for each entry.
- **Full article/project index entries:** Index pages use compact row
  padding/gaps and 40 px desktop/tablet / 30 px mobile index titles while
  retaining descriptions, metadata, and links.
- **Blockquotes:** Use a panel surface and the 3 px accent rail without adding
  ornamental effects.
- **Next-article links:** Keep actions obvious through type, spacing, and accent
  rather than enclosing them in large cards.
- **Section headings:** Use plain labels such as `Journal` and `Projets indé`;
  do not use shell commands such as `ls -lt ~/journal` as section titles.

## Theming and adding tokens

1. Reuse an existing semantic token before adding a new one.
2. Every color token must define both dark and light values.
3. A new token needs a documented purpose and values for both themes.
4. Add component references through Pencil variables, never literal Gruvbox
   values.
5. Keep Pencil variables and this document synchronized whenever tokens change.

## Accessibility and verification

- Use ink on bg/panel for long-form reading.
- Do not use live red or secondary blue for large body copy.
- Verify long French strings, the 768 px tablet and 390 px mobile layouts, both
  themes, and keyboard/touch reachability.
- Check collapsed disclosures and navigation controls with keyboard and touch
  input.
- Respect reduced motion if motion is introduced later; no motion is currently
  part of the design language.

## Validation status

All current twenty-four Gruvbox screens pass Pencil clipping/overflow checks
after adding tablet layouts. Re-run those checks after layout, typography, or
token changes, and review each affected screen at desktop, tablet, and mobile
sizes in both themes.
