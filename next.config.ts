import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces a self-contained .next/standalone/server.js that Node.js
  // hosting panels (like Hostinger's Node.js app manager) can run directly
  // with `node server.js`, listening on process.env.PORT automatically.
  output: "standalone",
};

export default nextConfig;
