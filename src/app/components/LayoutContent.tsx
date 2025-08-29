// src/app/components/LayoutContent.tsx
// ※ サーバーコンポーネントにするので "use client" は書かない

import Link from 'next/link';
import dynamic from 'next/dynamic';

export type Profile = {
  _id: string;
  name: string;
};

// LogoutButton はクライアント側でのみ読み込み（SSR 無効化）
const LogoutButton = dynamic(() => import('../components/LogoutButton'), {
  ssr: false,
  loading: () => null, // 初期描画をブロックしない
});

export default function LayoutContent({
  locale,
  profiles,
  children,
}: {
  locale: string;
  profiles: Profile[];
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="d-flex justify-content-between align-items-center p-3 bg-light">
        <div className="d-flex align-items-center">
          <Link href="/" className="me-3">Home</Link>
          {profiles.map((profile) => (
            <Link
              key={profile._id}
              href={`/${locale}/family/${profile._id}`}
              className="me-3"
              prefetch // 初期表示後の先読み（デフォルト有効だが明示）
            >
              {profile.name}
            </Link>
          ))}
        </div>
        <div className="d-flex align-items-center">
          <Link href={`/${locale}/mypage`} className="btn btn-success me-3">
            My Page
          </Link>
          <Link href={`/${locale}/submit/`} className="btn btn-primary me-3">
            Registration
          </Link>
          <LogoutButton />
        </div>
      </nav>
      {children}
    </>
  );
}
