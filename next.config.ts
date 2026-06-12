import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the default locale at the bare root.
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
