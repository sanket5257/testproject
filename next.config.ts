import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out", // Output directory
  trailingSlash: true, // Add trailing slash to URLs for static export compatibility
  images: {
    unoptimized: true, // Important for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.textilevoice.com",
      },
    ],
  },
};

export default nextConfig;
