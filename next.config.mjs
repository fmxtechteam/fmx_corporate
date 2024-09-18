/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
