import { MessageCircle, ArrowRight, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { IMG, WHATSAPP, INSTAGRAM, INSTAGRAM_HANDLE } from "@/lib/images";

export function FinalCTA() {
  return (
    <section className="cta-final relative overflow-hidden">
      <img src={IMG.ridge} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/75" />

      <div className="relative px-5 md:px-10 py-20 md:py-40 mx-auto max-w-[1400px] text-white">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-[#D9743B]" />
            <span className="label-mono section-label" style={{ color: "rgba(255,255,255,0.7)" }}>
              07 — Your turn
            </span>
          </div>
          <h2 className="font-display text-display-xl leading-[1.02]">
            Your story starts<br />
            where the <span className="italic font-normal" style={{ color: "#E89A6B" }}>road ends.</span>
          </h2>
          <p className="mt-5 text-body text-white/85 max-w-xl">
            Whether it's our Munsiyari departure or somewhere we haven't even written
            down yet — tell us where you want to disappear, and we'll send a plan
            by tomorrow.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ember text-sm py-2.5 px-5 min-h-0">
              <MessageCircle size={15} strokeWidth={1.8} />
              Start on WhatsApp
            </a>
            <a href="#munsiyari" className="btn-ghost text-sm py-2.5 px-5 min-h-0" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.35)" }}>
              See next expedition
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </div>

          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 label-mono text-white/70 hover:text-white transition-colors"
          >
            <Instagram size={12} strokeWidth={1.8} />
            {INSTAGRAM_HANDLE} · daily field clips
          </a>
        </motion.div>
      </div>
    </section>
  );
}
