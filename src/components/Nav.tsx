import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { WHATSAPP } from "@/lib/images";

const NAV_LINKS = [
  { label: "Who we are", href: "#about" },
  { label: "What we do", href: "#what-we-do" },
  { label: "Munsiyari", href: "#munsiyari" },
  { label: "Reels", href: "#reels" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      <header
        className={`fixed top-0 inset-x-0 z-50 safe-top transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/85 border-b border-foreground/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" aria-label="Bag N' Bros — home" className="flex items-center">
            <Logo />
          </a>

          <nav className="hidden md:flex items-center gap-9 text-sm">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-foreground/75 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex btn-primary"
            >
              Plan my trip
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="md:hidden h-11 w-11 -mr-1 flex items-center justify-center text-foreground"
            >
              <MessageCircle size={20} strokeWidth={1.6} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden h-11 w-11 -mr-2 flex items-center justify-center text-foreground"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-background/97 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div className="relative h-full flex flex-col safe-top px-6">
          <div className="h-16 flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="h-11 w-11 -mr-2 flex items-center justify-center text-foreground"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center -mt-16 gap-1">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl py-3 text-foreground hover:text-ember transition-colors"
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
          <div className="pb-10 space-y-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-ember w-full"
            >
              <MessageCircle size={16} strokeWidth={1.8} />
              WhatsApp us
            </a>
            <a href="#munsiyari" onClick={() => setOpen(false)} className="btn-ghost w-full">
              View next expedition
            </a>
            <div className="label-mono text-center pt-2">
              +91 88658 48737 · @bag.n.bros
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
