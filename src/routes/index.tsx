import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroMountains from "@/assets/hero-mountains.jpg";
import storyTrekker from "@/assets/story-trekker.jpg";
import storyCamp from "@/assets/story-camp.jpg";
import destSpiti from "@/assets/dest-spiti.jpg";
import destZanskar from "@/assets/dest-zanskar.jpg";
import destLadakh from "@/assets/dest-ladakh.jpg";
import destParvati from "@/assets/dest-parvati.jpg";
import { StackedChapters } from "@/components/StackedChapters";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bag n Bros — Field Notes from the Himalayas" },
      {
        name: "description",
        content:
          "An expedition journal from the lesser-walked corners of the Himalayas. Slow travel, raw mountains, quiet rooms.",
      },
      { property: "og:title", content: "Bag n Bros — Field Notes from the Himalayas" },
      {
        property: "og:description",
        content:
          "An expedition journal from the lesser-walked corners of the Himalayas.",
      },
      { property: "og:image", content: heroMountains },
    ],
  }),
  component: Home,
});

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

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Home() {
  return (
    <main className="relative bg-background text-foreground grain-fixed">
      <Nav />
      <Hero />
      <Manifesto />
      <Chapter />
      <Journals />
      <StackedChapters />
      <Quote />
      <Field />
      <Footer />
    </main>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "py-4 backdrop-blur-md bg-background/40" : "py-8 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_12px_var(--ember)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/90">
            Bag <span className="text-secondary">n</span> Bros
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 label-mono">
          <a href="#manifesto" className="hover:text-foreground transition-colors">Manifesto</a>
          <a href="#journals" className="hover:text-foreground transition-colors">Journals</a>
          <a href="#field" className="hover:text-foreground transition-colors">Field</a>
        </nav>
        <div className="label-mono hidden md:block">N 32°14' · E 77°11'</div>
      </div>
    </header>
  );
}

function Hero() {
  const y = useParallax();
  return (
    <section className="relative h-[100svh] w-full overflow-hidden grain">
      <div
        className="absolute inset-0 will-change-transform animate-ken-burns"
        style={{ transform: `translate3d(0, ${y * 0.4}px, 0) scale(1.08)` }}
      >
        <img
          src={heroMountains}
          alt="Dawn over the Himalayas, valley filled with fog"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 fog-overlay-top z-10" />
      <div className="absolute inset-0 haze-pass z-10 pointer-events-none" />
      <div className="absolute inset-0 ember-glow-corner z-10 pointer-events-none" />
      <div className="absolute inset-0 vignette z-10" />
      {/* Section seam into Manifesto */}
      <div className="absolute bottom-0 inset-x-0 h-40 seam-bottom z-10 pointer-events-none" />

      {/* Frame markers */}
      <div className="absolute top-32 left-6 md:left-12 z-20 label-mono animate-reveal-fade delay-700">
        Chapter 00 — Arrival
      </div>
      <div className="absolute top-32 right-6 md:right-12 z-20 label-mono animate-reveal-fade delay-700 text-right">
        4,310 m<br />
        <span className="text-foreground/40">Above sea</span>
      </div>

      <div className="relative z-20 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 mx-auto max-w-[1500px]">
        <div className="label-mono mb-6 md:mb-8 animate-reveal-up">
          <span className="text-ember">●</span>&nbsp;&nbsp;Field Notes / Vol. 07
        </div>
        <h1 className="font-display text-[14vw] md:text-[10vw] leading-[0.92] tracking-[-0.04em] text-foreground animate-reveal-up delay-200 max-w-[14ch]">
          The mountains
          <br />
          don't <em className="italic text-dawn">welcome</em>.
          <br />
          They <em className="italic">witness</em>.
        </h1>
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8 animate-reveal-up delay-400">
          <p className="font-mono text-sm md:text-base text-secondary max-w-md leading-relaxed">
            A quiet expedition journal from the lesser-walked corners of the Himalayas. We don't sell trips. We share what the wind told us.
          </p>
          <div className="flex items-center gap-4 label-mono">
            <span className="h-px w-12 bg-foreground/30" />
            <span>Scroll to descend</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-scroll-hint">
        <div className="h-10 w-px bg-foreground/40" />
      </div>
    </section>
  );
}

function Manifesto() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="manifesto" className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      {/* Atmospheric warmth — distant guesthouse window */}
      <div className="absolute -top-32 -right-40 w-[60vw] h-[60vw] rounded-full pointer-events-none opacity-60"
           style={{ background: "radial-gradient(circle, rgba(232,106,60,0.08) 0%, transparent 55%)" }} />
      <div className="absolute -bottom-40 -left-32 w-[55vw] h-[55vw] rounded-full pointer-events-none opacity-50"
           style={{ background: "radial-gradient(circle, rgba(107,122,143,0.10) 0%, transparent 60%)" }} />
      <div ref={ref} className="relative mx-auto max-w-[1500px] grid grid-cols-12 gap-y-12 gap-x-6">
        <div className="col-span-12 md:col-span-9">
          <p
            className={`font-display text-[7vw] md:text-[3.6vw] leading-[1.08] tracking-[-0.02em] text-foreground transition-all duration-1500 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We are <em className="italic text-dawn">two brothers</em> with one rucksack
            between us — chasing the kind of silence that
            <span className="text-secondary"> only altitude</span> can keep. No itineraries.
            No checklists. Only the road, the cold, and the
            <em className="italic text-ember"> story</em> waiting at the next bend.
          </p>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 label-mono">
            {[
              ["Since", "2019"],
              ["Expeditions", "47"],
              ["Distance", "12,400 km"],
              ["Altitude", "5,890 m"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-secondary mb-2">{k}</div>
                <div className="font-display text-3xl text-foreground tracking-tight">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chapter() {
  const y = useParallax();
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="relative min-h-[140vh] w-full overflow-hidden">
      <div
        className="sticky top-0 h-screen w-full overflow-hidden grain"
        style={{ }}
      >
        <div
          className="absolute inset-0"
          style={{ transform: `translate3d(0, ${y * 0.15}px, 0)` }}
        >
          <img
            src={storyTrekker}
            alt="Solitary trekker crossing a snowfield"
            width={1080}
            height={1920}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 z-10" />

        <div ref={ref} className="relative z-20 h-full mx-auto max-w-[1500px] px-6 md:px-12 flex items-center">
          <div
            className={`max-w-xl transition-all duration-1500 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="label-mono mb-8">
              Chapter 02 — <span className="text-ember">The Ascent</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] tracking-tight">
              Somewhere past the treeline,
              <em className="italic text-dawn"> language stops</em> being useful.
            </h2>
            <p className="mt-8 text-secondary leading-relaxed max-w-md font-mono text-sm">
              You stop counting steps. You stop checking the map. The mountain begins to keep time for you — one breath, one foothold, one slow promise at a time.
            </p>
            <div className="mt-12 flex items-center gap-4 label-mono">
              <span className="h-px w-16 bg-ember" />
              <span>Recorded · Spiti · April</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Journal = {
  no: string;
  title: string;
  place: string;
  altitude: string;
  excerpt: string;
  image: string;
};

const journals: Journal[] = [
  {
    no: "I",
    title: "Smoke from the last house",
    place: "Spiti Valley · Himachal",
    altitude: "3,810 m",
    excerpt:
      "A village of nineteen homes. The kettle has been on since the year my grandfather was born.",
    image: destSpiti,
  },
  {
    no: "II",
    title: "Walking on a river",
    place: "Zanskar · Ladakh",
    altitude: "3,500 m",
    excerpt:
      "The Chadar groans beneath you the way old wood groans in a house — alive, complaining, never quite breaking.",
    image: destZanskar,
  },
  {
    no: "III",
    title: "The empty road",
    place: "Ladakh Plateau",
    altitude: "4,200 m",
    excerpt:
      "Two hundred kilometres of asphalt and not a single sound that wasn't ours. The wind made us feel rented.",
    image: destLadakh,
  },
  {
    no: "IV",
    title: "Where the fog lives",
    place: "Parvati Valley",
    altitude: "2,650 m",
    excerpt:
      "We waited four days for the cloud to lift. It never did. We left in love with it anyway.",
    image: destParvati,
  },
];

function Journals() {
  return (
    <section id="journals" className="relative py-32 md:py-48 px-6 md:px-12 bg-surface">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-3 label-mono">02 / Field Journals</div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-5xl md:text-7xl leading-[1] tracking-tight">
              Four entries from <em className="italic text-dawn">the cold months</em>.
            </h2>
          </div>
        </div>

        <div className="space-y-32 md:space-y-48">
          {journals.map((j, i) => (
            <JournalCard key={j.no} journal={j} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JournalCard({ journal, index }: { journal: Journal; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const reverse = index % 2 === 1;
  return (
    <article
      ref={ref}
      className={`grid grid-cols-12 gap-6 items-center ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      <div
        className={`col-span-12 md:col-span-7 [direction:ltr] transition-all duration-1500 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="relative aspect-[4/5] overflow-hidden grain group">
          <img
            src={journal.image}
            alt={journal.title}
            width={1280}
            height={1600}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2400ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
          <div className="absolute top-6 left-6 z-10 label-mono">
            <span className="text-ember">●</span>&nbsp;&nbsp;Entry {journal.no}
          </div>
          <div className="absolute bottom-6 right-6 z-10 label-mono text-right">
            {journal.altitude}
          </div>
        </div>
      </div>

      <div
        className={`col-span-12 md:col-span-5 [direction:ltr] md:px-8 transition-all duration-1500 delay-200 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="label-mono mb-6 text-secondary">{journal.place}</div>
        <h3 className="font-display text-4xl md:text-5xl leading-[1.02] tracking-tight mb-6">
          {journal.title}
        </h3>
        <p className="text-secondary font-mono text-sm leading-relaxed mb-10 max-w-md">
          {journal.excerpt}
        </p>
        <a
          href="#"
          className="group inline-flex items-center gap-3 label-mono text-foreground"
        >
          <span className="h-px w-10 bg-foreground transition-all duration-500 group-hover:w-16 group-hover:bg-ember" />
          <span className="transition-colors group-hover:text-ember">Read the entry</span>
        </a>
      </div>
    </article>
  );
}

function Quote() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="relative py-40 md:py-64 px-6 md:px-12 overflow-hidden"
    >
      <div className="mx-auto max-w-[1200px] text-center">
        <div className="label-mono mb-12 text-secondary">— A Sherpa, name unrecorded</div>
        <blockquote
          className={`font-display italic text-3xl md:text-6xl leading-[1.15] tracking-tight text-foreground transition-all duration-[1800ms] ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          "You don't <span className="not-italic text-dawn">climb</span> a mountain.
          You ask it for <span className="not-italic text-ember">passage</span>,
          and you stay quiet enough to hear the answer."
        </blockquote>
      </div>
    </section>
  );
}

function Field() {
  const y = useParallax();
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="field" className="relative w-full overflow-hidden">
      <div className="relative h-[110vh] w-full overflow-hidden grain">
        <div
          className="absolute inset-0"
          style={{ transform: `translate3d(0, ${y * 0.1}px, 0)` }}
        >
          <img
            src={storyCamp}
            alt="Campfire under Himalayan night sky"
            width={1920}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-background/40 z-10" />
        <div className="absolute inset-0 fog-overlay z-10" />

        <div
          ref={ref}
          className="absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div
            className={`max-w-3xl text-center transition-all duration-[1800ms] ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="label-mono mb-10">
              <span className="text-ember">●</span>&nbsp;&nbsp;Dispatches from the Field
            </div>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.95] tracking-tight">
              Letters from <em className="italic text-dawn">altitude</em>.
            </h2>
            <p className="mt-10 text-secondary max-w-lg mx-auto font-mono text-sm leading-relaxed">
              One slow email every full moon. Photographs we couldn't fit anywhere else, and the kind of stories we only tell once.
            </p>

            <form
              className="mt-14 max-w-md mx-auto flex items-end gap-4 border-b border-foreground/20 pb-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@address.com"
                className="flex-1 bg-transparent outline-none font-mono text-sm placeholder:text-foreground/30 text-foreground py-2"
              />
              <button
                type="submit"
                className="label-mono text-foreground hover:text-ember transition-colors"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-background py-20 px-6 md:px-12 border-t border-foreground/5">
      <div className="mx-auto max-w-[1500px] grid grid-cols-12 gap-y-10 gap-x-6">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_12px_var(--ember)]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
              Bag <span className="text-secondary">n</span> Bros
            </span>
          </div>
          <p className="font-display italic text-2xl leading-snug max-w-sm text-foreground/90">
            Stories from the slow side of the Himalayas.
          </p>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className="label-mono mb-5">Trails</div>
          <ul className="space-y-3 font-mono text-sm">
            <li><a href="#" className="hover:text-ember transition-colors">Spiti</a></li>
            <li><a href="#" className="hover:text-ember transition-colors">Zanskar</a></li>
            <li><a href="#" className="hover:text-ember transition-colors">Ladakh</a></li>
            <li><a href="#" className="hover:text-ember transition-colors">Parvati</a></li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className="label-mono mb-5">Journal</div>
          <ul className="space-y-3 font-mono text-sm">
            <li><a href="#" className="hover:text-ember transition-colors">Entries</a></li>
            <li><a href="#" className="hover:text-ember transition-colors">Photographs</a></li>
            <li><a href="#" className="hover:text-ember transition-colors">Field Notes</a></li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="label-mono mb-5">Base Camp</div>
          <p className="font-mono text-sm text-secondary leading-relaxed max-w-xs">
            Manali, Himachal Pradesh<br />
            Coordinates 32°14'N · 77°11'E<br />
            hello@bagnbros.in
          </p>
        </div>

        <div className="col-span-12 mt-12 pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 label-mono">
          <div>© MMXXVI — Bag n Bros · All silence reserved</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">Substack</a>
            <a href="#" className="hover:text-foreground transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
