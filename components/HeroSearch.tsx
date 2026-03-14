import { SearchIcon } from "@/components/icons";
import { i18n, type Lang } from "@/lib/i18n";
import { getFilterOptions } from "@/lib/jobs";

interface HeroSearchProps {
  lang: Lang;
}

export function HeroSearch({ lang }: HeroSearchProps) {
  const t = i18n[lang];
  const { categories, cities, types } = getFilterOptions();

  const categoryLabel = (category: string) => {
    if (lang !== "en") return category;
    const map: Record<string, string> = {
      Logistica: "Logistics",
      Limpieza: "Cleaning",
      Hoteleria: "Hospitality",
      Comercio: "Retail",
      "Atencion al cliente": "Customer Support",
      Administracion: "Administration",
      Ventas: "Sales",
    };
    return map[category] ?? category;
  };

  const typeLabel = (type: string) => {
    if (lang !== "en") return type;
    const map: Record<string, string> = {
      "Tiempo completo": "Full-time",
      "Medio tiempo": "Part-time",
      Hibrido: "Hybrid",
      Temporal: "Temporary",
      Remoto: "Remote",
    };
    return map[type] ?? type;
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#0ea5e9_0,transparent_36%),radial-gradient(circle_at_80%_30%,#f59e0b_0,transparent_30%),linear-gradient(125deg,#0f172a,#1e293b)] py-20 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
            {t.heroBadge}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {t.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-slate-100 sm:text-base">
            {t.heroDescription}
          </p>
        </div>

        <form action="/jobs" className="rounded-2xl border border-white/20 bg-white/95 p-5 text-slate-800 shadow-2xl shadow-slate-950/30">
          <label className="text-sm font-semibold" htmlFor="query">
            {t.searchJob}
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
            <SearchIcon className="h-4 w-4 text-slate-500" />
            <input
              id="query"
              name="query"
              placeholder={t.searchExample}
              className="h-11 w-full bg-transparent text-sm outline-none"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <select name="city" className="h-11 rounded-xl border border-slate-200 px-3 text-sm">
              <option value="">{t.city}</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <select name="category" className="h-11 rounded-xl border border-slate-200 px-3 text-sm">
              <option value="">{t.category}</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {categoryLabel(category)}
                </option>
              ))}
            </select>

            <select name="type" className="h-11 rounded-xl border border-slate-200 px-3 text-sm sm:col-span-2">
              <option value="">{t.employmentType}</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {typeLabel(type)}
                </option>
              ))}
            </select>
          </div>

          <button className="mt-5 h-11 w-full rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800">
            {t.searchOffers}
          </button>
        </form>
      </div>
    </section>
  );
}
