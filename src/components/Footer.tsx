import { Instagram, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WHATSAPP } from "@/lib/images";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-background pt-20 md:pt-28 pb-10 px-5 md:px-10 border-t border-foreground/10"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-12 md:col-span-5">
            <Logo />
            <p className="mt-5 text-sm text-foreground/65 max-w-xs leading-relaxed">
              Offbeat Himalayan expeditions. Small batches. Slow roads. Real
              stories. Built by people who roam first.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary mt-6">
              <MessageCircle size={16} strokeWidth={1.8} />
              Plan my trip
            </a>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-7">
            <div className="label-mono mb-4">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-ember transition-colors">Who we are</a></li>
              <li><a href="#what-we-do" className="hover:text-ember transition-colors">What we do</a></li>
              <li><a href="#munsiyari" className="hover:text-ember transition-colors">Munsiyari</a></li>
              <li><a href="#reels" className="hover:text-ember transition-colors">Field reels</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label-mono mb-4">Trust</div>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>10,000+ travellers</li>
              <li>100+ Google reviews</li>
              <li>4.9 ★★★★★</li>
              <li>Vetted properties</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="label-mono mb-4">Reach us</div>
            <div className="space-y-3 text-sm">
              <a href="https://instagram.com/bag.n.bros" target="_blank" rel="noreferrer" className="flex items-center gap-3 group hover:text-ember transition-colors">
                <Instagram size={15} strokeWidth={1.6} /><span>@bag.n.bros</span>
                <ArrowUpRight size={12} strokeWidth={1.6} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-ember transition-colors">
                <MessageCircle size={15} strokeWidth={1.6} /><span>+91 88658 48737</span>
              </a>
              <a href="mailto:hello@bagnbros.in" className="flex items-center gap-3 hover:text-ember transition-colors">
                <Mail size={15} strokeWidth={1.6} /><span>hello@bagnbros.in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-foreground/10 flex flex-col md:flex-row justify-between gap-3 label-mono">
          <div>© {new Date().getFullYear()} Bag N’ Bros · Born to Roam</div>
          <div>Delhi · The Hills</div>
        </div>
      </div>
    </footer>
  );
}
