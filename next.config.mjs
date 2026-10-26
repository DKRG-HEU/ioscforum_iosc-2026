
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   basePath: "/ioscforum_iosc-2026",
//   trailingSlash: true,

//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',

  basePath: isProduction ? '/ioscforum_iosc-2026' : '',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
