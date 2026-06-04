import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Instagram } from "lucide-react";
import { IMG, WHATSAPP, INSTAGRAM, INSTAGRAM_HANDLE } from "@/lib/images";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3214448/3214448-uhd_2560_1440_25fps.mp4";

const heroImages = [
  IMG.heroPeak,
  IMG.heroValley,
  IMG.ridge,
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
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

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="hero-section relative w-full overflow-x-hidden bg-background z-[1]"
    >
      {/* Background media with crossfade */}
      <motion.div
        style={{ y: mediaY, scale: mediaScale }}
        className="hero-image absolute inset-0 will-change-transform"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIndex}
            src={heroImages[imgIndex]}
            alt="Himalayan landscape"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

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

      {/* Directional gradient scrim — darkens left side for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(108deg, rgba(8,5,2,0.52) 0%, rgba(8,5,2,0.28) 42%, rgba(8,5,2,0.04) 68%, transparent 100%)",
          zIndex: 1,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-black/10 pointer-events-none" />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-background pointer-events-none"
      />

      {/* Top meta */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-16 md:top-24 inset-x-0 z-10 px-5 md:px-10 flex justify-between label-mono"
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
      <div className="hero-content relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-heading font-display text-display-xl"
          style={{ color: "#FFFFFF" }}
        >
          Offbeat Himalayan
          <br />
          expeditions, <span className="italic-accent italic font-normal" style={{ color: "#C8682A" }}>crafted slowly.</span>
        </motion.h1>

        <div className="hero-main-group">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-body"
          >
            Bag n Broz is a small travel studio for people who'd rather come back
            with a story than a checklist. Hidden valleys, real homestays, and a
            captain who knows the long way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-btn-row"
          >
            <a
              href="#munsiyari"
              className="inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 hover:opacity-90"
              style={{ minHeight: 56, padding: "0 36px", fontSize: 17, fontWeight: 600, borderRadius: 28, background: "#1A1208", color: "#fff" }}
            >
              See the next trip
              <ArrowRight size={17} strokeWidth={2} style={{ marginLeft: 8 }} />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={20} strokeWidth={1.6} className="icon" />
              Talk on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hero-trust-bar flex flex-wrap items-center gap-x-8 gap-y-2"
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

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute flex justify-center label-mono pointer-events-none"
        style={{ bottom: 24, left: "50%", transform: "translateX(-50%)" }}
      >
        <span className="flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
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
