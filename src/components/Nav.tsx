import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WHATSAPP } from "@/lib/images";

const NAV_LINKS = [
  { label: "Who we are", href: "#about" },
  { label: "What we do", href: "#what-we-do" },
  { label: "Next Trip", href: "#munsiyari" },
  { label: "Reels", href: "#reels" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[100] pt-3 md:pt-5 px-3 md:px-8 flex justify-center pointer-events-none">
        <div
          className={`pill-nav w-full max-w-5xl h-14 md:h-18 px-4 md:px-8 rounded-full flex items-center justify-between border pointer-events-auto ${
            scrolled
              ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
              : ""
          }`}
          style={{
            transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
            background: scrolled ? "rgba(245,240,232,0.96)" : "rgba(245,240,232,0.15)",
            backdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
            borderColor: scrolled ? "rgba(180,160,130,0.3)" : "rgba(255,255,255,0.2)",
          }}
        >
          <a href="#top" aria-label="Bag N' Bros — home" className="flex items-center shrink-0">
            <Logo variant="ink" showTagline={true} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans uppercase text-[11px] tracking-[0.2em] font-semibold transition-colors duration-200"
                style={{ color: scrolled ? "#2C1810" : "#FFFFFF" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center justify-center border text-[10px] font-semibold tracking-[0.18em] uppercase rounded-full px-4 py-2 transition-all duration-300"
              style={{
                borderColor: scrolled ? "rgba(44,24,16,0.7)" : "rgba(255,255,255,0.5)",
                color: scrolled ? "#2C1810" : "#FFFFFF",
                background: "transparent",
              }}
            >
              Plan my trip
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="md:hidden h-9 w-9 flex items-center justify-center transition-colors duration-300"
              style={{ color: scrolled ? "rgba(44,24,16,0.8)" : "rgba(255,255,255,0.8)" }}
            >
              <MessageCircle size={18} strokeWidth={1.6} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden h-9 w-9 flex items-center justify-center cursor-pointer transition-colors duration-300"
              style={{ color: scrolled ? "rgba(44,24,16,0.8)" : "rgba(255,255,255,0.8)" }}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[300] md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        inert={!open ? true : undefined}
      >
        <div
          className="absolute inset-0 bg-background/97 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div className="relative z-[301] h-full flex flex-col safe-top px-5">
          <div className="h-14 flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{ position: "relative", zIndex: 310, pointerEvents: "auto", cursor: "pointer" }}
              className="h-10 w-10 -mr-1 flex items-center justify-center text-foreground"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center -mt-14 gap-0">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl md:text-5xl py-2.5 text-foreground hover:text-ember transition-colors"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 400ms ${80 + i * 50}ms ease, transform 500ms ${80 + i * 50}ms cubic-bezier(0.22,1,0.36,1)`,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="pb-8 space-y-2.5">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-ember w-full text-sm py-2.5 min-h-0"
            >
              <MessageCircle size={15} strokeWidth={1.8} />
              WhatsApp us
            </a>
            <a href="#munsiyari" onClick={() => setOpen(false)} className="btn-ghost w-full text-sm py-2.5 min-h-0">
              View next expedition
            </a>
            <a
              href="https://instagram.com/bag.n.bros"
              target="_blank"
              rel="noreferrer"
              className="label-mono flex items-center justify-center gap-2 pt-2 hover:text-ember transition-colors"
            >
              @bag.n.bros · +91 88658 48737
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
