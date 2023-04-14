/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["unsplash.it"],
	},
};

module.exports = nextConfig;
