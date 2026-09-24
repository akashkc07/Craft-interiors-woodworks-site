import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/categories";

export function CategoryGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          to="/categories/$category"
          params={{ category: cat.slug }}
          className="group block"
        >
          <div className="overflow-hidden bg-muted">
            <img
              src={cat.cover}
              alt={cat.name}
              width={cat.coverW}
              height={cat.coverH}
              loading="lazy"
              className="img-zoom aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-3">
            <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-primary">
              {cat.name}
            </h3>
            <span
              aria-hidden
              className="text-primary transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{cat.short}</p>
        </Link>
      ))}
    </div>
  );
}
