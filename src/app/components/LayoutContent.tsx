// src/app/components/LayoutContent.tsx
'use client';

import Link from 'next/link';
import LogoutButton from '../components/LogoutButton';

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
        <div>
          <Link key="home" href="/" className="me-3">Home</Link>
          {profiles.map((profile, index) => (
            <Link key={index} href={`/${locale}/family/${profile._id}`} className="me-3">
              {profile.name}
            </Link>
          ))}
        </div>
        <div>
          <Link href={`/${locale}/mypage`} className="me-3">
            <button className="btn btn-success">My Page</button>
          </Link>
          <Link href={`/${locale}/submit/`} className="me-3">
            <button className="btn btn-primary">Registration</button>
          </Link>
          <LogoutButton />
        </div>
      </nav>
      {children}
    </>
  );
}
