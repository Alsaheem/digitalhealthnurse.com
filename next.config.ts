import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Only for GitHub Pages project URL (https://snyangere.github.io/digitalhealthnurse.com/).
  // Custom domain builds leave this unset so assets resolve from `/`.
  basePath: process.env.GITHUB_PAGES === "true" ? "/digitalhealthnurse.com" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
