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
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/about", // automatically becomes /docs/with-basePath
  //       destination: "/", // automatically becomes /docs/another
  //       permanent: true,
  //       has: [
  //         {
  //           type: "query",
  //           key: "page",
  //           value: "home",
  //         },
  //         {
  //           type: "cookie",
  //           key: "authorized",
  //           value: "true",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = withTM({ nextConfig });
