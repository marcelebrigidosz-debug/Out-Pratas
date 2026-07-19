/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // cdn.sanity.io serve as imagens de produto vindas do Sanity (Etapa 6)
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
