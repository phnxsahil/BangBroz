import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, Map, Tent, MessageCircle } from "lucide-react";
import { IMG, WHATSAPP } from "@/lib/images";

const services = [
  {
    icon: Compass,
    title: "Curated expeditions",
    body: "Fixed-departure trips to offbeat Himalayan valleys — small groups, slow pacing, real homestays.",
  },
  {
    icon: Map,
    title: "Custom itineraries",
    body: "Have a date, a budget and a dream? We design the route, book the stays and ride along if you'd like.",
  },
  {
    icon: Tent,
    title: "Private group trips",
    body: "College batches, work crews, families. We close the bus, light the bonfire and keep the energy honest.",
  },
];

const bannerImages = [
  { src: IMG.heroValley, alt: "Alpine valley" },
  { src: IMG.munsiyari, alt: "Munsiyari landscape" },
  { src: IMG.spiti, alt: "Spiti valley" },
];

export function WhatWeDo() {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="what-we-do" className="relative bg-surface py-20 md:py-32 px-5 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="label-mono section-label mb-4">02 — What we do</div>
            <h2 className="font-display text-display-lg text-foreground">
              Three ways to roam <span className="italic text-ember">with us</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-10">
            <p className="text-body-lg section-subtext text-foreground/70">
              Whichever route you take, the rhythm stays the same — small groups,
              good food, slow mornings, and stories that travel home with you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="col-span-12 md:col-span-4 group bg-background border border-foreground/8 rounded-xl p-6 md:p-8 flex flex-col hover:border-foreground/25 transition-colors"
            >
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <div className="h-10 w-10 rounded-full bg-surface flex items-center justify-center">
                  <s.icon size={16} strokeWidth={1.6} className="text-foreground" />
                </div>
                <span className="label-mono">0{i + 1}</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3">{s.title}</h3>
              <p className="text-sm md:text-base text-foreground/70 mb-6 flex-1 leading-relaxed">{s.body}</p>
              <a
                href={i === 0 ? "#munsiyari" : WHATSAPP}
                target={i === 0 ? undefined : "_blank"}
                rel={i === 0 ? undefined : "noreferrer"}
                className="inline-flex items-center gap-2 text-xs font-medium text-foreground group-hover:text-ember transition-colors"
              >
                {i === 0 ? "See next departure" : i === 1 ? "Design a trip" : "Get a group quote"}
                <ArrowRight size={14} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>

        {/* Banner CTA with crossfade */}
        <div className="mt-14 md:mt-20 relative overflow-hidden rounded-2xl aspect-[21/9] md:aspect-auto cta-banner-card">
          <AnimatePresence mode="wait">
            <motion.img
              key={bannerIndex}
              src={bannerImages[bannerIndex].src}
              alt={bannerImages[bannerIndex].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="relative px-6 md:px-14 py-10 md:py-20 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8 text-white">
              <div className="label-mono cta-banner-label mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>Not sure where to start?</div>
              <h3 className="font-display text-display-md leading-tight cta-banner-heading">
                Tell us how many days you have. We'll send a route by tomorrow.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-ember text-sm py-2.5 px-5 min-h-0"
              >
                <MessageCircle size={15} strokeWidth={1.8} />
                Start on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4 cta-banner-dots">
          {bannerImages.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === bannerIndex ? "w-6 bg-ember" : "w-1.5 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
