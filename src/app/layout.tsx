// src/app/layout.tsx
export const metadata = { title: 'Minimal', description: 'just works' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="ja"><body>{children}</body></html>);
}
