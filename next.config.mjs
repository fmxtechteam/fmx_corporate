/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
