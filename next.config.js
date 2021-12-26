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
};

module.exports = config;
