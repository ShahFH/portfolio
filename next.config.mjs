/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true, // Add this ESLint configuration to ignore during builds
    },
};

export default nextConfig;