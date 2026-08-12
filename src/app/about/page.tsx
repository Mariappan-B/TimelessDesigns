import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SurpriseButton from "@/components/SurpriseButton";

export const metadata: Metadata = {
  title: "About — Why Timeless?",
  description:
    "A short essay on functional simplicity, industrial design, longevity, and why a few objects never needed redesigning.",
};

const chapters = [
  {
    index: "01",
    title: "Design is usually measured by change.",
    body: [
      "New materials. New technology. New versions. Every season, designers are expected to make things different, to justify the difference, and to sell it. Yet scattered through the history of objects is a small set that refused the whole transaction.",
      "These objects were designed so completely, so early, that the difference between the first version and the current one is nearly invisible. Not because nothing was attempted — but because every attempt at improvement eventually returned to the original answer.",
    ],
  },
  {
    index: "02",
    title: "Functional simplicity.",
    body: [
      "A paper clip is not a clever mechanism. It is the absence of mechanism. A safety pin is one wire doing four jobs. A spoon is a curve and a stick. These objects solved their problems at the level of geometry and material, not at the level of engineering complexity.",
      "Simplicity here is not a style. It is the result of a problem being fully understood. When a design reduces to almost nothing, there is almost nothing left to redesign.",
    ],
  },
  {
    index: "03",
    title: "The discipline of industrial design.",
    body: [
      "Industrial design is the craft of making the useful legible: a tool should explain itself by its shape. The ballpoint pen's barrel says hold me; the bicycle bell's dome says press me; the ruler's edge says follow me.",
      "The objects in this archive all crossed the threshold where form became an argument for itself. They are not decorated with meaning; they are meaning, made physical. That is why a museum catalog can describe them in a few lines and yet never exhaust them.",
    ],
  },
  {
    index: "04",
    title: "Longevity is a feature, not a failure.",
    body: [
      "In an economy that profits from obsolescence, a design that lasts reads as a market failure. But from the user's point of view, longevity is the whole point. A hammer from 1940 still drives a nail; a toothbrush from 1960 still cleans teeth.",
      "Timeless objects do not wear out gracefully so you can replace them. They wear out slowly so you can keep them. Repair, not replacement, is their natural lifecycle — which is why so many of them are simple enough to fix.",
    ],
  },
  {
    index: "05",
    title: "Designed around human behavior.",
    body: [
      "The door handle survived because every hand already knows how to use it. The notebook survived because it organized the way memory actually works. These designs were not imposed on people; they were discovered in the way people already behave.",
      "That is the deepest kind of usability: not an interface you learn, but an object that fits an instinct. When a design matches human behavior closely enough, retraining becomes impossible — and so does redesign.",
    ],
  },
  {
    index: "06",
    title: "Manufacturing as a constraint that helps.",
    body: [
      "Many of these objects were born when materials were scarce and machines were crude. The safety pin is a single wire because a single wire was all the factory could cheaply bend. The paper clip is two loops because two loops are what one length of wire can do.",
      "Constraints forced designers to subtract. What remained after the subtraction was often more durable than what a later, richer era could imagine. Abundance, it turns out, is not always a friend to good design.",
    ],
  },
  {
    index: "07",
    title: "Cultural familiarity.",
    body: [
      "Some designs are timeless because they were never just products; they became shared knowledge. Every culture recognizes a ladder, a comb, a pencil. The object is a kind of language, and everyone speaks it.",
      "Once an object is embedded in a culture's habits, its form carries a weight that no competing form can match. Redesigning it would mean redesigning the culture itself — which is why it never happens.",
    ],
  },
  {
    index: "08",
    title: "Why some designs survive.",
    body: [
      "The pattern across all one hundred and five objects is the same. The problem was completely understood. The answer was reduced to its minimum. The form explained itself. The object worked without instructions, failed without drama, and was repaired without specialists.",
      "We call these designs timeless not because time stood still, but because time passed and found nothing worth changing.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Why Timeless?"
        lede="An essay on functional simplicity, industrial design, longevity, and the objects that never needed to change."
      />

      <div className="shell space-y-20 pb-28 md:space-y-28 md:pb-40">
        <section className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Reveal>
              <p className="eyebrow text-brass">A note from the archive</p>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <p className="max-w-3xl font-serif text-3xl leading-snug text-paper md:text-5xl md:leading-[1.15]">
                Timeless is an archive of ordinary objects that achieved an
                extraordinary thing: a design so balanced between function,
                form, and habit that it outlived every attempt to replace it.
              </p>
            </Reveal>
          </div>
        </section>

        {chapters.map((chapter) => (
          <section
            key={chapter.index}
            className="grid gap-8 md:grid-cols-12 md:gap-12"
          >
            <div className="md:col-span-3 md:col-start-2">
              <Reveal>
                <p className="font-serif text-5xl leading-none text-dim">
                  {chapter.index}
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <Reveal>
                <h2 className="max-w-2xl font-serif text-3xl leading-tight text-paper md:text-4xl">
                  {chapter.title}
                </h2>
              </Reveal>
              <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed text-stone">
                {chapter.body.map((paragraph, i) => (
                  <Reveal key={i} delay={80}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="border-t border-line pt-16 md:pt-24">
          <SectionHeading
            index="∞"
            title="Every archive begins with one object."
            description="This one is open. The archive grows by contribution — objects, research, corrections, photographs, and writing."
          />
          <div className="mt-12 flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-14">
            <Reveal>
              <Link href="/archive" className="link-underline text-base text-paper">
                Enter the archive <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <SurpriseButton />
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
