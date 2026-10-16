import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck, Camera, Check, Layers, Package, Sparkles, BedDouble } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand, Faq } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { airbnbIncludes } from "@/lib/services";
import { airbnbFaq } from "@/lib/faq";
import { whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Airbnb & Short-stay Cleaning in Auckland",
  description:
    "Reliable Airbnb and short-stay turnover cleaning in Auckland: linen changes, restocking, photo reports and same-day changeovers.",
  alternates: { canonical: "/airbnb" },
};

const icons = [Sparkles, BedDouble, Package, Camera, CalendarCheck, Layers];

const forWho = [
  "Airbnb & Booking.com hosts",
  "Holiday homes & baches",
  "Serviced and corporate apartments",
  "Co-hosts managing multiple listings",
];

export default function AirbnbPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-fern-950 pb-16 pt-36 sm:pb-24">
        <Image
          src="/images/bedroom-styled.jpg"
          alt="Styled short-stay bedroom"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom -z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-fern-950 via-fern-950/60 to-fern-950/25" />
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-fern-950/70 to-transparent" />
        <Container>
          <div className="max-w-3xl">
            <Eyebrow light>Airbnb & short-stay</Eyebrow>
            <h1 className="font-display text-5xl leading-[1] tracking-tight text-cream text-balance sm:text-7xl">
              Every guest walks into a five-star welcome.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
              Turnover cleaning, linen and restocking for Auckland hosts — scheduled around your
              bookings, with a photo report after every stay.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book?service=Airbnb%20%2F%20short-stay%20turnover" variant="light">
                Get a host quote
              </ButtonLink>
              <a
                href={whatsappLink("Hi Fern Fresh, I host a short-stay property and I'd like to talk about turnover cleaning.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cream/40 px-6 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-cream/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why hosts choose us"
              title="Your reviews depend on the clean. So does our reputation."
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-muted">
              Guests notice everything — a hair on the pillow, a smudge on the mirror, a missing
              teaspoon. We clean to a property-specific checklist, stage the space to match your
              listing photos and tell you about anything that needs attention before the next
              guest arrives.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {forWho.map((w) => (
                <li key={w} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-fern-500" aria-hidden />
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-fern-900 py-24 text-cream sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading light eyebrow="What's included" title="A complete turnover, not just a tidy." />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-sage-200/15 sm:grid-cols-2 lg:grid-cols-3">
            {airbnbIncludes.map((item, i) => {
              const Icon = icons[i];
              return (
                <div key={item.title} className="bg-fern-900 p-8 sm:p-10">
                  <Icon className="h-7 w-7 text-sage-200" aria-hidden strokeWidth={1.4} />
                  <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-sage-200/85">{item.body}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image src="/images/bathroom.jpg" alt="Spotless guest bathroom" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Pricing for hosts"
              title="Quoted per property, fixed per turnover."
              intro="Every listing is different, so we price each one on its size, linen setup and turnover frequency. You get one fixed rate per turnover — no surprises on busy weekends."
            />
            <ul className="mt-8 space-y-3">
              {["Fixed price per turnover", "Discounts for multiple listings", "Deep cleans scheduled between seasons"].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-fern-500" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <ButtonLink href="/book?service=Airbnb%20%2F%20short-stay%20turnover" className="mt-10">
              Get my turnover rate
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Host FAQ" title="Good to know." />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Faq items={airbnbFaq} />
          </div>
        </Container>
      </section>

      <div className="pt-3 sm:pt-5">
        <CtaBand
          title="Host more. Worry less."
          body="Send us your listing and typical booking pattern and we'll come back with a fixed turnover rate."
        />
      </div>
    </>
  );
}
