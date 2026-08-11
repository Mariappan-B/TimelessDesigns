"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface ArtImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  crop?: "none" | "detail";
  eager?: boolean;
  fallback?: string;
}

export default function ArtImage({
  src,
  alt,
  className,
  imgClassName,
  crop = "none",
  eager = false,
  fallback = "Fig.",
}: ArtImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={cn(
        "relative block overflow-hidden bg-panel",
        className,
      )}
    >
      {failed ? (
        <span className="flex h-full w-full items-center justify-center border border-line">
          <span className="eyebrow px-4 text-center text-dim">{fallback}</span>
        </span>
      ) : (
        <span className="block h-full w-full transition-transform duration-700 ease-out motion-reduce:transition-none motion-reduce:group-hover:scale-100 group-hover:scale-[1.04]">
          {/* eslint-disable-next-line @next/next/no-img-element -- vector line-art, not raster; next/image would not optimize it */}
          <img
            src={src}
            alt={alt}
            width={1200}
            height={800}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
            className={cn(
              "h-full w-full object-cover",
              crop === "detail" && "scale-[1.7]",
              imgClassName,
            )}
          />
        </span>
      )}
    </span>
  );
}
