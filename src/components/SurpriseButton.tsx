"use client";

import { useRouter } from "next/navigation";
import { objects } from "@/data/objects";

interface SurpriseButtonProps {
  label?: string;
}

export default function SurpriseButton({
  label = "Discover an object",
}: SurpriseButtonProps) {
  const router = useRouter();

  const discover = () => {
    const pick = objects[Math.floor(Math.random() * objects.length)];
    router.push(`/archive/${pick.slug}`);
  };

  return (
    <button
      type="button"
      onClick={discover}
      className="link-underline inline-flex items-center gap-3 text-base text-paper"
    >
      <span aria-hidden="true" className="text-brass">
        ✦
      </span>
      {label}
      <span aria-hidden="true">→</span>
    </button>
  );
}
