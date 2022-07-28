/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  key: 'X-DNS-Prefetch-Control',
  value: 'on',
  images: {
    formats: ['image/webp'],
    domains:['swiperjs.com','youtu.be', 'lorempixel.com','botanica.newton.md'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    forceSwcTransforms: true,
  },
  async redirects() {
    return [
      {
        source: '/thanks', // automatically becomes /docs/with-basePath
        destination: '/', // automatically becomes /docs/another
        permanent: true,
        has: [
          {
            type: 'query',
            key: 'page',
            value: 'home',
          },
          {
            type: 'cookie',
            key: 'authorized',
            value: 'true',
          }
        ]
      }
    ]
  },
}

module.exports = nextConfig
