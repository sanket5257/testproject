import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out", // Output directory
  trailingSlash: true, // Add trailing slash to URLs for static export compatibility
  images: {
    unoptimized: true, // Important for static export
  },
};

export default nextConfig;
