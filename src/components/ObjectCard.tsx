import Link from "next/link";
import type { ObjectItem } from "@/data/objects";
import { categoryLabel } from "@/data/categories";
import ArtImage from "./ArtImage";
import { cn } from "@/lib/cn";

interface ObjectCardProps {
  object: ObjectItem;
  aspect?: string;
  eager?: boolean;
  showMeta?: boolean;
}

export default function ObjectCard({
  object,
  aspect = "aspect-[4/5]",
  eager = false,
  showMeta = true,
}: ObjectCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/archive/${object.slug}`}
        className="group flex h-full flex-col"
        aria-label={`${object.name} — view the exhibit`}
      >
        <ArtImage
          src={object.image}
          alt={`${object.name} — line study of the object`}
          className={cn("w-full border border-line", aspect)}
          eager={eager}
        />
        <div className="mt-5 flex flex-1 flex-col">
          <span className="eyebrow text-dim">{object.number}</span>
          <h3 className="mt-2 font-serif text-2xl leading-tight text-paper transition-transform duration-300 ease-out group-hover:translate-x-[2px]">
            {object.name}
          </h3>
          {showMeta ? (
            <p className="mt-2 text-sm text-dim">
              {object.year} · {categoryLabel(object.category)}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
