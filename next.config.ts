import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.opencrvs.org",
      },
      {
        protocol: "https",
        hostname: "www.kambangsinclaire.com",
      },
    ],
  },
};

export default nextConfig;
