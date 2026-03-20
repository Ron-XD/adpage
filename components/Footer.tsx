import Link from "next/link";

import { i18n, type Lang } from "@/lib/i18n";

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const t = i18n[lang];

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-black text-white">JobPoint</p>
          <p className="mt-2 text-sm text-slate-400">{t.footerTagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">{t.legal}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/legal/privacy" className="hover:text-white">{t.privacyPolicies}</Link></li>
            <li><Link href="/legal/notice" className="hover:text-white">{t.legalNotice}</Link></li>
            <li><Link href="/legal/cookies" className="hover:text-white">{t.cookiePolicy}</Link></li>
            <li><Link href="/legal/terms" className="hover:text-white">{t.termsAndConditions}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">{t.contactAndSocial}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-white">{t.contact}</Link></li>
            <li><a href="https://linkedin.com" className="hover:text-white">LinkedIn</a></li>
            <li><a href="https://facebook.com" className="hover:text-white">Facebook</a></li>
            <li><a href="https://x.com" className="hover:text-white">X / Twitter</a></li>
            <li><a href="https://instagram.com" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">© 2026 JobPoint. {t.rights}</p>
    </footer>
  );
}
