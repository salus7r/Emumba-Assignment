// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@theme": path.resolve(__dirname, "src/theme/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
};
