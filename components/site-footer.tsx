import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { nav, serviceAreas, site } from "@/lib/site-config";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await currentYear();
  return (
    <footer className="bg-fern-950 pb-28 pt-20 text-sage-200 lg:pb-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm leading-relaxed text-sage-200/80">
              Premium home, short-stay and exterior cleaning for Auckland homeowners, hosts and
              property managers.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-cream">
                <Phone className="h-4 w-4" aria-hidden /> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-cream">
                <Mail className="h-4 w-4" aria-hidden /> {site.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brass">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-cream">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="hover:text-cream">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brass">Areas we serve</h3>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              {serviceAreas.slice(0, 7).map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brass">Follow along</h3>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-cream"
            >
              Facebook →
            </a>
            <p className="mt-8 text-sm text-sage-200/70">
              Looking for work?{" "}
              <Link href="/careers" className="text-cream underline underline-offset-4">
                Join our team
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-sage-200/15 pt-8 text-xs text-sage-200/60 sm:flex-row">
          <p>
            © {year} {site.legalName}. Auckland, New Zealand.
          </p>
          <p>Fully insured · Vetted cleaners · Eco-friendly products</p>
        </div>
      </Container>
    </footer>
  );
}
