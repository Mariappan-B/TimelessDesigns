import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[85svh] flex-col justify-center pb-24 pt-32">
      <Reveal>
        <p className="eyebrow text-brass">Error 404</p>
        <h1 className="mt-8 max-w-3xl font-serif text-5xl leading-[1.02] text-paper md:text-7xl">
          This object is not in the archive.
        </h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-stone">
          Either it was never collected, or it has not yet been catalogued.
          The permanent collection is a short walk away.
        </p>
        <div className="mt-12 flex flex-col items-start gap-6">
          <Link href="/" className="link-underline text-base text-paper">
            Return to the collection <span aria-hidden="true">→</span>
          </Link>
          <Link href="/archive" className="link-underline text-sm text-stone">
            Browse the archive
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
