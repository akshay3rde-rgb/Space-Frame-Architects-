import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  // Alternative homepage concept (static HTML/CSS/JS in public/home-v2), served at /home-v2
  // so it can be compared side by side with the current "/" homepage.
  async rewrites() {
    return [{ source: "/home-v2", destination: "/home-v2/index.html" }];
  },
};

export default nextConfig;
