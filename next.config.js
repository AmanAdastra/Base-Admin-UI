/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/login',
            permanent: true,
          },
        ]
      },
      images: {
        domains: ['images.unsplash.com',"plus.unsplash.com"]
    }
}

module.exports = nextConfig
