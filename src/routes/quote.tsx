import { createFileRoute } from "@tanstack/react-router";
import { useState, type ChangeEvent, type FormEvent } from "react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Quote — Craft Interiors & Wood Works" },
      {
        name: "description",
        content:
          "Tell us about your space — name, phone, dimensions and a reference photo — and we'll get back within 24–48 hours with a custom quote.",
      },
      {
        property: "og:title",
        content: "Get a Quote — Craft Interiors & Wood Works",
      },
      {
        property: "og:description",
        content:
          "Share your idea, room dimensions and a reference photo. We'll get back within 24–48 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quote,
});

// Placeholder recipient — replace with the studio's real email address.
const QUOTE_EMAIL = "craftinteriorswoodworks@gmail.com";

const inputCls =
  "w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary";

function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dimensions: "",
    message: "",
  });

  const set =
    (key: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Quote request — ${form.name || "New enquiry"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Dimensions / size: ${form.dimensions || "—"}`,
      `Reference photo: ${fileName || "none attached"}`,
      "",
      "Message:",
      form.message || "—",
      "",
      "(If a reference photo was selected, please attach it when your email opens.)",
    ].join("\n");
    window.location.href = `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="eyebrow text-primary">Get a quote</p>
      <h1 className="mt-3 font-display text-4xl font-light leading-tight md:text-5xl">
        Tell us about your space
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Fill this in and your email app will open with everything ready to
        send — you can attach your reference photo there. We reply within{" "}
        <span className="text-foreground">24–48 hours</span>.
      </p>

      {submitted && (
        <div
          role="status"
          className="mt-8 border border-primary/40 bg-accent/40 px-6 py-5"
        >
          <p className="font-display text-xl">Thank you — your draft is ready.</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            If your email app didn't open automatically, call us on{" "}
            <a href="tel:+919349141289" className="link-underline text-foreground">
              093491 41289
            </a>{" "}
            or WhatsApp{" "}
            <a
              href="https://wa.me/919349141289"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-foreground"
            >
              093491 41289
            </a>
            . We'll get back to you within 24–48 hours.
          </p>
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-10 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Name</span>
            <input
              required
              value={form.name}
              onChange={set("name")}
              placeholder="Your full name"
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={set("email")}
              placeholder="you@example.com"
              className={inputCls}
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Phone</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="+91 …"
            className={inputCls}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            Reference photo / design
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
            className="w-full cursor-pointer rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-muted-foreground file:mr-3 file:cursor-pointer file:rounded-sm file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm file:text-secondary-foreground"
          />
          {fileName && (
            <span className="mt-1.5 block text-xs text-muted-foreground">
              Selected: {fileName} — attach it when your email opens.
            </span>
          )}
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">
            Dimensions / size
          </span>
          <input
            value={form.dimensions}
            onChange={set("dimensions")}
            placeholder="e.g. room 14 ft × 12 ft, or table 6 ft × 3 ft"
            className={inputCls}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Message</span>
          <textarea
            rows={5}
            value={form.message}
            onChange={set("message")}
            placeholder="Tell us about the room, the wood you like, the look you're after…"
            className={inputCls}
          />
        </label>

        <button
          type="submit"
          className="rounded-sm bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Send Request
        </button>
        <p className="text-xs text-muted-foreground">
          Sending opens your email app with the details pre-filled — nothing is
          stored on this website.
        </p>
      </form>
    </div>
  );
}
