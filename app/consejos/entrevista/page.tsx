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
  const isEnglish = lang === "en";

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-slate-900">{isEnglish ? "Interview tip" : "Consejo de entrevista"}</h1>

      <article className="mt-4 space-y-4 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
        <p>
          {isEnglish
            ? "A job interview is not an exam to trap you. It is a conversation to understand whether your profile and the role are a good match. The best way to stand out is to prepare with clarity, speak naturally, and show real examples of what you have done."
            : "Una entrevista de trabajo no es un examen para atraparte. Es una conversacion para entender si tu perfil y el puesto encajan bien. La mejor forma de destacar es prepararte con claridad, hablar con naturalidad y mostrar ejemplos reales de lo que has hecho."}
        </p>

        <p>
          {isEnglish
            ? "Before the interview, spend a few minutes reviewing the company and the role. Understand what they do, what they value, and what they expect from the position. This helps you answer with focus and also ask better questions, which shows professionalism and genuine interest."
            : "Antes de la entrevista, dedica unos minutos a revisar la empresa y el puesto. Entiende a que se dedican, que valoran y que esperan de esa posicion. Esto te ayuda a responder con enfoque y tambien a hacer mejores preguntas, lo que transmite profesionalismo e interes real."}
        </p>

        <p>
          {isEnglish
            ? "When talking about your experience, use simple and direct structure: situation, action, and result. For example, explain what challenge you faced, what you did to solve it, and what positive result you achieved. This makes your answers clear and easier to remember."
            : "Al hablar de tu experiencia, usa una estructura simple y directa: situacion, accion y resultado. Por ejemplo, cuenta que reto enfrentaste, que hiciste para resolverlo y que resultado positivo lograste. Esto hace que tus respuestas sean claras y faciles de recordar."}
        </p>

        <p>
          {isEnglish
            ? "It is also important to prepare for common questions such as your strengths, areas to improve, and reasons for changing jobs. Be honest and balanced. In strengths, mention what you do well with examples. In areas to improve, mention what you are already working on to grow."
            : "Tambien es importante prepararte para preguntas comunes como tus fortalezas, aspectos a mejorar y motivos de cambio laboral. Responde con honestidad y equilibrio. En fortalezas, menciona lo que haces bien con ejemplos. En aspectos a mejorar, explica que ya estas haciendo para crecer."}
        </p>

        <p>
          {isEnglish
            ? "Finally, take care of simple details: arrive on time, dress appropriately for the role, and maintain a respectful and confident attitude. At the end, thank the interviewer for their time and confirm your interest in the position. These details reinforce a strong professional impression."
            : "Por ultimo, cuida detalles simples: llega puntual, viste de forma adecuada para el puesto y mantén una actitud respetuosa y segura. Al final, agradece el tiempo de la entrevista y confirma tu interes en la vacante. Estos detalles refuerzan una buena impresion profesional."}
        </p>

        <p className="font-semibold text-slate-800">
          {isEnglish
            ? "Conclusion: prepare your message, speak clearly, and support your answers with real examples. A calm and well-structured interview gives you more confidence and increases your chances of success."
            : "Conclusion: prepara tu mensaje, habla con claridad y respalda tus respuestas con ejemplos reales. Una entrevista tranquila y bien estructurada te da mas confianza y aumenta tus posibilidades de exito."}
        </p>
      </article>
    </main>
  );
}
