import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { getCurrentLanguage } from "@/lib/language";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const language = await getCurrentLanguage();
  const dictionary = getDictionary(language);

  return {
    title: "Rifqy Hazim HR — Home",
    description: dictionary.home.heroDescription,
    icons: {
      icon: "/favicon.svg",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = await getCurrentLanguage();
  const dictionary = getDictionary(language);

  return (
    <html lang={language} data-theme="dark">
      <body>
        <Header
          language={language}
          brand={dictionary.brand}
          navLabels={dictionary.navLabels}
          languageToggle={dictionary.languageToggle}
        />
        <main className="wrap">{children}</main>
      </body>
    </html>
  );
}
