import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
// import { Inter } from 'next/font/google';
// import { useTranslation } from 'next-i18next';
// import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';
import Link from 'next/link'
// import { useTranslation } from "react-i18next";
import { getProfiles } from "../services";

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params; // 修正: awaitを削除
  const profiles = await getProfiles(locale); // サーバーで直接データ取得

  return (
    <html lang={locale}>
      <body>
        <nav>
          <Link key="home" href="/">Home</Link>
          {profiles.map((profile, index) => (
            <Link key={index} href={`/${locale}/family/${profile._id}`}>
              {profile.name}
            </Link>
          ))}
        </nav>
        {children}
      </body>
    </html>
  );
}

/*
export default function RootLayout({
  children, params: { id }
}: Readonly<{
  children: React.ReactNode;
  params: { id: number }
}>) {
  const messages = useMessages();
  const locale = useLocale()
  const familyProfiles = locale === 'en' ? getProfiles_eng() : getProfiles();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <Link
            key="home"
            href='/'>
            {"Home"}
          </Link>
          {
            familyProfiles.map((profile, index) => (
              <Link
                key={index}
                href={`/${locale}/family/${index}`}>
                {profile.name}
              </Link>
            ))
          }

        </nav>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
*/