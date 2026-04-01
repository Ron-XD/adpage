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
  const isEnglish = lang === "en";

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-slate-900">{isEnglish ? "Employment tip" : "Consejo de empleo"}</h1>

      <article className="mt-4 space-y-4 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
        <p>
          {isEnglish
            ? "A good job search is not about applying to everything. It is about applying better. Instead of sending many generic applications, choose offers that really match your experience and prepare each application with care. This usually increases interview opportunities and helps you avoid frustration."
            : "Una buena busqueda de empleo no se trata de postular a todo. Se trata de postular mejor. En lugar de enviar muchas solicitudes genericas, elige ofertas que realmente se ajusten a tu experiencia y prepara cada postulacion con cuidado. Esto suele aumentar las oportunidades de entrevista y te ayuda a evitar frustraciones."}
        </p>

        <p>
          {isEnglish
            ? "Before applying, read the vacancy calmly and identify the three most important points: what the company needs, what tasks the role includes, and what profile they are looking for. Then compare those points with your background. If you meet a large part of the requirements, apply with confidence, even if you do not meet 100%."
            : "Antes de postular, lee la vacante con calma e identifica tres puntos importantes: que necesita la empresa, que tareas incluye el puesto y que perfil estan buscando. Luego compara esos puntos con tu experiencia. Si cumples gran parte de los requisitos, postula con confianza, aunque no cumplas el 100%."}
        </p>

        <p>
          {isEnglish
            ? "When writing your profile, use clear language and specific examples. For example, instead of saying you are responsible, explain what you achieved: improved customer service times, coordinated a team, or reduced errors in a process. Concrete examples make your application stronger and easier to understand."
            : "Al escribir tu perfil, usa un lenguaje claro y ejemplos concretos. Por ejemplo, en vez de decir que eres responsable, explica que lograste: mejorar tiempos de atencion, coordinar un equipo o reducir errores en un proceso. Los ejemplos concretos hacen tu postulacion mas fuerte y facil de entender."}
        </p>

        <p>
          {isEnglish
            ? "Also, keep your CV organized and easy to scan: updated contact information, recent experience first, and short descriptions with key achievements. If possible, write a short message for each application explaining why you are interested in that specific role. This simple step can make a big difference."
            : "Tambien mantén tu CV ordenado y facil de revisar: datos de contacto actualizados, experiencia reciente primero y descripciones breves con logros clave. Si es posible, escribe un mensaje corto en cada postulacion explicando por que te interesa ese puesto en particular. Este paso simple puede marcar una gran diferencia."}
        </p>

        <p className="font-semibold text-slate-800">
          {isEnglish
            ? "Conclusion: apply with strategy, not haste. Fewer applications, but better prepared, usually produce better results and open more real opportunities."
            : "Conclusion: postula con estrategia, no con prisa. Menos solicitudes, pero mejor preparadas, suelen dar mejores resultados y abrir mas oportunidades reales."}
        </p>
      </article>
    </main>
  );
}
