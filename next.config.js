/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["react-timezone-select"]);

const nextConfig = {
  reactStrictMode: true,
  key: "X-DNS-Prefetch-Control",
  value: "on",
  images: {
    formats: ["image/webp"],
    domains: [
      "youtu.be",
      "lorempixel.com",
      "media.istockphoto.com",
      "cdn.pixabay.com",
      "youtube-.com",
    ],
    path: '',
    loader: 'imgix',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    forceSwcTransforms: true,
  },
  async redirects() {
    return [
      {
        source: "/thanks", // automatically becomes /docs/with-basePath
        destination: "/", // automatically becomes /docs/another
        permanent: true,
        has: [
          {
            type: "query",
            key: "page",
            value: "home",
          },
          {
            type: "cookie",
            key: "authorized",
            value: "true",
          },
        ],
      },
      {
            source: '/apartamente',
            destination: '/?utm_source=facebook&utm_medium=facebook+referral+link', // Matched parameters can be used in the destination
            permanent: false,
      },
      {
            source: '/proiect',
            destination: '/?utm_source=youtube&utm_medium=youtube+referral+link',
            permanent: false,
      },
      {
            source: '/acasa',
            destination: '/?utm_source=instagram&utm_medium=instagram+referral+link',
            permanent: false,
      },
      {
            source: '/gb',
            destination: '/?utm_source=tiktok&utm_medium=tiktok+referral+link',
            permanent: false,
      },
      {
            source: '/home',
            destination: '/?utm_source=googlemybusiness&utm_medium=googlemybusiness+referral+link',
            permanent: false,
      },
      {
            source: '/botanica',
            destination: '/?utm_source=direct+link&utm_medium=direct+referral+link',
            permanent: false,
      },
    ];
  },
};

module.exports = withTM({ nextConfig });
