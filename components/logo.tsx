import clsx from "clsx";

// Wordmark with a simple fern-frond mark. Swap for the client's real logo file
// when supplied.
export function Logo({ light, className }: { light?: boolean; className?: string }) {
  return (
    <span className={clsx("flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 32 32" aria-hidden className={clsx("h-8 w-8", light ? "text-sage-200" : "text-fern-700")}>
        <path
          d="M16 29C16 18 16 9 16 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        {[7, 11, 15, 19, 23].map((y, i) => {
          const w = 10 - i * 1.6;
          return (
            <g key={y} fill="currentColor" opacity={1 - i * 0.12}>
              <path d={`M16 ${y + 2} C ${16 - w * 0.6} ${y + 1}, ${16 - w} ${y - 1}, ${16 - w} ${y - 2} C ${16 - w * 0.4} ${y - 2}, 16 ${y}, 16 ${y + 2}Z`} />
              <path d={`M16 ${y + 2} C ${16 + w * 0.6} ${y + 1}, ${16 + w} ${y - 1}, ${16 + w} ${y - 2} C ${16 + w * 0.4} ${y - 2}, 16 ${y}, 16 ${y + 2}Z`} />
            </g>
          );
        })}
      </svg>
      <span className="leading-none">
        <span className={clsx("block font-display text-xl tracking-tight", light ? "text-cream" : "text-fern-900")}>
          Fern Fresh
        </span>
        <span
          className={clsx(
            "mt-0.5 block text-[0.6rem] font-medium uppercase tracking-[0.32em]",
            light ? "text-sage-200" : "text-brass-ink",
          )}
        >
          Clean · Auckland
        </span>
      </span>
    </span>
  );
}
