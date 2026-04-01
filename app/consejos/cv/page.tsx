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
  const isEnglish = lang === "en";

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-slate-900">{isEnglish ? "Resume tip" : "Consejo de CV"}</h1>

      <article className="mt-4 space-y-4 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
        <p>
          {isEnglish
            ? "Your CV is your professional presentation letter. Its goal is not to tell your whole life story, but to show clearly why you are a strong candidate for a specific role. A clean, direct, and well-organized CV can open more interview opportunities."
            : "Tu CV es tu carta de presentacion profesional. Su objetivo no es contar toda tu historia, sino mostrar con claridad por que eres una buena opcion para un puesto especifico. Un CV limpio, directo y bien organizado puede abrirte mas oportunidades de entrevista."}
        </p>

        <p>
          {isEnglish
            ? "Start with the basics: full name, updated phone number, professional email, and city or region. Then include a short profile summary in three or four lines explaining your experience level, main strengths, and the type of role you are looking for. Keep this section simple and easy to read."
            : "Empieza con lo esencial: nombre completo, telefono actualizado, correo profesional y ciudad o zona. Luego incluye un resumen profesional de tres o cuatro lineas explicando tu nivel de experiencia, tus fortalezas principales y el tipo de puesto que buscas. Mantén esta parte simple y facil de leer."}
        </p>

        <p>
          {isEnglish
            ? "In work experience, place your most recent jobs first. For each role, include position, company, dates, and 2 to 4 achievements. Avoid only listing tasks. Instead, explain results: what improved, what you solved, or what contribution you made. If you can, use numbers to make your impact clearer."
            : "En experiencia laboral, coloca primero tus trabajos mas recientes. En cada puesto, incluye cargo, empresa, fechas y de 2 a 4 logros. Evita solo listar tareas. En su lugar, explica resultados: que mejoraste, que problema resolviste o que aporte hiciste. Si puedes, usa numeros para que tu impacto se entienda mejor."}
        </p>

        <p>
          {isEnglish
            ? "In education and skills, include only what adds value to the vacancy. Prioritize relevant studies, certifications, and practical tools you actually use. It is better to show fewer skills with confidence than to list many that you cannot support in an interview."
            : "En educacion y habilidades, incluye solo lo que aporte valor a la vacante. Prioriza estudios, certificaciones y herramientas practicas que realmente usas. Es mejor mostrar menos habilidades con seguridad que listar muchas que luego no puedas respaldar en una entrevista."}
        </p>

        <p>
          {isEnglish
            ? "Finally, review spelling, keep a consistent format, and avoid unnecessary information. A CV of one page is ideal for most profiles, and two pages can work for longer trajectories. The key is that any recruiter can understand your profile in less than a minute."
            : "Por ultimo, revisa ortografia, mantén un formato consistente y evita informacion innecesaria. Un CV de una pagina es ideal para la mayoria de perfiles, y dos paginas pueden funcionar para trayectorias mas largas. La clave es que cualquier reclutador entienda tu perfil en menos de un minuto."}
        </p>

        <p className="font-semibold text-slate-800">
          {isEnglish
            ? "Conclusion: a clear and focused CV is more effective than a long one. Highlight your real value with simple language and concrete results, and you will improve your chances of being called for interviews."
            : "Conclusion: un CV claro y enfocado es mas efectivo que uno largo. Destaca tu valor real con lenguaje simple y resultados concretos, y mejoraras tus posibilidades de ser llamado a entrevistas."}
        </p>
      </article>
    </main>
  );
}
