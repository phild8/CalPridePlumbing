import Image from "next/image";

export const metadata = {
  title: "Recent Work (Photo Gallery)",
  description:
    "A look at Cal Pride Plumbing projects around Lake Forest & Orange County: rough-ins, gas, drains, and finished fixtures.",
};

type Photo = {
  src: string;
  alt: string;
  caption: string;
  ratio?: string; // CSS aspect ratio (optional override)
};

const photos: Photo[] = [
  {
    src: "/gallery/bath_tub_pipe.jpg",
    alt: "Shower and tub rough-in with copper lines and pressure-balanced valve, strapped and braced.",
    caption: "Shower/tub rough-in · copper repipe · Lake Forest",
  },
  {
    src: "/gallery/copper_pipes1.jpg",
    alt: "Commercial rough plumbing with multiple copper supply branches and supports.",
    caption: "Commercial rough-in · copper supply branches",
  },
  {
    src: "/gallery/copper_pipes2.jpg",
    alt: "Multi-station rough-in with cleanouts and copper branch lines on steel studs.",
    caption: "Multi-station rough-in · cleanouts · steel studs",
  },
  {
    src: "/gallery/gas_meter1.jpg",
    alt: "Exterior gas line with seismic shutoff valve and rigid support.",
    caption: "Gas line with seismic shutoff",
  },
  {
    src: "/gallery/new_construction_3.jpg",
    alt: "New construction gas stub-outs set in CMU wall with bracing.",
    caption: "New construction · gas stub-outs in CMU",
  },
  {
    src: "/gallery/new_construction1.jpg",
    alt: "Underslab drains and vents rough-in before the slab pour.",
    caption: "Under-slab drains & vents · pre-pour",
  },
  {
    src: "/gallery/new_construction2.jpg",
    alt: "Remodel underslab drains and vents with proper slope and cleanouts.",
    caption: "Remodel rough-in · underslab drains",
  },
  {
    src: "/gallery/sink1.jpg",
    alt: "Modern kitchen sink and pull-down faucet with clean backsplash finish.",
    caption: "Kitchen faucet & sink install",
  },
  {
    src: "/gallery/sink2.jpg",
    alt: "Wall-mounted mop sink with trap and backflow protection.",
    caption: "Mop sink install",
  },
  {
    src: "/gallery/sink3.jpg",
    alt: "Breakroom sink with filtration/soap dispenser and tiled backsplash.",
    caption: "Breakroom sink install",
  },
];

export default function ProjectsPage() {
  return (
    <main className="section py-10">
      <h1 className="text-3xl font-extrabold text-brand-700">Recent Work</h1>
      <p className="mt-1 text-slate-700">
        A few in-progress and finished jobs around Lake Forest & Orange County.
        We’re licensed, bonded, and insured—done right the first time.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <figure
            key={p.src}
            className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-soft"
          >
            <div className={`relative ${p.ratio ?? "aspect-[4/3]"}`}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
                priority={p.src.includes("bath_tub_pipe")} // first image preloads
              />
            </div>
            <figcaption className="p-4 text-sm text-slate-700">{p.caption}</figcaption>
          </figure>
        ))}
      </div>

      <section className="mt-10 text-center">
        <a className="btn-primary" href="/contact">Request Service</a>
      </section>
    </main>
  );
}
