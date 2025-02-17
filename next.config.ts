import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // ✅ Aggiunto dominio per immagini esterne
  },
};

export default nextConfig;
