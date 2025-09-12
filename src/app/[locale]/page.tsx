// src/app/[locale]/page.tsx
export const dynamicParams = false;
export function generateStaticParams() {
  // routing.ts に合わせて列挙
  return [{ locale: "en" }, { locale: "ja" }];
}

export default function Home() {
  return (
    <main>
      <h1>OK: locale page</h1>
      <p>This is /[locale] page.</p>
    </main>
  );
}
