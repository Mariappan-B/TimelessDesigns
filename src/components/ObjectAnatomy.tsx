import type { AnatomyEntry } from "@/data/objects";
import Reveal from "./Reveal";

interface ObjectAnatomyProps {
  entries: AnatomyEntry[];
}

export default function ObjectAnatomy({ entries }: ObjectAnatomyProps) {
  return (
    <ol className="grid gap-x-12 gap-y-12 md:grid-cols-2">
      {entries.map((entry, i) => (
        <li
          key={entry.title}
          className="border-t border-line pt-6"
        >
          <Reveal delay={(i % 2) * 80}>
            <p className="font-serif text-4xl leading-none text-dim">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="eyebrow mt-5 text-brass">{entry.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-stone">
              {entry.description}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
