type LocaleParams = Promise<{ locale: 'en' | 'ja' }>;

export default async function LocaleLayout(
  { children, params }: { children: React.ReactNode; params: LocaleParams }
) {
  const { locale } = await params; // ★ 必ず await

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
