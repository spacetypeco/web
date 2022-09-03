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
};

module.exports = config;
