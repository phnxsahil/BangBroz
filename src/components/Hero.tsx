import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, Instagram } from "lucide-react";
import { IMG, WHATSAPP, INSTAGRAM, INSTAGRAM_HANDLE } from "@/lib/images";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.35]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduce) return;
    v.play().catch(() => {});
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Background media */}
      <motion.div
        style={{ y: mediaY, scale: mediaScale }}
        className="absolute inset-0 will-change-transform"
      >
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
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      </motion.div>

      {/* Warm wash — cream from bottom, soft scrim top */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-black/15 pointer-events-none" />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-background pointer-events-none"
      />

      {/* Top meta */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-20 md:top-28 inset-x-0 z-10 px-5 md:px-10 flex justify-between label-mono"
      >
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
          Booking · Winter '26
        </span>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-1.5 hover:text-ember transition-colors"
        >
          <Instagram size={11} strokeWidth={1.8} />
          {INSTAGRAM_HANDLE}
        </a>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-end pb-24 md:pb-32 px-5 md:px-10 mx-auto max-w-[1400px]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
          className="grid grid-cols-12 gap-6 items-end"
        >
          <div className="col-span-12 md:col-span-10">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="font-display text-display-xl text-foreground max-w-[18ch]"
            >
              Offbeat Himalayan
              <br />
              expeditions, <span className="italic font-normal text-ember">crafted slowly.</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="mt-6 md:mt-9 text-body-lg max-w-xl text-foreground/75"
            >
              Bag n Broz is a small travel studio for people who'd rather come back
              with a story than a checklist. Hidden valleys, real homestays, and a
              captain who knows the long way.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="mt-9 md:mt-11 flex flex-col sm:flex-row gap-3"
            >
              <a href="#munsiyari" className="btn-primary">
                See the next trip
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ghost">
                <MessageCircle size={16} strokeWidth={1.8} />
                Talk on WhatsApp
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 1 } },
              }}
              className="mt-12 md:mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 label-mono"
            >
              <span className="flex items-center gap-2">
                <span className="h-px w-6 bg-ember" />
                10,000+ travelers
              </span>
              <span>·</span>
              <span>4.9 ★★★★★</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">100+ Google reviews</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-6 inset-x-0 flex justify-center label-mono pointer-events-none"
      >
        <span className="flex flex-col items-center gap-2 text-foreground/50">
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-6 w-px bg-foreground/40"
          />
        </span>
      </motion.div>
    </section>
  );
}
