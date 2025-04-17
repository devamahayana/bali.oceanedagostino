import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = withAnalyzer({
  
  reactStrictMode: true,
  output: 'export',  
  images: {
    unoptimized: true, // ✅ Disable Next.js Image Optimization for Static Export
  },
  
});

export default nextConfig;
