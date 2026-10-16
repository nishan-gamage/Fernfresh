import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand, PageHero } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";
import { addOns, exteriorServices, homeServices, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Cleaning Services in Auckland",
  description:
    "Regular, deep and end-of-tenancy home cleaning, plus exterior house washing, water blasting and lawn care across Auckland.",
  alternates: { canonical: "/services" },
};

const bookingName: Record<string, string> = {
  regular: "Regular home clean",
  deep: "Deep clean",
  restoration: "End-of-tenancy / restoration",
  "house-wash": "Exterior house wash",
  "water-blasting": "Water blasting",
  "lawn-care": "Lawn & garden tidy",
};

function ServiceRow({ s, flip }: { s: Service; flip: boolean }) {
  return (
    <Reveal>
      <article id={s.slug} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] ${flip ? "lg:order-2" : ""}`}>
          <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium text-brass-ink">
            {s.price}
            {s.duration && <span className="text-muted"> · {s.duration}</span>}
          </p>
          <h3 className="mt-3 font-display text-4xl tracking-tight text-fern-900">{s.name}</h3>
          <p className="mt-4 text-lg leading-relaxed text-muted">{s.short}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {s.includes.map((x) => (
              <li key={x} className="flex gap-3 text-[15px]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-fern-500" aria-hidden />
                {x}
              </li>
            ))}
          </ul>
          <Link
            href={`/book?service=${encodeURIComponent(bookingName[s.slug])}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fern-800 hover:text-fern-950"
          >
            Request a quote <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every surface, every room, every time."
        intro="From weekly upkeep to full property restoration and exterior care — one trusted Auckland team for your whole home."
      />

      <nav aria-label="Service sections" className="sticky top-[65px] z-30 border-b border-line bg-cream/90 backdrop-blur">
        <Container className="flex gap-6 overflow-x-auto py-4 text-sm whitespace-nowrap">
          {[...homeServices, ...exteriorServices].map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="text-muted hover:text-fern-900">
              {s.name}
            </a>
          ))}
          <Link href="/airbnb" className="text-muted hover:text-fern-900">
            Airbnb turnovers
          </Link>
        </Container>
      </nav>

      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Inside the home" title="Home cleaning" />
          <div className="mt-16 space-y-24">
            {homeServices.map((s, i) => (
              <ServiceRow key={s.slug} s={s} flip={i % 2 === 1} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Add-ons" title="Finishing touches." intro="Add to any clean." />
          </div>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {addOns.map((a) => (
              <li key={a.name} className="flex items-baseline justify-between bg-cream px-7 py-6">
                <span className="font-display text-xl text-fern-900">{a.name}</span>
                <span className="text-sm font-medium text-brass-ink">{a.price}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="exterior" className="scroll-mt-28 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Outside the home"
            title="Exterior care"
            intro="Soft-washing, water blasting and garden tidies that restore street appeal and protect your surfaces."
          />
          <div className="mt-16 space-y-24">
            {exteriorServices.map((s, i) => (
              <ServiceRow key={s.slug} s={s} flip={i % 2 === 1} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
