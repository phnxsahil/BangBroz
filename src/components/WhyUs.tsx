import { ArrowRight } from "lucide-react";
import { WHATSAPP } from "@/lib/images";

const points = [
  {
    n: "01",
    title: "We actually go first",
    body: "Every itinerary is scouted by our own team — months before you board the bus. If a road's washed out or a homestay's lost its soul, we know before you do.",
  },
  {
    n: "02",
    title: "Small batches, on purpose",
    body: "Max 14 travelers. You'll know everyone's name by Day 2 — and you won't be the 40th person crowding a viewpoint at sunrise.",
  },
  {
    n: "03",
    title: "Offbeat, not unsafe",
    body: "'Hidden' doesn't mean reckless. Vetted drivers, registered stays, mountain-trained captains, 24×7 control room back in Delhi.",
  },
  {
    n: "04",
    title: "Honest pricing, no fine print",
    body: "What you see is what you pay. No surprise 'activity charges' at the campfire. No hidden GST landing in your inbox a week later.",
  },
];

export function WhyUs() {
  return (
    <section className="relative bg-background py-16 md:py-32 px-5 md:px-10 border-t border-foreground/8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="label-mono section-label mb-4">03 — What sets us apart</div>
            <h2 className="font-display text-display-lg text-foreground">
              The difference is in the <span className="italic text-ember">how</span>, not the where.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-10">
            <p className="text-body-lg section-subtext text-foreground/70">
              Anyone can sell you a Manali package. We're built for the trips
              that aren't on the brochure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-8 md:gap-y-12 gap-x-8 md:gap-x-12">
          {points.map((p) => (
            <div key={p.n} className="col-span-12 md:col-span-6 border-t border-foreground/12 pt-5 md:pt-6">
              <div className="flex items-baseline gap-4 md:gap-6 mb-2 md:mb-3">
                <span className="font-mono text-xs md:text-sm text-foreground/40">{p.n}</span>
                <h3 className="font-display text-xl md:text-3xl">{p.title}</h3>
              </div>
              <p className="text-sm md:text-base text-foreground/70 md:pl-10 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2.5 px-5 min-h-0">
            Talk to a trip captain
            <ArrowRight size={15} strokeWidth={2} />
          </a>
          <a href="#reels" className="text-xs md:text-sm text-foreground/70 hover:text-foreground transition-colors">
            or watch field reels →
          </a>
        </div>
      </div>
    </section>
  );
}
