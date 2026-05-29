import { MessageCircle, ArrowRight } from "lucide-react";
import { IMG, WHATSAPP } from "@/lib/images";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <img src={IMG.ridge} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/70" />

      <div className="relative px-5 md:px-10 py-28 md:py-44 mx-auto max-w-[1400px] text-white">
        <div className="max-w-3xl">
          <div className="label-mono mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>07 — Your turn</div>
          <h2 className="font-display text-display-xl leading-[1.02]">
            The mountains are <span className="italic" style={{ color: "#F2B271" }}>calling</span>.
            <br />
            Pick up.
          </h2>
          <p className="mt-7 text-body-lg text-white/85 max-w-xl">
            Whether it’s our Munsiyari departure or something we haven’t even
            written down yet — tell us where you want to disappear, and we’ll
            send a plan by tomorrow.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ember">
              <MessageCircle size={16} strokeWidth={1.8} />
              Start on WhatsApp
            </a>
            <a
              href="#munsiyari"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              See next expedition
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
