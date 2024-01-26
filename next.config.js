/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    formats: ["image/webp"],
    domains: ["media.graphassets.com", "nimapm.com"],
  },
};

module.exports = nextConfig;
