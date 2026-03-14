"use client";

import { useRouter } from "next/navigation";

import type { Lang } from "@/lib/i18n";

interface LanguageSwitcherProps {
  lang: Lang;
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const router = useRouter();

  function setLang(nextLang: Lang) {
    document.cookie = `lang=${nextLang}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <div className="inline-flex items-center overflow-hidden rounded border border-slate-500">
      <button
        type="button"
        onClick={() => setLang("es")}
        className={`px-3 py-1 text-xs font-bold uppercase transition ${lang === "es" ? "bg-[#1a8fbc] text-white" : "bg-[#1f2024] text-slate-200 hover:bg-[#2a2b31]"}`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-3 py-1 text-xs font-bold uppercase transition ${lang === "en" ? "bg-[#1a8fbc] text-white" : "bg-[#1f2024] text-slate-200 hover:bg-[#2a2b31]"}`}
      >
        EN
      </button>
    </div>
  );
}
