import living1 from "@/assets/living-1.jpg";
import living2 from "@/assets/living-2.jpg";
import living3 from "@/assets/living-3.jpg";
import bedroom1 from "@/assets/bedroom-1.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";
import bedroom3 from "@/assets/bedroom-3.jpg";
import dining1 from "@/assets/dining-1.jpg";
import dining2 from "@/assets/dining-2.jpg";
import dining3 from "@/assets/dining-3.jpg";
import lighting1 from "@/assets/lighting-1.jpg";
import lighting2 from "@/assets/lighting-2.jpg";
import lighting3 from "@/assets/lighting-3.jpg";
import decor1 from "@/assets/decor-1.jpg";
import decor2 from "@/assets/decor-2.jpg";
import decor3 from "@/assets/decor-3.jpg";
import wood1 from "@/assets/wood-1.jpg";
import wood2 from "@/assets/wood-2.jpg";
import wood3 from "@/assets/wood-3.jpg";
import heroLiving from "@/assets/hero-living.jpg";

export const hero = {
  src: heroLiving,
  w: 1920,
  h: 1152,
};

export type Work = {
  src: string;
  w: number;
  h: number;
  alt: string;
  caption: string;
  aspect: string;
  pos?: string;
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  cover: string;
  coverW: number;
  coverH: number;
  works: Work[];
};

const W = 1600;
const WH = 1152;
const P = 1200;
const PH = 1600;

export const categories: Category[] = [
  {
    slug: "living-room",
    name: "Living Room",
    short: "Sofas, consoles and statement centrepieces",
    description:
      "The room where everything comes together. We design and build sofas, media units, coffee tables and shelving that anchor your living space — sized to your room, finished by hand.",
    cover: living1,
    coverW: W,
    coverH: WH,
    works: [
      { src: living1, w: W, h: WH, alt: "Minimal living room with oak media console", caption: "Floating oak media wall", aspect: "aspect-[4/3]" },
      { src: living2, w: P, h: PH, alt: "Reading corner with custom oak shelving", caption: "Custom floor-to-ceiling shelving", aspect: "aspect-[3/4]" },
      { src: living3, w: W, h: WH, alt: "Handcrafted oak coffee table detail", caption: "Solid oak coffee table", aspect: "aspect-[4/3]" },
      { src: living1, w: W, h: WH, alt: "Detail of textured sofa styling", caption: "Layered textiles, natural light", aspect: "aspect-[3/4]", pos: "68% 42%" },
      { src: living2, w: P, h: PH, alt: "Boucle armchair beside oak library shelves", caption: "Reading corner styling", aspect: "aspect-[4/3]", pos: "50% 72%" },
      { src: living3, w: W, h: WH, alt: "Close view of oak grain and joinery", caption: "Grain and joinery, up close", aspect: "aspect-[3/4]", pos: "30% 55%" },
    ],
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    short: "Beds, wardrobes and calm retreats",
    description:
      "Bedrooms should slow you down. Custom slatted headboards, built-in wardrobes with soft-close everything, and nightstands made to fit exactly the space you have.",
    cover: bedroom1,
    coverW: W,
    coverH: WH,
    works: [
      { src: bedroom1, w: W, h: WH, alt: "Serene bedroom with slatted wood headboard", caption: "Slatted headboard in warm teak", aspect: "aspect-[4/3]" },
      { src: bedroom2, w: P, h: PH, alt: "Built-in fluted oak wardrobe", caption: "Built-in wardrobe, fluted oak", aspect: "aspect-[3/4]" },
      { src: bedroom3, w: W, h: WH, alt: "Walnut nightstand with ceramic lamp", caption: "Walnut nightstand", aspect: "aspect-[4/3]" },
      { src: bedroom1, w: W, h: WH, alt: "Detail of linen bedding layers", caption: "Linen layers, quiet palette", aspect: "aspect-[3/4]", pos: "60% 60%" },
      { src: bedroom2, w: P, h: PH, alt: "Wardrobe handle and panel detail", caption: "Brass on fluted panels", aspect: "aspect-[4/3]", pos: "50% 78%" },
      { src: bedroom3, w: W, h: WH, alt: "Close view of drawer front grain", caption: "Grain matched drawer fronts", aspect: "aspect-[3/4]", pos: "32% 50%" },
    ],
  },
  {
    slug: "dining",
    name: "Dining",
    short: "Tables, chairs and bench seating",
    description:
      "One table, years of meals. Solid-wood dining tables, cane and upholstered chairs, and built-in bench nooks — built for daily use and made to be gathered around.",
    cover: dining1,
    coverW: W,
    coverH: WH,
    works: [
      { src: dining1, w: W, h: WH, alt: "Dining room with solid wood table and rattan chairs", caption: "Eight-seater solid wood table", aspect: "aspect-[4/3]" },
      { src: dining3, w: P, h: PH, alt: "Breakfast nook with built-in bench seating", caption: "Built-in bench nook", aspect: "aspect-[3/4]" },
      { src: dining2, w: W, h: WH, alt: "Close-up of oak table grain with ceramic plates", caption: "Oak grain under daylight", aspect: "aspect-[4/3]" },
      { src: dining1, w: W, h: WH, alt: "Detail of woven cane chair backs", caption: "Woven cane seating", aspect: "aspect-[3/4]", pos: "70% 65%" },
      { src: dining3, w: P, h: PH, alt: "Round pedestal table detail", caption: "Pedestal table, turned by hand", aspect: "aspect-[4/3]", pos: "50% 55%" },
      { src: dining2, w: W, h: WH, alt: "Table setting on oak surface", caption: "Set for the everyday", aspect: "aspect-[3/4]", pos: "28% 45%" },
    ],
  },
  {
    slug: "lighting",
    name: "Lighting",
    short: "Pendants, lamps and layered light",
    description:
      "Light is the finishing material. Handcrafted wooden pendants, brass floor lamps and layered lighting plans that make a room work just as well at noon as at midnight.",
    cover: lighting1,
    coverW: W,
    coverH: WH,
    works: [
      { src: lighting1, w: W, h: WH, alt: "Hallway at dusk with woven rattan pendants", caption: "Woven rattan pendants", aspect: "aspect-[4/3]" },
      { src: lighting2, w: P, h: PH, alt: "Slatted wood pendant lamp glowing", caption: "Slatted wood pendant", aspect: "aspect-[3/4]" },
      { src: lighting3, w: P, h: PH, alt: "Brass and linen floor lamp in evening light", caption: "Brass floor lamp, evening", aspect: "aspect-[4/3]", pos: "50% 35%" },
      { src: lighting1, w: W, h: WH, alt: "Warm pools of light on plaster wall", caption: "Warm pools on plaster", aspect: "aspect-[3/4]", pos: "62% 40%" },
      { src: lighting2, w: P, h: PH, alt: "Detail of wooden slats and light patterns", caption: "Light through wooden slats", aspect: "aspect-[4/3]", pos: "50% 70%" },
      { src: lighting3, w: P, h: PH, alt: "Reading corner lit softly at night", caption: "A corner built for reading", aspect: "aspect-[3/4]", pos: "75% 60%" },
    ],
  },
  {
    slug: "decor",
    name: "Decor",
    short: "Ceramics, mirrors and styled accents",
    description:
      "The last ten percent that makes a house feel finished. Hand-picked ceramics, mirrors, woven textures and styling — chosen to suit your palette, not a catalogue.",
    cover: decor1,
    coverW: W,
    coverH: WH,
    works: [
      { src: decor1, w: W, h: WH, alt: "Styled entryway console with mirror and ceramics", caption: "Entryway, styled", aspect: "aspect-[4/3]" },
      { src: decor2, w: P, h: PH, alt: "Handmade ceramics on wooden shelves", caption: "Handmade ceramics", aspect: "aspect-[3/4]" },
      { src: decor3, w: W, h: WH, alt: "Woven fibre wall hanging on textured wall", caption: "Woven wall art", aspect: "aspect-[4/3]" },
      { src: decor1, w: W, h: WH, alt: "Terracotta vase with dried pampas", caption: "Terracotta and pampas", aspect: "aspect-[3/4]", pos: "78% 45%" },
      { src: decor2, w: P, h: PH, alt: "Detail of speckled glaze bowls", caption: "Speckled glaze details", aspect: "aspect-[4/3]", pos: "40% 55%" },
      { src: decor3, w: W, h: WH, alt: "Olive tree in clay pot on wooden stool", caption: "Green against neutral", aspect: "aspect-[3/4]", pos: "25% 55%" },
    ],
  },
  {
    slug: "custom-wood-works",
    name: "Custom Wood Works",
    short: "Bespoke joinery, staircases and cabinetry",
    description:
      "Our first craft, and still our favourite. Bespoke furniture, built-in cabinetry, floating staircases and one-off pieces — drawn with you, jointed by hand, finished for a lifetime.",
    cover: wood2,
    coverW: P,
    coverH: PH,
    works: [
      { src: wood2, w: P, h: PH, alt: "Custom oak cabinetry and floating staircase", caption: "Cabinetry and floating staircase", aspect: "aspect-[3/4]" },
      { src: wood1, w: W, h: WH, alt: "Craftsman hand-planing a teak plank", caption: "Hand-planed, always", aspect: "aspect-[4/3]" },
      { src: wood3, w: W, h: WH, alt: "Precise dovetail joinery detail", caption: "Dovetail joinery, by hand", aspect: "aspect-[4/3]" },
      { src: wood2, w: P, h: PH, alt: "Built-in oak shelving detail", caption: "Built-ins that fit to the millimetre", aspect: "aspect-[4/3]", pos: "35% 55%" },
      { src: wood3, w: W, h: WH, alt: "Teak corner joint close-up", caption: "Corner joints, no shortcuts", aspect: "aspect-[3/4]", pos: "35% 50%" },
      { src: wood1, w: W, h: WH, alt: "Wood shavings and hand tools on the bench", caption: "Where every piece begins", aspect: "aspect-[3/4]", pos: "30% 65%" },
    ],
  },
];

export const findCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
