/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // We run typecheck separately via tsc
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
