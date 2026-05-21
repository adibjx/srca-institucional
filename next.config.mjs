/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "srcatributario.adv.br",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
