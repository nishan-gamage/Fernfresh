import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Home, KeyRound, Leaf, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { QuickQuote } from "@/components/quick-quote";
import { Reveal } from "@/components/reveal";
import { CtaBand, Faq } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { homeServices } from "@/lib/services";
import { serviceAreas } from "@/lib/site-config";
import { homeFaq } from "@/lib/faq";

const promises = [
  { icon: ShieldCheck, title: "Fully insured & vetted", body: "Every cleaner is background-checked, trained and covered." },
  { icon: Leaf, title: "Eco-friendly products", body: "Gentle on your family, pets, surfaces and the planet." },
  { icon: Sparkles, title: "Satisfaction guaranteed", body: "Not quite right? Tell us within 24 hours and we'll put it right." },
  { icon: Check, title: "Transparent pricing", body: "Clear, fixed quotes. No hidden fees, no surprises." },
];

const audiences = [
  {
    icon: Home,
    title: "Homeowners",
    body: "Regular and deep cleans for busy professionals and families who want their evenings and weekends back.",
    href: "/services",
    image: "/images/living-room.jpg",
  },
  {
    icon: KeyRound,
    title: "Airbnb & short-stay hosts",
    body: "Reliable turnovers, linen and restocking between guests, so every review mentions how spotless it was.",
    href: "/airbnb",
    image: "/images/airbnb-bedroom.jpg",
  },
  {
    icon: Building2,
    title: "Landlords & property managers",
    body: "End-of-tenancy and restoration cleans that get properties inspection-ready and back on the market fast.",
    href: "/services#restoration",
    image: "/images/apartment.jpg",
  },
];

const steps = [
  { n: "01", title: "Tell us about your space", body: "Share your suburb, size and what you need — online, on WhatsApp or by phone." },
  { n: "02", title: "Get a clear, fixed quote", body: "We confirm the price and scope up front, usually the same day." },
  { n: "03", title: "We clean to our standard", body: "A vetted, insured team arrives on time with eco-friendly products and a detailed checklist." },
  { n: "04", title: "Walk into fresh", body: "Not perfect? Let us know within 24 hours and we'll come back and make it right." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-fern-950 pb-14 pt-32 sm:pb-20">
        <Image
          src="/images/home-exterior.jpg"
          alt="Modern Auckland home at dusk"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom -z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-fern-950 via-fern-950/55 to-fern-950/20" />
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-fern-950/70 to-transparent" />
        <Container>
          <div className="max-w-3xl">
            <Eyebrow light>Premium cleaning · Auckland</Eyebrow>
            <h1 className="font-display text-5xl leading-[1] tracking-tight text-cream text-balance sm:text-7xl lg:text-[5.5rem]">
              Come home to <em className="font-normal text-sage-200">fresh.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl">
              Meticulous home cleaning, Airbnb turnovers and end-of-tenancy cleans by a vetted,
              insured Auckland team who treat your space like their own.
            </p>
          </div>
          <div className="mt-10 max-w-4xl">
            <QuickQuote />
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-cream/80">
            {["Fully insured", "Vetted cleaners", "Eco-friendly products", "Satisfaction guaranteed"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-sage-200" aria-hidden /> {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Intro / positioning */}
      <section className="py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>The Fern Fresh standard</Eyebrow>
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-fern-900 text-balance sm:text-5xl">
              Hotel-level detail, for the place you actually live.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-muted">
              Your home is your sanctuary, and keeping it that way shouldn&apos;t be another job on
              your list. We bring a trained, consistent team, a room-by-room checklist and
              professional-grade, eco-friendly products to every visit — so the clean is the same
              high standard every single time.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {promises.map(({ icon: Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-6 w-6 text-fern-700" aria-hidden strokeWidth={1.5} />
                  <h3 className="mt-3 font-medium text-fern-900">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Audiences */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Who we clean for" title="One standard. Three kinds of client." />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <Link
                  href={a.href}
                  className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-fern-900 p-7 text-cream"
                >
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fern-950/95 via-fern-950/35 to-transparent" />
                  <div className="relative">
                    <a.icon className="h-6 w-6 text-sage-200" aria-hidden strokeWidth={1.5} />
                    <h3 className="mt-4 font-display text-3xl">{a.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-cream/80">{a.body}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Home cleaning"
                title="Choose the clean your home needs."
                intro="Transparent starting prices for a 1–2 bedroom, 1 bathroom home. Larger homes are quoted on size."
              />
            </Reveal>
            <ButtonLink href="/pricing" variant="outline" className="self-start md:self-auto">
              See all pricing
            </ButtonLink>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-cream">
                  <div className="relative aspect-[16/10]">
                    <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl text-fern-900">{s.name}</h3>
                      <p className="shrink-0 text-sm font-medium text-brass-ink">{s.price}</p>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.short}</p>
                    <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-[15px]">
                      {s.includes.map((x) => (
                        <li key={x} className="flex gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-fern-500" aria-hidden />
                          {x}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/book?service=${encodeURIComponent(s.slug === "deep" ? "Deep clean" : s.slug === "restoration" ? "End-of-tenancy / restoration" : "Regular home clean")}`}
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-fern-800 hover:text-fern-950"
                    >
                      Book this clean <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Airbnb feature */}
      <section className="overflow-hidden bg-fern-900 py-24 text-cream sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src="/images/airbnb-bedroom.jpg" alt="Freshly made guest bedroom ready for check-in" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 right-4 max-w-[15rem] rounded-2xl bg-cream p-5 text-fern-900 shadow-2xl sm:-right-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brass-ink">After every stay</p>
              <p className="mt-2 font-display text-xl leading-snug">Photo report sent before your next guest arrives.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              light
              eyebrow="Airbnb & short-stay"
              title="Five-star turnovers, without the five-alarm scramble."
              intro="We work around your check-out and check-in times, reset the space to listing-photo standard and keep you updated — so you can host more and worry less."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {["Turnover cleaning", "Linen & towel change", "Guest essentials restocked", "Before & after photos", "Same-day changeovers", "Seasonal deep cleans"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sage-100">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-sage-200/15">
                    <Check className="h-3.5 w-3.5 text-sage-200" aria-hidden />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/airbnb" variant="light">
                Explore host services
              </ButtonLink>
              <ButtonLink href="/book?service=Airbnb%20%2F%20short-stay%20turnover" variant="ghost-light">
                Get a host quote
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="How it works" title="Effortless from first message to final polish." />
          </Reveal>
          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <li className="border-t border-fern-800/20 pt-6">
                  <span className="font-display text-5xl text-brass">{s.n}</span>
                  <h3 className="mt-5 text-lg font-medium text-fern-900">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Exterior + team split */}
      <section className="pb-24 sm:pb-32">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Link href="/services#exterior" className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2rem] p-8 text-cream sm:p-10">
              <Image src="/images/house-exterior.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-fern-950/90 to-fern-950/10" />
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-200">Outside, too</p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">Exterior wash, water blasting & lawn care</h3>
                <p className="mt-3 max-w-md text-cream/80">Restore your street appeal with soft-washing, driveway and deck blasting, and garden tidies.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  View exterior services <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Link href="/careers" className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[2rem] p-8 text-cream sm:p-10">
              <Image src="/images/cleaner-window.jpg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-fern-950/90 to-fern-950/10" />
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-200">Our people</p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">Great cleans start with a team that&apos;s looked after.</h3>
                <p className="mt-3 max-w-md text-cream/80">We&apos;re always looking for detail-driven cleaners across Auckland. Flexible hours, real support.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Join the team <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Areas + FAQ */}
      <section className="bg-white py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading eyebrow="Service areas" title="Across Auckland." />
            <ul className="mt-8 flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <li key={a} className="rounded-full border border-line bg-cream px-4 py-2 text-sm text-fern-900">
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">Not sure if we cover your suburb? Just ask.</p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
            <h2 className="mb-6 font-display text-3xl text-fern-900">Questions, answered</h2>
            <Faq items={homeFaq} />
          </Reveal>
        </Container>
      </section>

      <div className="pt-3 sm:pt-5">
        <CtaBand />
      </div>
    </>
  );
}
