type Props = {
  className?: string;
  variant?: "ink" | "paper";
};

/**
 * Bag N' Bros wordmark — clean, no background, scales cleanly.
 * Pairs the Instrument Serif "N" with monospaced uppercase wordmarks for a
 * modern editorial feel that lives well on any surface.
 */
export function Logo({ className = "", variant = "ink" }: Props) {
  const color = variant === "ink" ? "#161512" : "#FAF8F4";
  return (
    <span
      className={`inline-flex items-center gap-2 leading-none select-none ${className}`}
      aria-label="Bag N' Bros"
    >
      <svg
        viewBox="0 0 36 36"
        width="28"
        height="28"
        className="shrink-0"
        aria-hidden
      >
        <circle cx="18" cy="18" r="17" fill="none" stroke={color} strokeWidth="1.25" />
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Instrument Serif', serif"
          fontStyle="italic"
          fontSize="20"
          fill={color}
        >
          b
        </text>
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.05rem] tracking-tight"
          style={{ color }}
        >
          Bag <span className="italic">n</span> Bros
        </span>
        <span
          className="font-mono uppercase mt-0.5"
          style={{ color, fontSize: "8px", letterSpacing: "0.24em", opacity: 0.7 }}
        >
          Born to Roam
        </span>
      </span>
    </span>
  );
}
