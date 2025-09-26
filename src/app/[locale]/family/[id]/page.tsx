import Image from "next/image";
import { getTranslations } from 'next-intl/server'
import { getProfileById } from "@/app/services";
import Link from "next/link";
import { pageLogger } from "@/lib/looger.page";
import { headers } from 'next/headers';


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

export default async function FamilyMember(props: { params: Promise<{ id: string, locale: string }> }) {
  const params = await props.params;    // ← 既存のまま
  const id = params.id;
  const locale = params.locale;

  // middleware から伝播した x-request-id を拾えれば相関が取りやすい（無ければ "unknown"）
  const requestHeaders = await headers();
  const requestId = requestHeaders.get('x-request-id') ?? 'unknown';

  const t0 = Date.now();

  const tTr0 = Date.now();
  const t = await getTranslations('Home');
  const tr_ms = Date.now() - tTr0;

  const tDb0 = Date.now();
  const profile = await getProfileById(id);
  const db_ms = Date.now() - tDb0;

  const total_ms = Date.now() - t0;

  // 🔸描画をブロックしない（await しない）
  void pageLogger('FamilyPage SSR Completed', {
    request_id: requestId,
    url: `/${locale}/family/${id}`,
    route: '/[locale]/family/[id]',
    locale,
    id,
    tr_ms,
    db_ms,
    total_ms,
  });

  let h2Count = 0;

  return (
    // 以降はあなたの JSX のまま
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/sauna3.png" alt="Next.js logo" width={300} height={50} priority />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="marker:text-4xl font-bold">
            <span className="text-4xl font-bold">{t('selfIntroduction')}</span><br />
            {t('name')}: {profile.name}<br />
            {t('hobby')}: {profile.hobby}<br />
            {t('area')}: {profile.area}<br />
            {t('club')}: {profile.club}<br />
            {t('partTimeJob')}: {profile.part_time_job}
          </li>
          {profile.self_introduction.map((block, index) => {
            if (block.type === "h2") h2Count++;
            const textStyle = textStyling(block.type);
            const sectionFormatting = headerFormatting(block.type, h2Count);
            return (
              <div key={block.id || index} className="mb-2 marker:text-xl">
                <span className={textStyle}>{sectionFormatting} {block.content}</span><br />
              </div>
            );
          })}
        </ol>
        <Link href={`/${locale}/family/${id}/edit/`} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit
        </Link>
      </main>
      {/* 以下そのまま */}
      {/* ... */}
    </div>
  );
}