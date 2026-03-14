"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { i18n, type Lang } from "@/lib/i18n";

const navLinks = [
  { href: "/contact", es: "Contacto", en: "Contact" },
];

const tipsLinks = [
  { href: "/consejos/empleo", es: "Empleo", en: "Jobs" },
  { href: "/consejos/entrevista", es: "Entrevista", en: "Interview" },
  { href: "/consejos/cv", es: "CV", en: "Resume" },
];

const jobsMenuLinks = [
  { href: "/jobs?subcategory=limpieza", es: "Limpieza", en: "Cleaning" },
  { href: "/jobs?subcategory=cocina", es: "Cocina", en: "Kitchen" },
  { href: "/jobs?subcategory=montacarga", es: "Montacarga", en: "Forklift" },
  { href: "/jobs?subcategory=camarera", es: "Camarera", en: "Waitress" },
  { href: "/jobs?subcategory=almacen", es: "Almacen", en: "Warehouse" },
  { href: "/jobs?subcategory=anfitriona", es: "Anfitriona", en: "Host" },
  { href: "/jobs?subcategory=portero", es: "Portero", en: "Doorman" },
  { href: "/jobs?subcategory=hotel", es: "Hotel", en: "Hotel" },
];

interface HeaderProps {
  lang: Lang;
}

type MobileMenuSection = "privacy" | "tips" | "jobs";

export function Header({ lang }: HeaderProps) {
  const t = i18n[lang];
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [openMobileMenu, setOpenMobileMenu] = useState<MobileMenuSection | null>(null);
  const [openMenuRouteKey, setOpenMenuRouteKey] = useState("");

  const routeKey = `${pathname}?${searchParams.toString()}`;

  const privacyOpenMobile = openMobileMenu === "privacy" && openMenuRouteKey === routeKey;
  const tipsOpenMobile = openMobileMenu === "tips" && openMenuRouteKey === routeKey;
  const jobsOpenMobile = openMobileMenu === "jobs" && openMenuRouteKey === routeKey;

  function toggleMobileMenu(section: MobileMenuSection) {
    setOpenMobileMenu((prev) => (prev === section ? null : section));
    setOpenMenuRouteKey(routeKey);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-300 bg-[#ececec]">
      <div className="mx-auto w-full max-w-6xl px-3 py-4 sm:px-6 sm:py-7 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="inline-flex items-center gap-2 group" aria-label="JobPoint">
            {/* Like icon */}
            <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm sm:h-12 sm:w-12 sm:rounded-xl">
              <svg viewBox="0 0 36 36" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" aria-hidden="true">
                <rect x="3" y="17" width="8" height="15" rx="2" fill="#0a66c2" stroke="#0b1b3b" strokeWidth="1.4" />
                <path
                  d="M14 30h10.5c1.7 0 3-1.3 3-3v-2.3c1.7-.4 2.8-2 2.8-3.7 0-.8-.3-1.7-.8-2.3.5-.6.8-1.4.8-2.2 0-1.9-1.3-3.4-3.1-3.8.2-2-.3-3.7-1.4-4.8-1.1-1.1-2.7-1.5-4.5-1.3-.3 0-.7.2-.9.5-.2.3-.3.7-.2 1.1.5 2.1-.1 4.3-1.6 5.8L14 18.2V30Z"
                  fill="#ffffff"
                  stroke="#0b1b3b"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M27.5 24.7h-4.7M27.8 20.8h-4.9M27 16.9h-4.6" stroke="#0b1b3b" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </span>
            {/* Bold brand wordmark */}
            <span
              className="text-2xl font-extrabold uppercase tracking-[0.05em] sm:text-4xl lg:text-5xl"
              style={{
                fontFamily: "var(--font-orbitron), var(--font-space-grotesk), sans-serif",
                backgroundImage: "linear-gradient(90deg, #f77737 0%, #fcaf45 38%, #0a66c2 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              jobpoint
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white shadow-sm transition hover:scale-105 sm:h-12 sm:w-12 sm:rounded-xl"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-6.78 7.75L23 22h-6.1l-4.78-6.23L6.67 22H3.55l7.26-8.3L1 2h6.25l4.32 5.72L18.9 2Zm-1.07 18h1.69L6.3 3.9H4.5L17.83 20Z" />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#feda75] via-[#fa7e1e] via-35% to-[#d62976] text-white shadow-sm transition hover:scale-105 sm:h-12 sm:w-12 sm:rounded-xl"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f0f10] text-[#25f4ee] shadow-sm transition hover:scale-105 sm:h-12 sm:w-12 sm:rounded-xl"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
                <path d="M14.5 3c.2 1.7 1.2 3 2.8 3.6 1 .4 2 .5 3 .4v2.7c-1.4.1-2.8-.2-4.1-.8v6.6c0 2.9-2.3 5.2-5.2 5.2S5.8 18.4 5.8 15.5 8.1 10.3 11 10.3c.3 0 .7 0 1 .1V13a3 3 0 0 0-1-.2c-1.5 0-2.7 1.2-2.7 2.7S9.5 18.2 11 18.2s2.7-1.2 2.7-2.7V3h.8Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a66c2] text-white shadow-sm transition hover:scale-105 sm:h-12 sm:w-12 sm:rounded-xl"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.22 0Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 bg-[#1f2024]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <nav className="hidden flex-nowrap items-center gap-0 md:flex">
            <Link
              href="/"
              className="whitespace-nowrap border-r border-slate-700 px-5 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#2a2b31]"
            >
              {t.home}
            </Link>
            <Link
              href="/about"
              className="whitespace-nowrap border-r border-slate-700 px-5 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#2a2b31]"
            >
              {t.about}
            </Link>

            <div className="group relative border-r border-slate-700">
            <Link
              href="/legal/privacy"
              className="block whitespace-nowrap px-5 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#2a2b31]"
              aria-haspopup="true"
            >
              {t.privacyPolicies} »
            </Link>

              <div className="invisible absolute left-0 top-full z-50 w-72 overflow-hidden border border-slate-800 bg-[#1f2024] opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              <Link href="/legal/notice" className="block border-b border-slate-700 px-4 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#2a2b31]">
                {t.legalNotice}
              </Link>
              <Link href="/legal/cookies" className="block border-b border-slate-700 px-4 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#2a2b31]">
                {t.cookiePolicy}
              </Link>
              <Link href="/legal/terms" className="block px-4 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#2a2b31]">
                {t.termsAndConditions}
              </Link>
            </div>
          </div>

            <div className="group relative border-r border-slate-700">
              <Link
                href="/consejos"
                className="block whitespace-nowrap px-5 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#2a2b31]"
                aria-haspopup="true"
              >
                {lang === "en" ? "Tips" : "Consejos"} »
              </Link>

              <div className="invisible absolute left-0 top-full z-50 w-56 overflow-hidden border border-slate-800 bg-[#1f2024] opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {tipsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block border-b border-slate-700 px-4 py-3 text-sm font-bold uppercase text-white transition last:border-b-0 hover:bg-[#2a2b31]"
                  >
                    {lang === "en" ? link.en : link.es}
                  </Link>
                ))}
              </div>
            </div>

            <div className="group relative border-r border-slate-700">
              <Link
                href="/jobs"
                className="block whitespace-nowrap px-5 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#2a2b31]"
                aria-haspopup="true"
              >
                {lang === "en" ? "Jobs" : "Empleos"} »
              </Link>

              <div className="invisible absolute left-0 top-full z-50 w-56 overflow-hidden border border-slate-800 bg-[#1f2024] opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {jobsMenuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block border-b border-slate-700 px-4 py-3 text-sm font-bold uppercase text-white transition last:border-b-0 hover:bg-[#2a2b31]"
                  >
                    {lang === "en" ? link.en : link.es}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap border-r border-slate-700 px-5 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#2a2b31]"
              >
                {lang === "en" ? link.en : link.es}
              </Link>
            ))}

            <div className="ml-4">
              <LanguageSwitcher lang={lang} />
            </div>
            <div className="ml-2">
              <ThemeToggle lang={lang} />
            </div>

          </nav>
        </div>
      </div>

      <div className="border-t border-slate-700 bg-[#1f2024] md:hidden">
        <div className="mx-auto w-full max-w-6xl px-2">
          <nav className="py-2">
            <div className="flex flex-wrap items-center gap-1">
              <Link href="/" className="border border-slate-600 px-3 py-2 text-xs font-bold uppercase text-white">
                {t.home}
              </Link>
              <Link href="/about" className="border border-slate-600 px-3 py-2 text-xs font-bold uppercase text-white">
                {t.about}
              </Link>
              <div className="inline-flex overflow-hidden border border-slate-600">
                <Link href="/legal/privacy" className="px-3 py-2 text-xs font-bold uppercase text-white">
                  {t.privacyPolicies}
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileMenu("privacy")}
                  className="border-l border-slate-600 px-2 py-2 text-xs font-bold uppercase text-white"
                  aria-label={t.privacyPolicies}
                >
                  {privacyOpenMobile ? "−" : "+"}
                </button>
              </div>

              <div className="inline-flex overflow-hidden border border-slate-600">
                <Link href="/consejos" className="px-3 py-2 text-xs font-bold uppercase text-white">
                  {lang === "en" ? "Tips" : "Consejos"}
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileMenu("tips")}
                  className="border-l border-slate-600 px-2 py-2 text-xs font-bold uppercase text-white"
                  aria-label={lang === "en" ? "Tips" : "Consejos"}
                >
                  {tipsOpenMobile ? "−" : "+"}
                </button>
              </div>

              <div className="inline-flex overflow-hidden border border-slate-600">
                <Link href="/jobs" className="px-3 py-2 text-xs font-bold uppercase text-white">
                  {lang === "en" ? "Jobs" : "Empleos"}
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileMenu("jobs")}
                  className="border-l border-slate-600 px-2 py-2 text-xs font-bold uppercase text-white"
                  aria-label={lang === "en" ? "Jobs" : "Empleos"}
                >
                  {jobsOpenMobile ? "−" : "+"}
                </button>
              </div>

              <div className="basis-full h-1" />

              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="border border-slate-600 px-3 py-2 text-xs font-bold uppercase text-white">
                  {lang === "en" ? link.en : link.es}
                </Link>
              ))}

              <div className="basis-full h-1" />

              <div className="flex basis-full justify-start gap-1 pt-1">
                <LanguageSwitcher lang={lang} />
                <ThemeToggle lang={lang} />
              </div>

              {privacyOpenMobile ? (
                <div className="basis-full overflow-hidden border border-slate-600 bg-[#2a2b31]">
                  <Link href="/legal/notice" className="block border-b border-slate-600 px-3 py-2 text-xs font-bold uppercase text-white">
                    {t.legalNotice}
                  </Link>
                  <Link href="/legal/cookies" className="block border-b border-slate-600 px-3 py-2 text-xs font-bold uppercase text-white">
                    {t.cookiePolicy}
                  </Link>
                  <Link href="/legal/terms" className="block px-3 py-2 text-xs font-bold uppercase text-white">
                    {t.termsAndConditions}
                  </Link>
                </div>
              ) : null}

              {tipsOpenMobile ? (
                <div className="basis-full overflow-hidden border border-slate-600 bg-[#2a2b31]">
                  {tipsLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block border-b border-slate-600 px-3 py-2 text-xs font-bold uppercase text-white last:border-b-0"
                    >
                      {lang === "en" ? link.en : link.es}
                    </Link>
                  ))}
                </div>
              ) : null}

              {jobsOpenMobile ? (
                <div className="basis-full overflow-hidden border border-slate-600 bg-[#2a2b31]">
                  {jobsMenuLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block border-b border-slate-600 px-3 py-2 text-xs font-bold uppercase text-white last:border-b-0"
                    >
                      {lang === "en" ? link.en : link.es}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
