/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  // basePath: "/kyle-kim-portfolio",
  // assetPrefix: "/kyle-kim-portfolio",
}

module.exports = nextConfig
