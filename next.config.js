const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  )
}

// Overrides for css-loader plugin
function cssLoaderOptions(modules) {
  const { getLocalIdent, ...others } = modules // Need to delete getLocalIdent else localIdentName doesn't work
  return {
    ...others,
    localIdentName: '[hash:base64:6]',
    exportLocalsConvention: 'camelCaseOnly',
    mode: 'local',
  }
}

const nextConfig = {
  webpack: (config) => {
    const oneOf = config.module.rules.find((rule) => typeof rule.oneOf === 'object')

    if (oneOf) {
      // Find the module which targets *.scss|*.sass files
      const moduleSassRule = oneOf.oneOf.find((rule) =>
        regexEqual(rule.test, /\.module\.(scss|sass)$/)
      )

      if (moduleSassRule) {
        // Get the config object for css-loader plugin
        const cssLoader = moduleSassRule.use.find(({ loader }) => loader.includes('css-loader'))
        if (cssLoader) {
          cssLoader.options = {
            ...cssLoader.options,
            modules: cssLoaderOptions(cssLoader.options.modules),
          }
        }
      }
    }

    return config
  },
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
