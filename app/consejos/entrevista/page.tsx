import type { Metadata } from "next";
import { cookies } from "next/headers";

import { normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Consejo de entrevista",
  description: "Consejo claro para destacar en entrevistas laborales.",
};

export default async function ConsejoEntrevistaPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-slate-900">{lang === "en" ? "Interview tip" : "Consejo de entrevista"}</h1>
      <p className="mt-4 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
        {lang === "en"
          ? "Prepare three concrete examples that show your results: one about solving a problem, one about teamwork, and one about handling pressure. Specific stories help interviewers understand your real impact quickly."
          : "Prepara tres ejemplos concretos que demuestren tus resultados: uno resolviendo un problema, otro trabajando en equipo y otro manejando presion. Las historias especificas ayudan a que el entrevistador entienda rapido tu impacto real."}
      </p>
    </main>
  );
}
