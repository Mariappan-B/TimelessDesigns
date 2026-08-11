import type { TimelineEntry } from "@/data/objects";
import Reveal from "./Reveal";

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <ol className="relative space-y-12 border-l border-line pl-10 md:pl-14">
      {entries.map((entry, i) => (
        <li key={`${entry.year}-${i}`} className="relative">
          <Reveal delay={i * 60}>
            <span
              aria-hidden="true"
              className="absolute left-0 top-2.5 h-2 w-2 -translate-x-1/2 rounded-full bg-brass/80"
            />
            <p className="font-serif text-3xl leading-none text-paper md:text-4xl">
              {entry.year}
            </p>
            <p className="eyebrow mt-3 text-dim">{entry.title}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-stone">
              {entry.description}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
