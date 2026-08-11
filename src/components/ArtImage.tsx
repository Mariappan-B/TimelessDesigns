"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface ArtImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fit?: "contain" | "cover";
  eager?: boolean;
  fallback?: string;
}

export default function ArtImage({
  src,
  alt,
  className,
  imgClassName,
  fit = "contain",
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
          {/* eslint-disable-next-line @next/next/no-img-element -- locally stored photography rendered with object-fit; next/image is not required for these static images */}
          <img
            src={src}
            alt={alt}
            width={1200}
            height={800}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
            className={cn(
              "h-full w-full",
              fit === "contain" ? "object-contain" : "object-cover",
              imgClassName,
            )}
          />
        </span>
      )}
    </span>
  );
}
