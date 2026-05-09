# Lab Launch — Design System

The source of truth for how things look. If you're tempted to use a color, font, or spacing value that isn't in here, stop and either (a) use what's here, or (b) propose adding it on purpose.

## Aesthetic anchors

Lab Launch should feel like a **modern science lab notebook meets a thoughtful indie product** — not corporate EdTech, not childish.

- Warm and slightly desaturated, never neon.
- Generous whitespace; cramming is the enemy.
- Type with personality (Fraunces) paired with a clean sans (Plus Jakarta Sans).
- Tactile cards and buttons; no boxy gradient SaaS heroes.

## Color palette

All colors are defined in `src/index.css` inside the `@theme` block. Each token becomes a Tailwind utility automatically — `--color-paper` becomes `bg-paper`, `text-paper`, `border-paper`, etc.

### Neutrals

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FAF6EE` | Page background — warm cream. Default behind everything. |
| `parchment` | `#F4EEDF` | Surfaces that sit slightly above the page — cards, asides. |
| `rule` | `#E5DCC6` | Borders, dividers, hairlines. Never as a fill. |
| `mist` | `#8A8472` | Muted text — captions, metadata, placeholder copy. |
| `ink` | `#1F1B16` | Primary text. Warm near-black. Never use `#000` — pure black is too cold against the cream. |

### Accents

| Token | Hex | Use |
|---|---|---|
| `moss` | `#4F6B3A` | Primary accent. Herbarium-pressed-leaf green. Primary CTAs, active link state, key highlights. **Not** for body text. |
| `rust` | `#B5532A` | Secondary accent. Terracotta. Use sparingly — category tags, occasional emphasis, warm error states. |

### Color rules

- **Don't** use raw Tailwind colors (`bg-blue-500`, `text-gray-700`). Stick to tokens.
- **Don't** invent shades by mixing arbitrary opacities on the wrong base.
- **Do** use opacity modifiers (`bg-moss/90`, `text-ink/70`) for subtle variation.
- **Default body color** is already set on `<body>`. You don't need `text-ink` on every element unless you're overriding.

## Typography

Two variable fonts loaded from Google Fonts in `index.html`.

### Fraunces — `font-display`

Serif, for headings and display moments. Variable axes: weight 300–900, optical size 9–144.

| Use | Classes |
|---|---|
| H1 (page title) | `font-display text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]` |
| H2 (section title) | `font-display text-3xl md:text-4xl font-medium tracking-tight` |
| H3 (subsection) | `font-display text-2xl font-medium` |
| Eyebrow / kicker | `text-sm uppercase tracking-[0.2em] text-mist` |

Default heading weight is `font-medium` (500). Fraunces at semibold/bold loses some character — reserve heavier weights for big display moments.

### Plus Jakarta Sans — `font-sans`

Default body, set on `<body>`. Anything without `font-display` already uses it.

| Use | Classes |
|---|---|
| Body lead (first paragraph after a heading) | `text-lg leading-relaxed` |
| Body default | `text-base leading-relaxed` |
| Caption / fine print | `text-sm text-mist` |
| UI labels and buttons | `text-sm font-medium` or `text-base font-medium` |

Avoid `font-thin` and `font-extralight` — they look fragile against the cream.

## Spacing

Tailwind's default 4px scale, with conventions for common layouts.

### Sections (vertical rhythm)

- **Vertical padding:** `py-20` on mobile, `py-28 md:py-32` on desktop. Generous on purpose.
- **Horizontal padding:** `px-6 md:px-8`.
- **Between sections:** the section's own padding handles it — don't add margins.

### Containers (max widths)

- **Prose / single column:** `max-w-2xl` (~672px). Text-heavy content.
- **Layout grid (3 cards, etc.):** `max-w-6xl` (~1152px). Comfortable for cards.
- Always centered with `mx-auto`.

### Component spacing

- **Stack gap (vertical):** `gap-3` tight, `gap-6` default, `gap-10` loose.
- **Card padding:** `p-6` default, `p-8` for spacious/hero cards.
- **Between heading and body:** `mb-4` to `mb-8` depending on heading scale.

## Radius

| Class | Use |
|---|---|
| `rounded-md` (6px) | Default — buttons, inputs, small elements. |
| `rounded-lg` (8px) | Cards, modal panels. |
| `rounded-2xl` (16px) | Large hero containers (rarely). |
| `rounded-full` | Actual circles only — avatars, badges. |

Avoid `rounded-3xl` and beyond — too candy-soft for our aesthetic.

## Component patterns

Described in prose. We build the actual components when we've used the pattern at least twice — don't pre-abstract.

### Button

Three flavors. All share: `rounded-md font-medium px-6 py-3 transition`.

- **Primary** — `bg-moss text-paper hover:bg-moss/90`. The most important action on a page (one per view, ideally).
- **Secondary** — `bg-rust text-paper hover:bg-rust/90`. Alternative actions where moss isn't appropriate. Use sparingly.
- **Ghost** — `text-ink border border-rule hover:bg-parchment`. The quiet option — cancel, tertiary CTAs, link-style actions.

Disabled state: `opacity-50 cursor-not-allowed` and drop the hover.

### Card

Container for grouped content (an experiment summary, a notebook entry preview).

- Base: `bg-parchment border border-rule rounded-lg p-6`
- Hover (when clickable): `hover:border-mist/40 hover:shadow-sm transition`
- Inside: heading at `font-display text-xl font-medium`, body in default sans, optional metadata in `text-mist text-sm`

Cards should feel tactile through hue (parchment vs paper) and a thin border — not through heavy `shadow-xl`.

### Input

Text inputs and textareas.

- Base: `bg-paper border border-rule rounded-md px-4 py-2 text-base`
- Focus: `focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss/20`
- Label above: `block text-sm font-medium mb-1`
- Helper text below: `text-sm text-mist mt-1`
- Error: border becomes `border-rust`, helper text becomes `text-rust`

## Anti-patterns (things to refuse)

- **SaaS gradient heroes.** Big rounded boxes with a purple-to-blue gradient. Don't.
- **Default Tailwind blues, indigos, violets.** We have moss and rust.
- **Heavy drop shadows everywhere.** Reserve shadow for real elevation (modals, dropdowns).
- **A third "fun" font.** Vary weight and size within Fraunces and Plus Jakarta Sans instead.
- **Cramped layouts.** If a section feels cramped, increase padding before cutting content.

## Tooling notes (read once, save debugging time later)

- **Tailwind is on v4.** Tutorials older than ~2025 show v3 syntax (a `tailwind.config.js` file with a `theme.extend` block). Our config lives in `src/index.css` under `@theme`. The class names (`bg-paper`, `font-display`) are identical — only the config location differs.
- **React Router is on v7.** The package is `react-router`, not `react-router-dom`. Older tutorials use `react-router-dom`; that import still works as a compat shim, but write new code with `react-router`.
- Both decisions are documented as ADRs in `docs/decisions/` so the rationale isn't lost.
