---
name: SemDev Ops
description: Warehouse & contracts operations tool — dense, calm, data-first UI with an OKLCH tonal design system.
colors:
  brand-signal-blue: "oklch(0.700 0.134 233.41)"
  brand-signal-blue-deep: "oklch(0.560 0.134 233.41)"
  surface-canvas: "oklch(0.110 0.020 240)"
  surface-card: "oklch(0.213 0.014 239)"
  surface-control: "oklch(0.271 0.017 237)"
  surface-control-hover: "oklch(0.327 0.018 239)"
  divider-on-canvas: "oklch(0.327 0.018 239)"
  ink-primary: "oklch(0.985 0.008 240)"
  ink-secondary: "oklch(0.780 0.014 240)"
  status-error: "oklch(0.580 0.220 25)"
  status-success: "oklch(0.600 0.180 145)"
  status-warning: "oklch(0.680 0.170 60)"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.06em"
  mono:
    fontFamily: "Roboto Mono, Courier New, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
  xl: "8px"
  2xl: "12px"
  full: "9999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  6: "24px"
components:
  field:
    backgroundColor: "{colors.surface-control}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  field-hover:
    backgroundColor: "{colors.surface-control-hover}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  toolbar-card:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.md}"
  button-primary:
    backgroundColor: "{colors.brand-signal-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0 16px"
  button-primary-hover:
    backgroundColor: "{colors.brand-signal-blue-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0 16px"
---

# Design System: SemDev Ops

## 1. Overview

**Creative North Star: "The Operations Desk"**

This is the instrument a warehouse and contracts operator sits at for a full shift, not a dashboard they glance at. The whole system is built to keep dozens of rows of movement data legible and calm under sustained attention: tinted-neutral surfaces, near-zero chrome, and color spent almost entirely on status. Nothing decorates. Every surface, weight, and gap is there to make the next row easier to scan and the next action harder to misfire.

Depth is expressed through **tonal layering, not shadow**. Surfaces sit on an ordered elevation ladder where each rung steps one measured amount further from the page background, so a control always reads as raised above the card it lives on. This is the system's spine: presence equals distance from the background, and that single idea governs every resting, hover, and active state in both themes. Dark is the default (the operator's room is dim, the data is the light); light is a full parity theme, not an afterthought, and it inverts the ladder's direction rather than recoloring it by hand.

The system explicitly rejects the SaaS-marketing reflexes: no gradient fills, no glassmorphism, no glowing hero metrics, no decorative accent color, no card that exists just to hold a shadow. If a surface could belong on a landing page, it does not belong here.

**Key Characteristics:**
- Data-first density; chrome is suppressed so content dominates.
- OKLCH-native color; tonal layering instead of drop shadows for depth.
- Signal-blue accent reserved for brand actions and focus; status hues carry all other color.
- Dark-default, full light parity, both driven by one elevation ladder.

## 2. Colors

A cool tinted-neutral field (hue 240) carrying a single signal-blue accent (hue 233), with warm status hues used directly and sparingly.

### Primary
- **Signal Blue** (`oklch(0.700 0.134 233.41)`): The one brand voice. Primary CTA fill, focus edges, active-tab and eyebrow-label text, selection tints. In light theme it shifts to `oklch(0.696 0.134 233.41)` (the project's light brand standard); hover in both deepens toward **Signal Blue Deep** (`oklch(0.560 0.134 233.41)`).

### Neutral
- **Ink Primary** (`oklch(0.985 0.008 240)` dark / `oklch(0.160 0.025 240)` light): Primary text and active labels.
- **Ink Secondary** (`oklch(0.780 0.014 240)` dark / `oklch(0.360 0.014 240)` light): Body text, resting labels, secondary rows.
- **Elevation ladder** (see Elevation): `surface-canvas`, `surface-card`, `surface-control`, `surface-control-hover` are the four neutral surface rungs; every background is one of them.
- **Divider on Canvas** (`oklch(0.327 0.018 239)` dark / `oklch(0.830 0.014 240)` light): Dividers on the flat sidebar. Deliberately separate from card border tokens so retuning one never disturbs the other.

### Status (used directly, never blended into neutrals)
- **Error** (`oklch(0.580 0.220 25)`): Destructive actions, error rows and fills (light fill `oklch(0.95 0.038 25)`).
- **Success** (`oklch(0.600 0.180 145)`): Confirmations, positive movement states.
- **Warning** (`oklch(0.680 0.170 60)`): Attention states, flagged movements.

### Named Rules
**The Status-Only Color Rule.** Neutrals and the single signal-blue carry the interface. Every other hue is a status and appears only where it means something. A screen with no warnings is a screen with no orange.

**The Direct-Hue Mixing Rule.** Tints are mixed in OKLCH, never sRGB, and status fills use the status hue directly (error = hue 25). Blending a warm hue into the cool navy neutral in sRGB produces muddy grey-pink; it is forbidden.

## 3. Typography

**Display / Body / Label Font:** Inter (with -apple-system, BlinkMacSystemFont, sans-serif)
**Numeric / Mono Font:** Roboto Mono (with Courier New, monospace)

**Character:** One neutral, high-legibility sans does nearly all the work; a mono face is reserved for figures that must align in columns. The pairing reads as an instrument panel, not a brand.

### Hierarchy
- **Display** (600, 20px, line-height 1, -0.015em): Page title only. The single largest thing on the screen.
- **Body** (400–500, 14px, line-height ~1.4): Default text, field values, table cells. 13px for denser secondary rows.
- **Label** (600, 11–12px, 0.04–0.06em, UPPERCASE): Eyebrow labels above fields, section headers, results-count. Tracking opens up the caps so they read as structure, not shouting.
- **Mono** (500, 13px, tabular-nums): Quantities, IDs, dates — anything that must line up vertically in a column.

### Named Rules
**The Tabular-Numeral Rule.** Any number that appears in a column or updates in place uses tabular figures (Roboto Mono, or `font-variant-numeric: tabular-nums`) so digits never shift width.

## 4. Elevation

Depth is **tonal, not cast**. Surfaces are flat and layered by lightness; drop shadows appear only under genuinely floating elements (menus, dropdowns, toasts, date pickers). The core mechanism is the elevation ladder: an ordered set of surface roles, each one measured step further from the page background, so presence always reads as distance from the background.

### The Elevation Ladder
Ordered rungs, resting values (dark → light theme):
- **Canvas** (`oklch(0.110)` → `oklch(0.910)`): the page itself.
- **Card** (`oklch(0.213)` → white): toolbar, table, panels sitting on the canvas.
- **Control** (`oklch(0.271)` → `oklch(0.945)`): a field/input at rest, one rung above its card.
- **Control-Hover** (`oklch(0.327)` → `oklch(0.925)`): hover/active, one rung higher again.

Dark theme climbs **lighter** per rung; light theme inverts the direction (cards go bright white, controls step **darker** to show presence, since they cannot lighten past white) but preserves the role order canvas < card < control < control-hover.

### Shadow Vocabulary
- **Floating overlay, dark** (`box-shadow: 0 8px 24px rgba(0,0,0,.4)`): dropdowns, menus, toasts.
- **Floating overlay, light** (`box-shadow: 0 16px 40px rgba(17,24,39,.14), 0 4px 12px rgba(17,24,39,.08)`): the same elements on white; a softer two-layer navy-tinted lift, because the dark recipe smears to a grey smudge on white.
- **Focus ring** (`box-shadow: 0 0 0 4px color-mix(in oklch, brand 15%, transparent)`): keyboard focus halo on non-field controls.

### Named Rules
**The Ladder Rule.** Author every component surface from a ladder rung, never from a raw neutral. A control rests one rung above its card and lifts one rung further on hover, which makes it structurally impossible for a control to resolve to its host surface's color.

**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow means "this is floating above the page." If an element isn't floating, it has no shadow.

## 5. Components

### Buttons
- **Shape:** 4px radius (`rounded.md`).
- **Primary:** Signal-blue fill, white text, ~36px tall, 16px side padding. The only saturated fill on a resting screen.
- **Hover / Focus:** Primary deepens toward Signal Blue Deep (same hue, darker) — brand surfaces move to a deeper shade, never a lighter neutral. Focus-visible adds the brand halo ring.
- **Secondary / Ghost:** Transparent or faint white-overlay fill, brand-blue text in light. Ghost icon buttons carry only a hover overlay.

### Inputs / Fields
- **Style:** Solid fill from the **Control** ladder rung, 1px transparent border, 4px radius, 6px/12px padding. Distinguished by FILL, not by a border. Eyebrow label sits inside the field, above the value.
- **Hover:** Fill steps to the **Control-Hover** rung (dark: lighter; light: one gentle ~ΔL 0.02 step darker). Never moves toward the page background.
- **Focus:** A 2px blue edge with no layout shift — 1px border + 1px inset blue ring — while the fill stays on the hover value (no white flip). The eyebrow label and leading icon turn brand-blue.

### Cards / Containers (Islands)
- **Corner Style:** 4px radius (`rounded.md`).
- **Background:** The **Card** ladder rung; header rides transparent on the canvas.
- **Shadow Strategy:** None — cards are separated from the canvas by the ladder's lightness step and an 8px gap, not by shadow.
- **Layout:** An islands layout — header, toolbar, and table are distinct cards floating on the page canvas with consistent gaps between them.

### Navigation (Sidebar)
- **Style:** Flat, transparent, sitting directly on the page canvas (no separate surface). Icon + label rows; groups separated by canvas dividers.
- **States:** Hover and active add a faint white/ink overlay (presence via distance from background); the active item carries a 2px brand edge and brighter label.

### Toggles (Theme / Language)
- **Behavior:** A two-state toolbar toggle shows the **action it will perform**, not the current state — the theme button shows the moon you'll switch to; the language flag shows the language you'll switch to. The language flag is circle-cropped with a hairline inset ring.

### Chips / Tags & Table
- **Filter chips:** Faint surface fill, removable, brand tint when active.
- **Table:** Zebra rows via a ~5% brand-tinted overlay, selected rows via a stronger brand tint, header on the Card rung. Row hover is a soft brand-tinted overlay.

## 6. Do's and Don'ts

### Do:
- **Do** author every surface from an elevation-ladder rung (canvas / card / control / control-hover), never from a raw `neutral-*`.
- **Do** move hover/active states AWAY from the page background: lighter in dark, darker in light, at a restrained ΔL 0.02–0.05 (field surfaces prefer ~0.02).
- **Do** deepen brand-colored controls to a darker shade of the SAME hue on hover (Signal Blue → Signal Blue Deep), not toward a neutral.
- **Do** mix every tint in OKLCH, and use status hues directly (error = hue 25).
- **Do** distinguish a field by its FILL, and signal focus with the 2px blue edge (1px border + 1px inset ring, no layout shift), keeping the hover fill.
- **Do** show the ACTION on two-state toolbar toggles, never the current state.
- **Do** use tabular figures for any number in a column.

### Don't:
- **Don't** move any surface TOWARD the page background on hover — a control must never resolve to its host card's color.
- **Don't** use drop shadows on anything that isn't genuinely floating; depth is tonal.
- **Don't** blend a warm status hue into a cool neutral in sRGB (muddy grey-pink is forbidden); mix in OKLCH.
- **Don't** spend color on decoration — no gradient fills or text, no glassmorphism, no glowing hero-metric tiles, no decorative accent.
- **Don't** flip a focused field to white; keep the hover fill under the blue edge.
- **Don't** use `#000` / `#fff` raw — tint every neutral toward the hue-240 family.
- **Don't** reuse a card-border token for the sidebar divider (or vice versa); they are separate roles on purpose.
