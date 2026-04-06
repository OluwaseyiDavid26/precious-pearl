// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   experimental: {
//     turbo: {
//       memoryLimit: 512,
//     },
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
};

export default nextConfig;
