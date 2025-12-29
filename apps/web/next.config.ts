import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  cacheComponents: true,
  reactCompiler: true,
  reactStrictMode: true,
  typedRoutes: true,

  experimental: {
    viewTransition: true,
    turbopackFileSystemCacheForDev: true,
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});
export default withMDX(nextConfig);
