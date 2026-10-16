// Single source of truth for business details. Everything here comes from the
// current fernfreshclean.com site or their Facebook page. Leave a value null
// rather than guessing — components hide anything that is null.

export const site = {
  name: "Fern Fresh Clean",
  legalName: "Fern Fresh Cleaning",
  url: "https://fernfreshclean.com",
  tagline: "Premium home & short-stay cleaning across Auckland",
  description:
    "Fern Fresh Clean provides premium residential cleaning, Airbnb and short-stay turnovers, end-of-tenancy and exterior care across Auckland. Vetted, insured cleaners and eco-friendly products.",
  phoneDisplay: "021 221 7625",
  phoneHref: "tel:+64212217625",
  // Assumes the business mobile is on WhatsApp. Confirm with the client.
  whatsapp: "64212217625",
  email: "accounts@fernfreshclean.com",
  city: "Auckland",
  region: "Auckland",
  country: "NZ",
  facebook: "https://www.facebook.com/profile.php?id=61558382174542",
  instagram: null as string | null,
  googleReviews: null as string | null,
  hours: null as string | null,
  nzbn: null as string | null,
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/airbnb", label: "Airbnb & Short-stay" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
] as const;

// Suburbs are a starting list for local SEO; trim to where the team actually works.
export const serviceAreas = [
  "Auckland Central",
  "North Shore",
  "Remuera & Eastern Suburbs",
  "Ponsonby & Grey Lynn",
  "Mt Eden & Epsom",
  "Devonport & Takapuna",
  "West Auckland",
  "Howick & East Auckland",
  "South Auckland",
] as const;
