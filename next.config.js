/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "dummyimage.com",
      "staticx-tuner.zacks.com",
      "g.foolcdn.com",
      "www.investors.com",
      "www.thestreet.com",
      "images.mktw.net",
      "u3j7m9h7.rocketcdn.me",
      "cdn.benzinga.com",
      "www.ft.com",
      "www.financialexpress.com",
	  "cloudfront-us-east-2.images.arcpublishing.com",
	  "cdnph.upi.com"
    ],
  },
  env: {
    NEXT_PUBLIC_STOCK_API_KEY: process.env.NEXT_PUBLIC_STOCK_API_KEY,
  },
};

module.exports = nextConfig;
