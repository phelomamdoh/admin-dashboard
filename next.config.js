/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freestack.co.uk",
      },
    ],
  },
  output: "export",
};

module.exports = nextConfig;
