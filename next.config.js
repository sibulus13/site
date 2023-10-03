/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
}
module.exports = nextConfig
