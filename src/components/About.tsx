import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMG, WHATSAPP } from "@/lib/images";

const transitionImages = [
  { src: IMG.himalaya, alt: "Himalayan range at golden hour" },
  { src: IMG.fogForest, alt: "Foggy deodar forest" },
  { src: IMG.prayerFlags, alt: "Prayer flags in the wind" },
];

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [crossIndex, setCrossIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCrossIndex((prev) => (prev + 1) % transitionImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative bg-background py-20 md:py-32 px-5 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-8 md:gap-12 items-start"
        >
          <div className="col-span-12 md:col-span-5 md:sticky md:top-28">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-10 bg-ember" />
              <span className="label-mono section-label text-ember">01 — The ethos</span>
            </div>
            <h2 className="font-display text-display-lg text-foreground">
              A two-person studio that <span className="italic font-normal text-ember">grew into a tribe</span>.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-5 text-body-lg section-subtext text-foreground/75">
            <p>
              We started in 2019 with one borrowed Tempo Traveller, a thermos of chai
              and a stubborn belief that the best places in the Himalayas weren't on
              anyone's top-ten list. Five years and ten thousand travelers later,
              we're still chasing that exact feeling.
            </p>
            <p>
              No call centers. No drop-down menus of identical tours. Every
              expedition is designed by people who actually drove the road,
              slept in the homestay and waited for the clouds to part.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-foreground border-b border-foreground/40 pb-1 hover:text-ember hover:border-ember transition-colors group"
            >
              Tell us where you want to disappear
              <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Asymmetric image strip with crossfade */}
        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-3 md:gap-5">
          <div className="col-span-12 md:col-span-7 relative overflow-hidden rounded-lg aspect-[16/10]">
            <AnimatePresence mode="wait">
              <motion.img
                key={crossIndex}
                src={transitionImages[crossIndex].src}
                alt={transitionImages[crossIndex].alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-3 left-3 label-mono text-white/70">
              {String(crossIndex + 1).padStart(2, "0")} / {String(transitionImages.length).padStart(2, "0")}
            </div>
          </div>
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-6 md:col-span-5 md:mt-8 overflow-hidden rounded-lg aspect-[4/5]"
          >
            <img src={IMG.chai} alt="Hot chai in a steel cup" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]" />
          </motion.figure>
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-6 md:col-span-5 overflow-hidden rounded-lg aspect-[4/5]"
          >
            <img src={IMG.tent} alt="Camp under the stars" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]" />
          </motion.figure>
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7 md:-mt-6 overflow-hidden rounded-lg aspect-[16/10]"
          >
            <img src={IMG.road} alt="Empty mountain road" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]" />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
