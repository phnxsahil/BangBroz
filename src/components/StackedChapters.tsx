import { useEffect, useRef, useState } from "react";
import hiddenBir from "@/assets/hidden-bir.jpg";
import hiddenShoja from "@/assets/hidden-shoja.jpg";
import hiddenMunsiyari from "@/assets/hidden-munsiyari.jpg";
import hiddenChopta from "@/assets/hidden-chopta.jpg";

type Hidden = {
  no: string;
  name: string;
  region: string;
  altitude: string;
  coords: string;
  caption: string;
  line: string;
  image: string;
};

const hidden: Hidden[] = [
  {
    no: "01",
    name: "Bir Billing",
    region: "Himachal Pradesh",
    altitude: "2,400 m",
    coords: "N 32°02' · E 76°43'",
    caption: "The valley that learned to fly",
    line: "Where monks read scripture in the morning and pilots read thermals in the afternoon — and somehow, the silence between the two belongs to neither.",
    image: hiddenBir,
  },
  {
    no: "02",
    name: "Shoja",
    region: "Seraj · Himachal",
    altitude: "2,692 m",
    coords: "N 31°34' · E 77°22'",
    caption: "A village that the road forgot",
    line: "Twelve wooden homes, one tea shop, and a deodar forest so thick with fog it eats the sound of your own footsteps before they finish.",
    image: hiddenShoja,
  },
  {
    no: "03",
    name: "Munsiyari",
    region: "Kumaon · Uttarakhand",
    altitude: "2,200 m",
    coords: "N 30°04' · E 80°14'",
    caption: "Five sisters in the sky",
    line: "From the porch of the last guesthouse, the Panchachuli peaks turn copper at dusk. No one in the room speaks for the next forty minutes.",
    image: hiddenMunsiyari,
  },
  {
    no: "04",
    name: "Chopta",
    region: "Garhwal · Uttarakhand",
    altitude: "2,680 m",
    coords: "N 30°29' · E 79°09'",
    caption: "The mini Switzerland nobody named",
    line: "Meadows that roll like an exhale. A shepherd, a flute, a horizon of ice. We came for a night and stayed until our food ran out.",
    image: hiddenChopta,
  },
];

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export function StackedChapters() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const p = clamp(-rect.top / total, 0, 1);
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const n = hidden.length;
  const t = progress * (n - 1);
  const activeIndex = Math.min(n - 1, Math.round(t));

  return (
    <section
      id="hidden"
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: `${(n + 0.6) * 100}vh` }}
    >
      {/* Sticky stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Section header — fades out as you progress */}
        <div
          className="absolute top-0 inset-x-0 z-[60] pt-32 px-6 md:px-12 pointer-events-none transition-opacity duration-700"
          style={{ opacity: clamp(1 - progress * 4, 0, 1) }}
        >
          <div className="mx-auto max-w-[1500px] flex items-end justify-between gap-8">
            <div>
              <div className="label-mono mb-4">03 / Hidden Chapters</div>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tight max-w-2xl">
                Four places the <em className="italic text-dawn">map</em> tries to keep quiet.
              </h2>
            </div>
            <div className="hidden md:block label-mono text-right">
              Stack · {n} chapters
              <br />
              <span className="text-foreground/40">Scroll to unfold</span>
            </div>
          </div>
        </div>

        {/* Progress rail */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-[55] hidden md:flex flex-col items-end gap-4">
          {hidden.map((h, i) => {
            const isActive = i === activeIndex;
            return (
              <div key={h.no} className="flex items-center gap-3">
                <span
                  className={`label-mono transition-all duration-500 ${
                    isActive ? "text-foreground opacity-100" : "text-foreground/30 opacity-60"
                  }`}
                >
                  {h.no}
                </span>
                <span
                  className={`block h-px transition-all duration-700 ease-out ${
                    isActive ? "w-12 bg-ember" : "w-6 bg-foreground/20"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Chapter index counter */}
        <div
          className="absolute bottom-8 left-6 md:left-12 z-[55] label-mono pointer-events-none transition-opacity duration-500"
          style={{ opacity: progress > 0.02 ? 1 : 0 }}
        >
          <span className="font-display text-foreground text-2xl tracking-tight not-italic">
            {hidden[activeIndex].no}
          </span>
          <span className="text-foreground/30"> / 0{n}</span>
        </div>

        {/* Stack */}
        {hidden.map((card, i) => {
          const enter = clamp(t - (i - 1), 0, 1);
          const cover = clamp(t - i, 0, 1);
          const translateY = (1 - enter) * 100;
          const scale = 1 - cover * 0.06;
          const opacity = 1 - cover * 0.45;
          const blur = cover * 4;

          return (
            <article
              key={card.no}
              className="absolute inset-0 will-change-transform"
              style={{
                transform: `translate3d(0, ${translateY}%, 0) scale(${scale})`,
                opacity,
                filter: blur ? `blur(${blur}px)` : undefined,
                zIndex: i + 1,
                transition: "filter 200ms linear",
              }}
            >
              <Card card={card} parallaxY={enter} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Card({ card, parallaxY }: { card: Hidden; parallaxY: number }) {
  // parallaxY in [0,1] — image drifts as card finishes entering
  const imgShift = (1 - parallaxY) * -8; // %
  return (
    <div className="relative h-full w-full overflow-hidden grain bg-background">
      {/* Image */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${imgShift}%, 0) scale(1.08)` }}
      >
        <img
          src={card.image}
          alt={card.name}
          width={1920}
          height={1600}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/30" />
      <div className="absolute inset-0 vignette" />

      {/* Content frame */}
      <div className="relative z-10 h-full mx-auto max-w-[1500px] px-6 md:px-12 flex flex-col justify-end pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Left meta */}
          <div className="col-span-12 md:col-span-3 label-mono space-y-3 mb-6 md:mb-0">
            <div>
              <div className="text-secondary mb-1">Region</div>
              <div className="text-foreground">{card.region}</div>
            </div>
            <div>
              <div className="text-secondary mb-1">Altitude</div>
              <div className="text-foreground">{card.altitude}</div>
            </div>
            <div>
              <div className="text-secondary mb-1">Coordinates</div>
              <div className="text-foreground">{card.coords}</div>
            </div>
          </div>

          {/* Title block */}
          <div className="col-span-12 md:col-span-6">
            <div className="label-mono mb-4 text-ember">
              ● Chapter {card.no} — {card.caption}
            </div>
            <h3 className="font-display text-[16vw] md:text-[8.5vw] leading-[0.88] tracking-[-0.04em] text-foreground">
              {card.name}
            </h3>
          </div>

          {/* Right line */}
          <div className="col-span-12 md:col-span-3 md:pl-4">
            <p className="font-mono text-sm leading-relaxed text-secondary max-w-xs">
              {card.line}
            </p>
            <div className="mt-6 flex items-center gap-3 label-mono">
              <span className="h-px w-8 bg-foreground/40" />
              <span>Field entry</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
