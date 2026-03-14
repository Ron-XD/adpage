import type { Metadata } from "next";
import { cookies } from "next/headers";

import { i18n, normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Quienes somos",
  description: "Conoce la mision y enfoque de JobPoint para publicar oportunidades laborales.",
};

export default async function AboutPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);
  const t = i18n[lang];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black">{t.aboutTitle}</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        {t.aboutLead}
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">{t.howWeVerify}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>{t.verifyPoint1}</li>
            <li>{t.verifyPoint2}</li>
            <li>{t.verifyPoint3}</li>
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">{t.editorialLine}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>{t.editorialPoint1}</li>
            <li>{t.editorialPoint2}</li>
            <li>{t.editorialPoint3}</li>
          </ul>
        </article>
      </section>

      <section className="mt-8 space-y-4 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-black text-slate-900">
          {lang === "en" ? "Raising the labor market standard" : "Elevando el estandar del mercado laboral"}
        </h2>
        <p className="text-sm leading-7 text-slate-700">
          {lang === "en"
            ? "At JobPoint, we are not trying to be just another job board. We are building the meeting point where outstanding professionals connect with companies that move industries forward. Our platform was created with a simple principle: the right job is discovered through smart, high-quality connections."
            : "En JobPoint no buscamos ser otro portal de empleo. Queremos ser el punto de encuentro donde el talento sobresaliente conecta con empresas que impulsan el cambio. Nuestra plataforma nace con una idea simple: el trabajo ideal se descubre mediante conexiones inteligentes y de calidad."}
        </p>
        <p className="text-sm leading-7 text-slate-700">
          {lang === "en"
            ? "Today, hiring is no longer only about filling a vacancy. It is about aligning values, motivation, and capabilities. At jobpoint.informaciondeempleo.com, we reduce market noise and prioritize relevant opportunities so candidates and recruiters can focus on what truly matters."
            : "Hoy contratar ya no consiste solo en cubrir una vacante. Se trata de alinear valores, motivacion y habilidades. En jobpoint.informaciondeempleo.com filtramos el ruido del mercado y priorizamos oportunidades relevantes para que candidatos y empresas se enfoquen en lo que realmente importa."}
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-black text-slate-900">{lang === "en" ? "The JobPoint DNA" : "El ADN de JobPoint"}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-slate-900">
              {lang === "en" ? "Curated excellence" : "Excelencia curada"}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {lang === "en"
                ? "We do not publish everything; we publish what meets clear quality and transparency standards."
                : "No publicamos todo; publicamos lo que cumple estandares claros de calidad y transparencia."}
            </p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-slate-900">
              {lang === "en" ? "Future-oriented vision" : "Vision de futuro"}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {lang === "en"
                ? "We focus on high-growth sectors, including technology, clean energy, digital operations, and high-value services."
                : "Nos enfocamos en sectores de alto crecimiento, como tecnologia, energias limpias, operaciones digitales y servicios de alto valor."}
            </p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-slate-900">
              {lang === "en" ? "Professional momentum" : "Impulso profesional"}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {lang === "en"
                ? "We believe every candidate can grow. Beyond listings, we offer context and criteria to help people make better career decisions."
                : "Creemos en el potencial de cada candidato. Mas alla de las vacantes, ofrecemos contexto y criterio para tomar mejores decisiones profesionales."}
            </p>
          </article>
        </div>
      </section>

      <section className="mt-8 space-y-4 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-black text-slate-900">{lang === "en" ? "Our mission" : "Nuestra mision"}</h2>
        <p className="text-sm leading-7 text-slate-700">
          {lang === "en"
            ? "Our mission is to make hiring feel as rewarding as the first day on the job. We replace uncertainty with clarity: companies come to JobPoint to find strong professionals, and candidates come to discover opportunities aligned with their next big step."
            : "Nuestra mision es hacer que contratar y encontrar empleo sea tan satisfactorio como el primer dia de trabajo. Sustituimos la incertidumbre por claridad: las empresas llegan a JobPoint para encontrar perfiles solidos, y los candidatos para descubrir oportunidades alineadas con su siguiente gran paso."}
        </p>
        <p className="text-sm leading-7 text-slate-700">
          {lang === "en"
            ? "We are redefining what job search means in the digital era. Explore current openings and join a network that turns professional ambition into real progress at jobpoint.informaciondeempleo.com."
            : "Estamos redefiniendo lo que significa buscar empleo en la era digital. Explora las vacantes activas y forma parte de una red que convierte la ambicion profesional en progreso real en jobpoint.informaciondeempleo.com."}
        </p>
      </section>
    </main>
  );
}
