import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { Container, Eyebrow } from "@/components/ui";
import { site, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a Clean or Get a Quote",
  description: "Request a fixed cleaning quote in Auckland. Home, Airbnb, end-of-tenancy and exterior cleaning.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <section className="bg-sand/60 pb-24 pt-36 sm:pt-44">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>Book a clean</Eyebrow>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-fern-900 sm:text-6xl">
            Let&apos;s get you a quote.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Tell us a little about your space and we&apos;ll reply with a clear, fixed price.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow icon={Phone} label="Call us" value={site.phoneDisplay} href={site.phoneHref} />
            <ContactRow
              icon={MessageCircle}
              label="WhatsApp"
              value="Message us"
              href={whatsappLink(`Hi ${site.name}, I'd like a cleaning quote.`)}
              external
            />
            <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-fern-700">
                <Clock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-muted">Response time</p>
                <p className="font-medium text-fern-900">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-line bg-cream p-6 shadow-xl shadow-fern-950/5 sm:p-10 lg:col-span-7 lg:col-start-6">
          <Suspense>
            <BookingForm />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex gap-4"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-fern-700 transition-colors group-hover:bg-fern-800 group-hover:text-cream">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <p className="text-sm text-muted">{label}</p>
        <p className="font-medium break-all text-fern-900">{value}</p>
      </div>
    </a>
  );
}
