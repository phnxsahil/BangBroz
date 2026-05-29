import { useEffect, useRef } from "react";
import { Play, MessageCircle, ArrowRight } from "lucide-react";
import { IMG, WHATSAPP } from "@/lib/images";

type Reel = { id: string; poster: string; title: string; place: string };

const reels: Reel[] = [
  { id: "r1", poster: IMG.reel1, title: "Sunrise at Khaliya", place: "Munsiyari" },
  { id: "r2", poster: IMG.reel2, title: "Above the clouds", place: "Bir Billing" },
  { id: "r3", poster: IMG.reel3, title: "Chadar groans", place: "Zanskar" },
  { id: "r4", poster: IMG.reel4, title: "Forest swallowed sound", place: "Shoja" },
  { id: "r5", poster: IMG.reel5, title: "A shepherd, a flute", place: "Chopta" },
];

export function ReelsRail() {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.transition = "opacity 800ms ease, transform 800ms cubic-bezier(0.22,1,0.36,1)";
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="reels" className="relative bg-background py-20 md:py-32 overflow-hidden border-t border-foreground/8">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div ref={headerRef} className="grid grid-cols-12 gap-6 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-7">
            <div className="label-mono mb-4 text-ember">05 — Field reels</div>
            <h2 className="font-display text-display-lg">
              Thirty seconds <span className="italic text-ember">from the road</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-10">
            <p className="text-body-lg text-foreground/70">
              Quiet clips from the last few expeditions. Swipe →
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar snap-x-mandatory">
        <div className="flex gap-4 md:gap-5 px-5 md:px-10 pb-4">
          {reels.map((r, i) => <ReelTile key={r.id} reel={r} index={i} />)}
          <EndCard />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 mt-10">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/40 pb-1 hover:text-ember hover:border-ember transition-colors"
        >
          DM us for the full reel — we send a new one every week
          <ArrowRight size={15} strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}

function ReelTile({ reel, index }: { reel: Reel; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.transition = `opacity 700ms ${index * 70}ms ease, transform 800ms ${index * 70}ms cubic-bezier(0.22,1,0.36,1)`;
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="snap-start shrink-0 w-[72vw] sm:w-[44vw] md:w-[26vw] lg:w-[20vw] aspect-[9/16] relative group cursor-pointer"
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-surface">
        <img src={reel.poster} alt={reel.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-ember group-hover:border-ember transition-all duration-400">
            <Play size={18} strokeWidth={1.8} className="text-white ml-0.5" fill="currentColor" />
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 text-white">
          <div className="font-mono uppercase text-[10px] tracking-[0.18em] text-white/80 mb-1.5">{reel.place}</div>
          <div className="font-display text-xl leading-tight">{reel.title}</div>
        </div>

        <div className="absolute top-4 left-4 font-mono uppercase text-[10px] tracking-[0.18em] text-white/80">
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
      className="snap-start shrink-0 w-[72vw] sm:w-[44vw] md:w-[26vw] lg:w-[20vw] aspect-[9/16] relative group"
    >
      <div className="h-full w-full rounded-xl border border-ember/30 bg-surface-warm flex flex-col items-center justify-center text-center p-6 transition-all duration-400 group-hover:border-ember">
        <div className="h-14 w-14 rounded-full bg-ember/10 border border-ember/30 flex items-center justify-center mb-6 group-hover:bg-ember transition-all duration-400">
          <MessageCircle size={20} strokeWidth={1.8} className="text-ember group-hover:text-white transition-colors" />
        </div>
        <div className="label-mono text-ember mb-3">Next move</div>
        <div className="font-display text-2xl leading-tight mb-4">
          DM us<br />your dates
        </div>
        <div className="label-mono flex items-center gap-2">
          WhatsApp <ArrowRight size={12} strokeWidth={2} />
        </div>
      </div>
    </a>
  );
}
