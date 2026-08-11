"use client";

import { useMemo, useState } from "react";
import type { ObjectItem } from "@/data/objects";
import {
  categories,
  categoryLabel,
  eraOf,
  eras,
  materials,
  type CategorySlug,
  type EraSlug,
} from "@/data/categories";
import ObjectCard from "./ObjectCard";
import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

interface ArchiveExplorerProps {
  objects: ObjectItem[];
}

type CategoryFilter = "all" | CategorySlug;
type EraFilter = "all" | EraSlug;
type MaterialFilter = "all" | string;

function matchesQuery(object: ObjectItem, q: string): boolean {
  const haystack = [
    object.name,
    object.designer,
    object.origin,
    String(object.year),
    object.material,
    object.description,
    categoryLabel(object.category),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

function FilterGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: Array<{ value: T; label: string }>;
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <p className="eyebrow text-dim">{label}</p>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
        {options.map((option) => {
          const active = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              aria-pressed={active}
              className={cn(
                "eyebrow cursor-pointer transition-colors duration-300",
                active
                  ? "text-paper underline decoration-brass decoration-1 underline-offset-8"
                  : "text-dim hover:text-stone",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ArchiveExplorer({ objects }: ArchiveExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [era, setEra] = useState<EraFilter>("all");
  const [material, setMaterial] = useState<MaterialFilter>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return objects.filter((object) => {
      if (q && !matchesQuery(object, q)) return false;
      if (category !== "all" && object.category !== category) return false;
      if (era !== "all" && eraOf(object.yearNum) !== era) return false;
      if (material !== "all" && !object.materials.includes(material))
        return false;
      return true;
    });
  }, [objects, query, category, era, material]);

  const reset = () => {
    setQuery("");
    setCategory("all");
    setEra("all");
    setMaterial("all");
  };

  const hasFilters =
    query.trim() !== "" || category !== "all" || era !== "all" || material !== "all";

  return (
    <div className="space-y-14 md:space-y-16">
      <Reveal>
        <label htmlFor="archive-search" className="block">
          <span className="eyebrow text-brass">Search the archive</span>
          <input
            id="archive-search"
            type="search"
            autoComplete="off"
            placeholder="Name, designer, year, material…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-4 w-full border-b border-line bg-transparent pb-3 font-serif text-3xl text-paper transition-colors duration-300 placeholder:text-dim/60 focus:border-brass focus:outline-none md:text-4xl"
          />
        </label>
      </Reveal>

      <div className="space-y-8 border-t border-line pt-8 md:space-y-6">
        <FilterGroup
          label="Category"
          options={[
            { value: "all" as CategoryFilter, label: "All" },
            ...categories.map((c) => ({
              value: c.slug as CategoryFilter,
              label: c.label,
            })),
          ]}
          value={category}
          onChange={setCategory}
        />
        <FilterGroup
          label="Era"
          options={[
            { value: "all" as EraFilter, label: "All" },
            ...eras.map((e) => ({ value: e.slug as EraFilter, label: e.label })),
          ]}
          value={era}
          onChange={setEra}
        />
        <FilterGroup
          label="Material"
          options={[
            { value: "all" as MaterialFilter, label: "All" },
            ...materials.map((m) => ({ value: m, label: m })),
          ]}
          value={material}
          onChange={setMaterial}
        />
      </div>

      <p className="text-xs tracking-[0.18em] text-dim uppercase">
        {filtered.length}{" "}
        {filtered.length === 1 ? "object" : "objects"}
        {hasFilters ? " in this selection" : " in the archive"}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((object, i) => (
            <Reveal key={object.slug} className="h-full" delay={(i % 3) * 60}>
              <ObjectCard object={object} aspect="aspect-[4/5]" eager={i < 3} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="border-t border-line pt-12">
          <h2 className="font-serif text-3xl leading-tight text-paper md:text-4xl">
            Nothing in the archive matches.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
            The archive is a quiet place. Try a broader search, or clear the
            filters to wander through every object.
          </p>
          <button
            type="button"
            onClick={reset}
            className="link-underline mt-8 text-sm text-paper"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
