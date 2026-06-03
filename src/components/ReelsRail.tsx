import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, MessageCircle, ArrowRight, Instagram } from "lucide-react";
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

  return (
    <section
      id="reels"
      className="relative bg-[#1A1410] text-[#F4ECE0] py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-6 mb-12 md:mb-16"
        >
          <div className="col-span-12 md:col-span-8">
            <div className="label-mono mb-4" style={{ color: "rgba(244,236,224,0.55)" }}>
              05 — Captured in motion
            </div>
            <h2 className="font-display text-display-lg">
              Thirty seconds <span className="italic font-normal text-ember">from the road.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pt-10">
            <p className="text-body-lg text-[#F4ECE0]/70">
              Quiet clips from the last few expeditions. Follow along on Instagram —
              we post a new one every week.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="overflow-x-auto no-scrollbar snap-x-mandatory">
        <div className="flex gap-4 md:gap-5 px-5 md:px-10 pb-4">
          {reels.map((r, i) => (
            <ReelTile key={r.id} reel={r} index={i} />
          ))}
          <EndCard />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 md:px-10 mt-12 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          className="btn-ember"
        >
          <Instagram size={16} strokeWidth={1.8} />
          Follow {INSTAGRAM_HANDLE}
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium border-b border-[#F4ECE0]/40 pb-1 hover:text-ember hover:border-ember transition-colors self-start sm:self-auto"
        >
          DM us your dates
          <ArrowRight size={15} strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}

function ReelTile({ reel, index }: { reel: Reel; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="snap-start shrink-0 w-[72vw] sm:w-[44vw] md:w-[26vw] lg:w-[20vw] aspect-[9/16] relative group cursor-pointer"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0E0A08]">
        <img
          src={reel.poster}
          alt={reel.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-white/12 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-ember group-hover:border-ember transition-all duration-500">
            <Play size={18} strokeWidth={1.8} className="text-white ml-0.5" fill="currentColor" />
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 text-white">
          <div className="font-mono uppercase text-[10px] tracking-[0.22em] text-white/80 mb-1.5">
            {reel.place}
          </div>
          <div className="font-display text-xl leading-tight">{reel.title}</div>
        </div>

        <div className="absolute top-4 left-4 font-mono uppercase text-[10px] tracking-[0.22em] text-white/80">
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
      className="snap-start shrink-0 w-[72vw] sm:w-[44vw] md:w-[26vw] lg:w-[20vw] aspect-[9/16] relative group"
    >
      <div className="h-full w-full rounded-2xl border border-ember/40 bg-gradient-to-br from-[#2a1d15] to-[#1A1410] flex flex-col items-center justify-center text-center p-6 transition-all duration-500 group-hover:border-ember group-hover:from-ember/15">
        <div className="h-14 w-14 rounded-full bg-ember/15 border border-ember/40 flex items-center justify-center mb-6 group-hover:bg-ember transition-all duration-500">
          <Instagram size={20} strokeWidth={1.8} className="text-ember group-hover:text-white transition-colors" />
        </div>
        <div className="label-mono text-ember mb-3">Next move</div>
        <div className="font-display text-2xl leading-tight mb-4 text-[#F4ECE0]">
          Follow us<br />on Instagram
        </div>
        <div className="label-mono flex items-center gap-2" style={{ color: "rgba(244,236,224,0.7)" }}>
          {INSTAGRAM_HANDLE} <ArrowRight size={12} strokeWidth={2} />
        </div>
      </div>
    </a>
  );
}
