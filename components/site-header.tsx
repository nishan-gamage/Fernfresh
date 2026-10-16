"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonClass } from "@/components/ui";
import { nav, site } from "@/lib/site-config";

// Pages whose hero is a full-bleed photo, so the header starts transparent.
const overlayRoutes = new Set(["/", "/airbnb"]);

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Remember which page the menu was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const transparent = overlayRoutes.has(pathname) && !scrolled && !open;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent py-5"
          : "border-b border-line/70 bg-cream/90 py-3 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo light={transparent} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative text-sm tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-current after:transition-all",
                pathname.startsWith(item.href) ? "after:w-full" : "after:w-0 hover:after:w-full",
                transparent ? "text-cream/90 hover:text-cream" : "text-ink/80 hover:text-fern-900",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className={clsx(
              "flex items-center gap-2 text-sm",
              transparent ? "text-cream/90" : "text-ink/80",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phoneDisplay}
          </a>
          <Link href="/book" className={buttonClass(transparent ? "light" : "primary", "py-2.5")}>
            Book a clean
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpenOn(open ? null : pathname)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={clsx("rounded-full p-2 lg:hidden", transparent ? "text-cream" : "text-fern-900")}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-64px)] overflow-y-auto bg-cream px-5 pb-10 pt-6 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-4 font-display text-2xl text-fern-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Link href="/book" className={buttonClass("primary")}>
              Book a clean
            </Link>
            <a href={site.phoneHref} className={buttonClass("outline")}>
              <Phone className="h-4 w-4" aria-hidden /> Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
