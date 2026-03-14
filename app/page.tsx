import type { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { Pagination } from "@/components/Pagination";
import { i18n, normalizeLang } from "@/lib/i18n";
import { filterJobs, getAllJobs, paginateJobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "JobPoint | Ultimas entradas",
  description: "Portal minimalista con menu superior, sidebar izquierdo y cuerpo central de ofertas laborales.",
};

type SearchParams = Record<string, string | string[] | undefined>;

function first(param: string | string[] | undefined) {
  return Array.isArray(param) ? param[0] : param;
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);
  const t = i18n[lang];

  const params = await searchParams;
  const query = first(params.query)?.trim() ?? "";
  const allPosts = getAllJobs(lang);
  const recent = allPosts.slice(0, 5);
  const filteredPosts = query ? filterJobs({ query }, lang) : allPosts;
  const { items: posts, pagination } = paginateJobs(filteredPosts, first(params.page));

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="h-fit bg-[#efefef] p-3">
          <form action="/" className="mb-6 flex border border-slate-300 bg-white">
            <input
              name="query"
              placeholder={t.searchPlaceholder}
              defaultValue={query}
              className="h-10 flex-1 px-3 text-sm text-slate-700 outline-none"
            />
            <button className="grid h-10 w-12 place-content-center bg-[#1997c5] text-white" aria-label={t.searchAria}>
              ⌕
            </button>
          </form>

          <h2 className="bg-[#1f2024] px-3 py-2 text-sm font-extrabold uppercase text-white">{t.recentPosts}</h2>
          <ul className="mt-4 space-y-3 text-[1.04rem] leading-8 text-[#0d6fa0]">
            {recent.map((post) => (
              <li key={post.id} className="list-disc pl-4 marker:text-slate-900">
                <Link href={`/jobs/${post.slug}`} className="uppercase hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <section>
          <h2 className="bg-[#1f2024] px-3 py-2 text-sm font-extrabold uppercase text-white">{t.latestPosts}</h2>

          {query ? (
            <p className="bg-[#efefef] px-3 py-2 text-xs text-slate-600">
              {t.searchResultsFor}: <span className="font-semibold">{query}</span> ({pagination.total} {t.resultsSuffix})
            </p>
          ) : null}

          <div className="divide-y divide-slate-300 bg-[#efefef] p-3">
            {posts.length ? posts.map((post) => (
              <article key={post.id} className="grid gap-5 py-6 md:grid-cols-[300px_minmax(0,1fr)]">
                <Link href={`/jobs/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={180}
                    className="h-[180px] w-full object-cover"
                  />
                </Link>

                <div>
                  <h3 className="text-4xl font-medium uppercase leading-tight text-slate-900">
                    <Link href={`/jobs/${post.slug}`} className="hover:text-[#0d6fa0]">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm text-slate-500">
                    {new Date(post.publishedAt).toLocaleDateString(lang === "en" ? "en-US" : "es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    {"  •  "}jobpoint{"  •  "}
                    {post.category}
                  </p>

                  <p className="mt-4 text-lg leading-8 text-slate-700">{post.summary}</p>

                  <Link
                    href={`/jobs/${post.slug}`}
                    className="mt-5 inline-block bg-[#1a8fbc] px-5 py-2 text-sm font-bold uppercase text-white transition hover:bg-[#11779d]"
                  >
                    {t.readMore}
                  </Link>
                </div>
              </article>
            )) : (
              <div className="py-8 text-sm text-slate-700">
                {t.noResultsHome}
              </div>
            )}

            <div className="pt-6">
              <Pagination
                basePath="/"
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                query={{ query }}
                lang={lang}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
