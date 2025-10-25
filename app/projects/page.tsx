import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Recent Work (Photo Gallery)",
  description:
    "Cal Pride Plumbing projects around Lake Forest & Orange County: rough-ins, gas, drains, hose bibs, and finished fixtures.",
};

type Photo = {
  src: string;
  alt: string;
  caption: string;
  ratio?: string; // CSS aspect ratio override for portrait shots
};

const photos: Photo[] = [
  // --- existing set ---
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
    ratio: "aspect-[3/4]",
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
    ratio: "aspect-[3/4]",
  },
  {
    src: "/gallery/sink3.jpg",
    alt: "Breakroom sink with filtration/soap dispenser and tiled backsplash.",
    caption: "Breakroom sink install",
  },

  // --- new photos ---
  {
    src: "/gallery/spicket1.jpg",
    alt: "Exterior main water line with pressure regulator (PRV) and hose bib on copper riser.",
    caption: "Main line PRV + hose bib",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/gallery/spicket2.jpg",
    alt: "New main water manifold with copper branches and isolation valves at the exterior wall.",
    caption: "Main water manifold with isolation valves",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/gallery/toliet1.jpg",
    alt: "Toilet tank with new fill valve and flapper assembly installed.",
    caption: "Toilet fill valve & flapper replacement",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/gallery/under_sink1.jpg",
    alt: "Under-sink install with Eemax tankless heater, disposal, filtration, and leak sensor.",
    caption: "Under-sink: instant hot + disposal + filtration",
  },
  {
    src: "/gallery/under_sink2.jpg",
    alt: "Under-sink disposal, trap, shutoffs, and water filtration canister in a commercial breakroom.",
    caption: "Under-sink: disposal + RO/filtration",
  },
  {
    src: "/gallery/under_sink3.jpg",
    alt: "InSinkErator Badger disposal with instant hot water tank and clean shutoff layout.",
    caption: "Under-sink: Badger disposal + instant hot",
  },
  {
    src: "/gallery/1000000909.jpg",
    alt: "Whole-home water filtration system with sediment prefilter and twin media tanks, copper bypass manifold, and strapped supports on a CMU wall.",
    caption: "Whole-home filtration/conditioning with copper bypass and prefilter",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/gallery/1000000911.jpg",
    alt: "Wall-hung toilet carrier rough-in: 4-inch waste line with test plug, copper supply stub-out, and Unistrut bracing behind tile.",
    caption: "Wall-hung toilet carrier rough-in with supply and 4″ waste",
    ratio: "aspect-[3/4]",
  },
];

export default function ProjectsPage() {
  return (
    <main className="section py-10">
      <h1 className="text-3xl font-extrabold text-brand-700">Recent Work</h1>
      <p className="mt-1 text-slate-700">
        In-progress and finished jobs around Lake Forest & Orange County. Licensed · Bonded · Insured.
      </p>

      <Gallery photos={photos} />

      <section className="mt-10 text-center">
        <a className="btn-primary" href="/contact">
          Request Service
        </a>
      </section>
    </main>
  );
}
