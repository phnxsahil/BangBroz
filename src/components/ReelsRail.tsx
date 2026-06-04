import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, ArrowRight, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { IMG, WHATSAPP, INSTAGRAM, INSTAGRAM_HANDLE } from "@/lib/images";

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
  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section
      id="reels"
      className="reels-section relative bg-[#1A1410] text-[#F4ECE0] overflow-hidden"
      style={{ paddingBottom: 48 }}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-6"
          style={{ marginBottom: 32 }}
        >
          <div className="col-span-12 md:col-span-8">
            <div className="label-mono mb-3" style={{ color: "rgba(244,236,224,0.55)" }}>
              05 — Captured in motion
            </div>
            <h2 className="font-display text-display-lg">
              Thirty seconds <span className="italic font-normal text-ember">from the road.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-8">
            <p className="text-body text-[#F4ECE0]/70 leading-relaxed">
              Quiet clips from the last few expeditions. Follow along on Instagram.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative group/scroll">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-opacity cursor-pointer"
          >
            <ChevronLeft size={18} strokeWidth={1.8} className="text-white" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-opacity cursor-pointer"
          >
            <ChevronRight size={18} strokeWidth={1.8} className="text-white" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="overflow-x-auto no-scrollbar snap-x-mandatory"
        >
          <div className="reels-rail flex gap-4 pb-3">
            {reels.map((r, i) => (
              <ReelTile key={r.id} reel={r} index={i} />
            ))}
            <EndCard />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          className="btn-ember text-sm py-2.5 px-5 min-h-0"
        >
          <Instagram size={15} strokeWidth={1.8} />
          Follow {INSTAGRAM_HANDLE}
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium border-b border-[#F4ECE0]/40 pb-1 hover:text-ember hover:border-ember transition-colors self-start sm:self-auto"
        >
          DM us your dates
          <ArrowRight size={13} strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}

function ReelTile({ reel, index }: { reel: Reel; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="snap-start shrink-0 reel-card group cursor-pointer"
    >
      <div className="relative h-full w-full bg-[#0E0A08]">
        <img
          src={reel.poster}
          alt={reel.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

        <div className="play-btn group-hover:bg-ember group-hover:border-ember transition-all duration-500">
          <Play size={15} strokeWidth={1.8} className="text-white ml-0.5" fill="currentColor" />
        </div>

        <div className="absolute bottom-0 inset-x-0 p-3.5 text-white">
          <div className="font-mono uppercase text-[9px] tracking-[0.22em] text-white/70 mb-1">
            {reel.place}
          </div>
          <div className="font-display text-base leading-tight">{reel.title}</div>
        </div>

        <div className="absolute top-3 left-3 font-mono uppercase text-[9px] tracking-[0.22em] text-white/70">
          {String(index + 1).padStart(2, "0")} / {String(reels.length).padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  );
}

function EndCard() {
  return (
    <a
      href={INSTAGRAM}
      target="_blank"
      rel="noreferrer"
      className="snap-start shrink-0 reel-instagram-card group"
      style={{
        background: "#1A0E08",
        border: "1px solid rgba(255,255,255,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        textDecoration: "none",
      }}
    >
      <div className="h-11 w-11 rounded-full bg-ember/15 border border-ember/40 flex items-center justify-center group-hover:bg-ember transition-all duration-500">
        <Instagram size={18} strokeWidth={1.8} className="text-ember group-hover:text-white transition-colors" />
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
        Next move
      </div>
      <div style={{ fontSize: 18, fontWeight: 600, color: "#fff", textAlign: "center", padding: "0 20px", lineHeight: 1.3 }}>
        Follow us<br />on Instagram
      </div>
      <div style={{ fontSize: 13, color: "#C8682A" }}>
        {INSTAGRAM_HANDLE} <ArrowRight size={11} strokeWidth={2} style={{ display: "inline", verticalAlign: "middle" }} />
      </div>
    </a>
  );
}
