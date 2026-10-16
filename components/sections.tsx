import Image from "next/image";
import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site-config";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-sand/60 pb-16 pt-36 sm:pb-20 sm:pt-44">
      <Container className="grid items-end gap-12 lg:grid-cols-12">
        <div className={image ? "lg:col-span-7" : "lg:col-span-9"}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-fern-900 text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:col-span-5">
            <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="animate-slow-zoom object-cover" />
          </div>
        )}
      </Container>
    </section>
  );
}

export function CtaBand({
  title = "Come home to a cleaner, calmer space.",
  body = "Tell us about your home or property and we will come back with a clear, fixed quote — usually the same day.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-fern-900 sm:rounded-[2.5rem]">
        <Image src="/images/master-bedroom.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-fern-950 via-fern-950/85 to-fern-950/40" />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-2xl">
            <Eyebrow light>Book with confidence</Eyebrow>
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-cream text-balance sm:text-6xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sage-200">{body}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book" variant="light">
                Get your quote
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-cream/10"
              >
                <Phone className="h-4 w-4" aria-hidden /> {site.phoneDisplay}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl text-fern-900 [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden
              className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-fern-800/20 text-base transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
