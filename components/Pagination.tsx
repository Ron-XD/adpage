import Link from "next/link";

import type { Lang } from "@/lib/i18n";

interface PaginationProps {
  basePath: string;
  currentPage: number;
  totalPages: number;
  query: Record<string, string | undefined>;
  lang: Lang;
}

function pageHref(basePath: string, page: number, query: Record<string, string | undefined>) {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });
  params.set("page", String(page));
  return `${basePath}?${params.toString()}`;
}

export function Pagination({ basePath, currentPage, totalPages, query, lang }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const MAX_VISIBLE_PAGES = 5;
  const startPage = Math.min(
    Math.max(currentPage - Math.floor(MAX_VISIBLE_PAGES / 2), 1),
    Math.max(totalPages - MAX_VISIBLE_PAGES + 1, 1),
  );
  const endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  const nextPage = Math.min(totalPages, currentPage + 1);

  return (
    <nav aria-label={lang === "en" ? "Job pagination" : "Paginacion de empleos"} className="mt-8 flex flex-wrap items-center justify-center gap-1">
      {pages.map((page) => (
        <Link
          key={page}
          href={pageHref(basePath, page, query)}
          className={`grid h-10 w-10 place-content-center border text-sm font-bold transition ${
            page === currentPage
              ? "border-[#1a8fbc] bg-[#1a8fbc] text-white"
              : "border-slate-700 bg-[#1f2024] text-white hover:bg-[#2a2b31]"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={pageHref(basePath, nextPage, query)}
        aria-label={lang === "en" ? "Next page" : "Pagina siguiente"}
        className="grid h-10 w-10 place-content-center border border-slate-700 bg-[#1f2024] text-lg font-bold text-white transition hover:bg-[#2a2b31]"
      >
        »
      </Link>
    </nav>
  );
}
