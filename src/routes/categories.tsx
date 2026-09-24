import { createFileRoute } from "@tanstack/react-router";
import { CategoryGrid } from "@/components/category-grid";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      {
        title: "Our Work by Category — Craft Interiors & Wood Works",
      },
      {
        name: "description",
        content:
          "Explore living room, bedroom, dining, lighting, decor and custom wood works by Craft Interiors & Wood Works, Kinassery, Kerala.",
      },
      {
        property: "og:title",
        content: "Our Work by Category — Craft Interiors & Wood Works",
      },
      {
        property: "og:description",
        content:
          "Living rooms, bedrooms, dining, lighting, decor and bespoke wood works — all made in our own workshop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Categories,
});

function Categories() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:pt-24">
        <p className="eyebrow text-primary">Our work</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-light leading-tight md:text-5xl">
          Six ways we can shape your home
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Every category below is designed, built and finished in our own
          workshop. Pick a category to see sample pieces.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <CategoryGrid />
      </section>
    </div>
  );
}
