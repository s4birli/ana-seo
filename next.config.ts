import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the default locale at the bare root.
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Inline the (tiny) CSS into the document head — removes the render-blocking
  // stylesheet request, improving FCP/LCP.
  experimental: {
    inlineCss: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
