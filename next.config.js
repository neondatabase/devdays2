module.exports = {
  poweredByHeader: false,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [];
  },
  webpack(config) {
    // https://github.com/vercel/next.js/issues/25950#issuecomment-863298702
    const fileLoaderRule = config.module.rules.find((rule) => {
      if (rule.test instanceof RegExp) {
        return rule.test.test('.svg');
      }
      return null;
    });

    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.inline.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                'prefixIds',
              ],
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /(?<!inline)\.svg$/,
      type: 'asset/resource',
      use: 'svgo-loader',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    });

    return config;
  },
};
