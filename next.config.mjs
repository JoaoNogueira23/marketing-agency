/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  images: {
      formats: ['image/webp'],
      remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.cloud.google.com',
            port: '',
            pathname: '/blog-content-s3/**',
          },
        ],
    },
};

export default nextConfig;
