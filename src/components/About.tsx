import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMG, WHATSAPP } from "@/lib/images";

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative bg-background py-24 md:py-36 px-5 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-8 md:gap-12 items-start"
        >
          <div className="col-span-12 md:col-span-5 md:sticky md:top-28">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="label-mono text-ember">01 — The ethos</span>
            </div>
            <h2 className="font-display text-display-lg text-foreground">
              A two-person studio that <span className="italic font-normal text-ember">grew into a tribe</span>.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-6 text-body-lg text-foreground/75">
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

        {/* Asymmetric image strip */}
        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-4 md:gap-6">
          {[
            { src: IMG.group, span: "col-span-12 md:col-span-7", aspect: "aspect-[16/10]", alt: "Group of trekkers on a Himalayan road" },
            { src: IMG.chai, span: "col-span-6 md:col-span-5 md:mt-12", aspect: "aspect-[4/5]", alt: "Hot chai in a steel cup" },
            { src: IMG.tent, span: "col-span-6 md:col-span-5", aspect: "aspect-[4/5]", alt: "Camp under the stars" },
            { src: IMG.road, span: "col-span-12 md:col-span-7 md:-mt-10", aspect: "aspect-[16/10]", alt: "Empty mountain road" },
          ].map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`${img.span} ${img.aspect} overflow-hidden rounded-lg`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
