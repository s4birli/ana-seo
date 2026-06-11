import type { MetadataRoute } from "next";
import { seo } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ana Precup — SEO Consultant & Blogger",
    short_name: "Ana Precup",
    description: seo.en.description,
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "en",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
