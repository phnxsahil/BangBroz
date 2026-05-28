import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircle, ArrowRight, Mountain, Calendar, Users, IndianRupee } from "lucide-react";
import storyCamp from "@/assets/story-camp.jpg";
import hiddenMunsiyari from "@/assets/hidden-munsiyari.jpg";
import storyTrekker from "@/assets/story-trekker.jpg";

const WHATSAPP =
  "https://wa.me/918865848737?text=Hi%20Bag%20N%20Bros%2C%20I%20want%20to%20join%20the%20Munsiyari%20expedition.";

type Day = {
  no: string;
  title: string;
  body: string;
  highlight?: boolean;
};

const itinerary: Day[] = [
  {
    no: "Day 00",
    title: "Delhi → Munsiyari",
    body: "Overnight drive, 633 km. Group meets at the pickup point at 6:30 PM for a briefing with your trip captain, then we head into the night.",
  },
  {
    no: "Day 01",
    title: "Birthi Waterfall · Arrival",
    body: "A scenic mountain drive in. We stop at Birthi Waterfall on the way, then check into a cozy homestay tucked into the Munsiyari hills. Warm dinner, early sleep.",
  },
  {
    no: "Day 02",
    title: "Nanda Devi Temple · Khaliya Top Trek",
    body: "Morning visit to the sacred Nanda Devi Temple, then the Khaliya Top trek — panoramic snow peaks and alpine meadows. Camp under the stars.",
  },
  {
    no: "Day 03",
    title: "Darkot Village · Secret Spot",
    body: "Descend to Darkot — heritage homes, traditional looms. Then we slip off the map to a hidden viewpoint only our travelers ever see.",
    highlight: true,
  },
  {
    no: "Day 04",
    title: "Delhi · Trip Ends",
    body: "Early morning arrival in Delhi. The group parts ways with quieter heads and full camera rolls.",
  },
];

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

export function MunsiyariDossier() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section
      id="munsiyari"
      className="relative bg-background overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-32 seam-top z-10 pointer-events-none" />

      {/* === Cover === */}
      <div className="relative h-[80svh] md:h-[90svh] w-full overflow-hidden grain">
        <img
          src={hiddenMunsiyari}
          alt="Munsiyari ridgeline at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
        <div className="absolute inset-0 ember-glow-corner pointer-events-none" />
        <div className="absolute inset-0 vignette" />
        <div className="absolute bottom-0 inset-x-0 h-32 seam-bottom" />

        <div className="absolute top-24 inset-x-0 px-5 md:px-10 mx-auto max-w-[1500px] flex justify-between label-mono">
          <span className="text-ember">● Next Expedition</span>
          <span>02 / Dossier</span>
        </div>

        <div className="relative z-10 h-full mx-auto max-w-[1500px] px-5 md:px-10 flex flex-col justify-end pb-16 md:pb-24">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-display-xl text-foreground leading-[0.9]">
                Munsiyari
              </h2>
              <p className="mt-5 md:mt-7 font-display italic text-display-md text-foreground/80 max-w-2xl leading-[1.1]">
                "The last village before the trail becomes unnamed."
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <div className="label-mono text-foreground/50 mb-2">Kumaon · Uttarakhand</div>
              <div className="font-mono text-sm text-foreground/70">
                30°04'N · 80°14'E
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Meta strip === */}
      <div ref={ref} className="relative px-5 md:px-10 py-14 md:py-20 border-y border-foreground/5">
        <div className="mx-auto max-w-[1500px] grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          <MetaStat icon={Calendar} label="Duration" value="4 Nights / 5 Days" />
          <MetaStat icon={Mountain} label="Altitude" value="2,200 m" sub="Khaliya Top" />
          <MetaStat icon={Users} label="Group" value="Small batch" sub="Max 14" />
          <MetaStat icon={IndianRupee} label="From" value="6,999" sub="per person" accent />
        </div>
      </div>

      {/* === Itinerary === */}
      <div className="relative px-5 md:px-10 py-20 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-20">
            <div className="col-span-12 md:col-span-4">
              <div className="label-mono mb-5">The Route</div>
              <h3 className="font-display text-display-lg leading-[0.96]">
                Five days,<br />
                one <em className="italic text-ember">slow</em> arc.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p
                className={`text-body-lg text-foreground/70 leading-relaxed transition-all duration-1000 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Munsiyari is the kind of place the map almost forgot.
                Five days here doesn't read like an itinerary — it reads like
                the slow unspooling of a film reel: a temple at dawn, a ridge
                at noon, a hidden viewpoint that doesn't have a name on Google.
              </p>
            </div>
          </div>

          {/* Day accordion */}
          <ol className="border-t border-foreground/10">
            {itinerary.map((d, i) => (
              <DayItem key={d.no} day={d} index={i} defaultOpen={i === 0} />
            ))}
          </ol>
        </div>
      </div>

      {/* === Secret Spot === */}
      <SecretSpot />

      {/* === Inclusions / Exclusions === */}
      <div className="relative px-5 md:px-10 py-20 md:py-28 bg-surface">
        <div className="absolute top-0 inset-x-0 h-32 seam-top pointer-events-none" />
        <div className="mx-auto max-w-[1500px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <List
            label="Inclusions"
            title="What's in the bag."
            items={[
              "AC Volvo / Tempo Traveler — Delhi to Delhi",
              "2 nights homestay on sharing basis",
              "Experienced trip captain throughout",
              "Bonfire night (weather permitting)",
              "4 meals — 3 dinners, 3 breakfasts",
              "Tolls, parking, driver allowances",
            ]}
          />
          <List
            label="Exclusions"
            title="What's not."
            muted
            items={[
              "Meals & stays outside the itinerary",
              "Travel insurance · porterage · tips",
              "Entry fees & optional activities",
              "4×4 / snow chains if needed",
              "Force-majeure costs (weather, roadblocks)",
              "5% GST",
            ]}
          />
        </div>
      </div>

      {/* === CTA === */}
      <div className="relative px-5 md:px-10 py-20 md:py-32 bg-background border-t border-foreground/5 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="label-mono mb-6 text-ember">Ready when you are</div>
          <h3 className="font-display text-display-lg leading-[1]">
            Eight seats left.
            <br />
            <em className="italic text-ember">Yours?</em>
          </h3>
          <p className="mt-6 text-body-lg text-foreground/70 max-w-md mx-auto">
            DM us your dates — we'll send the full dossier and lock you in.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ember">
              <MessageCircle size={14} strokeWidth={1.8} />
              WhatsApp · ₹6,999
            </a>
            <a href="#reels" className="btn-ghost">
              Watch field reels
              <ArrowRight size={12} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaStat({
  icon: Icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 label-mono mb-3">
        <Icon size={12} strokeWidth={1.5} className={accent ? "text-ember" : "text-foreground/40"} />
        {label}
      </div>
      <div className={`font-display text-3xl md:text-4xl leading-none ${accent ? "text-ember" : "text-foreground"}`}>
        {accent && <span className="text-xl align-top">₹</span>}{value}
      </div>
      {sub && <div className="mt-2 label-mono text-foreground/40">{sub}</div>}
    </div>
  );
}

function DayItem({ day, index, defaultOpen }: { day: Day; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <li className="border-b border-foreground/10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full py-6 md:py-8 flex items-start gap-5 md:gap-10 text-left group min-h-[44px]"
      >
        <div className="label-mono pt-1 w-16 md:w-24 shrink-0 text-foreground/40">
          {String(index).padStart(2, "0")}
        </div>
        <div className="flex-1 min-w-0">
          <div className="label-mono text-ember mb-2 flex items-center gap-2">
            {day.no}
            {day.highlight && (
              <span className="px-1.5 py-0.5 bg-ember/10 text-ember rounded-sm text-[10px]">
                Secret Spot
              </span>
            )}
          </div>
          <h4 className="font-display text-2xl md:text-4xl leading-[1.05] text-foreground group-hover:text-ember transition-colors">
            {day.title}
          </h4>
          <div
            className="grid transition-all duration-500 ease-out"
            style={{
              gridTemplateRows: open ? "1fr" : "0fr",
              opacity: open ? 1 : 0,
            }}
          >
            <div className="overflow-hidden">
              <p className="mt-4 md:mt-5 text-body-lg text-foreground/70 leading-relaxed max-w-2xl">
                {day.body}
              </p>
            </div>
          </div>
        </div>
        <ChevronDown
          size={20}
          strokeWidth={1.5}
          className={`mt-2 shrink-0 text-foreground/40 transition-transform duration-500 ${
            open ? "rotate-180 text-ember" : ""
          }`}
        />
      </button>
    </li>
  );
}

function List({
  label,
  title,
  items,
  muted,
}: {
  label: string;
  title: string;
  items: string[];
  muted?: boolean;
}) {
  return (
    <div>
      <div className={`label-mono mb-4 ${muted ? "" : "text-ember"}`}>{label}</div>
      <h4 className="font-display text-3xl md:text-4xl leading-[1.05] mb-8">{title}</h4>
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it} className="flex gap-4 text-foreground/80 leading-relaxed">
            <span className={`mt-2.5 h-px w-5 shrink-0 ${muted ? "bg-foreground/20" : "bg-ember"}`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SecretSpot() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="relative h-[70svh] md:h-[90svh] w-full overflow-hidden grain border-y border-foreground/5">
      <img
        src={storyTrekker}
        alt="A hidden viewpoint above the clouds"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "blur(8px) brightness(0.55)" }}
      />
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 ember-glow-corner pointer-events-none" />
      <div className="absolute inset-0 vignette" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div
          className={`label-mono mb-6 text-ember transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          ● A surprise awaits
        </div>
        <h3
          className={`font-display text-display-lg max-w-3xl leading-[0.98] transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          The exact location?
          <br />
          <em className="italic text-ember">That's our secret.</em>
        </h3>
        <p
          className={`mt-8 max-w-md text-body-lg text-foreground/70 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A hidden viewpoint. A moment of silence with the mountains.
          A place only Bag N' Bros travelers get to experience.
        </p>
      </div>

      <img
        src={storyCamp}
        alt=""
        aria-hidden
        className="hidden md:block absolute bottom-0 right-0 w-1/3 h-1/2 object-cover opacity-20 mix-blend-luminosity"
      />
    </div>
  );
}
