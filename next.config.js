/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/send_cv',
          destination: `http://adflex-sendmail.fares.vn/send_email`,
        },
      ]
    },
    reactStrictMode: false,
    swcMinify: false,
    images: {
        domains: ['pix6.agoda.net','cdn6.agoda.net','pix8.agoda.net','q-xx.bstatic.com','thumbs.dreamstime.com','i1-sohoa.vnecdn.net'],
      },
};

module.exports = nextConfig;
