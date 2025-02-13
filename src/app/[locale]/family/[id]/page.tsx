// src/app/page.tsx
// 'use client';

import Image from "next/image";
// import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server'
// import { useRouter } from 'next/router';
import { getProfileById } from "@/app/services";
// import { use } from 'react';
// import { GetServerSideProps } from 'next';

const headerFormatting = (block: string, h2Count: number): string => {
  switch (block) {
    case "h1":
      return `${2}.`;
    case "h2":
      return `2.${h2Count}`;
    default:
      return "";
  }
};

const textStyling = (block: string): string => {
  switch (block) {
    case "h1":
      return "text-4xl font-bold";
    case "h2":
      return "text-2xl font-medium";
    case "h3":
      return "text-sm font-normal";
    default:
      return "";
  }
};

// TODO #5 Fetch data from mongodb for specific user & specific lang https://nextjs.org/docs/app/api-reference/functions/use-params
export default async function FamilyMember({ params }: {
  params: { id: string }
}) {
  const { id } = await params
  const t = await getTranslations('Home');

  //const locale = useLocale();
  //const locale = "ja";

  const profile = await getProfileById(id);
  if (!profile) {
    return <div>{t('profileNotFound')}</div>; // プロフィールが見つからない場合のエラーメッセージ
  }

  //const profile = locale === 'ja' ? getProfile(Number(params.id)) : getProfile_eng(Number(params.id));
  let h2Count = 0;  // h2が出てきた回数をカウントする変数

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/sauna3.png"
          alt="Next.js logo"
          width={300}
          height={50}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="marker:text-4xl font-bold">
            <span className="text-4xl font-bold">{t('selfIntroduction')}</span><br />
            {t('name')}: {profile.name}<br />
            {t('hobby')}: {profile.hobby}<br />
            {t('area')}: {profile.area}<br />
            {t('club')}: {profile.club}<br />
            {t('partTimeJob')}: {profile.part_time_job}
          </li>

          {
            profile.self_introduction.map((block, index) => {
              if (block.type === "h2") {
                h2Count++;
              }
              const textStyle = textStyling(block.type);
              const sectionFormatting = headerFormatting(block.type, h2Count);

              return (
                <div key={block.id || index} className="mb-2 marker:text-xl">
                  <span className={`${textStyle}`}>{sectionFormatting} {block.content}</span><br />
                </div>
              );
            })}

        </ol>
      </main>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}