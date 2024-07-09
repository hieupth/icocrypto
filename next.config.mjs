/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.BASE_PATH || ""
};

export default nextConfig;
