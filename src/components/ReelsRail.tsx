import { useEffect, useRef } from "react";
import { Play, MessageCircle, ArrowRight } from "lucide-react";
import hiddenBir from "@/assets/hidden-bir.jpg";
import hiddenShoja from "@/assets/hidden-shoja.jpg";
import hiddenMunsiyari from "@/assets/hidden-munsiyari.jpg";
import hiddenChopta from "@/assets/hidden-chopta.jpg";
import storyTrekker from "@/assets/story-trekker.jpg";

const WHATSAPP =
  "https://wa.me/918865848737?text=Hi%20Bag%20N%20Bros%2C%20I%20saw%20your%20reels.";

type Reel = {
  id: string;
  poster: string;
  title: string;
  place: string;
};

const reels: Reel[] = [
  { id: "r1", poster: hiddenMunsiyari, title: "Sunrise at Khaliya", place: "Munsiyari" },
  { id: "r2", poster: hiddenBir, title: "Above the clouds", place: "Bir Billing" },
  { id: "r3", poster: storyTrekker, title: "Chadar groans", place: "Zanskar" },
  { id: "r4", poster: hiddenShoja, title: "The forest swallowed sound", place: "Shoja" },
  { id: "r5", poster: hiddenChopta, title: "A shepherd, a flute", place: "Chopta" },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.transition = "opacity 1200ms ease, transform 1200ms cubic-bezier(0.16,1,0.3,1)";
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function ReelsRail() {
  const headerRef = useReveal<HTMLDivElement>();
  return (
    <section id="reels" className="relative bg-background py-20 md:py-32 overflow-hidden border-t border-foreground/5">
      <div className="absolute top-0 inset-x-0 h-32 seam-top pointer-events-none" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div ref={headerRef} className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="label-mono mb-5 text-ember">03 / Field Reels</div>
            <h2 className="font-display text-display-lg leading-[0.96]">
              Thirty seconds<br />
              from <em className="italic text-ember">the road</em>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex md:items-end">
            <p className="text-body-lg text-foreground/70 max-w-md">
              Quiet clips from the last few expeditions. Swipe.
            </p>
          </div>
        </div>
      </div>

      {/* Rail */}
      <div className="overflow-x-auto no-scrollbar snap-x-mandatory">
        <div className="flex gap-4 md:gap-6 px-5 md:px-10 pb-4">
          {reels.map((r, i) => (
            <ReelTile key={r.id} reel={r} index={i} />
          ))}
          <EndCard />
        </div>
      </div>
    </section>
  );
}

function ReelTile({ reel, index }: { reel: Reel; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px) scale(0.94)";
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.transition = `opacity 1100ms ${index * 90}ms ease, transform 1200ms ${index * 90}ms cubic-bezier(0.16,1,0.3,1)`;
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0) scale(1)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  // Scroll-driven parallax inside each tile
  useEffect(() => {
    const tile = ref.current;
    const img = imgRef.current;
    if (!tile || !img) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const rect = tile.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = (center - window.innerHeight / 2) / window.innerHeight;
        const shift = Math.max(-30, Math.min(30, dist * -40));
        img.style.transform = `translate3d(0, ${shift}px, 0) scale(1.15)`;
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);


  return (
    <div
      ref={ref}
      className="snap-start shrink-0 w-[72vw] sm:w-[48vw] md:w-[28vw] lg:w-[22vw] aspect-[9/16] relative group cursor-pointer"
    >
      <div className="relative h-full w-full overflow-hidden rounded-sm grain bg-surface">
        <img
          ref={imgRef}
          src={reel.poster}
          alt={reel.title}
          loading="lazy"
          style={{ transform: "scale(1.15)" }}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/40" />
        <div className="absolute inset-0 vignette" />

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-background/40 backdrop-blur-md border border-foreground/20 flex items-center justify-center group-hover:bg-ember group-hover:border-ember transition-all duration-500">
            <Play size={18} strokeWidth={1.8} className="text-foreground group-hover:text-background ml-0.5" fill="currentColor" />
          </div>
        </div>

        {/* Bottom meta */}
        <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="label-mono text-ember mb-1.5">{reel.place}</div>
          <div className="font-display text-xl leading-tight">{reel.title}</div>
        </div>

        {/* Top index */}
        <div className="absolute top-4 left-4 label-mono text-foreground/60">
          {String(index + 1).padStart(2, "0")} / {String(reels.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

function EndCard() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="snap-start shrink-0 w-[72vw] sm:w-[48vw] md:w-[28vw] lg:w-[22vw] aspect-[9/16] relative group"
    >
      <div className="h-full w-full rounded-sm border border-dashed border-ember/30 bg-surface-warm paper-grain flex flex-col items-center justify-center text-center p-6 transition-all duration-500 group-hover:border-ember group-hover:bg-surface-warm/80">
        <div className="h-14 w-14 rounded-full bg-ember/10 border border-ember/30 flex items-center justify-center mb-6 group-hover:bg-ember transition-all duration-500">
          <MessageCircle size={20} strokeWidth={1.8} className="text-ember group-hover:text-background transition-colors" />
        </div>
        <div className="label-mono text-ember mb-3">Next move</div>
        <div className="font-display text-2xl leading-tight mb-4">
          DM us<br />your dates
        </div>
        <div className="label-mono text-foreground/60 flex items-center gap-2">
          WhatsApp <ArrowRight size={11} strokeWidth={1.8} />
        </div>
      </div>
    </a>
  );
}
