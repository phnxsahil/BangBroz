import { ArrowRight, Compass, Tent, Map, MessageCircle } from "lucide-react";
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
    body: "Have a date, a budget and a dream? We design the route, book the stays and ride along if you’d like.",
  },
  {
    icon: Tent,
    title: "Private group trips",
    body: "College batches, work crews, families. We close the bus, light the bonfire and keep the energy honest.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-surface py-24 md:py-36 px-5 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="label-mono mb-5">02 — What we do</div>
            <h2 className="font-display text-display-lg text-foreground">
              Three ways to roam <span className="italic text-ember">with us</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-14">
            <p className="text-body-lg text-foreground/70">
              Whichever route you take, the rhythm stays the same — small groups,
              good food, slow mornings, and stories that travel home with you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="col-span-12 md:col-span-4 group bg-background border border-foreground/8 rounded-xl p-7 md:p-9 flex flex-col hover:border-foreground/25 transition-colors"
            >
              <div className="flex items-center justify-between mb-12 md:mb-16">
                <div className="h-11 w-11 rounded-full bg-surface flex items-center justify-center">
                  <s.icon size={18} strokeWidth={1.6} className="text-foreground" />
                </div>
                <span className="label-mono">0{i + 1}</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">{s.title}</h3>
              <p className="text-foreground/70 mb-8 flex-1">{s.body}</p>
              <a
                href={i === 0 ? "#munsiyari" : WHATSAPP}
                target={i === 0 ? undefined : "_blank"}
                rel={i === 0 ? undefined : "noreferrer"}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-ember transition-colors"
              >
                {i === 0 ? "See next departure" : i === 1 ? "Design a trip" : "Get a group quote"}
                <ArrowRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-16 md:mt-24 relative overflow-hidden rounded-2xl">
          <img src={IMG.heroValley} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="relative px-7 md:px-14 py-14 md:py-20 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8 text-white">
              <div className="label-mono mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Not sure where to start?</div>
              <h3 className="font-display text-display-md leading-tight">
                Tell us how many days you have. We’ll send a route by tomorrow.
              </h3>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-ember"
              >
                <MessageCircle size={16} strokeWidth={1.8} />
                Start on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
