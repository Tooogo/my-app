// next.config.js
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
};
export default withNextIntl(nextConfig);
