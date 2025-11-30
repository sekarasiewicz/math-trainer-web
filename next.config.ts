import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "math-trainer.karasiewicz.dev",
          },
        ],
        destination: "https://www.math-trainer.karasiewicz.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
