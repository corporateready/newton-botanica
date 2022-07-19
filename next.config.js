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
        has: [
          {
            type: 'query',
            key: 'page',
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
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
