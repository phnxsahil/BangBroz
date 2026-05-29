import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, Play } from "lucide-react";
import { IMG, WHATSAPP } from "@/lib/images";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-background">
      {/* Background: video over photo poster — no parallax wobble */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroPeak}
          alt="Himalayan ridge at dawn"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          poster={IMG.heroPeak}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Light-mode wash: warm paper from below, soft top scrim for nav */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      {/* Top meta */}
      <div className="absolute top-24 md:top-28 inset-x-0 z-10 px-5 md:px-10 flex justify-between label-mono animate-reveal-fade delay-300">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          Booking · Winter ’26
        </span>
        <span className="hidden sm:block">Munsiyari · 30°N 80°E</span>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-end pb-20 md:pb-28 px-5 md:px-10 mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-display-xl text-foreground animate-reveal-up">
              Offbeat Himalayan
              <br />
              expeditions, <span className="italic text-ember">crafted slowly.</span>
            </h1>
            <p className="mt-6 md:mt-8 text-body-lg max-w-xl text-foreground/75 animate-reveal-up delay-200">
              Bag N’ Bros is a small travel studio for people who’d rather come
              back with a story than a checklist. Hidden valleys, real
              homestays, and a captain who knows the long way.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 animate-reveal-up delay-300">
              <a href="#munsiyari" className="btn-primary">
                See the next trip
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost">
                <MessageCircle size={16} strokeWidth={1.8} />
                Talk on WhatsApp
              </a>
            </div>

            <div className="mt-10 md:mt-14 flex items-center gap-6 label-mono animate-reveal-fade delay-500">
              <span className="flex items-center gap-2">
                <Play size={11} strokeWidth={2} fill="currentColor" className="text-ember" />
                Live footage from the road
              </span>
              <span className="hidden sm:inline text-foreground/40">·</span>
              <span className="hidden sm:inline">10,000+ travelers · 4.9 ★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
