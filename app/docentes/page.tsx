import type { Metadata } from "next";
import { cookies } from "next/headers";

import { i18n, normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Docentes",
  description: "Convocatorias y oportunidades para el sector educativo.",
};

export default async function DocentesPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);
  const t = i18n[lang];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black">{t.teachersTitle}</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        {t.teachersDescription}
      </p>
    </main>
  );
}
