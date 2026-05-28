import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-bnb-dark.png";

const NAV_LINKS = [
  { label: "Expeditions", href: "#munsiyari" },
  { label: "Destinations", href: "#hidden" },
  { label: "Journal", href: "#journals" },
  { label: "Reels", href: "#reels" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP =
  "https://wa.me/918865848737?text=Hi%20Bag%20N%20Bros%2C%20I%27d%20like%20to%20know%20more%20about%20your%20next%20expedition.";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 safe-top transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/60 border-b border-foreground/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Mobile: hamburger left */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden h-11 w-11 -ml-2 flex items-center justify-center text-foreground"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          {/* Logo — centered on mobile, left on desktop */}
          <a
            href="#top"
            className="md:order-none order-2 md:mx-0 mx-auto flex items-center"
            aria-label="Bag N' Bros — home"
          >
            <img
              src={logo}
              alt="Bag N' Bros"
              className="h-7 md:h-9 w-auto select-none"
              draggable={false}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9 label-mono">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp / Book — right */}
          <div className="flex items-center gap-2 md:gap-3 md:order-none order-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp us"
              className="md:hidden h-11 w-11 -mr-2 flex items-center justify-center text-ember"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex btn-ember"
            >
              Book Expedition
            </a>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] md:hidden transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div className="relative h-full flex flex-col safe-top px-6">
          <div className="h-16 flex items-center justify-between">
            <img src={logo} alt="Bag N' Bros" className="h-7 w-auto" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-11 w-11 -mr-2 flex items-center justify-center text-foreground"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center -mt-16 gap-2">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl py-3 text-foreground hover:text-ember transition-colors"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 600ms ${100 + i * 60}ms ease, transform 600ms ${100 + i * 60}ms cubic-bezier(0.16,1,0.3,1)`,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="pb-10 space-y-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-ember w-full"
            >
              <MessageCircle size={16} strokeWidth={1.8} />
              WhatsApp Us
            </a>
            <div className="label-mono text-center text-foreground/40">
              +91 88658 48737 · @bag.n.bros
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
