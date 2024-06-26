/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/home",
      permanent: true, // Change to false for temporary redirects (optional)
    },
  ],
};

export default nextConfig;
