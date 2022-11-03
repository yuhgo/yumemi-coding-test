/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  async rewrites() {
    return [{ destination: "/root", source: "/" }]
  },
  swcMinify: true
}

module.exports = nextConfig
