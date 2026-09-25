import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

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

const QUOTE_EMAIL = "craftinteriorworks@gmail.com";
const ENDPOINT = `https://formsubmit.co/${QUOTE_EMAIL}`;

const inputCls =
  "w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary";

function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileName = file?.name ?? "";
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

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (file && file.size > 5 * 1024 * 1024) {
      setError("Please choose a photo smaller than 5 MB.");
      return;
    }
    setSending(true);
    try {
      const fd = new FormData();
      fd.append("_subject", `Quote request — ${form.name.trim()}`);
      fd.append("_template", "table");
      fd.append("_captcha", "false");
      fd.append("_replyto", form.email.trim());
      fd.append("Name", form.name.trim().slice(0, 100));
      fd.append("Email", form.email.trim().slice(0, 255));
      fd.append("Phone", form.phone.trim().slice(0, 30));
      fd.append("Dimensions", form.dimensions.trim().slice(0, 200) || "—");
      fd.append("Message", form.message.trim().slice(0, 2000) || "—");
      if (file) fd.append("attachment", file);
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setError(
        "Sorry, we couldn't send your request. Please try again or call 093491 41289.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <p className="eyebrow text-primary">Get a quote</p>
      <h1 className="mt-3 font-display text-4xl font-light leading-tight md:text-5xl">
        Tell us about your space
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Share your details and a reference photo — they come straight to our
        team. We reply within{" "}
        <span className="text-foreground">24–48 hours</span>.
      </p>

      {submitted ? (
        <div
          role="status"
          className="mt-10 border border-primary/40 bg-accent/40 px-6 py-8"
        >
          <p className="font-display text-2xl">Thank you, {form.name.split(" ")[0]}.</p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            We'll get back to you within 24-48 hrs.
          </p>
        </div>
      ) : (
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
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="w-full cursor-pointer rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-muted-foreground file:mr-3 file:cursor-pointer file:rounded-sm file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm file:text-secondary-foreground"
          />
          <span className="mt-1.5 block text-xs text-muted-foreground">
            {fileName ? `Selected: ${fileName}` : "Optional · image up to 5 MB"}
          </span>
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

        {error && (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={sending}
          className="rounded-sm bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send Request"}
        </button>
      </form>
      )}
    </div>
  );
}
