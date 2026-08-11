import Reveal from "./Reveal";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "right";
  className?: string;
}

export default function SectionHeading({
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col",
        align === "right" && "items-end text-right",
        className,
      )}
    >
      {index ? (
        <span className="eyebrow text-brass">{index}</span>
      ) : null}
      <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] text-paper md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-sm leading-relaxed text-stone md:text-base",
            align === "right" && "md:text-right",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
