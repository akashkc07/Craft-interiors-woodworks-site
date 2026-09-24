import { createFileRoute, Link } from "@tanstack/react-router";
import wood1 from "@/assets/wood-1.jpg";
import living2 from "@/assets/living-2.jpg";
import wood3 from "@/assets/wood-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Craft Interiors & Wood Works" },
      {
        name: "description",
        content:
          "The story of Craft Interiors & Wood Works — a design studio and carpentry workshop in Kinassery, Kerala, crafting custom furniture by hand.",
      },
      { property: "og:title", content: "About Us — Craft Interiors & Wood Works" },
      {
        property: "og:description",
        content:
          "A design studio and carpentry workshop in Kinassery, Kerala. Every piece designed with you and built by hand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    title: "Drawn with you",
    body: "Every project starts at your home, measuring tape in hand. We sketch before we saw.",
  },
  {
    title: "Built by hand",
    body: "Our carpenters cut, joint and plane every piece in our Kinassery workshop — no flat-pack shortcuts.",
  },
  {
    title: "Finished for decades",
    body: "Seasoned wood, honest hardware and finishes that age well. Furniture you'll hand down, not replace.",
  },
];

function About() {
  return (
    <div>
      {/* Story */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow text-primary">About us</p>
          <h1 className="mt-3 font-display text-4xl font-light leading-tight md:text-5xl">
            A design studio with sawdust on its hands
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Craft Interiors &amp; Wood Works began the way most good things
              do — with a workbench, a few hand tools and a refusal to build
              furniture that didn't deserve the name. What started as a small
              carpentry workshop on Peruvemba Road has grown into a full
              interior design studio, without ever giving up the workshop.
            </p>
            <p>
              Today we design and build complete interiors — living rooms,
              bedrooms, dining spaces, lighting and decor — alongside one-off
              furniture and built-in wood works. The same hands that draw your
              living room also plane its coffee table. That's the part we're
              proud of.
            </p>
            <p>
              Over {`a decade`} of experience now stands behind every joint we
              cut — and every home we hand back feeling finished.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <img
            src={wood1}
            alt="Craftsman hand-planing a plank of teak in the workshop"
            width={1600}
            height={1152}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <img
            src={living2}
            alt="Custom oak shelving in a finished living room"
            width={1200}
            height={1600}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <img
            src={wood3}
            alt="Close-up of hand-cut dovetail joinery in teak"
            width={1600}
            height={1152}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div>
            <p className="eyebrow text-primary">Craftsmanship</p>
            <h2 className="mt-3 font-display text-3xl font-light md:text-4xl">
              Machines are fast. Hands are honest.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We still cut dovetails by hand when a piece asks for it. We still
              match grain across a drawer front. We still sand a table until it
              feels right against a palm, not just looks right under lights.
              It's slower. It's also why our furniture outlives trends — and
              most of what you'll find in showrooms.
            </p>
            <div className="mt-8 space-y-6">
              {VALUES.map((v, i) => (
                <div key={v.title} className="flex gap-4">
                  <span className="font-display text-2xl font-light text-primary">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-medium">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {v.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-light md:text-4xl">
          Let's make something for your home
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Consultations are free. Bring us a rough idea, a photo, or just the
          room.
        </p>
        <Link
          to="/quote"
          className="mt-7 inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get a Quote
        </Link>
      </section>
    </div>
  );
}
