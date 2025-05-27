// next.config.js
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  skipMiddlewareUrlNormalize: true, // ✅ experimental ではなくルートに直接置く
};

export default withNextIntl(nextConfig);
