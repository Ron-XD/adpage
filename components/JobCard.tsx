import Link from "next/link";

import { ArrowRightIcon, BriefcaseIcon, MapPinIcon, SalaryIcon } from "@/components/icons";
import { i18n, type Lang } from "@/lib/i18n";
import { formatDate } from "@/lib/jobs";
import type { Job } from "@/lib/types";

interface JobCardProps {
  job: Job;
  lang: Lang;
}

export function JobCard({ job, lang }: JobCardProps) {
  const t = i18n[lang];

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">{job.category}</span>
        <span className="text-xs text-slate-500">{formatDate(job.publishedAt, lang)}</span>
      </div>

      <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900">{job.title}</h3>
      <p className="mt-1 text-sm font-medium text-slate-600">{job.company}</p>
      <p className="mt-3 text-sm text-slate-600">{job.summary}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        <li className="flex items-center gap-2">
          <MapPinIcon className="h-4 w-4 text-cyan-700" />
          {job.location}
        </li>
        <li className="flex items-center gap-2">
          <BriefcaseIcon className="h-4 w-4 text-cyan-700" />
          {job.employmentType}
        </li>
        {job.salary ? (
          <li className="flex items-center gap-2">
            <SalaryIcon className="h-4 w-4 text-cyan-700" />
            {job.salary}
          </li>
        ) : null}
      </ul>

      <div className="mt-6 flex-1" />

      <Link
        href={`/jobs/${job.slug}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-cyan-700"
      >
        {t.viewOffer}
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </article>
  );
}
