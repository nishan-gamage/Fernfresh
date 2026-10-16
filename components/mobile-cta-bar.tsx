import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site-config";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-cream/95 p-3 backdrop-blur lg:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 rounded-full border border-fern-800/25 py-3 text-sm font-medium text-fern-900"
      >
        <Phone className="h-4 w-4" aria-hidden /> Call
      </a>
      <Link
        href="/book"
        className="flex items-center justify-center rounded-full bg-fern-800 py-3 text-sm font-medium text-cream"
      >
        Book a clean
      </Link>
    </div>
  );
}
