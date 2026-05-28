import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import heroMountains from "@/assets/hero-mountains.jpg";

const WHATSAPP =
  "https://wa.me/918865848737?text=Hi%20Bag%20N%20Bros%2C%20tell%20me%20about%20Munsiyari.";

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

export function Hero() {
  const y = useParallax();
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden grain"
    >
      {/* Parallax image */}
      <div
        className="absolute inset-0 will-change-transform animate-ken-burns"
        style={{ transform: `translate3d(0, ${y * 0.35}px, 0) scale(1.1)` }}
      >
        <img
          src={heroMountains}
          alt="Snow-dusted Himalayan ridge at dawn"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Atmosphere */}
      <div className="absolute inset-0 fog-overlay-top z-10" />
      <div className="absolute inset-0 haze-pass z-10 pointer-events-none" />
      <div className="absolute inset-0 ember-glow-corner z-10 pointer-events-none" />
      <div className="absolute inset-0 vignette z-10" />
      <div className="absolute bottom-0 inset-x-0 h-40 seam-bottom z-10 pointer-events-none" />

      {/* Top meta strip */}
      <div className="absolute top-20 md:top-28 inset-x-0 z-20 px-5 md:px-10 flex justify-between items-start label-mono animate-reveal-fade delay-700">
        <div>
          <div className="text-ember">● Live</div>
          <div className="mt-1 text-foreground/60">Next Expedition</div>
        </div>
        <div className="text-right">
          <div>30°04'N · 80°14'E</div>
          <div className="mt-1 text-foreground/40">Munsiyari · 2,200 m</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-[100svh] flex flex-col justify-end pb-28 md:pb-32 px-5 md:px-10 mx-auto max-w-[1500px]">
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Headline — asymmetric 8/12 */}
          <div className="col-span-12 md:col-span-8">
            <div className="label-mono mb-5 md:mb-7 animate-reveal-up">
              Chapter 01 — The Call
            </div>
            <h1 className="font-display text-display-xl text-foreground animate-reveal-up delay-200">
              The Himalayas
              <br />
              don't <em className="italic text-ember">wait</em>.
              <br />
              Neither do we.
            </h1>
            <p className="mt-7 md:mt-10 text-body-lg max-w-md text-foreground/70 leading-relaxed animate-reveal-up delay-400">
              Offbeat Himalayan expeditions for people who want stories,
              not tourist packages.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-reveal-up delay-700">
              <a href="#munsiyari" className="btn-ember">
                View Next Expedition
                <ArrowRight size={14} strokeWidth={1.8} />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <MessageCircle size={14} strokeWidth={1.8} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Floating Munsiyari card — asymmetric 4/12, hidden on small mobile */}
          <aside className="hidden md:block md:col-span-4 animate-reveal-up delay-1000">
            <MunsiyariCard />
          </aside>
        </div>

        {/* Mobile dossier card sits full-width below headline */}
        <div className="md:hidden mt-10 animate-reveal-up delay-1000">
          <MunsiyariCard compact />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-scroll-hint">
        <div className="h-10 w-px bg-foreground/40" />
      </div>
    </section>
  );
}

function MunsiyariCard({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#munsiyari"
      className="block relative bg-background/40 backdrop-blur-md border border-foreground/10 p-5 md:p-6 rounded-sm hover:border-ember/40 transition-all duration-500 group"
    >
      <div className="flex items-center gap-2 label-mono text-ember mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
        Departing Soon · 8 seats left
      </div>
      <h3 className="font-display text-2xl md:text-3xl leading-tight mb-1">
        Munsiyari
      </h3>
      <div className="label-mono text-foreground/50 flex items-center gap-1.5 mb-5">
        <MapPin size={11} strokeWidth={1.5} />
        Kumaon · Uttarakhand
      </div>
      <div className={`grid ${compact ? "grid-cols-3" : "grid-cols-2"} gap-3 mb-5`}>
        <Stat label="Duration" value="5 Days" />
        <Stat label="From" value="₹6,999" />
        {compact && <Stat label="Level" value="Moderate" />}
      </div>
      <div className="flex items-center gap-2 label-mono text-foreground group-hover:text-ember transition-colors">
        Learn more
        <ArrowRight size={12} strokeWidth={1.8} className="transition-transform group-hover:translate-x-1" />
      </div>
    </a>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="label-mono text-foreground/40 mb-1">{label}</div>
      <div className="font-display text-lg text-foreground leading-none">{value}</div>
    </div>
  );
}
