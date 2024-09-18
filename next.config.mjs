/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  assetPrefix: process.env.BASE_PATH || ""
};

export default nextConfig;
