import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { CategoryGrid } from "@/components/category-grid";
import { hero } from "@/lib/categories";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Craft Interiors & Wood Works — Interior Design & Custom Furniture, Kerala",
      },
      {
        name: "description",
        content:
          "Interior design and handcrafted custom furniture in Kinassery, Kerala. Living rooms, bedrooms, dining, lighting, decor and bespoke wood works. Get a quote today.",
      },
      {
        property: "og:title",
        content:
          "Craft Interiors & Wood Works — Interior Design & Custom Furniture, Kerala",
      },
      {
        property: "og:description",
        content:
          "Handcrafted interiors and custom wood works from our own workshop in Kinassery, Kerala. Explore our work and get a quote.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHY = [
  {
    title: "Our own workshop",
    body: "Everything is built in-house by our carpenters — nothing outsourced, nothing mass-produced.",
  },
  {
    title: "Made to measure",
    body: "Every piece is drawn around your room, your wall, your light. If it doesn't fit, it doesn't ship.",
  },
  {
    title: "Design to installation",
    body: "One team handles design, material, joinery and final installation. You talk to us, start to finish.",
  },
  {
    title: "Honest materials",
    body: "Seasoned teak, oak and walnut with joinery you can inspect — built to be used daily, for decades.",
  },
];

const TESTIMONIALS = [1, 2, 3];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[82vh] items-end">
        <img
          src={hero.src}
          alt="Premium minimal living room with handcrafted oak furniture"
          width={hero.w}
          height={hero.h}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-40">
          <p className="eyebrow text-cream-muted">
            Interior Design · Custom Furniture · Kerala
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-light leading-[1.05] text-cream md:text-7xl">
            Spaces that feel
            <br />
            like <em className="italic text-cream">home</em>.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-muted md:text-lg">
            We design and handcraft interiors and furniture in our own
            Kinassery workshop — from a single coffee table to a whole home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Quote
            </Link>
            <Link
              to="/categories"
              className="rounded-sm border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-charcoal"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Category showcase */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-primary">What we make</p>
            <h2 className="mt-2 font-display text-3xl font-light md:text-4xl">
              Categories
            </h2>
          </div>
          <Link
            to="/categories"
            className="link-underline text-sm text-muted-foreground hover:text-foreground"
          >
            View all categories
          </Link>
        </div>
        <CategoryGrid />
      </section>

      {/* Why choose us */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <p className="eyebrow text-primary">Why choose us</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-light md:text-4xl">
            Craftsmanship you can put your hands on
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((item, i) => (
              <div key={item.title}>
                <p className="font-display text-3xl font-light text-primary">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration band */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <p className="eyebrow text-cream-muted">Our belief</p>
          <p className="mt-5 font-display text-2xl font-light italic leading-snug text-cream md:text-3xl">
            "A house becomes a home when every corner is made for the way you
            live. Good interior design doesn't decorate your life — it quietly
            improves it, one room at a time."
          </p>
          <p className="mt-8 text-sm text-cream-muted">
            Tell us about your space — we'll help you shape it.
          </p>
          <Link
            to="/quote"
            className="mt-4 inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Custom Consultation
          </Link>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <p className="eyebrow text-primary">Kind words</p>
          <h2 className="mt-2 font-display text-3xl font-light md:text-4xl">
            What our clients say
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((n) => (
            <figure
              key={n}
              className="flex flex-col justify-between border border-border bg-card p-8"
            >
              <span className="font-display text-4xl leading-none text-primary">
                &ldquo;
              </span>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A client's story will live here soon — from first sketch to the
                day the furniture found its place.
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Coming soon
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-light md:text-4xl">
              Ready to transform your space?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your idea — we usually reply within 24–48 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+919349141289"
              className="rounded-sm border border-input px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Call 093491 41289
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
