/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  exportTrailingSlash: true,
  assetPrefix: "",
  images: {
    formats: ["image/webp"],
    domains: ["media.graphassets.com", "nimapm.com"],
  },
};

module.exports = nextConfig;
