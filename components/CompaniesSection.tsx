import Image from "next/image";

import { companies } from "@/lib/data";

export function CompaniesSection() {
  return (
    <section id="empresas" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Empresas destacadas</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Marcas que estan contratando</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {companies.map((company) => (
          <article key={company.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <Image src={company.logo} alt={company.name} width={64} height={64} className="h-12 w-12 rounded-lg" />
            <h3 className="mt-3 text-sm font-bold text-slate-900">{company.name}</h3>
            <p className="text-xs text-slate-500">{company.industry}</p>
            <p className="mt-2 text-xs font-semibold text-cyan-700">{company.openRoles} vacantes abiertas</p>
          </article>
        ))}
      </div>
    </section>
  );
}
