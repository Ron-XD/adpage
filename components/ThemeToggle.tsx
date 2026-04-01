"use client";

import { useSyncExternalStore } from "react";

import type { Lang } from "@/lib/i18n";

type Theme = "light" | "dark";
const THEME_EVENT = "jobpoint-theme-change";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function readThemeSnapshot(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function subscribeTheme(onThemeChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  window.addEventListener("storage", onThemeChange);
  window.addEventListener(THEME_EVENT, onThemeChange);

  return () => {
    window.removeEventListener("storage", onThemeChange);
    window.removeEventListener(THEME_EVENT, onThemeChange);
  };
}

interface ThemeToggleProps {
  lang: Lang;
}

export function ThemeToggle({ lang }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeTheme, readThemeSnapshot, () => "light");

  function switchTheme(nextTheme: Theme) {
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <div className="inline-flex h-9 items-center overflow-hidden rounded border border-slate-500">
      <button
        type="button"
        onClick={() => switchTheme("light")}
        className={`flex items-center justify-center px-3 py-2 text-xs font-bold uppercase transition ${
          theme === "light" ? "bg-[#1a8fbc] text-white" : "bg-[#1f2024] text-slate-200 hover:bg-[#2a2b31]"
        }`}
        aria-label={lang === "en" ? "Light mode" : "Modo claro"}
        title={lang === "en" ? "Light mode" : "Modo claro"}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9 2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9 2.12-2.12" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => switchTheme("dark")}
        className={`flex items-center justify-center px-3 py-2 text-xs font-bold uppercase transition ${
          theme === "dark" ? "bg-[#1a8fbc] text-white" : "bg-[#1f2024] text-slate-200 hover:bg-[#2a2b31]"
        }`}
        aria-label={lang === "en" ? "Dark mode" : "Modo oscuro"}
        title={lang === "en" ? "Dark mode" : "Modo oscuro"}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      </button>
    </div>
  );
}
