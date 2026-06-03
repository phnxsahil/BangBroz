import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

  return (
    <section className="relative bg-surface py-24 md:py-36 px-5 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-6 mb-12 md:mb-16"
        >
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="label-mono text-ember">06 — Travelers</span>
            </div>
            <h2 className="font-display text-display-lg">
              What they said <span className="italic font-normal text-ember">after.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {moments.map((m, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 md:col-span-4 bg-background rounded-2xl overflow-hidden border border-foreground/8 flex flex-col group hover:shadow-[0_24px_60px_-30px_rgba(59,42,32,0.35)] transition-shadow duration-500"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={m.image}
                  alt={m.place}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="p-7 md:p-8 flex-1 flex flex-col">
                <p className="font-display italic text-2xl md:text-[1.55rem] leading-snug text-foreground">
                  &ldquo;{m.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-foreground/10 flex items-center justify-between label-mono">
                  <span>{m.author}</span>
                  <span className="text-ember">{m.place}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 label-mono">
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
