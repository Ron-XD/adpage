import type { Metadata } from "next";
import { cookies } from "next/headers";

import { LegalPageHeader } from "@/components/LegalPageHeader";
import { normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Terminos y condiciones",
  description: "Reglas de uso del portal JobPoint para candidatos, empresas y visitantes.",
};

export default async function TermsPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <LegalPageHeader
        title={lang === "en" ? "JobPoint terms and conditions of use" : "Terminos y condiciones de uso de JobPoint"}
        summary={
          lang === "en"
            ? "Platform usage rules for candidates, companies, and visitors, including publication standards and liability limits."
            : "Reglas de uso de la plataforma para candidatos, empresas y visitantes, incluyendo limites de responsabilidad y condiciones de publicacion."
        }
        lastUpdated="10/03/2026"
        lang={lang}
      />

      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
        <p>
          {lang === "en"
            ? "Welcome to JobPoint. Access to and use of jobpoint.informaciondeempleo.com implies acceptance of these conditions. If you do not agree with any clause, you should not use the portal."
            : "Bienvenido a JobPoint. El acceso y uso de jobpoint.informaciondeempleo.com implica la aceptacion de estas condiciones. Si no esta de acuerdo con alguna de ellas, debe abstenerse de utilizar el portal y sus funcionalidades."}
        </p>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "1. Service description" : "1. Descripcion del servicio"}</h2>
          <p>
            {lang === "en"
              ? "JobPoint is a digital platform designed to publish employment opportunities and connect candidates with employers. Our role is informational intermediation; we are not the hiring party and we do not participate in final salary or contract negotiations."
              : "JobPoint es una plataforma digital orientada a difundir oportunidades laborales y facilitar el contacto entre candidatos y empleadores. Nuestro rol es el de intermediacion informativa; no actuamos como empresa contratante ni participamos en la negociacion final de condiciones, salario o formalizacion del contrato."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "2. Candidate obligations" : "2. Condiciones para candidatos"}</h2>
          <p>{lang === "en" ? "By registering or applying through the portal, candidates agree to:" : "Al registrarse, postular o enviar informacion en el portal, el usuario candidato se compromete a:"}</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>{lang === "en" ? "Provide truthful and updated personal, academic, and professional information." : "Aportar datos personales, academicos y profesionales veraces y actualizados."}</li>
            <li>{lang === "en" ? "Avoid posting offensive, discriminatory, fraudulent, or rights-infringing content." : "No publicar contenido ofensivo, discriminatorio, fraudulento o que vulnere derechos de terceros."}</li>
            <li>{lang === "en" ? "Use the platform only for legitimate job-search purposes." : "Utilizar la plataforma exclusivamente para fines legitimos relacionados con la busqueda de empleo."}</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "3. Conditions for companies and recruiters" : "3. Condiciones para empresas y reclutadores"}</h2>
          {lang === "en" ? "Organizations publishing vacancies on JobPoint represent and warrant that:" : "Las organizaciones que publiquen vacantes en JobPoint declaran y aceptan que:"}
          <ul className="list-disc space-y-1 pl-5">
            <li>{lang === "en" ? "Published openings are real, current, and intended for legitimate hiring." : "Las ofertas corresponden a puestos reales, vigentes y con finalidad de contratacion autentica."}</li>
            <li>{lang === "en" ? "They will not request candidate payments, deposits, or investments to join recruitment processes." : "No exigiran pagos, depositos ni inversiones a candidatos para participar en procesos de seleccion."}</li>
            <li>{lang === "en" ? "They will comply with applicable labor laws and equal opportunity principles." : "Actuaran conforme a la normativa laboral aplicable y al principio de igualdad de oportunidades."}</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "4. Intellectual property" : "4. Propiedad intelectual"}</h2>
          <p>
            {lang === "en"
              ? "Site content, including texts, images, databases, code, logos, and trademarks, belongs to JobPoint or its licensors. Partial or total reproduction and automated extraction through scraping or data mining are prohibited without prior written authorization."
              : "El contenido del sitio, incluyendo textos, imagenes, bases de datos, codigo, marcas y logotipos, pertenece a JobPoint o a sus respectivos licenciantes. Queda prohibida la reproduccion total o parcial, asi como la extraccion automatizada de informacion mediante tecnicas de scraping o mineria de datos sin autorizacion previa y por escrito."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "5. Disclaimer of warranties and liability" : "5. Exclusion de garantias y responsabilidad"}</h2>
          <p>
            {lang === "en"
              ? "JobPoint applies reasonable review standards but cannot absolutely guarantee the accuracy of all third-party information. Therefore, we do not assume liability for:"
              : "JobPoint aplica medidas razonables de revision, pero no puede asegurar de forma absoluta la exactitud o veracidad de todos los datos aportados por terceros. En consecuencia, no asumimos responsabilidad por:"}
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>{lang === "en" ? "Direct or indirect damages resulting from interactions between candidates and recruiters." : "Perjuicios directos o indirectos derivados de la relacion entre candidatos y reclutadores."}</li>
            <li>{lang === "en" ? "Errors, omissions, or outdated details in third-party vacancy descriptions." : "Errores, omisiones o desactualizacion en la descripcion de vacantes publicadas por terceros."}</li>
            <li>{lang === "en" ? "Service interruptions or temporary unavailability due to external technical causes." : "Interrupciones, caidas o indisponibilidad temporal del servicio por causas tecnicas externas."}</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "6. Third-party links" : "6. Enlaces a terceros"}</h2>
          <p>
            {lang === "en"
              ? "This portal may include links to external websites such as employer pages, job boards, or HR providers. JobPoint does not control those websites and is not responsible for their content, services, terms, or privacy practices."
              : "Este portal puede contener enlaces a paginas externas de empresas, bolsas de empleo o proveedores de recursos humanos. JobPoint no controla esos sitios y no responde por sus contenidos, servicios, condiciones ni politicas de privacidad."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "7. Governing law and jurisdiction" : "7. Ley aplicable y jurisdiccion"}</h2>
          <p>
            {lang === "en"
              ? "These conditions are governed by Spanish law. Any dispute related to portal use, unless mandatory law provides otherwise, will be submitted to the courts of Barcelona, Spain."
              : "Estas condiciones se interpretan conforme a la legislacion espanola. Para cualquier conflicto relacionado con el uso del portal, y salvo disposicion legal imperativa en sentido contrario, las partes se someten a los Juzgados y Tribunales de Barcelona, Espana."}
          </p>
        </section>

        <p>
          {lang === "en"
            ? "JobPoint may update these terms when required by legal, operational, or product changes. The active version will always be the one published on this page."
            : "JobPoint podra actualizar estos terminos cuando sea necesario por cambios normativos, operativos o de producto. La version vigente sera la publicada en esta misma pagina."}
        </p>
      </div>
    </main>
  );
}
