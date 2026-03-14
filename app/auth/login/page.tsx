import type { Metadata } from "next";
import { cookies } from "next/headers";

import { i18n, normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Iniciar sesion",
  description: "Accede a tu cuenta para gestionar postulaciones en JobPoint.",
};

export default async function LoginPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);
  const t = i18n[lang];

  return (
    <main className="mx-auto w-full max-w-md px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-black tracking-tight text-slate-900">{t.loginTitle}</h1>
      <form className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <input type="email" placeholder={t.email} className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm" />
        <input type="password" placeholder={t.password} className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm" />
        <button className="h-11 w-full rounded-xl bg-slate-900 text-sm font-semibold text-white">{t.signIn}</button>
      </form>
    </main>
  );
}
