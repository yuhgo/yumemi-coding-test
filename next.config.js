/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.tsx", "page.ts"],
  reactStrictMode: true,
  async rewrites() {
    return [{ destination: "/root", source: "/" }]
  },
  swcMinify: true
}

module.exports = nextConfig
