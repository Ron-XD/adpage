import type { Metadata } from "next";
import { cookies } from "next/headers";

import { i18n, normalizeLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Computacion",
  description: "Ofertas de empleo en tecnologia, sistemas y desarrollo de software.",
};

export default async function ComputacionPage() {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);
  const t = i18n[lang];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black">{t.computingTitle}</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        {t.computingDescription}
      </p>
    </main>
  );
}
