import { i18n, type Lang } from "@/lib/i18n";

type LegalPageHeaderProps = {
  title: string;
  summary: string;
  lastUpdated: string;
  lang: Lang;
};

export function LegalPageHeader({ title, summary, lastUpdated, lang }: LegalPageHeaderProps) {
  const t = i18n[lang];

  return (
    <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-cyan-800">
        {t.legalInfo}
      </p>
      <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900">{title}</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">{summary}</p>
      <p className="mt-4 text-xs font-medium text-slate-500">
        {t.lastUpdatedLabel}: <span className="text-slate-700">{lastUpdated}</span>
      </p>
    </header>
  );
}
