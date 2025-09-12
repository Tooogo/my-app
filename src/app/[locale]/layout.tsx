// src/app/[locale]/layout.tsx
export const dynamicParams = true;
export function generateStaticParams() {
  // ここに列挙したロケールの配下ルート（/test などを含む）が“存在確定”します
  return [{ locale: 'en' }, { locale: 'ja' }];
}

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
