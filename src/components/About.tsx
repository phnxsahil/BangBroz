import { ArrowRight } from "lucide-react";
import { IMG, WHATSAPP } from "@/lib/images";

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-36 px-5 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-5 md:sticky md:top-28">
            <div className="label-mono mb-5">01 — Who we are</div>
            <h2 className="font-display text-display-lg text-foreground">
              A two-person studio that <span className="italic text-ember">grew into a tribe</span>.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-6 text-body-lg text-foreground/75">
            <p>
              We started in 2019 with one borrowed Tempo Traveller, a thermos of chai
              and a stubborn belief that the best places in the Himalayas weren’t on
              anyone’s top-ten list. Five years and ten thousand travelers later,
              we’re still chasing that exact feeling.
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
              className="inline-flex items-center gap-2 text-foreground border-b border-foreground/40 pb-1 hover:text-ember hover:border-ember transition-colors"
            >
              Tell us where you want to disappear
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* Image strip */}
        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-4 md:gap-6">
          <figure className="col-span-12 md:col-span-7 aspect-[16/10] overflow-hidden rounded-lg">
            <img src={IMG.group} alt="Group of trekkers on a Himalayan road" className="h-full w-full object-cover" />
          </figure>
          <figure className="col-span-6 md:col-span-5 aspect-[4/5] overflow-hidden rounded-lg">
            <img src={IMG.chai} alt="Hot chai in a steel cup" className="h-full w-full object-cover" />
          </figure>
          <figure className="col-span-6 md:col-span-5 md:col-start-1 aspect-[4/5] overflow-hidden rounded-lg">
            <img src={IMG.tent} alt="Camp under the stars" className="h-full w-full object-cover" />
          </figure>
          <figure className="col-span-12 md:col-span-7 aspect-[16/10] overflow-hidden rounded-lg">
            <img src={IMG.road} alt="Empty mountain road" className="h-full w-full object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
}
