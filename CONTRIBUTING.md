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
| `image`          | Path to the artwork, e.g. `/art/safety-pin.svg`|
| `gallery`        | Image paths for the gallery                    |
| `quote`          | An editorial quote                             |
| `timeline`       | Year → title → description entries             |
| `sources`        | Credible, linked references                    |

## Historical accuracy

- Do **not** invent designers, dates, origins, manufacturing claims, or events.
- Cite credible sources in the `sources` array.
- When a fact is uncertain or contested, say so in the record (for example,
  "Attributed to…", "The story is widely repeated but not fully documented").
- Use the `historical_correction` issue template if you find an error.

## Image policy

Images are the most sensitive part of an archive. Follow these rules:

1. **Do not add images with unclear redistribution rights.** No screenshots of
   stock sites, no random web images, no images without a documented license.
2. Prefer images that are:
   - public domain;
   - licensed under a permissive license that permits redistribution; or
   - created by a contributor (you) for the project.
3. Every image must be documented with:
   - source;
   - creator when known;
   - license; and
   - any attribution requirements.
4. Document images in the object record using `imageCredit` and
   `imageLicense` fields.

The current line-study artwork (`public/art/*.svg`) was created for the
project and is released to the public domain. New artwork contributed to the
project is treated the same way.

## Code style

- No new dependency without asking **"Can this be implemented cleanly with the
  existing stack?"** If yes, don't add it.
- No new abstraction without asking **"Will this make future contributions
  easier?"**
- Keep the repository approachable for a first-time contributor.

## Questions?

Open a GitHub issue — the archive is built on curiosity.
