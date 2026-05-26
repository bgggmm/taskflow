// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  // Desactivar Turbopack en producción temporalmente si da problemas
  experimental: {
    // turbo: {} // comenta esto si sigue fallando
  },
};

export default nextConfig;