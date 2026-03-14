import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Manrope, Orbitron, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JobChatbot } from "@/components/JobChatbot";
import { normalizeLang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "JobPoint",
    template: "%s | JobPoint",
  },
  description: "Portal de empleo moderno con busqueda por puesto, ciudad, categoria y tipo de contrato.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = normalizeLang(cookieStore.get("lang")?.value);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} ${orbitron.variable} bg-brand-paper text-slate-900 antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','light');}}catch(e){document.documentElement.setAttribute('data-theme','light');}})();",
          }}
        />
        <Header lang={lang} />
        {children}
        <JobChatbot lang={lang} />
        <Footer lang={lang} />
      </body>
    </html>
  );
}
