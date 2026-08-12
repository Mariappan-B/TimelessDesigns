import Link from "next/link";
import { objects, featuredObject } from "@/data/objects";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FeaturedObject from "@/components/FeaturedObject";
import ObjectGrid from "@/components/ObjectGrid";
import SurpriseButton from "@/components/SurpriseButton";
import ArtImage from "@/components/ArtImage";

const PRINCIPLES = [
  {
    index: "01",
    title: "Fully understood",
    description:
      "The problem was solved at the level of geometry and material, before any complexity could accumulate.",
  },
  {
    index: "02",
    title: "Reduced to minimum",
    description:
      "Every removable part was removed. What is left does not merely work — it is the shape of working.",
  },
  {
    index: "03",
    title: "Self-explaining",
    description:
      "The object teaches its own use by its form. No manual, no interface, no instructions.",
  },
  {
    index: "04",
    title: "Forgiving to fail",
    description:
      "It fails without drama, and the failure is visible, cheap, and repairable by anyone.",
  },
  {
    index: "05",
    title: "Culturally legible",
    description:
      "The form became shared knowledge. Redesigning it would mean redesigning the culture that uses it.",
  },
  {
    index: "06",
    title: "Difficult to improve",
    description:
      "Every redesign attempt ends where the original already was — the strongest evidence that it is finished.",
  },
];

export default function HomePage() {
  const archivePreview = objects.slice(0, 7);
  const moreObjects = objects.slice(7, 10);

  return (
    <>
      {/* 01 — Opening statement */}
      <section className="shell flex min-h-[92svh] flex-col justify-end pb-16 pt-32 md:pb-20">
        <Reveal>
          <p className="eyebrow text-brass">
            Timeless · An archive of objects
          </p>
          <h1 className="mt-8 max-w-5xl font-serif text-6xl leading-[0.98] text-paper sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Objects that never needed redesign.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-stone">
            Some things became so right that time had very little to improve.
            Over one hundred of them, collected here as design artifacts.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <Link
            href="/archive"
            className="link-underline mt-12 inline-flex items-center gap-3 text-base text-paper"
          >
            Enter the archive <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>

      {/* Featured preview under the hero */}
      <section className="shell pb-24 md:pb-32">
        <Reveal delay={120}>
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
            <Link
              href={`/archive/${featuredObject.slug}`}
              className="group block md:col-span-5"
              aria-label={`Featured object — the ${featuredObject.name}`}
            >
              <ArtImage
                src={featuredObject.image}
                alt={`The ${featuredObject.name} — photographed artifact`}
                className="aspect-[4/5] border border-line md:aspect-square"
              />
            </Link>
            <div className="md:col-span-5 md:col-start-7">
              <p className="eyebrow text-dim">
                Featured artifact · {featuredObject.number}
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-paper md:text-5xl">
                The {featuredObject.name}
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-stone">
                {featuredObject.description}
              </p>
              <p className="mt-6 text-sm text-dim">
                {featuredObject.year} · {featuredObject.designer} ·{" "}
                {featuredObject.origin}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 02 — The philosophy */}
      <section className="border-t border-line">
        <div className="shell py-24 md:py-36">
          <SectionHeading
            index="01"
            title="The philosophy"
          />
          <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7 md:col-start-2">
              <Reveal>
                <p className="font-serif text-4xl leading-[1.15] text-paper md:text-6xl">
                  Design is usually measured by change.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-6 md:col-start-5">
              <Reveal delay={120}>
                <p className="mt-10 text-lg leading-relaxed text-stone md:mt-6">
                  New materials. New technology. New versions. But some objects
                  resisted all of it. They simply worked — and a century of
                  redesign never found a reason to touch them.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Featured artifact */}
      <div className="border-t border-line">
        <FeaturedObject object={featuredObject} />
      </div>

      {/* 04 — The archive */}
      <section className="border-t border-line">
        <div className="shell py-24 md:py-32">
          <SectionHeading
            index="03"
            title="The Archive"
            description="A first look at the collection. Objects numbered, dated, and hung on the wall like plates in a catalog."
          />
          <div className="mt-16">
            <ObjectGrid objects={archivePreview} layout="editorial" />
          </div>
          <Reveal className="mt-16">
            <Link
              href="/archive"
              className="link-underline text-sm text-stone"
            >
              View the full archive <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 05 — Editorial thought */}
      <section className="bg-night">
        <div className="shell py-24 md:py-36">
          <Reveal>
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-3xl leading-snug text-cream md:text-5xl md:leading-[1.2]">
                “Timelessness is not the absence of change.
                <br className="hidden md:block" />
                It is the end of the need for it.”
              </p>
              <footer className="eyebrow mt-10 text-sand">
                Archive note — On permanence
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 06 — More artifacts */}
      <section className="border-t border-line">
        <div className="shell py-24 md:py-32">
          <SectionHeading
            index="04"
            title="More artifacts"
            description="The collection continues — instruments, household objects, and small machines."
          />
          <div className="mt-16">
            <ObjectGrid objects={moreObjects} layout="index" />
          </div>
        </div>
      </section>

      {/* 07 — Why some designs survive */}
      <section className="border-t border-line">
        <div className="shell py-24 md:py-32">
          <SectionHeading
            index="05"
            title="Why some designs survive"
            description="Six properties shared by every object in the archive."
          />
          <ol className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((principle, i) => (
              <li key={principle.index} className="border-t border-line pt-6">
                <Reveal delay={(i % 3) * 80}>
                  <p className="font-serif text-4xl leading-none text-dim">
                    {principle.index}
                  </p>
                  <h3 className="eyebrow mt-5 text-brass">{principle.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone">
                    {principle.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 08 — Enter the archive */}
      <section className="border-t border-line bg-coal/40">
        <div className="shell flex flex-col items-start gap-10 py-24 md:flex-row md:items-center md:justify-between md:py-36">
          <Reveal>
            <h2 className="max-w-xl font-serif text-4xl leading-tight text-paper md:text-6xl">
              One hundred and five objects.
              <br />
              None of them changed.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col items-start gap-8">
              <Link href="/archive" className="link-underline text-base text-paper">
                Enter the archive <span aria-hidden="true">→</span>
              </Link>
              <SurpriseButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 — Footer rendered in the root layout */}
    </>
  );
}
