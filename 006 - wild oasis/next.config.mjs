/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "atkekervqrtyhulonkwq.supabase.co",
      },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  // output: "export",
};

export default nextConfig;
