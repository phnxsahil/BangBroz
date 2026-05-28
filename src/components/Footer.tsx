import { Instagram, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-bnb-dark.png";

const WHATSAPP = "https://wa.me/918865848737";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-background pt-24 md:pt-32 pb-10 px-5 md:px-10 border-t border-foreground/5 overflow-hidden"
    >
      <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent" />

      <div className="mx-auto max-w-[1500px]">
        {/* Big editorial closing line */}
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-28">
          <div className="col-span-12 md:col-span-9">
            <div className="label-mono mb-5 text-ember">Born to Roam</div>
            <h2 className="font-display text-display-lg leading-[0.96] max-w-3xl">
              The mountains are still
              <br />
              <em className="italic text-ember">calling</em>.
            </h2>
            <p className="mt-7 text-body-lg text-foreground/70 max-w-md">
              Tell us where you've been wanting to disappear to —
              we'll plan the rest.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-ember mt-8"
            >
              <MessageCircle size={14} strokeWidth={1.8} />
              Start a conversation
            </a>
          </div>
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 border-t border-foreground/10 pt-12">
          <div className="col-span-12 md:col-span-4">
            <img src={logo} alt="Bag N' Bros" className="h-10 w-auto mb-5" />
            <p className="text-sm text-foreground/60 max-w-xs leading-relaxed">
              Offbeat Himalayan expeditions. Small batches. Slow roads.
              Real stories.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label-mono mb-4">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#munsiyari" className="hover:text-ember transition-colors">Munsiyari</a></li>
              <li><a href="#hidden" className="hover:text-ember transition-colors">Hidden Spots</a></li>
              <li><a href="#reels" className="hover:text-ember transition-colors">Field Reels</a></li>
              <li><a href="#journals" className="hover:text-ember transition-colors">Journal</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="label-mono mb-4">Trust</div>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>10,000+ travellers</li>
              <li>100+ Google reviews</li>
              <li>4.9 ★★★★★</li>
              <li>Trusted properties</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="label-mono mb-4">Reach us</div>
            <div className="space-y-3 text-sm">
              <a
                href="https://instagram.com/bag.n.bros"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:text-ember transition-colors"
              >
                <Instagram size={15} strokeWidth={1.5} />
                @bag.n.bros
                <ArrowUpRight size={12} strokeWidth={1.5} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:text-ember transition-colors"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                +91 88658 48737
              </a>
              <a
                href="mailto:hello@bagnbros.in"
                className="flex items-center gap-3 group hover:text-ember transition-colors"
              >
                <Mail size={15} strokeWidth={1.5} />
                hello@bagnbros.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-foreground/5 flex flex-col md:flex-row justify-between gap-3 label-mono text-foreground/40">
          <div>© {new Date().getFullYear()} Bag N' Bros · Born to Roam</div>
          <div>Manali · Delhi · The Hills</div>
        </div>
      </div>
    </footer>
  );
}
