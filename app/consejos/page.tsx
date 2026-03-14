import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";

import { normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Consejos",
  description: "Consejos practicos sobre empleo, entrevistas y CV para mejorar tu postulacion.",
};

const cards = [
  {
    href: "/consejos/empleo",
    es: "Empleo",
    en: "Jobs",
    esText: "Aprende a identificar vacantes confiables y postula con estrategia.",
    enText: "Learn how to spot reliable openings and apply with a clear strategy.",
  },
  {
    href: "/consejos/entrevista",
    es: "Entrevista",
    en: "Interview",
    esText: "Preparate para responder con claridad y destacar tu valor en pocos minutos.",
    enText: "Prepare clear answers and highlight your value in just a few minutes.",
  },
  {
    href: "/consejos/cv",
    es: "CV",
    en: "Resume",
    esText: "Optimiza tu CV para que reclutadores entiendan tu perfil al primer vistazo.",
    enText: "Optimize your resume so recruiters understand your profile at first glance.",
  },
];

export default async function ConsejosPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-slate-900">{lang === "en" ? "Tips" : "Consejos"}</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
        {lang === "en"
          ? "Find practical guidance to improve your job search, interview performance, and resume quality."
          : "Encuentra recomendaciones practicas para mejorar tu busqueda de empleo, desempeno en entrevistas y calidad de CV."}
      </p>

      <section className="mt-7 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.href} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black text-slate-900">{lang === "en" ? card.en : card.es}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700">{lang === "en" ? card.enText : card.esText}</p>
            <Link href={card.href} className="mt-4 inline-block text-sm font-semibold text-cyan-700 hover:underline">
              {lang === "en" ? "View advice" : "Ver consejo"}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
