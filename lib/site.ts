/** Olde Dominion Tavern — site-wide config. One place to edit links & info. */

export const site = {
  name: "Olde Dominion Tavern",
  tagline: "American Restaurant & Bar · Haymarket, VA",
  phone: "(703) 754-1166",
  phoneHref: "tel:+17037541166",
  address: { line1: "5351 Merchants View Sq", line2: "Haymarket, VA 20169" },
  mapUrl:
    "https://maps.google.com/?q=5351+Merchants+View+Sq,+Haymarket,+VA+20169",
  mapEmbed:
    "https://www.google.com/maps?q=5351+Merchants+View+Sq,+Haymarket,+VA+20169&output=embed",
  social: {
    instagram: "https://www.instagram.com/oldedominiontavern",
    facebook: "https://www.facebook.com/oldedominiontavern",
  },
  ext: {
    resy: "https://resy.com/cities/haymarket-va/venues/olde-dominion-tavern",
    toast: "https://order.toasttab.com/online/olde-dominion-tavern",
    ezcater: "https://www.ezcater.com/catering/olde-dominion-tavern-3",
  },
} as const;

/** Primary internal routes (rendered in nav). */
export const nav = [
  { label: "Menus", href: "/menus" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Dog of the Month", href: "/dogs" },
  { label: "Visit", href: "/visit" },
] as const;

/**
 * Imagery. Currently pointing at a single known-good photo so nothing renders
 * broken. Swap each of these to your own files in /public (e.g. "/hero.jpg")
 * and, ideally, move to next/image once your image domains are set.
 */
const DEFAULT_PHOTO =
  "https://static.wixstatic.com/media/d0442a_679e0adee34541fc9f26c29ebca1456a~mv2.jpg/v1/fill/w_1600,h_1000,fp_0.57_0.49,q_90,enc_avif,quality_auto/d0442a_679e0adee34541fc9f26c29ebca1456a~mv2.jpg";

export const IMG = {
  hero: DEFAULT_PHOTO,
  menus: DEFAULT_PHOTO,
  events: DEFAULT_PHOTO,
  dogs: DEFAULT_PHOTO,
  gallery: DEFAULT_PHOTO,
  visit: DEFAULT_PHOTO,
} as const;

/** Hours — PLACEHOLDER. Replace with the real schedule. */
export const HOURS: { day: string; time: string }[] = [
  { day: "Monday", time: "11:00 AM – 10:00 PM" },
  { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
  { day: "Thursday", time: "11:00 AM – 10:00 PM" },
  { day: "Friday", time: "11:00 AM – 11:00 PM" },
  { day: "Saturday", time: "10:00 AM – 11:00 PM" },
  { day: "Sunday", time: "10:00 AM – 9:00 PM" },
];

/** Scrolling marquee words on the home page. */
export const MARQUEE = [
  "Burgers & Steaks",
  "Fresh Seafood",
  "Weekend Brunch",
  "Happy Hour",
  "Craft Bar",
  "Dog-Friendly Patio",
  "Private Party Room",
];

/** Home page food categories. */
export const FOOD_CATEGORIES = [
  {
    name: "Burgers & Handhelds",
    copy: "Smashed, stacked, and made to order — the neighborhood standby, done properly.",
  },
  {
    name: "Steaks & Chops",
    copy: "Date night done right: properly seared cuts and a wine list poured to match.",
  },
  {
    name: "Fresh Seafood",
    copy: "Coastal plates and elevated bar fare, brought inland to Haymarket and cooked to order.",
  },
  {
    name: "Weekend Brunch",
    copy: "Saturday and Sunday, the good stuff — plates and drinks for the whole table, between the games.",
  },
];

/** Event types for the Events page. */
export const EVENT_TYPES = [
  "Birthdays & milestone celebrations",
  "Corporate gatherings & team dinners",
  "Holiday parties",
  "Rehearsal dinners & showers",
  "Large group dinners & special occasions",
];

/**
 * Menu sections — PLACEHOLDER content. Swap in the real menu, or link out to a
 * hosted PDF. Prices are illustrative.
 */
export const MENU_SECTIONS: {
  title: string;
  note?: string;
  items: { name: string; desc: string; price: string }[];
}[] = [
  {
    title: "To Start",
    items: [
      { name: "Tavern Pretzel", desc: "Warm soft pretzel, beer cheese, whole-grain mustard.", price: "$12" },
      { name: "Crispy Brussels", desc: "Charred sprouts, bacon, balsamic glaze.", price: "$11" },
      { name: "Wings", desc: "Buffalo, dry rub, or Carolina gold. Celery, ranch, blue cheese.", price: "$15" },
    ],
  },
  {
    title: "Handhelds",
    items: [
      { name: "Tavern Burger", desc: "Two smashed patties, American, house sauce, brioche.", price: "$17" },
      { name: "Nashville Hot Chicken", desc: "Crispy thigh, pickles, hot honey, brioche.", price: "$16" },
      { name: "French Dip", desc: "Shaved prime rib, provolone, rosemary jus.", price: "$18" },
    ],
  },
  {
    title: "The Kitchen",
    items: [
      { name: "NY Strip", desc: "12 oz, herb butter, choice of two sides.", price: "$36" },
      { name: "Pan-Seared Salmon", desc: "Seasonal vegetables, lemon-caper butter.", price: "$27" },
      { name: "Shrimp & Grits", desc: "Stone-ground grits, andouille, cajun cream.", price: "$24" },
    ],
  },
];
