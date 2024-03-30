/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakstoreapi.com',
                pathname: '/img/*',
            },
        ],
    },
};

export default nextConfig;
