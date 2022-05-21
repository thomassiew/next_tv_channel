/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "acm-assets.eco.astro.com.my",
      "divign0fdw3sv.cloudfront.net",
      "linear-poster.astro.com.my", 
    ],
  },
};

module.exports = nextConfig;
