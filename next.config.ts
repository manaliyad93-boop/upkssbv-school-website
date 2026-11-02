import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/upkssbv-school-website",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;