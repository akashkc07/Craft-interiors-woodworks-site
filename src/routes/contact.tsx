import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Craft Interiors & Wood Works, Kinassery, Kerala" },
      {
        name: "description",
        content:
          "Visit or call Craft Interiors & Wood Works — Peruvemba Rd, Thanneerpanthal, Kinassery, Kerala 678701. Phone 093491 41289. Open 9:30 AM – 6:30 PM.",
      },
      {
        property: "og:title",
        content: "Contact — Craft Interiors & Wood Works, Kinassery, Kerala",
      },
      {
        property: "og:description",
        content:
          "Find us on Peruvemba Rd, Thanneerpanthal, Kinassery. Call 093491 41289. Open 9:30 AM – 6:30 PM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const MAP_Q = encodeURIComponent(
  "Craft Interiors & Wood Works, Peruvemba Rd, Thanneerpanthal, Kinassery, Kerala 678701",
);

function Contact() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-24">
        <p className="eyebrow text-primary">Contact</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-light leading-tight md:text-5xl">
          Come see the workshop
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Drop by to touch the woods, see finishes in person and talk through
          your space over a coffee.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          <div className="bg-card p-8">
            <p className="eyebrow text-primary">Address</p>
            <p className="mt-4 text-sm leading-relaxed">
              Craft Interiors &amp; Wood Works
              <br />
              Peruvemba Rd, Thanneerpanthal,
              <br />
              Kinassery, Kerala 678701
            </p>
            <a
              className="link-underline mt-4 inline-block text-sm text-primary"
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_Q}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="bg-card p-8">
            <p className="eyebrow text-primary">Phone</p>
            <a
              href="tel:+919349141289"
              className="mt-4 block font-display text-2xl text-foreground transition-colors hover:text-primary"
            >
              093491 41289
            </a>
            <a
              href="https://wa.me/919349141289"
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-3 inline-block text-sm text-muted-foreground hover:text-foreground"
            >
              Message us on WhatsApp
            </a>
          </div>
          <div className="bg-card p-8">
            <p className="eyebrow text-primary">Hours</p>
            <p className="mt-4 text-sm leading-relaxed">
              Monday – Sunday
              <br />
              <span className="font-display text-xl">9:30 AM – 6:30 PM</span>
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Prefer a set time? Call ahead so someone's free to walk you
              through the workshop.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="border border-border bg-muted">
          <iframe
            title="Map — Craft Interiors & Wood Works, Kinassery"
            src={`https://www.google.com/maps?q=${MAP_Q}&output=embed`}
            width="100%"
            height="480"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[420px] w-full md:h-[480px]"
          />
        </div>
      </section>
    </div>
  );
}
