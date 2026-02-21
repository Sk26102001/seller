/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // allow any HTTPS domain
            },
            {
                protocol: 'http',
                hostname: '**', // allow any HTTP domain (if needed)
            },
        ],
    },
};

export default nextConfig;
