# Fern Fresh Clean — website

Premium marketing site for Fern Fresh Clean (Auckland), aimed at high-end homeowners,
Airbnb/short-stay hosts and property managers. Replaces the Hostinger Horizons build at
fernfreshclean.com.

Stack: Next.js 16 (App Router, Cache Components), Tailwind v4, lucide-react, bun.

```bash
bun install
bun dev          # http://localhost:3000
bun run build
```

## Pages

| Route       | Purpose                                                        |
| ----------- | -------------------------------------------------------------- |
| `/`         | Hero + quick-quote bar, audiences, services, Airbnb, FAQ        |
| `/services` | Home cleaning, add-ons, exterior services (anchor per service) |
| `/airbnb`   | Short-stay turnover offer for hosts                            |
| `/pricing`  | Prices from the current site                                   |
| `/about`    | Story, mission, values                                         |
| `/careers`  | Staff recruitment + application form                           |
| `/book`     | Quote form + contact details (`/contact` redirects here)       |

Forms have no backend yet: they compose a message and open WhatsApp or the user's
email app. Swap for a server action + database/email service when ready.

## Editing content

- Business details: `lib/site-config.ts` (null = hidden)
- Services, prices, Airbnb inclusions: `lib/services.ts`
- FAQs: `lib/faq.ts`
- Photos: `public/images/` (Unsplash stock — replace with real job photos when available)

## Confirm with the client before launch

Taken from the current site: phone, email, prices, service inclusions, "insured & vetted",
"eco-friendly", "satisfaction guaranteed", mission text.

New copy written for this site that the client must confirm:

- Re-clean if reported within 24 hours (guarantee wording)
- Cleaners are background-checked
- Airbnb offer: linen change, restocking, photo report after each turnover, same-day changeovers, multi-listing discounts
- "Usually the same day" quote turnaround; "within 24 hours" response
- Service-area suburb list
- Careers perks (flexible hours, training, pay on time)
- Real logo (current mark in `components/logo.tsx` is a placeholder)

Reviews are deliberately omitted — the current site's testimonials look like template
placeholders. Add real Google/Facebook reviews when available.

Note: fernfreshclean.com currently serves an **expired SSL certificate**.
