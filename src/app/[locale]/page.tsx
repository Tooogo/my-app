type LocaleParams = Promise<{ locale: 'en' | 'ja' }>;

export default async function Home({ params }: { params: LocaleParams }) {
  const { locale } = await params; // ★ 必ず await
  return (
    <div>
      <h1>Please access each site from the button on the top left</h1>
      <p>Current locale: {locale}</p>
    </div>
  );
}
