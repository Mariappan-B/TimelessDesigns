export type CategorySlug =
  | "tools"
  | "writing"
  | "household"
  | "travel"
  | "mechanical"
  | "everyday";

export interface Category {
  slug: CategorySlug;
  label: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "tools",
    label: "Tools",
    description: "Implements made to act on the physical world.",
  },
  {
    slug: "writing",
    label: "Writing",
    description: "Instruments for making marks that outlast the maker.",
  },
  {
    slug: "household",
    label: "Household",
    description: "Objects of quiet domestic use.",
  },
  {
    slug: "travel",
    label: "Travel",
    description: "Objects designed for motion and portability.",
  },
  {
    slug: "mechanical",
    label: "Mechanical",
    description: "Simple machines whose logic has never been improved on.",
  },
  {
    slug: "everyday",
    label: "Everyday",
    description: "The unremarkable companions of ordinary life.",
  },
];

export const categoryBySlug = new Map(
  categories.map((c) => [c.slug, c]),
);

export function categoryLabel(slug: CategorySlug): string {
  return categoryBySlug.get(slug)?.label ?? slug;
}

export type EraSlug = "ancient" | "preindustrial" | "industrial" | "modern";

export interface Era {
  slug: EraSlug;
  label: string;
  range: string;
}

export const eras: Era[] = [
  { slug: "ancient", label: "Ancient", range: "before 1000 CE" },
  { slug: "preindustrial", label: "Pre-Industrial", range: "1000–1750" },
  { slug: "industrial", label: "Industrial", range: "1751–1920" },
  { slug: "modern", label: "Modern", range: "1921–present" },
];

/** Map a numeric year (negative for BCE) to an era bucket for filtering. */
export function eraOf(yearNum: number): EraSlug {
  if (yearNum < 1000) return "ancient";
  if (yearNum < 1751) return "preindustrial";
  if (yearNum < 1921) return "industrial";
  return "modern";
}

export function eraLabel(yearNum: number): string {
  const slug = eraOf(yearNum);
  return eras.find((e) => e.slug === slug)?.label ?? "Ancient";
}

export const materials: string[] = [
  "Steel",
  "Wood",
  "Plastic",
  "Brass",
  "Paper",
  "Bone",
  "Composite",
  "Stone",
  "Celluloid",
  "Metal",
  "Glass",
  "Rubber",
  "Fiber",
  "Copper",
  "Ceramic",
  "Clay",
  "Bronze",
  "Wax",
  "Leather",
  "Gold",
];
