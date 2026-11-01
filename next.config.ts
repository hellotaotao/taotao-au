import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keeps canonical and hreflang tags in <head> for every crawler instead of streaming them into <body>.
  htmlLimitedBots: /.*/,
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
};

export default nextConfig;
