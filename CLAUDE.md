# semdev-html — project instructions

Static HTML prototypes for a SemDev warehouse/contracts ops tool. Each page is
self-contained: its own `<style>` block, OKLCH design tokens copy-pasted per
page (no shared CSS yet). Dark theme is the default; light theme is added as
`[data-theme="light"]` parity. Reusable light-theme field polish lives in
`snippets/field-light.css`.

## Design rules (follow strictly on every page, every session)

These are binding. When adding or editing any interactive surface, conform to
them unless the user explicitly overrides for a specific case.

### 1. Interaction-state model: overlay, not arbitrary colors
Hover / focus / active are an overlay over the resting fill that moves the
surface **away from the page background** (more contrast = more "presence").
Never move a surface *toward* the background on hover.

- **Dark theme** → hover/active get *lighter* (white overlay). e.g. field
  `rgba(255,255,255,.06)` → hover `.08`.
- **Light theme** → hover/active get *darker* (ink/neutral overlay), because
  surfaces are already near-white and can't lighten further. e.g. field rests
  near `neutral-100`, hover steps toward/at `neutral-200`.

### 2. State ordering and deltas
- Ordering by distance from the background: `rest < hover < active/pressed`.
  Each step moves further from the page background.
- Delta perceptible but restrained: ~**ΔL 0.02–0.05**. The user prefers the
  gentle end — a full neutral step (ΔL ~0.035) read as "too strong" on fields,
  so default to ~ΔL 0.02 for field surfaces. Smaller than ~0.015 reads as
  "nothing happened"; larger than ~0.05 reads as a jump.
- Keep the step size and direction **consistent** across all interactive
  surfaces within a theme.

### 3. Colored / brand surfaces are the exception
For brand-colored controls (e.g. the blue CTA), do **not** apply the
neutral lighter/darker rule. Hover = a darker / more saturated shade of the
**same brand hue** (e.g. `blue-500` → toward `blue-600`).

### 4. Fields (text inputs) in light theme
- Distinguish a field by its **FILL**, not a border. (The dark theme's lit
  `::before` gradient edge is disabled in light; rely on fill contrast.)
- **Field-fill standard colour:** a near-grey with only a whisper of cool
  tint — `oklch(L 0.005 240)`. Same lightness as a neutral-100/200 mix but
  ~half the chroma, so the field reads close to neutral grey (not blue)
  without going fully achromatic.
  - resting `oklch(0.945 0.005 240)`
  - hover / focus `oklch(0.925 0.005 240)` — one gentle ~ΔL 0.02 step
    **darker** per rules 1–2.
- The **focus** signal is the blue edge (1px border + 1px inset blue ring =
  a 2px line with no layout shift). On focus keep the **same fill as hover** —
  do not flip the surface to white.
- Canonical source: `snippets/field-light.css` (applied on sem-001 + sem-015).

### 5. Color mixing — avoid muddy tints
- Mix tints in **OKLCH**, not sRGB, especially status colors. Mixing a warm
  hue into a cool navy-tinted neutral in sRGB produces muddy grey-pink.
- Status fills use the status hue **directly** (error = hue ~25, matching
  `--red-500`), e.g. `oklch(0.95 0.038 25)` for a light error fill — not red
  blended into a cool neutral.
