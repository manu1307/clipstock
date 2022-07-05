/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["dummyimage.com"],
	},
	env: {
		NEXT_PUBLIC_STOCK_API_KEY: process.env.NEXT_PUBLIC_STOCK_API_KEY,
	},
};

module.exports = nextConfig;
