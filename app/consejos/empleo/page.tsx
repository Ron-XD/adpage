import type { Metadata } from "next";
import { cookies } from "next/headers";

import { normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Consejo de empleo",
  description: "Consejo claro para buscar empleo de forma eficiente.",
};

export default async function ConsejoEmpleoPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-slate-900">{lang === "en" ? "Employment tip" : "Consejo de empleo"}</h1>
      <p className="mt-4 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
        {lang === "en"
          ? "Focus on applying to openings where your skills match at least 70% of the requirements, and customize your profile summary for each role. Quality applications usually generate better results than sending many generic ones."
          : "Enfocate en postular a vacantes donde cumplas al menos el 70% de los requisitos y adapta tu resumen profesional para cada puesto. Las postulaciones de calidad suelen dar mejores resultados que enviar muchas solicitudes genericas."}
      </p>
    </main>
  );
}
