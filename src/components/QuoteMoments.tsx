import { useEffect, useRef, useState } from "react";
import storyTrekker from "@/assets/story-trekker.jpg";
import storyCamp from "@/assets/story-camp.jpg";
import destSpiti from "@/assets/dest-spiti.jpg";

type Moment = {
  quote: string;
  author: string;
  place: string;
  image: string;
  align: "left" | "right" | "center";
};

const moments: Moment[] = [
  {
    quote: "Didn't touch my phone for four days. Forgot what notifications sounded like.",
    author: "Anika · Delhi",
    place: "Khaliya Top",
    image: storyTrekker,
    align: "left",
  },
  {
    quote: "The mountain slows something inside you. I'm still moving at that speed back home.",
    author: "Rohan · Bengaluru",
    place: "Munsiyari",
    image: storyCamp,
    align: "right",
  },
  {
    quote: "Still thinking about that sunrise. Pretty sure I left a part of me up there.",
    author: "Meera · Mumbai",
    place: "The Secret Spot",
    image: destSpiti,
    align: "center",
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

export function QuoteMoments() {
  return (
    <section className="relative bg-background">
      <div className="label-mono px-5 md:px-10 pt-20 md:pt-32 pb-8 mx-auto max-w-[1500px] text-ember">
        04 / What they said after
      </div>
      <div>
        {moments.map((m, i) => (
          <MomentBlock key={i} moment={m} index={i} />
        ))}
      </div>
    </section>
  );
}

function MomentBlock({ moment, index }: { moment: Moment; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const alignCls =
    moment.align === "left"
      ? "md:items-start md:text-left"
      : moment.align === "right"
      ? "md:items-end md:text-right"
      : "md:items-center md:text-center";

  return (
    <div ref={ref} className="relative h-[80svh] md:h-[90svh] w-full overflow-hidden grain border-t border-foreground/5">
      <img
        src={moment.image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: visible ? "scale(1.06)" : "scale(1.12)",
          transition: "transform 3000ms ease-out",
        }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
      <div className="absolute inset-0 ember-glow-corner pointer-events-none" />
      <div className="absolute inset-0 vignette" />

      <div className="relative z-10 h-full mx-auto max-w-[1500px] px-6 md:px-12 flex flex-col justify-center">
        <div className={`flex flex-col gap-8 ${alignCls}`}>
          <div
            className="label-mono text-ember"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 800ms ease",
            }}
          >
            ● {moment.place}
          </div>
          <blockquote
            className="font-display italic text-display-lg leading-[1.05] max-w-3xl text-foreground"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 1400ms 200ms ease, transform 1400ms 200ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            "{moment.quote}"
          </blockquote>
          <div
            className="label-mono text-foreground/60 flex items-center gap-3"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 800ms 600ms ease",
            }}
          >
            <span className="h-px w-10 bg-foreground/30" />
            {moment.author} · {String(index + 1).padStart(2, "0")} of {String(moments.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}
