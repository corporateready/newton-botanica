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
  async redirects() {
    return [
      {
        source: '/thanks', // automatically becomes /docs/with-basePath
        destination: '/thanks', // automatically becomes /docs/another
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
