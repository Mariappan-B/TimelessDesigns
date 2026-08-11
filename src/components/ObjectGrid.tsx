import type { ObjectItem } from "@/data/objects";
import ObjectCard from "./ObjectCard";
import Reveal from "./Reveal";

interface ObjectGridProps {
  objects: ObjectItem[];
  layout?: "index" | "editorial";
  showMeta?: boolean;
}

const EDITORIAL_SPANS = [
  "col-span-12 md:col-span-7",
  "col-span-12 md:col-span-5",
  "col-span-12 sm:col-span-6 lg:col-span-4",
  "col-span-12 sm:col-span-6 lg:col-span-4",
  "col-span-12 sm:col-span-6 lg:col-span-4",
  "col-span-12 md:col-span-5",
  "col-span-12 md:col-span-7",
];

const EDITORIAL_ASPECTS = [
  "aspect-[4/5]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[16/10]",
];

export default function ObjectGrid({
  objects,
  layout = "index",
  showMeta = true,
}: ObjectGridProps) {
  if (layout === "editorial") {
    return (
      <div className="grid grid-cols-12 gap-x-6 gap-y-14 md:gap-y-20">
        {objects.map((object, i) => {
          const span =
            EDITORIAL_SPANS[i % EDITORIAL_SPANS.length] ??
            "col-span-12 sm:col-span-6 lg:col-span-4";
          const aspect =
            EDITORIAL_ASPECTS[i % EDITORIAL_ASPECTS.length] ??
            "aspect-[4/5]";
          return (
            <div key={object.slug} className={span}>
              <Reveal className="h-full">
                <ObjectCard object={object} aspect={aspect} showMeta={showMeta} />
              </Reveal>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {objects.map((object, i) => (
        <Reveal key={object.slug} className="h-full" delay={(i % 3) * 80}>
          <ObjectCard
            object={object}
            aspect="aspect-[4/5]"
            eager={i < 3}
            showMeta={showMeta}
          />
        </Reveal>
      ))}
    </div>
  );
}
