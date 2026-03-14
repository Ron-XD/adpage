import { NextResponse } from "next/server";

import { normalizeLang } from "@/lib/i18n";
import { filterJobs } from "@/lib/jobs";

const CHAT_RESULTS_LIMIT = 5;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() ?? "";
  const lang = normalizeLang(searchParams.get("lang"));

  if (!query) {
    return NextResponse.json({ results: [], total: 0 });
  }

  const matches = filterJobs({ query }, lang);
  const results = matches.slice(0, CHAT_RESULTS_LIMIT).map((job) => ({
    slug: job.slug,
    title: job.title,
    company: job.company,
    location: job.location,
    summary: job.summary,
  }));

  return NextResponse.json({
    results,
    total: matches.length,
  });
}