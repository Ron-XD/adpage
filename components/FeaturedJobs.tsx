import { JobCard } from "@/components/JobCard";
import type { Lang } from "@/lib/i18n";
import type { Job } from "@/lib/types";

interface FeaturedJobsProps {
  jobs: Job[];
  lang?: Lang;
}

export function FeaturedJobs({ jobs, lang = "es" }: FeaturedJobsProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">{lang === "en" ? "Featured jobs" : "Empleos destacados"}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">{lang === "en" ? "Recommended opportunities" : "Oportunidades recomendadas"}</h2>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} lang={lang} />
        ))}
      </div>
    </section>
  );
}
