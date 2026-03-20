import type { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BriefcaseIcon, MapPinIcon, SalaryIcon } from "@/components/icons";
import { jobs } from "@/lib/data";
import { i18n, normalizeLang } from "@/lib/i18n";
import { getJobBySlug, getJobImageAlt, getJobImageSrc } from "@/lib/jobs";

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);
  const { slug } = await params;
  const job = getJobBySlug(slug, lang);

  if (!job) {
    return {
      title: lang === "en" ? "Job not found | JobPoint" : "Oferta no encontrada | JobPoint",
    };
  }

  return {
    title: `${job.title} ${lang === "en" ? "at" : "en"} ${job.company} | JobPoint`,
    description: `${job.summary} ${lang === "en" ? "Location" : "Ubicacion"}: ${job.location}.`,
  };
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);
  const t = i18n[lang];

  const { slug } = await params;
  const job = getJobBySlug(slug, lang);

  if (!job) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <Link href="/jobs" className="text-sm font-semibold text-cyan-700 hover:text-cyan-800">
        ← {t.backToJobs}
      </Link>

      <header className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <Image
          src={getJobImageSrc(job)}
          alt={getJobImageAlt(job, lang)}
          width={1100}
          height={520}
          className="mb-5 h-56 w-full rounded-xl object-cover sm:h-72"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">{job.category}</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{job.title}</h1>
        <p className="mt-1 text-lg font-medium text-slate-600">{job.company}</p>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2"><MapPinIcon className="h-4 w-4 text-cyan-700" />{job.location}</span>
          <span className="inline-flex items-center gap-2"><BriefcaseIcon className="h-4 w-4 text-cyan-700" />{job.employmentType}</span>
          {job.salary ? <span className="inline-flex items-center gap-2"><SalaryIcon className="h-4 w-4 text-cyan-700" />{job.salary}</span> : null}
        </div>

        <div className="mt-4 space-y-1 text-xs text-slate-500">
          <p>
            <span className="font-semibold text-slate-700">{t.source}:</span>{" "}
            <a href={job.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">
              {job.sourceName}
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-700">{t.lastUpdated}:</span>{" "}
            {new Date(job.updatedAt).toLocaleDateString(lang === "en" ? "en-US" : "es-ES")}
          </p>
        </div>
      </header>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:col-span-2">
          <h2 className="text-xl font-bold text-slate-900">{t.jobDescription}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">{job.intro}</p>

          <h3 className="mt-8 text-lg font-bold text-slate-900">{t.mainResponsibilities}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            {job.mainResponsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-bold text-slate-900">{t.workdayAndConditions}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            {job.workdayAndConditions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-bold text-slate-900">{t.applicationRecommendations}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            {job.applicationRecommendations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-bold text-slate-900">{t.keyTakeaways}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            {job.keyTakeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-bold text-slate-900">{t.requirements}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {job.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-bold text-slate-900">{t.benefits}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {job.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </article>

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">{t.quickApply}</h2>
          <p className="mt-2 text-sm text-slate-600">
            {t.quickApplyText} {job.company}.
          </p>
          <button className="mt-5 h-11 w-full rounded-xl bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800">
            {t.applyNow}
          </button>
        </aside>
      </section>

      <section className="mt-10 border-t border-slate-300 pt-8">
        <div className="bg-[#1f2024] px-3 py-1.5">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.06em] text-white">{t.commentTitle}</h2>
        </div>

        <form className="bg-[#efefef] px-6 py-5">
          <p className="text-xs text-slate-700">
            {t.commentNotice}
          </p>

          <label className="mt-4 block text-sm font-semibold text-slate-800" htmlFor="comment">
            {t.commentLabel}
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={7}
            className="mt-1 w-full border border-slate-300 bg-white p-3 text-sm outline-none"
            required
          />

          <div className="mt-5 grid gap-3 md:max-w-md">
            <div className="grid items-center gap-2 md:grid-cols-[110px_1fr]">
              <label htmlFor="author" className="text-sm font-medium text-slate-800">
                {t.nameLabel}
              </label>
              <input id="author" name="author" type="text" required className="h-9 border border-slate-300 bg-white px-2 text-sm outline-none" />
            </div>

            <div className="grid items-center gap-2 md:grid-cols-[110px_1fr]">
              <label htmlFor="email" className="text-sm font-medium text-slate-800">
                {t.emailLabel}
              </label>
              <input id="email" name="email" type="email" required className="h-9 border border-slate-300 bg-white px-2 text-sm outline-none" />
            </div>

            <div className="grid items-center gap-2 md:grid-cols-[110px_1fr]">
              <label htmlFor="website" className="text-sm font-medium text-slate-800">
                {t.websiteLabel}
              </label>
              <input id="website" name="website" type="url" className="h-9 border border-slate-300 bg-white px-2 text-sm outline-none" />
            </div>
          </div>

          <label className="mt-4 flex items-start gap-2 text-xs text-slate-700">
            <input type="checkbox" className="mt-0.5" />
            {t.rememberData}
          </label>

          <button
            type="submit"
            className="mt-4 bg-[#1a8fbc] px-4 py-2 text-xs font-bold uppercase text-white transition hover:bg-[#11779d]"
          >
            {t.postComment}
          </button>
        </form>
      </section>
    </main>
  );
}
