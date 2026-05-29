import { IMG } from "@/lib/images";

type Moment = { quote: string; author: string; place: string; image: string };

const moments: Moment[] = [
  { quote: "Didn’t touch my phone for four days. Forgot what notifications sounded like.", author: "Anika · Delhi", place: "Khaliya Top", image: IMG.trekker },
  { quote: "The mountain slows something inside you. I’m still moving at that speed back home.", author: "Rohan · Bengaluru", place: "Munsiyari", image: IMG.village },
  { quote: "Still thinking about that sunrise. Pretty sure I left a part of me up there.", author: "Meera · Mumbai", place: "The Secret Spot", image: IMG.sunset },
];

export function QuoteMoments() {
  return (
    <section className="relative bg-surface py-20 md:py-32 px-5 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-8">
            <div className="label-mono mb-4 text-ember">06 — Travelers</div>
            <h2 className="font-display text-display-lg">
              What they said <span className="italic text-ember">after.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {moments.map((m, i) => (
            <article key={i} className="col-span-12 md:col-span-4 bg-background rounded-2xl overflow-hidden border border-foreground/8 flex flex-col">
              <div className="aspect-[5/4] overflow-hidden">
                <img src={m.image} alt={m.place} className="h-full w-full object-cover" />
              </div>
              <div className="p-7 md:p-8 flex-1 flex flex-col">
                <p className="font-display italic text-2xl md:text-[1.65rem] leading-snug text-foreground">
                  “{m.quote}”
                </p>
                <div className="mt-6 pt-6 border-t border-foreground/10 flex items-center justify-between label-mono">
                  <span>{m.author}</span>
                  <span className="text-ember">{m.place}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-6 label-mono">
          <span>★ 4.9 / 5</span>
          <span>·</span>
          <span>100+ Google reviews</span>
          <span>·</span>
          <span className="hidden sm:inline">10,000+ travelers since 2019</span>
        </div>
      </div>
    </section>
  );
}
