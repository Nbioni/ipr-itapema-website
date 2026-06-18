import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 375, 425, 520, 640, 750, 828, 1080, 1200, 1350, 1400, 1500, 1600, 1920, 2048, 3840],
  },
};

export default nextConfig;
