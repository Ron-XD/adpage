import type { Metadata } from "next";
import { cookies } from "next/headers";

import { i18n, normalizeLang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta al equipo de JobPoint para soporte o alianzas con empresas.",
};

export default async function ContactPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);
  const t = i18n[lang];

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black tracking-tight text-slate-900">{t.contact}</h1>

      <p className="mt-4 text-sm leading-7 text-slate-700">
        {lang === "en"
          ? "Take a moment at JobPoint and let us help you move your career forward. Whether you are a professional looking for your next challenge or a company searching for high-impact talent, our team is ready to support you."
          : "Haz una parada en JobPoint y conversemos sobre tu siguiente meta profesional. Ya seas un talento en busqueda de su proximo reto o una empresa que necesita incorporar perfiles clave, nuestro equipo esta listo para ayudarte."}
      </p>

      <p className="mt-3 text-sm leading-7 text-slate-700">
        {lang === "en"
          ? "Need help improving your profile, solving a platform issue, or sharing suggestions to strengthen our community? We are one message away at"
          : "Si necesitas optimizar tu perfil, resolver dudas tecnicas de la plataforma o compartir sugerencias para mejorar la comunidad, estamos a un mensaje de distancia en"}{" "}
        <span className="font-semibold text-slate-900">jobpoint.informaciondeempleo.com</span>.
      </p>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-base font-bold uppercase tracking-[0.06em] text-slate-900">
          {lang === "en" ? "Open communication channels" : "Vias de comunicacion abierta"}
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {lang === "en" ? "Candidate support" : "Soporte para candidatos"}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {lang === "en"
                ? "Questions about applications or account usage? Write to us and we will respond as quickly as possible."
                : "Tienes dudas sobre postulaciones o uso de tu cuenta? Escribenos y te responderemos lo antes posible."}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">soporte@informaciondeempleo.com</p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {lang === "en" ? "Business consulting" : "Consultoria para empresas"}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {lang === "en"
                ? "Looking to hire qualified talent? Our business team can guide your recruitment strategy."
                : "Buscas talento calificado para tu organizacion? Nuestro equipo comercial puede ayudarte a definir la mejor estrategia de captacion."}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">empresas@informaciondeempleo.com</p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{t.phone}</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {lang === "en"
                ? "Prefer a direct call? Reach us Monday to Friday, from 09:00 to 18:00 (Spain local time)."
                : "Prefieres atencion directa por telefono? Estamos disponibles de lunes a viernes, de 9:00 a 18:00 (hora peninsular)."}
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{siteConfig.contactPhone}</p>
          </article>
        </div>

        <div className="mt-5 rounded-lg border border-dashed border-slate-300 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">{lang === "en" ? "Operations base" : "Base de operaciones"}</p>
          <p className="mt-1">
            {lang === "en"
              ? "Innovation Building, 5th Floor - Digital Talent Hub. Calle de la Estrategia, 42. 28004 Madrid, Spain."
              : "Edificio Innovacion, Planta 5 - Hub de Talento Digital. Calle de la Estrategia, 42. 28004 Madrid, Espana."}
          </p>
        </div>
      </section>

      <p className="mt-7 text-sm leading-7 text-slate-700">
        {lang === "en"
          ? "Every message can open a new opportunity. Contact us today through our official website:"
          : "En JobPoint creemos que cada mensaje puede abrir una nueva oportunidad. Contactanos hoy desde nuestro sitio oficial:"}{" "}
        <span className="font-semibold text-slate-900">jobpoint.informaciondeempleo.com</span>.
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-900">
        {lang === "en" ? "Your next professional milestone starts here." : "Tu proxima meta profesional empieza aqui."}
      </p>

      <section className="mt-8">
        <form className="space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-slate-800">
              {lang === "en" ? "Your name" : "Tu nombre"}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="h-10 w-full max-w-[320px] border border-slate-300 bg-white px-3 text-sm outline-none focus:border-cyan-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-slate-800">
              {lang === "en" ? "Your email" : "Tu correo electronico"}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="h-10 w-full max-w-[320px] border border-slate-300 bg-white px-3 text-sm outline-none focus:border-cyan-700"
            />
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm text-slate-800">
              {lang === "en" ? "Subject" : "Asunto"}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="h-10 w-full max-w-[320px] border border-slate-300 bg-white px-3 text-sm outline-none focus:border-cyan-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-slate-800">
              {lang === "en" ? "Your message (optional)" : "Tu mensaje (opcional)"}
            </label>
            <textarea
              id="message"
              name="message"
              rows={9}
              className="w-full border border-slate-300 bg-white p-3 text-sm outline-none focus:border-cyan-700"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-10 items-center bg-[#178ec0] px-6 text-xs font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#0f7ead]"
          >
            {lang === "en" ? "Send" : "Enviar"}
          </button>
        </form>
      </section>
    </main>
  );
}
