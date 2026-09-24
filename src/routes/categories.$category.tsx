import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findCategory, categories } from "@/lib/categories";

export const Route = createFileRoute("/categories/$category")({
  loader: ({ params }) => {
    const category = findCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    return {
      meta: [
        {
          title: `${category.name} — Craft Interiors & Wood Works`,
        },
        {
          name: "description",
          content: category.description.slice(0, 155),
        },
        {
          property: "og:title",
          content: `${category.name} — Craft Interiors & Wood Works`,
        },
        {
          property: "og:description",
          content: category.description.slice(0, 155),
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();

  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:pt-24">
        <Link
          to="/categories"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← All categories
        </Link>
        <h1 className="mt-6 font-display text-4xl font-light leading-tight md:text-5xl">
          {category.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {category.description}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.works.map((work, i) => (
            <figure
              key={`${work.caption}-${i}`}
              className="group overflow-hidden bg-muted"
            >
              <img
                src={work.src}
                alt={work.alt}
                width={work.w}
                height={work.h}
                loading="lazy"
                style={work.pos ? { objectPosition: work.pos } : undefined}
                className={`img-zoom w-full object-cover ${work.aspect}`}
              />
              <figcaption className="flex items-baseline justify-between px-1 py-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {work.caption}
                <span className="text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-light md:text-3xl">
              Like what you see?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We'll make one for your space — your size, your wood, your finish.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Quote
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-input px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow text-muted-foreground">Keep exploring</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {categories
            .filter((c) => c.slug !== category.slug)
            .map((c) => (
              <Link
                key={c.slug}
                to="/categories/$category"
                params={{ category: c.slug }}
                className="rounded-sm border border-input bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                {c.name}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
