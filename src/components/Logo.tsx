type Props = {
  className?: string;
  variant?: "ink" | "paper";
  showTagline?: boolean;
};

/**
 * Bag n Bros lockup — hand-drawn three-peak mark (matching the uploaded logo)
 * paired with a Sora wordmark. No raster background, scales cleanly.
 */
export function Logo({ className = "", variant = "ink", showTagline = true }: Props) {
  const ink = variant === "ink" ? "#3B2A20" : "#F4ECE0";
  const ember = "#B85C2A";

  return (
    <span
      className={`inline-flex items-center gap-2.5 leading-none select-none ${className}`}
      aria-label="Bag n Bros"
    >
      <svg viewBox="0 0 64 40" width="38" height="24" className="shrink-0" aria-hidden>
        {/* back peak */}
        <path
          d="M2 36 L16 14 L24 24 L20 36 Z"
          fill={ink}
          opacity="0.95"
        />
        {/* main peak */}
        <path
          d="M14 36 L32 6 L50 36 Z"
          fill={ink}
        />
        {/* right peak */}
        <path
          d="M40 36 L48 18 L62 36 Z"
          fill={ink}
          opacity="0.9"
        />
        {/* snow + ember highlights */}
        <path
          d="M28 14 L32 6 L36 14 L33 18 L30 16 Z"
          fill={ember}
        />
        <path
          d="M44 24 L48 18 L51 24 L48 27 Z"
          fill={ember}
          opacity="0.85"
        />
        <path
          d="M16 22 L19 18 L22 22 L19 25 Z"
          fill={ember}
          opacity="0.7"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display tracking-tight text-[1.05rem] font-semibold"
          style={{ color: ink }}
        >
          Bag <span className="italic font-normal">n</span> Bros
        </span>
        {showTagline && (
          <span
            className="font-mono uppercase mt-1"
            style={{ color: ink, fontSize: "8.5px", letterSpacing: "0.28em", opacity: 0.65 }}
          >
            Born to Roam
          </span>
        )}
      </span>
    </span>
  );
}
