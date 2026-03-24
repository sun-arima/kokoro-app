/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kokoro-app',
  assetPrefix: '/kokoro-app/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
