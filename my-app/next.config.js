/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withSvgr = require("next-svgr");

module.exports = withSvgr({
  svgrOptions: {
    icon: true,
    svgProps: {
      fill: "currentColor",
    },
  },
});

module.exports = nextConfig;
