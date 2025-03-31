import type { Metadata } from "next";
import "../globals.css";
import Link from 'next/link';
import { getProfiles } from "../services";
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoutButton from "../components/LogoutButton"; // 追加

const inter = Inter({ subsets: ['latin'] });

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
  const locale = params.locale; // params をそのまま扱う

  const profiles = await getProfiles(locale); // サーバーでデータ取得

  return (
    <html lang={locale}>
      <body className={inter.className}>
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
            {/* Registration ボタン */}
            <Link href={`/${locale}/submit`}>
              <button className="btn btn-primary me-3">Registration</button>
            </Link>

            {/* ログアウトボタン (Client Component に変更) */}
            <LogoutButton />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
