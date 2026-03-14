import type { Metadata } from "next";
import { cookies } from "next/headers";

import { normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Consejo de CV",
  description: "Consejo claro para mejorar tu curriculo y aumentar entrevistas.",
};

export default async function ConsejoCvPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-slate-900">{lang === "en" ? "Resume tip" : "Consejo de CV"}</h1>
      <p className="mt-4 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
        {lang === "en"
          ? "Keep your resume to one page, place your most recent experience first, and describe achievements with numbers when possible (for example, time saved, volume handled, or customer ratings). Recruiters scan CVs in seconds, so clarity wins."
          : "Manten tu CV en una pagina, coloca primero la experiencia mas reciente y describe logros con numeros cuando sea posible (por ejemplo, tiempo ahorrado, volumen gestionado o calificaciones de clientes). Los reclutadores revisan CV en segundos, por eso la claridad marca la diferencia."}
      </p>
    </main>
  );
}
