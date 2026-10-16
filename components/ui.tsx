import Link from "next/link";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "light" | "outline" | "ghost-light";

const variants: Record<Variant, string> = {
  primary: "bg-fern-800 text-cream hover:bg-fern-900",
  light: "bg-cream text-fern-900 hover:bg-white",
  outline: "border border-fern-800/25 text-fern-900 hover:border-fern-800 hover:bg-fern-800/5",
  "ghost-light": "border border-cream/40 text-cream hover:bg-cream/10",
};

export const buttonClass = (variant: Variant = "primary", className?: string) =>
  clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
    variants[variant],
    className,
  );

export function ButtonLink({
  variant,
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={buttonClass(variant, className)} {...props} />;
}

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={clsx(
        "mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em]",
        light ? "text-sage-200" : "text-brass-ink",
      )}
    >
      <span className={clsx("h-px w-8", light ? "bg-sage-200/60" : "bg-brass")} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light,
  center,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={clsx("max-w-2xl", center && "mx-auto text-center [&>p:first-child]:justify-center")}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={clsx(
          "font-display text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl",
          light ? "text-cream" : "text-fern-900",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={clsx("mt-5 text-lg leading-relaxed", light ? "text-sage-200" : "text-muted")}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={clsx("mx-auto w-full max-w-7xl px-5 sm:px-8", className)} {...props} />;
}
