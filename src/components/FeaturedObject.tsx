import Link from "next/link";
import type { ObjectItem } from "@/data/objects";
import { categoryLabel } from "@/data/categories";
import ArtImage from "./ArtImage";
import Reveal from "./Reveal";

interface FeaturedObjectProps {
  object: ObjectItem;
}

const FIELDS: Array<{ label: string; value: (o: ObjectItem) => string }> = [
  { label: "Year", value: (o) => o.year },
  { label: "Designer", value: (o) => o.designer },
  { label: "Origin", value: (o) => o.origin },
  { label: "Material", value: (o) => o.material },
];

export default function FeaturedObject({ object }: FeaturedObjectProps) {
  return (
    <section className="shell grid gap-10 py-24 md:grid-cols-12 md:gap-12 md:py-32">
      <Reveal variant="clip" className="md:col-span-7">
        <Link
          href={`/archive/${object.slug}`}
          className="group block"
          aria-label={`View the ${object.name} exhibit`}
        >
          <ArtImage
            src={object.image}
            alt={`${object.name} — photographed artifact`}
            className="aspect-[4/5] w-full border border-line md:aspect-[3/4]"
            eager
          />
        </Link>
      </Reveal>

      <div className="flex flex-col justify-center md:col-span-5">
        <Reveal>
          <p className="eyebrow text-brass">
            Featured artifact · {object.number}
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.02] text-paper md:text-6xl">
            The {object.name}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
            {object.description}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="mt-10 border-t border-line">
            {FIELDS.map((field) => (
              <div
                key={field.label}
                className="grid grid-cols-[120px_1fr] gap-4 border-b border-line py-3"
              >
                <dt className="eyebrow pt-0.5 text-dim">{field.label}</dt>
                <dd className="text-sm text-paper">{field.value(object)}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[120px_1fr] gap-4 border-b border-line py-3">
              <dt className="eyebrow pt-0.5 text-dim">Collection</dt>
              <dd className="text-sm text-paper">
                {categoryLabel(object.category)}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={200}>
          <Link
            href={`/archive/${object.slug}`}
            className="link-underline mt-10 inline-flex items-center gap-2 text-sm text-stone"
          >
            View the exhibit
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
