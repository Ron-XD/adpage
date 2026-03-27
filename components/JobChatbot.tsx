"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { i18n, type Lang } from "@/lib/i18n";

type ChatResult = {
  slug: string;
  title: string;
  company: string;
  location: string;
  summary: string;
};

type Message = {
  role: "user" | "bot";
  text: string;
  results?: ChatResult[];
};

interface JobChatbotProps {
  lang: Lang;
}

export function JobChatbot({ lang }: JobChatbotProps) {
  const t = i18n[lang];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: t.chatbotWelcome,
    },
  ]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = query.trim();
    if (!text) {
      return;
    }

    setMessages((prev) => [...prev, { role: "user", text }]);
    setQuery("");
    setLoading(true);

    try {
      const response = await fetch(`/api/jobs/search?q=${encodeURIComponent(text)}&lang=${lang}`);
      const payload = (await response.json()) as { results: ChatResult[]; total: number };

      if (payload.results.length) {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: `${t.chatbotFound} ${payload.total} ${t.resultsSuffix} ${t.chatbotFor} "${text}".`,
            results: payload.results,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: `${t.chatbotNoResults}: "${text}". ${t.chatbotTryWords}`,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: t.chatbotError,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      {open ? (
        <div className="w-[92vw] max-w-sm overflow-hidden rounded-xl border border-[#fa7e1e] bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-[#1a8fbc] px-3 py-2 text-white">
            <p className="text-sm font-bold">{t.chatbotTitle}</p>
            <button type="button" onClick={() => setOpen(false)} className="text-lg leading-none">
              ×
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto bg-slate-50 p-3">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`}>
                <p
                  className={`rounded-lg px-3 py-2 text-sm ${
                    message.role === "user" ? "ml-8 bg-[#1a8fbc] text-white" : "mr-8 bg-white text-slate-700"
                  }`}
                >
                  {message.text}
                </p>

                {message.results?.length ? (
                  <ul className="mt-2 space-y-2">
                    {message.results.map((result) => (
                      <li key={result.slug} className="rounded-lg border border-slate-200 bg-white p-2">
                        <Link href={`/jobs/${result.slug}`} className="text-sm font-bold text-[#0d6fa0] hover:underline">
                          {result.title}
                        </Link>
                        <p className="mt-1 text-xs text-slate-500">
                          {result.company} - {result.location}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs text-slate-600">{result.summary}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            {loading ? <p className="text-xs text-slate-500">{t.chatbotSearching}</p> : null}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-slate-200 p-3">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.chatbotInput}
              className="h-10 flex-1 rounded-md border border-slate-300 px-3 text-sm outline-none"
            />
            <button type="submit" className="rounded-md bg-[#1a8fbc] px-3 text-sm font-bold text-white disabled:opacity-60" disabled={loading}>
              {t.chatbotSend}
            </button>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full bg-[#1a8fbc] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#11779d]"
        >
          {t.chatbotOpen}
        </button>
      )}
    </div>
  );
}
