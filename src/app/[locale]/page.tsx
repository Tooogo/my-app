// src/app/[locale]/page.tsx

export default function LocaleHome() {
  return (
    <main style={{ width: "100%", minHeight: "100vh" }}>
      {/* ヒーロー：動画を最大要素にしてLCP対象にしやすく */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          overflow: "hidden",
        }}
      >
        <video
          // モバイル自動再生の条件
          muted
          playsInline
          autoPlay
          loop

          // LCP検証用：poster を大きくするとポスターがLCP要素になりやすい
          // ない場合は外してOK（/public に画像を置いたら有効化）
          // poster="/poster-tree.jpg"

          // ネットワーク挙動（実運用は metadata 推奨。LCP悪化の再現なら auto も試せます）
          preload="metadata"

          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          controls={false}
        >
          {/* webm を併用していないなら mp4 だけでOK */}
          <source src="/tree.mp4" type="video/mp4" />
        </video>

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

      {/* 既存の説明テキスト（必要なら残す） */}
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
