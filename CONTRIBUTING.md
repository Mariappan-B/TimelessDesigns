# Contributing to Timeless Design

Timeless Design is an open archive. It is built for developers, designers,
historians, researchers, photographers, writers, students, and accessibility
contributors alike.

> Contribution does not need to mean writing React code. You can add objects,
> research, historical corrections, photography, documentation, accessibility
> improvements, or visual ideas.

By participating, you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Ways to contribute

- **New objects** — add an object to the archive with proper sources.
- **Historical corrections** — fix inaccurate dates, origins, or attributions.
- **Photography / artwork** — contribute properly licensed imagery.
- **Writing** — improve descriptions, essays, or the about page.
- **Code** — new features, refinements, and accessibility improvements.
- **Documentation** — README, CONTRIBUTING, or issue/PR quality.

## Development workflow

### 1. Fork the repository

Click **Fork** at the top of the repository page on GitHub.

### 2. Clone your fork

```bash
git clone https://github.com/<your-username>/timeless-design.git
cd timeless-design
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Create a branch

Branch names describe the work:

```text
feature/<description>
fix/<description>
docs/<description>
design/<description>
content/<description>
```

```bash
git checkout -b feature/paperweight-object
```

### 6. Make your changes

For new objects, follow [Adding an object](./README.md#adding-an-object).
For code changes, keep components simple, prefer Server Components, and do
not add dependencies that could be avoided with the existing stack.

### 7. Verify your work

```bash
npm run lint          # ESLint
npx tsc --noEmit      # TypeScript type check
npm run build         # Production build
```

The site should also be checked on desktop and mobile, and the search and
filters should behave correctly. Add screenshots to your PR when visual
behavior changes.

### 8. Commit and push

```bash
git add .
git commit -m "feat: add the paperweight to the archive"
git push -u origin feature/paperweight-object
```

### 9. Open a pull request

Open a PR against the `main` branch. Use the pull request template — it asks
for a summary, screenshots, testing notes, and a checklist. Keep the PR
focused on one change where possible.

## Object schema

Objects live in `src/data/objects.ts` and must match the `ObjectItem`
interface. A contributor should be able to add an object primarily by editing
this data layer — never hardcode object-specific content into components.

Key fields:

| Field            | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| `id` / `slug`    | Unique identifiers; slug drives the URL        |
| `name`           | Display name                                   |
| `category`       | One of the slugs in `src/data/categories.ts`   |
| `year` / `yearNum` | Display year string and a numeric era value  |
| `designer`       | Inventor/designer, or "Unknown — …"            |
| `origin`         | Place of origin                                |
| `description`    | Short museum-label line                        |
| `longDescription`| The editorial essay (paragraphs, `\n`-separated) |
| `whyTimeless`    | Bullet points on why the design lasted         |
| `anatomy`        | "Why it works" numbered sections               |
| `material`       | Display material string                        |
| `materials`      | Filter tags (must exist in `materials` list)   |
| `dimensions`     | Approximate dimensions                         |
| `image`          | Path to the photograph, e.g. `/objects/safety-pin/main.jpg` |
| `gallery`        | Image paths for the gallery                    |
| `quote`          | An editorial quote                             |
| `timeline`       | Year → title → description entries             |
| `sources`        | Credible, linked references                    |
| `imageCredit`    | Structured provenance: creator, source, source URL, license, license URL, changes |

## Historical accuracy

- Do **not** invent designers, dates, origins, manufacturing claims, or events.
- Cite credible sources in the `sources` array.
- When a fact is uncertain or contested, say so in the record (for example,
  "Attributed to…", "The story is widely repeated but not fully documented").
- Use the `historical_correction` issue template if you find an error.

## Image policy

Images are the most sensitive part of an archive. Follow these rules:

1. **Do not add images with unclear redistribution rights.** No images copied
   from Google Images, Pinterest, blogs, commercial or stock sites, museum
   sites, or anywhere redistribution cannot be verified. Wikimedia Commons is
   the preferred source because it publishes explicit licensing metadata.
2. Acceptable licenses are:
   - public domain;
   - CC0;
   - CC BY / CC BY-SA and other Creative Commons licenses that permit
     redistribution and allow attribution to be provided;
   - contributor-created photographs released under a permissive license.
3. Every image must be documented with:
   - source;
   - creator when known;
   - license and license URL;
   - the original source file page URL; and
   - any attribution requirements.
4. Store images locally under `public/objects/<slug>/` and document provenance
   in the object record using the structured `imageCredit` field
   (`creator`, `source`, `sourceUrl`, `license`, `licenseUrl`, `changes`).
5. Keep the archive's own licensing honest: **source code is MIT; each
   photograph keeps its own license.** Do not claim an image is public domain
   unless it actually is.
6. When in doubt, do not add the image. An archive with well-documented images is
   stronger than one with poorly documented ones.

The provenance of every image currently in the archive is documented in
[`IMAGE_SOURCES.md`](./IMAGE_SOURCES.md); keep it in sync when adding images.

## Code style

- No new dependency without asking **"Can this be implemented cleanly with the
  existing stack?"** If yes, don't add it.
- No new abstraction without asking **"Will this make future contributions
  easier?"**
- Keep the repository approachable for a first-time contributor.

## Questions?

Open a GitHub issue — the archive is built on curiosity.
