import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/images";

export function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-[60] right-4 bottom-4 group"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.55)] transition-transform duration-200 group-active:scale-95 group-hover:scale-105">
        <MessageCircle size={22} strokeWidth={2} />
      </span>
    </a>
  );
}
