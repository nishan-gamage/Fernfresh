import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand, PageHero } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Fern Fresh Clean is an Auckland cleaning company built on reliable, high-quality cleaning and meaningful work for our team.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: ShieldCheck, title: "Trust first", body: "Vetted, insured cleaners and clear communication — you always know who is in your home and when." },
  { icon: Sparkles, title: "Consistency", body: "The same checklist and standard on every visit, so the tenth clean is as good as the first." },
  { icon: Leaf, title: "Care for the environment", body: "Eco-friendly products and plant-friendly exterior treatments wherever possible." },
  { icon: HeartHandshake, title: "Looking after our people", body: "Fair work, flexible hours and real support. A well-treated team delivers a better clean." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Fern Fresh"
        title="Auckland's trusted partner for a spotless home."
        intro="Fern Fresh Cleaning was founded with a simple mission: to give Auckland residents reliable, high-quality cleaning they can trust."
        image="/images/master-bedroom.jpg"
      />

      <section className="py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Our story" title="Your home is your sanctuary." />
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7">
            <p>
              Keeping it that way should be stress-free. That&apos;s why we built Fern Fresh around
              experienced, vetted cleaners who take real pride in their work.
            </p>
            <p>
              From regular house cleaning and Airbnb turnovers to water blasting and garden care,
              we&apos;re here to make life easier and your spaces cleaner — inside and out.
            </p>
            <p>
              Our mission is to deliver exceptional cleaning that improves our clients&apos; quality
              of life, while creating meaningful employment for the people on our team.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="What we stand for" title="Our values" />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 90}>
                <Icon className="h-7 w-7 text-fern-700" aria-hidden strokeWidth={1.4} />
                <h3 className="mt-5 font-display text-2xl text-fern-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image src="/images/living-room.jpg" alt="Bright, freshly cleaned living room" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Proudly local"
              title="Made in Aotearoa, working across Auckland."
              intro="We're a local business serving local homes, hosts and property managers — and we'd love to look after yours."
            />
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
