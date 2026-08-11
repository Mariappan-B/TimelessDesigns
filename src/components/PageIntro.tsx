import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}

export default function PageIntro({
  eyebrow,
  title,
  lede,
  children,
}: PageIntroProps) {
  return (
    <section className="shell pt-32 pb-16 md:pt-44 md:pb-24">
      <Reveal>
        <p className="eyebrow text-brass">{eyebrow}</p>
        <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.05] text-paper md:text-7xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-8 max-w-xl text-base leading-relaxed text-stone md:text-lg">
            {lede}
          </p>
        ) : null}
      </Reveal>
      {children ? <div className="mt-12">{children}</div> : null}
    </section>
  );
}
