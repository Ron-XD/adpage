import type { Metadata } from "next";
import { cookies } from "next/headers";

import { JobsList } from "@/components/JobsList";
import { i18n, normalizeLang } from "@/lib/i18n";
import { filterJobs, paginateJobs } from "@/lib/jobs";

type SearchParams = Record<string, string | string[] | undefined>;

function first(param: string | string[] | undefined) {
  return Array.isArray(param) ? param[0] : param;
}

export const metadata: Metadata = {
  title: "Empleos disponibles | JobPoint",
  description: "Explora todas las ofertas de empleo y filtra por ciudad, puesto, categoria o tipo de contrato.",
};

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);
  const t = i18n[lang];

  const params = await searchParams;
  const filters = {
    query: first(params.query),
    city: first(params.city),
    category: first(params.category),
    type: first(params.type),
    subcategory: first(params.subcategory),
  };

  const filteredJobs = filterJobs(filters, lang);
  const { items, pagination } = paginateJobs(filteredJobs, first(params.page));

  return (
    <>
      <JobsList
        title={t.jobsListTitle}
        description={`${pagination.total} ${t.vacanciesFound}`}
        jobs={items}
        basePath="/jobs"
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        filters={filters}
        lang={lang}
      />
    </>
  );
}
