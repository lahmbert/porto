/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  serverExternalPackages: [],
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
