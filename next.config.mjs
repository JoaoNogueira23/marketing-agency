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
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'placekitten.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'dummyimage.com',
            port: '',
          },
        ],
    },
};

export default nextConfig;
