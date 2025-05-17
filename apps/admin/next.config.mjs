/** @type {import('next').NextConfig} */
import { env } from 'node:process';
const isProd = env.NODE_ENV === "production";
const adminHost = !isProd ? 'localhost' : 'admin'

const nextConfig = {
  basePath: "/admin",
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
  async headers() {
    return [
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
