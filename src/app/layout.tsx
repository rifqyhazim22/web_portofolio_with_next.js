import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Rifqy Hazim HR — Home",
  description:
    "Rifqy Hazim HR — AI Prompter & Strategist yang merancang pengalaman digital ringkas, terukur, dan siap pakai.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="dark">
      <body>
        <Header />
        <main className="wrap">{children}</main>
      </body>
    </html>
  );
}
