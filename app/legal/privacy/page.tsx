import type { Metadata } from "next";
import { cookies } from "next/headers";

import { LegalPageHeader } from "@/components/LegalPageHeader";
import { normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Politica de privacidad",
  description: "Conoce como protegemos y tratamos los datos personales en JobPoint.",
};

export default async function PrivacyPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <LegalPageHeader
        title={lang === "en" ? "Privacy policy" : "Politica de privacidad"}
        summary={
          lang === "en"
            ? "How we collect, use, retain, and protect personal data when you use jobpoint.informaciondeempleo.com."
            : "Como recopilamos, usamos, conservamos y protegemos datos personales en jobpoint.informaciondeempleo.com."
        }
        lastUpdated="10/03/2026"
        lang={lang}
      />

      <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
        <p>
          {lang === "en"
            ? "At JobPoint, we value the trust you place in us when searching for your next professional opportunity. This policy explains, in clear terms, how we collect, use, protect, and retain personal data within jobpoint.informaciondeempleo.com."
            : "En JobPoint valoramos la confianza que depositas en nosotros al buscar tu proxima oportunidad laboral. Esta politica explica de forma clara como recopilamos, usamos, protegemos y conservamos datos personales dentro de jobpoint.informaciondeempleo.com."}
        </p>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "1. Interaction and comments" : "1. Interaccion y comentarios"}</h2>
          <p>
            {lang === "en"
              ? "When you submit forms, post comments, or participate in discussion areas, we process the information you provide (for example, name, email, and message content). We may also record technical data such as IP address and browser user agent to prevent abuse, detect fraudulent behavior, and reduce spam."
              : "Cuando completas formularios, publicas comentarios o participas en espacios de interaccion, tratamos la informacion que proporcionas (por ejemplo, nombre, correo y contenido del mensaje). Tambien podemos registrar datos tecnicos como direccion IP y agente de usuario del navegador para prevenir abuso, detectar comportamientos fraudulentos y reducir spam."}
          </p>
          <p>
            {lang === "en"
              ? "If profile-image validation tools are enabled (such as Gravatar), an anonymized hash of your email may be sent to verify whether an avatar exists. In that case, the profile image can be shown publicly next to your approved contribution."
              : "Si estan habilitadas herramientas de validacion de imagen de perfil (como Gravatar), puede enviarse una huella anonima de tu correo para comprobar si existe un avatar asociado. En ese caso, la imagen de perfil podra mostrarse publicamente junto a tu participacion aprobada."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "2. Media and file uploads" : "2. Gestion de archivos multimedia"}</h2>
          <p>
            {lang === "en"
              ? "If you upload images to your profile or job-related content, we recommend removing metadata that could expose sensitive information, especially geolocation (EXIF GPS). Other users may be able to download and inspect uploaded files."
              : "Si subes imagenes a tu perfil o a contenido relacionado con vacantes, recomendamos eliminar metadatos que puedan exponer informacion sensible, especialmente geolocalizacion (EXIF GPS). Otros usuarios pueden descargar y analizar los archivos publicados."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "3. Cookies and session management" : "3. Uso de cookies y sesiones"}</h2>
          <p>
            {lang === "en"
              ? "We use technical and preference cookies to improve usability, maintain secure sessions, and remember configuration choices. Cookie durations depend on their purpose."
              : "Utilizamos cookies tecnicas y de preferencia para mejorar la navegacion, mantener sesiones seguras y recordar configuraciones del usuario. La duracion de cada cookie depende de su finalidad."}
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>{lang === "en" ? "Comment preferences: optional storage of form details for future interactions (up to one year)." : "Preferencias en comentarios: almacenamiento opcional de datos del formulario para futuras interacciones (hasta un ano)."}</li>
            <li>{lang === "en" ? "Access and security: temporary cookies to validate browser compatibility and protect login workflows." : "Acceso y seguridad: cookies temporales para validar compatibilidad del navegador y proteger el flujo de inicio de sesion."}</li>
            <li>{lang === "en" ? "Account persistence: login/session cookies and interface settings (for example, display preferences)." : "Persistencia de cuenta: cookies de sesion/acceso y configuraciones de interfaz (por ejemplo, preferencias de visualizacion)."}</li>
            <li>{lang === "en" ? "Editorial control: technical cookies associated with editing processes for internal operational continuity." : "Control editorial: cookies tecnicas asociadas a procesos de edicion para continuidad operativa interna."}</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "4. Embedded and third-party content" : "4. Integracion de contenidos externos"}</h2>
          <p>
            {lang === "en"
              ? "Some listings or pages may include embedded content from third-party services (such as videos, maps, or external resources). These providers may apply their own cookies and tracking mechanisms under their own privacy terms."
              : "Algunas vacantes o paginas pueden incluir contenido incrustado de terceros (como videos, mapas o recursos externos). Estos proveedores pueden aplicar sus propias cookies y mecanismos de seguimiento bajo sus propias politicas de privacidad."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "5. Data transfer and security controls" : "5. Transferencia y seguridad de datos"}</h2>
          <p>
            {lang === "en"
              ? "We share personal data only when necessary for critical technical operations or legal compliance. For example, password-recovery processes may include security metadata to verify the legitimacy of requests."
              : "Solo compartimos datos personales cuando es necesario para operaciones tecnicas criticas o cumplimiento normativo. Por ejemplo, los procesos de recuperacion de contrasena pueden incluir metadatos de seguridad para verificar la legitimidad de la solicitud."}
          </p>
          <p>
            {lang === "en"
              ? "We also use automated systems to detect suspicious interactions and mitigate spam or abusive behavior."
              : "Tambien utilizamos sistemas automatizados para detectar interacciones sospechosas y mitigar spam o comportamientos abusivos."}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "6. Data retention" : "6. Conservacion de informacion"}</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>{lang === "en" ? "Comments and interaction metadata may be retained to streamline moderation and preserve traceability." : "Los comentarios y metadatos de interaccion pueden conservarse para agilizar moderacion y mantener trazabilidad."}</li>
            <li>{lang === "en" ? "Registered user profiles are stored while the account remains active and for legally required periods afterward." : "Los perfiles de usuario registrados se almacenan mientras la cuenta permanezca activa y durante los periodos legalmente exigidos despues."}</li>
            <li>{lang === "en" ? "Users can update most profile fields at any time through their account settings." : "El usuario puede actualizar la mayoria de campos del perfil en cualquier momento desde su configuracion de cuenta."}</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
          <h2 className="text-base font-bold text-slate-900">{lang === "en" ? "7. Your data rights" : "7. Tus derechos sobre los datos"}</h2>
          <p>
            {lang === "en"
              ? "You may request access to your personal data, correction of inaccurate data, deletion where legally applicable, and restriction of processing in specific scenarios."
              : "Puedes solicitar acceso a tus datos personales, correccion de informacion inexacta, eliminacion cuando sea legalmente aplicable y limitacion del tratamiento en escenarios especificos."}
          </p>
          <p>
            {lang === "en"
              ? "To exercise these rights, contact us through our official support channels. Some records may be retained when required for legal, security, or administrative reasons."
              : "Para ejercer estos derechos, contactanos por nuestros canales oficiales de soporte. Algunos registros podran conservarse cuando exista obligacion legal, de seguridad o administrativa."}
          </p>
        </section>
      </div>
    </main>
  );
}
