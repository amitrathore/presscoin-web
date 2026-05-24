import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/presscoin-web",
  assetPrefix: "/presscoin-web/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
