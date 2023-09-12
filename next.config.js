/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    target: "server",
    eslint: {
        ignoreDuringBuilds: true,
      },
}

module.exports = nextConfig
