import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { objects, objectBySlug, type ObjectItem } from "@/data/objects";
import { categoryLabel } from "@/data/categories";
import ArtImage from "@/components/ArtImage";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import ObjectAnatomy from "@/components/ObjectAnatomy";
import ObjectGrid from "@/components/ObjectGrid";
import SectionHeading from "@/components/SectionHeading";

interface ObjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return objects.map((object) => ({ slug: object.slug }));
}

export async function generateMetadata({
  params,
}: ObjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const object = objectBySlug.get(slug);
  if (!object) {
    return { title: "Object not found" };
  }
  return {
    title: `The ${object.name}`,
    description: object.description,
  };
}

function relatedObjects(object: ObjectItem, count = 3): ObjectItem[] {
  const sameCategory = objects.filter(
    (o) => o.slug !== object.slug && o.category === object.category,
  );
  const others = objects.filter(
    (o) => o.slug !== object.slug && o.category !== object.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

function Spec({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-r border-b border-line p-6 md:p-8">
      <dt className="eyebrow text-dim">{label}</dt>
      <dd className="mt-3 text-sm leading-relaxed text-paper md:text-base">
        {value}
      </dd>
    </div>
  );
}

export default async function ObjectPage({ params }: ObjectPageProps) {
  const { slug } = await params;
  const object = objectBySlug.get(slug);

  if (!object) {
    notFound();
  }

  const related = relatedObjects(object);
  const paragraphs = object.longDescription.split("\n").filter(Boolean);

  return (
    <>
      <div className="shell pt-32 pb-10 md:pt-44 md:pb-14">
        <Reveal>
          <Link
            href="/archive"
            className="eyebrow link-underline text-dim"
          >
            ← Back to the archive
          </Link>
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow mt-12 text-brass">
            Object {object.number} · {categoryLabel(object.category)}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.98] text-paper md:text-8xl">
            The {object.name}
          </h1>
          <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm text-stone md:text-base">
            <span>{object.year}</span>
            <span aria-hidden="true" className="text-dim">·</span>
            <span>{object.designer}</span>
            <span aria-hidden="true" className="text-dim">·</span>
            <span>{object.origin}</span>
          </div>
        </Reveal>
      </div>

      <div className="w-full">
        <Reveal variant="clip">
          <ArtImage
            src={object.image}
            alt={`The ${object.name} — photographed artifact, full view`}
            className="aspect-[16/10] w-full md:aspect-[21/9]"
            imgClassName="p-4 sm:p-8 md:p-14"
            eager
          />
        </Reveal>
      </div>

      <div className="shell">
        <p className="py-3 text-right text-xs tracking-wide text-dim">
          <a
            href={object.imageCredit.sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline"
          >
            {object.imageCredit.creator}
          </a>
          {" · "}
          {object.imageCredit.source} · {object.imageCredit.license} ↗
        </p>
      </div>

      <section className="shell py-20 md:py-28">
        <dl className="grid grid-cols-1 gap-px border-t border-l border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          <Spec label="Material" value={object.material} />
          <Spec label="Year" value={object.year} />
          <Spec label="Designer" value={object.designer} />
          <Spec label="Origin" value={object.origin} />
          <Spec label="Collection" value={categoryLabel(object.category)} />
          <Spec label="Dimensions" value={object.dimensions} />
        </dl>
      </section>

      <section className="shell py-10 md:py-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <SectionHeading index="01" title="Why it lasted" />
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <div className="space-y-6 text-base leading-relaxed text-stone md:text-lg">
                {paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-12 space-y-6 border-l border-line pl-8">
                {object.whyTimeless.map((point) => (
                  <li key={point}>
                    <p className="text-base leading-relaxed text-paper">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <SectionHeading
          index="02"
          title="Why it works"
          description="An anatomy of the object — the structural reasons it has resisted improvement."
        />
        <div className="mt-14">
          <ObjectAnatomy entries={object.anatomy} />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <SectionHeading
              index="03"
              title="A short history"
              description="The moments that made the object what it is today."
            />
          </div>
          <div className="md:col-span-7">
            <Timeline entries={object.timeline} />
          </div>
        </div>
      </section>

      <section className="bg-night">
        <div className="shell py-24 md:py-36">
          <Reveal>
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-3xl leading-snug text-cream md:text-4xl">
                “{object.quote}”
              </p>
              <footer className="eyebrow mt-8 text-sand">
                {object.quoteAuthor}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell grid gap-12 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <SectionHeading index="04" title="Sources" />
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <ul className="space-y-4">
                {object.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline text-sm text-stone"
                    >
                      {source.title} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-10 border-t border-line pt-6 text-xs leading-relaxed text-dim">
                Image — {object.imageCredit.creator} · {object.imageCredit.source}
                {" · "}
                <a
                  href={object.imageCredit.sourceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline text-dim"
                >
                  {object.imageCredit.license} ↗
                </a>
                {object.imageCredit.changes ? ` · ${object.imageCredit.changes}` : ""}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell py-20 md:py-28">
          <SectionHeading
            index="05"
            title="You may also like"
          />
          <div className="mt-14">
            <ObjectGrid objects={related} showMeta />
          </div>
        </div>
      </section>
    </>
  );
}
