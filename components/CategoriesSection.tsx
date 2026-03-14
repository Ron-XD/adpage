import Link from "next/link";

import { getCategoryStats } from "@/lib/jobs";

export function CategoriesSection() {
  const stats = getCategoryStats();

  return (
    <section id="categorias" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Categorias</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Explora por area profesional</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(({ category, total }) => (
          <Link
            key={category}
            href={`/jobs?category=${encodeURIComponent(category)}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-400 hover:shadow"
          >
            <h3 className="text-lg font-bold text-slate-900">{category}</h3>
            <p className="mt-1 text-sm text-slate-600">{total} ofertas publicadas</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
