"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export type Photo = { src: string; alt: string; caption: string; ratio?: string };

export default function Gallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i: number) => { setIdx(i); setOpen(true); };
  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIdx(i => (i - 1 + photos.length) % photos.length),
    [photos.length]
  );
  const next = useCallback(
    () => setIdx(i => (i + 1) % photos.length),
    [photos.length]
  );

  // Keyboard + scroll lock while lightbox is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = orig; };
  }, [open, close, prev, next]);

  return (
    <>
      {/* Grid */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <figure
            key={p.src}
            className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-soft"
          >
            <button
              onClick={() => openAt(i)}
              className="relative block w-full text-left focus:outline-none"
              aria-label={`Open image: ${p.caption}`}
            >
              <div className={`relative ${p.ratio ?? "aspect-[4/3]"}`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </button>
            <figcaption className="p-4 text-sm text-slate-700">{p.caption}</figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={close}
        >
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={close}
              aria-label="Close"
              className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow"
            >
              Close
            </button>
          </div>

          <button
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 font-bold shadow"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 font-bold shadow"
          >
            ›
          </button>

          <div
            className="relative w-[min(1200px,90vw)] h-[min(85vh,75vw)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[idx].src}
              alt={photos[idx].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white/90 text-sm px-6">
            {photos[idx].caption}
          </div>
        </div>
      )}
    </>
  );
}
