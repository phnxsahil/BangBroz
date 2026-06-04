import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/images";

export function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-[60] right-3 md:right-4 bottom-3 md:bottom-4 group"
      style={{ bottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <span className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_36px_-6px_rgba(37,211,102,0.55)] transition-transform duration-200 group-active:scale-95 group-hover:scale-105">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden />
        <MessageCircle size={20} strokeWidth={2} className="relative" />
      </span>
    </a>
  );
}
