// next.config.js
import createNextIntlPlugin from "next-intl/plugin";

// ★ ルーティング定義のパスを明示
const withNextIntl = createNextIntlPlugin("./src/i18n/routing.ts");

const nextConfig = { reactStrictMode: true };
export default withNextIntl(nextConfig);
