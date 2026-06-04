import { useState } from "react";
import { ChevronDown, MessageCircle, ArrowRight, Mountain, Calendar, Users, IndianRupee, Check, X } from "lucide-react";
import { IMG, WHATSAPP } from "@/lib/images";

type Day = { no: string; title: string; body: string; highlight?: boolean };

const itinerary: Day[] = [
  { no: "Day 00", title: "Delhi → Munsiyari", body: "Overnight drive, 633 km. Meet your captain at 6:30 PM for a briefing, then we head into the night." },
  { no: "Day 01", title: "Birthi Waterfall · Arrival", body: "A scenic mountain drive in. We stop at Birthi Waterfall on the way, then check into a cozy homestay tucked into the hills." },
  { no: "Day 02", title: "Nanda Devi Temple · Khaliya Top Trek", body: "Morning visit to the sacred Nanda Devi Temple, then the Khaliya Top trek — panoramic snow peaks and alpine meadows." },
  { no: "Day 03", title: "Darkot Village · Secret Spot", body: "Descend to Darkot — heritage homes, traditional looms. Then we slip off the map to a viewpoint only our travelers see.", highlight: true },
  { no: "Day 04", title: "Delhi · Trip Ends", body: "Early morning arrival in Delhi. Quieter heads, fuller camera rolls." },
];

const inclusions = [
  "AC Volvo / Tempo Traveler — Delhi to Delhi",
  "2 nights homestay (sharing)",
  "Experienced trip captain throughout",
  "Bonfire night (weather permitting)",
  "4 meals — 3 dinners, 3 breakfasts",
  "Tolls, parking, driver allowances",
];

const exclusions = [
  "Meals & stays outside the itinerary",
  "Travel insurance · porterage · tips",
  "Entry fees & optional activities",
  "4×4 / snow chains if needed",
  "Force-majeure (weather, roadblocks)",
  "5% GST",
];

export function MunsiyariDossier() {
  return (
    <section id="munsiyari" className="relative bg-surface">
      {/* Cover */}
      <div className="destination-hero relative h-[60svh] md:h-[85svh] w-full overflow-hidden">
        <img src={IMG.munsiyari} alt="Munsiyari ridgeline" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/50" />

        <div className="absolute top-20 inset-x-0 px-5 md:px-10 mx-auto max-w-[1400px] flex justify-between label-mono" style={{ color: "rgba(255,255,255,0.85)" }}>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Next Expedition — 8 seats left
          </span>
          <span>04 · Dossier</span>
        </div>

        <div className="relative z-10 h-full mx-auto max-w-[1400px] px-5 md:px-10 flex flex-col justify-end pb-8 md:pb-20">
          <h2 className="font-display text-display-xl text-white">Munsiyari</h2>
          <p className="mt-3 max-w-xl text-white/85 text-body">
            Five days in Kumaon — Panchachuli peaks, a sacred temple at dawn, and a
            secret viewpoint we still won't name in writing.
          </p>
        </div>
      </div>

      {/* Meta strip */}
      <div className="bg-background border-y border-foreground/8">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-6 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          <MetaStat icon={Calendar} label="Duration" value="4N / 5D" />
          <MetaStat icon={Mountain} label="Altitude" value="2,200 m" sub="Khaliya Top" />
          <MetaStat icon={Users} label="Group" value="Small batch" sub="Max 14" />
          <MetaStat icon={IndianRupee} label="From" value="6,999" sub="per person" accent />
        </div>
      </div>

      {/* Itinerary */}
      <div className="bg-background px-5 md:px-10 py-14 md:py-28 border-b border-foreground/8">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="label-mono mb-3">The route</div>
            <h3 className="font-display text-display-md">
              Five days,<br />
              one <span className="italic text-ember">slow</span> arc.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="text-body text-foreground/70 mb-8">
              Munsiyari is the kind of place the map almost forgot — a temple at
              dawn, a ridge at noon, and a hidden viewpoint that doesn't have a
              name on Google.
            </p>
            <ol className="border-t border-foreground/12">
              {itinerary.map((d, i) => (
                <DayItem key={d.no} day={d} index={i} defaultOpen={i === 0} />
              ))}
            </ol>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary mt-8 text-sm py-2.5 px-5 min-h-0">
              Reserve a seat <ArrowRight size={15} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      {/* Inclusions / Exclusions */}
      <div className="bg-surface px-5 md:px-10 py-14 md:py-24">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <div className="label-mono mb-3 text-ember">Inclusions</div>
            <h4 className="font-display text-2xl md:text-4xl mb-6">What's in the bag.</h4>
            <ul className="space-y-3">
              {inclusions.map((it) => (
                <li key={it} className="flex gap-3 text-sm md:text-base text-foreground/80">
                  <Check size={16} strokeWidth={2} className="text-ember mt-0.5 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="label-mono mb-3">Exclusions</div>
            <h4 className="font-display text-2xl md:text-4xl mb-6">What's not.</h4>
            <ul className="space-y-3">
              {exclusions.map((it) => (
                <li key={it} className="flex gap-3 text-sm md:text-base text-foreground/70">
                  <X size={16} strokeWidth={2} className="text-foreground/40 mt-0.5 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-background px-5 md:px-10 py-14 md:py-24 text-center border-t border-foreground/8">
        <div className="mx-auto max-w-2xl">
          <div className="label-mono mb-4 text-ember">Ready when you are</div>
          <h3 className="font-display text-display-lg">
            Eight seats left. <span className="italic text-ember">Yours?</span>
          </h3>
          <p className="mt-4 text-body text-foreground/70">
            DM us your dates — we'll send the full dossier and lock you in.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ember text-sm py-2.5 px-5 min-h-0">
              <MessageCircle size={15} strokeWidth={1.8} />
              WhatsApp · ₹6,999
            </a>
            <a href="#reels" className="btn-ghost text-sm py-2.5 px-5 min-h-0">
              Watch field reels <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaStat({
  icon: Icon, label, value, sub, accent,
}: { icon: typeof Calendar; label: string; value: string; sub?: string; accent?: boolean }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 label-mono mb-2">
        <Icon size={12} strokeWidth={1.6} className={accent ? "text-ember" : "text-foreground/40"} />
        {label}
      </div>
      <div className={`font-display text-2xl md:text-4xl leading-none ${accent ? "text-ember" : "text-foreground"}`}>
        {accent && <span className="text-lg align-top">₹</span>}{value}
      </div>
      {sub && <div className="mt-1.5 label-mono">{sub}</div>}
    </div>
  );
}

function DayItem({ day, index, defaultOpen }: { day: Day; index: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <li className="border-b border-foreground/12">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full py-4 md:py-6 flex items-start gap-3 md:gap-6 text-left group min-h-[44px]"
      >
        <div className="label-mono pt-1 w-8 md:w-12 shrink-0">{String(index).padStart(2, "0")}</div>
        <div className="flex-1 min-w-0">
          <div className="label-mono text-ember mb-1 flex items-center gap-2">
            {day.no}
            {day.highlight && (
              <span className="px-1.5 py-0.5 bg-ember/10 text-ember rounded-sm text-[10px]">Secret Spot</span>
            )}
          </div>
          <h4 className="font-display text-lg md:text-2xl text-foreground group-hover:text-ember transition-colors">
            {day.title}
          </h4>
          <div className="grid transition-all duration-400 ease-out" style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}>
            <div className="overflow-hidden">
              <p className="mt-2 text-sm md:text-base text-foreground/70 max-w-2xl">{day.body}</p>
            </div>
          </div>
        </div>
        <ChevronDown
          size={16} strokeWidth={1.6}
          className={`mt-1 shrink-0 text-foreground/50 transition-transform duration-300 ${open ? "rotate-180 text-ember" : ""}`}
        />
      </button>
    </li>
  );
}
