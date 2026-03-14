import type { Metadata } from "next";
import { cookies } from "next/headers";

import { LegalPageHeader } from "@/components/LegalPageHeader";
import { normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: "Informacion clara sobre uso de cookies, gestion del consentimiento y derechos del usuario en JobPoint.",
};

export default async function CookiesPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <LegalPageHeader
        title={lang === "en" ? "Cookie policy" : "Politica de cookies"}
        summary={
          lang === "en"
            ? "Information about first-party and third-party cookies, consent management, and available opt-out options."
            : "Informacion sobre cookies propias y de terceros, gestion del consentimiento y opciones de desactivacion disponibles para el usuario."
        }
        lastUpdated="10/03/2026"
        lang={lang}
      />

      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
        <p>
          {lang === "en"
            ? "A cookie is a small file stored in your browser when you visit a website. Its main purpose is to recognize your visit, improve navigation, and adapt certain settings to your preferences. Cookies may store technical information, language preferences, usage measurement data, and other settings required for an efficient experience."
            : "Una cookie es un archivo pequeno que se guarda en su navegador al visitar un sitio web. Su funcion principal es reconocer su visita, facilitar la navegacion y adaptar ciertas opciones del portal a sus preferencias. Las cookies pueden almacenar informacion tecnica, ajustes de idioma, medicion de uso y otras configuraciones necesarias para ofrecer una experiencia mas eficiente."}
        </p>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "Cookies used on this website" : "Cookies utilizadas en este sitio web"}</h2>
          <p>
            {lang === "en"
              ? "Following transparency standards and recommendations from the Spanish Data Protection Agency, we describe the cookie categories that may be used on jobpoint.informaciondeempleo.com."
              : "Conforme a criterios de transparencia y a las recomendaciones de la Agencia Espanola de Proteccion de Datos, detallamos las categorias de cookies que pueden utilizarse en jobpoint.informaciondeempleo.com."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-slate-900">{lang === "en" ? "1. First-party cookies" : "1. Cookies propias"}</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold text-slate-900">{lang === "en" ? "Technical or session cookies:" : "Cookies tecnicas o de sesion:"}</span> {lang === "en" ? "required for website functionality, basic security, and delivery of user-requested services." : "necesarias para el funcionamiento del sitio, la seguridad basica y la correcta prestacion de servicios solicitados por el usuario."}
            </li>
            <li>
              <span className="font-semibold text-slate-900">{lang === "en" ? "Functional cookies:" : "Cookies funcionales:"}</span> {lang === "en" ? "allow us to remember preferences such as language, theme, or navigation settings for future visits." : "permiten recordar preferencias como idioma, tema visual o ajustes de navegacion para mejorar la experiencia en visitas posteriores."}
            </li>
            <li>
              <span className="font-semibold text-slate-900">{lang === "en" ? "Interaction control cookies:" : "Cookies de control de interacciones:"}</span> {lang === "en" ? "help prevent automated abuse in forms and comments, reducing spam and fraudulent use." : "ayudan a prevenir abuso automatizado en formularios y comentarios, reduciendo spam y uso fraudulento."}
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-slate-900">{lang === "en" ? "2. Third-party cookies" : "2. Cookies de terceros"}</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold text-slate-900">{lang === "en" ? "Web analytics (for example, Google Analytics):" : "Analitica web (por ejemplo, Google Analytics):"}</span> {lang === "en" ? "may be used to obtain aggregated traffic and performance statistics. These cookies are enabled according to applicable consent settings." : "se pueden usar para obtener estadisticas agregadas sobre trafico, rendimiento y comportamiento de navegacion. Estas cookies se activan segun la configuracion de consentimiento aplicable."}
            </li>
            <li>
              <span className="font-semibold text-slate-900">{lang === "en" ? "Social platforms:" : "Plataformas sociales:"}</span> {lang === "en" ? "if users interact with external widgets (share/follow buttons), those platforms may install their own cookies under their separate policies." : "si el usuario interactua con botones o widgets externos (compartir, seguir, etc.), dichas plataformas pueden instalar sus propias cookies bajo sus politicas independientes."}
            </li>
            <li>
              <span className="font-semibold text-slate-900">{lang === "en" ? "Advertising services:" : "Servicios publicitarios:"}</span> {lang === "en" ? "if ad technology is enabled, providers may use cookies for performance measurement, frequency capping, or ad personalization under required legal bases." : "en caso de habilitarse tecnologia de anuncios, los proveedores podran usar cookies para medir rendimiento, limitar frecuencia o personalizar publicidad, siempre con las bases legales exigidas."}
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "Cookie deactivation or deletion" : "Desactivacion o eliminacion de cookies"}</h2>
          <p>
            {lang === "en"
              ? "You can accept, reject, or delete cookies at any time from your browser settings. Please note that blocking essential technical cookies may affect portal functionality."
              : "Puede aceptar, rechazar o eliminar cookies en cualquier momento desde la configuracion de su navegador. Tenga en cuenta que, si bloquea cookies tecnicas esenciales, algunas funciones del portal podrian no operar correctamente."}
          </p>
          <p>
            {lang === "en"
              ? "Each browser manages cookies differently. You can review official guides from Chrome, Edge, Firefox, and Safari for updated management steps."
              : "Cada navegador gestiona las cookies de forma distinta. Puede consultar las guias oficiales de Chrome, Edge, Firefox y Safari para conocer los pasos actualizados de administracion."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "Additional notes" : "Notas adicionales"}</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>{lang === "en" ? "JobPoint does not control cookies installed by third-party websites linked from this portal." : "JobPoint no controla las cookies instaladas por sitios o servicios de terceros enlazados desde este portal."}</li>
            <li>{lang === "en" ? "Cookie configuration and deletion depend on each browser and user device." : "La configuracion y eliminacion de cookies depende de cada navegador y del dispositivo utilizado por el usuario."}</li>
            <li>{lang === "en" ? "If you save a cookie rejection preference, a technical cookie may be required to remember that choice." : "Si guarda su preferencia de rechazo de cookies, puede requerirse una cookie tecnica para recordar dicha decision."}</li>
            <li>
              {lang === "en"
                ? "When third-party tools such as Google Analytics are used, data processing is governed by those providers terms, including possible international transfers."
                : "Cuando se utilicen herramientas de terceros como Google Analytics, el tratamiento de datos se rige por las condiciones y politicas de dichos proveedores, incluyendo posibles transferencias internacionales de datos."}
            </li>
            <li>
              {lang === "en"
                ? "We recommend reviewing this policy periodically, as it may be updated due to regulatory, technical, or service changes."
                : "Recomendamos revisar periodicamente esta politica, ya que puede actualizarse por cambios regulatorios, tecnicos o por incorporacion de nuevos servicios."}
            </li>
          </ul>
        </section>

        <p>
          {lang === "en"
            ? "For any questions about this Cookie Policy, contact us through the site contact section or via"
            : "Para cualquier duda sobre esta Politica de cookies, puede contactarnos a traves de la seccion de contacto del sitio o mediante"}
          <span className="font-semibold text-slate-900"> administrativo@informaciondeempleo.com</span>.
        </p>
      </div>
    </main>
  );
}
