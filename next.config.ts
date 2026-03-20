import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/books",
        destination: "/ghostwriterpress",
        permanent: true,
      },
      {
        source: "/records",
        destination: "/hookwormrecords",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
