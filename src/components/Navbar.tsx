"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";

const links = [
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/archive"
      ? pathname.startsWith("/archive")
      : pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur-sm">
      <div className="shell flex h-16 items-center justify-between">
        <Link
          href="/"
          onClick={close}
          className="font-serif text-lg tracking-[0.28em] text-paper transition-colors duration-300 hover:text-brass"
        >
          TIMELESS
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={cn(
                "eyebrow transition-colors duration-300 hover:text-paper",
                isActive(link.href) ? "text-paper" : "text-dim",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-paper md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col items-end gap-[5px]">
            <span
              className={cn(
                "h-px bg-current transition-transform duration-300",
                open ? "w-5 translate-y-[3px] rotate-45" : "w-5",
              )}
            />
            <span
              className={cn(
                "h-px bg-current transition-transform duration-300",
                open ? "w-5 -translate-y-[3px] -rotate-45" : "w-4",
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-ink px-5 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className={cn(
                    "font-serif text-2xl text-paper",
                    isActive(link.href) && "text-brass",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
