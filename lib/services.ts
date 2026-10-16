// Service and price data. Prices and inclusions are from the current
// fernfreshclean.com pricing/services pages. Airbnb turnovers and
// end-of-tenancy are quoted per property.

export type Service = {
  slug: string;
  name: string;
  short: string;
  price: string;
  duration?: string;
  image: string;
  includes: string[];
};

export const homeServices: Service[] = [
  {
    slug: "regular",
    name: "Regular Home Clean",
    short: "Weekly or fortnightly upkeep so your home always feels guest-ready.",
    price: "From $89",
    duration: "2–3 hours · 1–2 bed, 1 bath",
    image: "/images/living-room.jpg",
    includes: [
      "Dusting all surfaces",
      "Vacuuming and mopping floors",
      "Kitchen surface cleaning",
      "Bathroom surface cleaning",
      "General tidying",
    ],
  },
  {
    slug: "deep",
    name: "Deep Clean",
    short: "A top-to-bottom reset for seasonal refreshes, events and new beginnings.",
    price: "From $149",
    duration: "3–4 hours · 1–2 bed, 1 bath",
    image: "/images/bathroom.jpg",
    includes: [
      "Everything in a Regular Clean",
      "Kitchen deep clean, inside cupboards and appliances",
      "Bathroom deep clean, tiles and grout",
      "Skirting boards and door frames",
      "Wall spot cleaning",
    ],
  },
  {
    slug: "restoration",
    name: "Restoration & End-of-Tenancy",
    short: "Intensive cleaning for move-outs, rentals and spaces that need real attention.",
    price: "From $249",
    duration: "4–6 hours · 1–2 bed, 1 bath",
    image: "/images/apartment.jpg",
    includes: [
      "Everything in a Deep Clean",
      "Heavy-duty degreasing",
      "Descaling and stain removal",
      "Detailed wall and ceiling cleaning",
      "Complete property restoration",
    ],
  },
];

export const addOns = [
  { name: "Oven clean", price: "$45" },
  { name: "Fridge clean", price: "$35" },
  { name: "Microwave clean", price: "$25" },
  { name: "Window clean", price: "$8 / window" },
] as const;

export const exteriorServices: Service[] = [
  {
    slug: "house-wash",
    name: "Exterior House Wash",
    short: "Gentle soft-wash for cladding, frames and gutters with plant-friendly products.",
    price: "From $299",
    image: "/images/house-exterior.jpg",
    includes: [
      "Soft wash technique",
      "Mould and mildew treatment",
      "Spider web removal",
      "Window frame and gutter cleaning",
      "Plant-friendly chemicals",
    ],
  },
  {
    slug: "water-blasting",
    name: "Water Blasting",
    short: "High-pressure cleaning that restores driveways, decks and paths.",
    price: "From $120 / hour",
    image: "/images/home-exterior.jpg",
    includes: [
      "Driveways and pathways",
      "Decks and patios",
      "Fences and walls",
      "Concrete and paving",
    ],
  },
  {
    slug: "lawn-care",
    name: "Lawn & Garden Tidy",
    short: "Mowing, edging and green-waste removal to finish the picture.",
    price: "From $65",
    image: "/images/house-exterior.jpg",
    includes: [
      "Edge and hedge trimming",
      "Lawn tidying",
      "Green waste removal",
      "Regular maintenance schedules",
    ],
  },
];

export const airbnbIncludes = [
  {
    title: "Turnover clean",
    body: "Kitchen, bathrooms, floors and surfaces brought back to listing-photo standard between every stay.",
  },
  {
    title: "Linen & towels",
    body: "Beds made hotel-style with fresh linen, towels folded and presented the way you specify.",
  },
  {
    title: "Restock & reset",
    body: "Guest essentials topped up and the space staged to match your listing, ready for check-in.",
  },
  {
    title: "Photo report",
    body: "Before-and-after photos after each turnover, with damage or missing items flagged straight away.",
  },
  {
    title: "Same-day changeovers",
    body: "Built around your check-out and check-in times, including back-to-back bookings.",
  },
  {
    title: "Deep cleans between seasons",
    body: "Scheduled deep cleans to keep reviews at five stars through the busy months.",
  },
] as const;
