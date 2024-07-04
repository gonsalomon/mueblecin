/** @type {import('next').NextConfig} */
const nextConfig = {
    rules:{
        "react/no-unescaped-entities": "off",
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            },
        ],
    }
}
export default nextConfig;
