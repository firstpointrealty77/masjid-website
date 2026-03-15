import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.ballantynemasjid.org",
      },
    ],
  },
};

export default nextConfig;