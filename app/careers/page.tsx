import type { Metadata } from "next";
import { CalendarClock, GraduationCap, HandCoins, Users } from "lucide-react";
import { CareersForm } from "@/components/careers-form";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/sections";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cleaning Jobs in Auckland",
  description:
    "Join the Fern Fresh Clean team. Flexible cleaning work across Auckland for detail-driven people.",
  alternates: { canonical: "/careers" },
};

const perks = [
  { icon: CalendarClock, title: "Flexible hours", body: "Pick up work that fits around family, study or other commitments." },
  { icon: GraduationCap, title: "Training & checklists", body: "Clear standards, proper training and professional products and equipment." },
  { icon: HandCoins, title: "Fair, reliable pay", body: "Paid on time, every time, for work you can be proud of." },
  { icon: Users, title: "A supportive team", body: "You're never on your own — help is a message away on every job." },
];

const looking = [
  "Genuine eye for detail and pride in your work",
  "Reliable, punctual and respectful of clients' homes",
  "Right to work in New Zealand",
  "Own transport is a plus, especially for turnovers",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do work you're proud of, with a team that has your back."
        intro="We're growing across Auckland and looking for detail-driven cleaners for homes, Airbnb turnovers and exterior jobs."
        image="/images/cleaner-window.jpg"
      />

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Why Fern Fresh" title="Looked-after people do the best work." />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 90}>
                <Icon className="h-7 w-7 text-fern-700" aria-hidden strokeWidth={1.4} />
                <h3 className="mt-5 font-display text-2xl text-fern-900">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="apply" className="scroll-mt-24 bg-white py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Apply" title="What we look for" />
            <ul className="mt-8 space-y-4">
              {looking.map((l) => (
                <li key={l} className="border-l-2 border-brass pl-4 text-muted">
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-line bg-cream p-6 sm:p-10 lg:col-span-7 lg:col-start-6">
            <h2 className="font-display text-3xl text-fern-900">Apply in two minutes</h2>
            <p className="mt-2 mb-8 text-muted">We review every application and will be in touch.</p>
            <CareersForm />
          </div>
        </Container>
      </section>
    </>
  );
}
