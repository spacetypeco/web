const config = {
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
      {
        source: "/:path*",
        destination: "/:path*.html",
      },
    ];
  },
  experimental: {
    scrollRestoration: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = config;
