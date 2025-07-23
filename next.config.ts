import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	devIndicators: false,
	// async redirects() {
	// 	return [
	// 		{
	// 			source: '/contact',
	// 			destination: 'https://kappa.lol/4BQFZj', // this was an rickroll, but hoster closed 😭.
	// 			permanent: false,
	// 		},
	// 	];
	// },
};

export default nextConfig;
