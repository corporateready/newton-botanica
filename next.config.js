/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  key: 'X-DNS-Prefetch-Control',
  value: 'on',
  images: {
    formats: ['image/webp'],
    domains:['swiperjs.com','youtu.be', 'lorempixel.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
