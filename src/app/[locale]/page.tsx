// src/app/[locale]/page.tsx
import Image from "next/image";

export default function LocaleHome() {
  return (
    <main style={{ width: "100%", minHeight: "100vh" }}>
      {/* ヒーロー（画像） */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          overflow: "hidden",
        }}
      >
        <Image
          src="/tree_photo.jpg"       // ここを /tree.webp / .avif にするとさらに軽量化可
          alt="Hero"
          fill                  // 親要素いっぱいに広げる
          sizes="100vw"         // レイアウト幅に応じた最適サイズを配信
          priority              // LCP 対象を優先ロード
          style={{ objectFit: "cover" }}
        />

        {/* 前景テキスト（任意） */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            pointerEvents: "none",
          }}
        >
        </div>
      </section>

      <section className="container py-4">
        <h2>Please access each site from the button on the top left</h2>
        <p>
          Or, if you haven&apos;t registered yet, please click the registration
          button on the top right.
        </p>
      </section>
    </main>
  );
}
