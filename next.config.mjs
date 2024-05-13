/** @type {import('next').NextConfig} */
const nextConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]__[local]___[hash:base64:5]',
  },
  images: {
    domains: ['doctris-react-admin.vercel.app'],
  },
};

export default nextConfig;
