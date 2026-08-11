# Timeless Design

**Objects that never needed redesign.**

A digital design museum — an editorial archive of everyday objects whose
designs have remained essentially unchanged. Each object is treated as a
design artifact: documented with its history, its materials, and the reasons
its form survived generations of attempts to replace it.

Built to feel like a physical exhibition — a museum catalog, an editorial
journal, an archive. Not a SaaS landing page.

## About

Throughout history, some objects achieved such a successful balance between
function, form, simplicity, and usability that their basic design has barely
changed. The safety pin. The paper clip. The spoon. The hammer. Twenty of
them are collected here, explored as artifacts rather than products.

The site explains *why* these objects became timeless:

- Functional simplicity
- Industrial design discipline
- Longevity and repairability
- Fit with human behavior
- Manufacturing constraints
- Cultural familiarity

## Live demo

No deployment is available yet. The project is designed to deploy anywhere
Next.js runs (Vercel, Netlify, a static host, or your own server).

## Screenshots

Screenshots will be added here as the project matures. Contributions of
screenshots and visual documentation are welcome.

## Features

- A curated archive of 20 objects with editorial content
- Object detail pages with design anatomy, timelines, and sources
- Museum-style catalog metadata for every object
- Client-side search across name, designer, year, material, and category
- Text-based filtering by category, era, and material
- "Discover an object" random exploration
- Responsive editorial interface, from mobile to desktop
- Subtle, reduced-motion-aware scroll reveals
- Original line-study artwork for every object (no external image dependencies)
- Static rendering of every page for speed

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with Instrument Serif and Inter

Deliberately minimal. No animation library (scroll reveals use a small
`IntersectionObserver` component), no state library, no database, no backend.

## Getting started

```bash
git clone <your-repository-url>
cd timeless-design
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Commands

| Command            | What it does                          |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Start the development server          |
| `npm run lint`     | Run ESLint                            |
| `npx tsc --noEmit` | Run the TypeScript type check         |
| `npm run build`    | Create a production build             |
| `npm run start`    | Serve the production build            |

## Project structure

```text
src/
  app/                  # Routes (App Router)
    page.tsx            #   Home — the exhibition
    archive/
      page.tsx          #   The archive (search + filters)
      [slug]/page.tsx   #   Object detail — the exhibit
    about/page.tsx      #   Why Timeless? — the essay
  components/           # Presentational + interaction components
  data/                 # The content layer
    objects.ts          #   All object records
    categories.ts       #   Categories, eras, materials, helpers
  lib/
    cn.ts               # Tiny className helper
  styles/               # Tailwind v4 theme (globals.css)
public/
  art/*.svg             # Original line-study artwork per object
```

The architecture follows a **content/UI separation**: everything a curator
needs to edit lives in `src/data/`. Reusable components never hardcode
object-specific content.

## Adding an object

The archive is data-driven. To add a new object:

1. Open `src/data/objects.ts`.
2. Add a record matching the `ObjectItem` interface (`id`, `slug`, `name`,
   `category`, `year`, `designer`, `origin`, descriptions, `whyTimeless`,
   `anatomy`, `material`, `dimensions`, `image`, `timeline`, `sources`).
3. Add an SVG line study at `public/art/<slug>.svg` (see the existing plates
   for the template), or contribute a properly licensed photograph.
4. Register the category or materials in `src/data/categories.ts` if new.
5. Run `npm run lint`, `npx tsc --noEmit`, and `npm run build`.

The new object automatically appears on the archive page, gets a detail page
(`/archive/<slug>`), and becomes eligible for the home page grid.

> **Historical accuracy:** do not invent designers, dates, or origins. Cite
> credible sources in the `sources` array. When information is uncertain,
> represent the uncertainty honestly (e.g. "Attributed to…").

## Contributing

Timeless Design is an open archive. You can contribute code, objects,
research, historical corrections, photography, accessibility improvements,
documentation, or visual ideas — not just React code.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide, and
[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before you begin.

## Image licensing

This project is an archive, so image provenance matters. Do **not** add images
with unclear redistribution rights. Prefer public-domain images, contributor-
created images, or images with licenses that explicitly permit redistribution.
Every image must be documented with source, creator, license, and attribution.
See [CONTRIBUTING.md](./CONTRIBUTING.md#image-policy) for details.

The current artwork is original line-study illustrations created for the
project and released to the public domain.

## License

[MIT](./LICENSE)
