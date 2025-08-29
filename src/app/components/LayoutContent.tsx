// ※ "use client" は書かない（Server Component）
import Link from 'next/link';
import LogoutButton from '../components/LogoutButton'; // ←通常インポートに変更（Client Component）

export type Profile = {
  _id: string;
  name: string;
};

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
              prefetch
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
          <LogoutButton /> {/* ← ここだけClient Component。SSRはされず、後で水和されます */}
        </div>
      </nav>
      {children}
    </>
  );
}
