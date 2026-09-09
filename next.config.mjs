/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/resume_3b_external.pdf",
      },
    ];
  },
};

export default nextConfig;
