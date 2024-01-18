/** @type {import('next').NextConfig} */
const nextConfig = {
  	images: {
	    remotePatterns: [
	      {
	        protocol: 'https',
	        hostname: 'bjdd.me',
	        port: '',
	        pathname: '/**',
	      },
	    ],
  },
}
module.exports = nextConfig

