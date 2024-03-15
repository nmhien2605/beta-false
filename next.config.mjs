/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: 'https', hostname: '*' }] },
  rewrites: async () => {
    return [
      // {
      //   source: '/en/:path*',
      //   destination: '/en/:path*',
      // },
      // {
      //   source: '/vi/:path*',
      //   destination: '/vi/:path*',
      // },
      {
        source: '/:path*',
        destination: '/en/:path*',
      },
    ];
  },
};

export default nextConfig;
