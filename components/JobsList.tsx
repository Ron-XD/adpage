import { JobCard } from "@/components/JobCard";
import { Pagination } from "@/components/Pagination";
import { i18n, type Lang } from "@/lib/i18n";
import type { Job } from "@/lib/types";

interface JobsListProps {
  title: string;
  description: string;
  jobs: Job[];
  basePath: string;
  currentPage: number;
  totalPages: number;
  filters: Record<string, string | undefined>;
  lang: Lang;
}

export function JobsList({
  title,
  description,
  jobs,
  basePath,
  currentPage,
  totalPages,
  filters,
  lang,
}: JobsListProps) {
  const t = i18n[lang];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">{title}</h2>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>

      {jobs.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
          {t.noResultsFilters}
        </div>
      )}

      <Pagination basePath={basePath} currentPage={currentPage} totalPages={totalPages} query={filters} lang={lang} />
    </section>
  );
}
