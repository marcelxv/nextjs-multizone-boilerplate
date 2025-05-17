/** @type {import('next').NextConfig} */
import { env } from "node:process";
import createNextIntlPlugin from 'next-intl/plugin';

const isProd = env.NODE_ENV === "production";
const adminHost = !isProd ? "localhost" : "admin";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  }
});

const nextConfig = {
  output: "standalone",
  transpilePackages: ["@workspace/ui"],
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: `http://${adminHost}:3001/admin/:path*`, // admin app runs on port 3001
      },
      {
        source: "/admin/_next/:path*",
        destination: `http://${adminHost}:3001/admin/_next/:path*`, // admin app runs on port 3001
      },
    ];
  },
};

export default withNextIntl(nextConfig);
