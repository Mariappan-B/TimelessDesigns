import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell grid gap-10 py-16 md:grid-cols-2 md:py-20">
        <div>
          <Link href="/" className="font-serif text-xl tracking-[0.28em] text-paper">
            TIMELESS
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone">
            Objects that never needed redesign. An open archive of functional
            permanence.
          </p>
        </div>

        <div className="flex flex-col items-start justify-end gap-3 md:items-end">
          <Link href="/archive" className="eyebrow link-underline text-stone">
            Archive
          </Link>
          <Link href="/about" className="eyebrow link-underline text-stone">
            About
          </Link>
        </div>
      </div>
      <div className="border-t border-line/70">
        <div className="shell flex flex-col gap-2 py-6 text-[0.6875rem] tracking-[0.15em] text-dim uppercase md:flex-row md:items-center md:justify-between">
          <span>© 2026 Timeless Design</span>
          <span>An open archive · Contribute on GitHub</span>
        </div>
      </div>
    </footer>
  );
}
