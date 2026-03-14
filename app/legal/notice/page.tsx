import type { Metadata } from "next";
import { cookies } from "next/headers";

import { LegalPageHeader } from "@/components/LegalPageHeader";
import { normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Aviso legal y condiciones de uso",
  description: "Condiciones legales de acceso, uso y responsabilidad del portal jobpoint.informaciondeempleo.com.",
};

export default async function NoticePage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <LegalPageHeader
        title={lang === "en" ? "Legal notice and terms of use" : "Aviso legal y condiciones de uso"}
        summary={
          lang === "en"
            ? "Legal framework governing access, navigation, and use of jobpoint.informaciondeempleo.com, including ownership, liability, and applicable jurisdiction."
            : "Marco legal que regula el acceso, navegacion y uso de jobpoint.informaciondeempleo.com, incluyendo titularidad, responsabilidad y jurisdiccion aplicable."
        }
        lastUpdated="10/03/2026"
        lang={lang}
      />

      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
        <p>
          {lang === "en"
            ? "Welcome to JobPoint. This legal notice governs access, navigation, and use of the website hosted at"
            : "Bienvenido a JobPoint. Este aviso legal regula el acceso, navegacion y uso del sitio web alojado en"}
          <span className="font-semibold text-slate-900"> jobpoint.informaciondeempleo.com</span>. {lang === "en" ? "By accessing the portal, users accept the conditions described below." : "Al acceder al portal, el usuario acepta las condiciones aqui descritas."}
        </p>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "1. Owner identification" : "1. Informacion general del titular"}</h2>
          <p>
            {lang === "en"
              ? "In accordance with regulations applicable to digital services, the owner of this site is"
              : "En cumplimiento de la normativa aplicable a servicios digitales, se informa que el titular del sitio es"}
            <span className="font-semibold text-slate-900"> Soluciones Tecnologicas JobPoint S.A.</span>, con identificacion fiscal
            <span className="font-semibold text-slate-900"> A-112233445</span>, domicilio en
            <span className="font-semibold text-slate-900"> Calle de la Innovacion Laboral, 15, 08015 Barcelona, Espana</span>, y correo de contacto oficial
            <span className="font-semibold text-slate-900"> administrativo@informaciondeempleo.com</span>.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "2. Purpose of the portal" : "2. Finalidad del portal"}</h2>
          <p>
            {lang === "en"
              ? "JobPoint is a platform focused on publishing job opportunities and offering job-search tools. The portal acts as an informational channel between employers and candidates and is not a contracting party in the final employment relationship."
              : "JobPoint es una plataforma orientada a la difusion de ofertas de empleo y a la facilitacion de herramientas de busqueda laboral. El portal actua como canal informativo entre empleadores y candidatos, sin intervenir como parte contratante en la relacion laboral final."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "3. Content liability" : "3. Responsabilidad sobre los contenidos"}</h2>
          <p>
            {lang === "en"
              ? "Although editorial review and quality controls are applied, JobPoint cannot absolutely guarantee the validity, accuracy, or completeness of all listings published by third parties."
              : "Aunque se aplican procesos de revision editorial y control de calidad, JobPoint no garantiza de forma absoluta la vigencia, exactitud o integridad de todas las ofertas publicadas por terceros."}
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>{lang === "en" ? "Incorrect, incomplete, or inaccurate information provided by employers or recruiters." : "Datos incorrectos, incompletos o inexactos proporcionados por empleadores o reclutadores."}</li>
            <li>{lang === "en" ? "Technical interruptions, downtime, or incidents beyond the owner control." : "Interrupciones tecnicas, fallos de disponibilidad o incidencias externas al control del titular."}</li>
            <li>{lang === "en" ? "Improper use of the platform by users or third parties." : "Uso inadecuado de la plataforma por parte de usuarios o terceros."}</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "4. Intellectual and industrial property" : "4. Propiedad intelectual e industrial"}</h2>
          <p>
            {lang === "en"
              ? "Site content, including texts, design, source code, logos, images, and trademarks, is protected by intellectual and industrial property laws and belongs to JobPoint or licensed third parties. Reproduction, distribution, or commercial use is prohibited without prior written authorization."
              : "Los contenidos del sitio, incluidos textos, diseno, codigo, logotipos, imagenes y marcas, estan protegidos por la legislacion de propiedad intelectual e industrial y pertenecen a JobPoint o a terceros autorizantes. Queda prohibida su reproduccion, distribucion o explotacion comercial sin autorizacion previa y expresa."}
          </p>
          <p>
            {lang === "en"
              ? "Automated and large-scale data extraction (web scraping) for unauthorized or commercial purposes is also prohibited."
              : "Tambien se prohibe la extraccion automatizada y masiva de datos (web scraping) con fines comerciales o no autorizados."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "5. External links" : "5. Enlaces externos"}</h2>
          <p>
            {lang === "en"
              ? "The portal may include links to third-party sites, such as corporate pages of hiring companies. JobPoint does not control and is not responsible for the content, availability, or privacy policies of those external sites."
              : "El portal puede incluir enlaces a sitios de terceros, como paginas corporativas de empresas empleadoras. JobPoint no controla ni asume responsabilidad por los contenidos, disponibilidad o politicas de privacidad de dichos sitios externos."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "6. Updates to these terms" : "6. Actualizacion de terminos"}</h2>
          <p>
            {lang === "en"
              ? "JobPoint may modify this legal notice at any time to reflect legal updates, internal criteria, or new service features. Users are encouraged to review this page periodically for the current version."
              : "JobPoint puede modificar este aviso legal en cualquier momento para adaptarlo a cambios normativos, criterios internos o nuevas funcionalidades del servicio. Se recomienda revisar periodicamente esta pagina para conocer la version vigente."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "7. Governing law and jurisdiction" : "7. Ley aplicable y jurisdiccion"}</h2>
          <p>
            {lang === "en"
              ? "Any dispute related to portal use will be governed by Spanish law. Unless mandatory law states otherwise, the parties submit to the Courts of Barcelona, Spain."
              : "Para cualquier controversia relacionada con el uso del portal, sera de aplicacion la legislacion espanola. Salvo norma imperativa en contrario, las partes se someten a los Juzgados y Tribunales de Barcelona, Espana."}
          </p>
        </section>

        <p>
          {lang === "en"
            ? "If you detect inaccurate content or need additional legal information, you may contact"
            : "Si detecta contenido inexacto o necesita ampliar informacion legal, puede escribir a"}
          <span className="font-semibold text-slate-900"> administrativo@informaciondeempleo.com</span>.
        </p>
      </div>
    </main>
  );
}
