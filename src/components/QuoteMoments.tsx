import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { IMG } from "@/lib/images";

type Moment = { quote: string; author: string; place: string; image: string };

const moments: Moment[] = [
  { quote: "Didn't touch my phone for four days. Forgot what notifications sounded like.", author: "Anika · Delhi", place: "Khaliya Top", image: IMG.trekker },
  { quote: "The mountain slows something inside you. I'm still moving at that speed back home.", author: "Rohan · Bengaluru", place: "Munsiyari", image: IMG.village },
  { quote: "Still thinking about that sunrise. Pretty sure I left a part of me up there.", author: "Meera · Mumbai", place: "The Secret Spot", image: IMG.sunset },
];

export function QuoteMoments() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % moments.length);
    }, 4200);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const goTo = (i: number) => {
    setCurrent(i);
    startTimer();
  };

  const prev = () => goTo((current - 1 + moments.length) % moments.length);
  const next = () => goTo((current + 1) % moments.length);

  const m = moments[current];

  return (
    <section className="relative bg-surface py-20 md:py-32 px-5 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-6 mb-10 md:mb-14"
        >
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-ember" />
              <span className="label-mono section-label text-ember">06 — Travelers</span>
            </div>
            <h2 className="font-display text-display-lg">
              What they said <span className="italic font-normal text-ember">after.</span>
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-12 gap-6 md:gap-10 items-stretch"
            >
              <div className="col-span-12 md:col-span-7 aspect-[16/10] md:aspect-auto rounded-2xl overflow-hidden relative">
                <img
                  src={m.image}
                  alt={m.place}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 label-mono text-white/80">
                  {m.place}
                </div>
              </div>

              <div className="col-span-12 md:col-span-5 flex flex-col justify-center bg-background rounded-2xl p-7 md:p-10 border border-foreground/8">
                <Quote size={28} strokeWidth={1.2} className="text-ember/60 mb-5" />
                <p className="font-display italic text-2xl md:text-[1.7rem] leading-snug text-foreground mb-6">
                  &ldquo;{m.quote}&rdquo;
                </p>
                <div className="pt-5 border-t border-foreground/10 flex items-center justify-between label-mono">
                  <span>{m.author}</span>
                  <span className="text-ember">{String(current + 1).padStart(2, "0")} / {String(moments.length).padStart(2, "0")}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6 md:mt-8">
            <div className="flex items-center gap-3">
              {moments.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    i === current ? "w-8 bg-ember" : "w-1.5 bg-foreground/20 hover:bg-foreground/35"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="h-9 w-9 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/10 transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft size={16} strokeWidth={1.6} />
              </button>
              <button
                onClick={next}
                className="h-9 w-9 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/10 transition-colors cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={16} strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 label-mono">
          <span>★ 4.9 / 5</span>
          <span>·</span>
          <span>100+ Google reviews</span>
          <span>·</span>
          <span>10,000+ travelers since 2019</span>
        </div>
      </div>
    </section>
  );
}
