import { MessageCircle } from "lucide-react";

const WHATSAPP =
  "https://wa.me/918865848737?text=Hi%20Bag%20N%20Bros%2C%20I%27d%20like%20to%20join%20the%20next%20expedition.";

export function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-[60] right-4 bottom-4 safe-bottom group"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <span className="absolute inset-0 rounded-full bg-ember/40 animate-pulse-ring" aria-hidden />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ember text-background shadow-[0_8px_32px_-4px_rgba(214,145,85,0.6)] transition-transform duration-200 group-active:scale-95">
        <MessageCircle size={22} strokeWidth={1.8} />
      </span>
    </a>
  );
}
