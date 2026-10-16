import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand, PageHero } from "@/components/sections";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { addOns, exteriorServices, homeServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Cleaning Prices in Auckland",
  description:
    "Transparent cleaning prices in Auckland. Regular cleans from $89, deep cleans from $149, restoration from $249. No hidden fees.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear prices. No hidden fees."
        intro="Starting prices are for a 1–2 bedroom, 1 bathroom home. We confirm a fixed quote for your home before we start."
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <div
                  className={`flex h-full flex-col rounded-[2rem] p-8 sm:p-10 ${
                    i === 1 ? "bg-fern-900 text-cream" : "border border-line bg-white"
                  }`}
                >
                  {i === 1 && (
                    <span className="mb-6 self-start rounded-full bg-sage-200/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sage-200">
                      Most booked
                    </span>
                  )}
                  <h2 className={`font-display text-3xl ${i === 1 ? "" : "text-fern-900"}`}>{s.name}</h2>
                  <p className={`mt-2 text-sm ${i === 1 ? "text-sage-200" : "text-muted"}`}>{s.duration}</p>
                  <p className="mt-8 font-display text-5xl tracking-tight">{s.price.replace("From ", "")}</p>
                  <p className={`text-sm ${i === 1 ? "text-sage-200" : "text-muted"}`}>starting price</p>
                  <ul className={`mt-8 flex-1 space-y-3 border-t pt-8 text-[15px] ${i === 1 ? "border-sage-200/20" : "border-line"}`}>
                    {s.includes.map((x) => (
                      <li key={x} className="flex gap-3">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${i === 1 ? "text-sage-200" : "text-fern-500"}`} aria-hidden />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href="/book" variant={i === 1 ? "light" : "primary"} className="mt-10">
                    Get my quote
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Prices increase with additional bedrooms and bathrooms. Airbnb turnovers are{" "}
            <Link href="/airbnb" className="text-fern-800 underline underline-offset-4">
              quoted per property
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Add-ons" title="Extras" />
            <PriceList items={addOns.map((a) => ({ name: a.name, price: a.price }))} />
          </div>
          <div>
            <SectionHeading eyebrow="Exterior" title="Outdoor services" />
            <PriceList items={exteriorServices.map((s) => ({ name: s.name, price: s.price }))} />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function PriceList({ items }: { items: { name: string; price: string }[] }) {
  return (
    <ul className="mt-10 divide-y divide-line border-y border-line">
      {items.map((i) => (
        <li key={i.name} className="flex items-baseline justify-between gap-4 py-5">
          <span className="font-display text-xl text-fern-900">{i.name}</span>
          <span className="text-sm font-medium text-brass-ink">{i.price}</span>
        </li>
      ))}
    </ul>
  );
}
