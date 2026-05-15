import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.0.193",
    "192.168.0.193:3000",
  ],
};

export default nextConfig;
