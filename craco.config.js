/* eslint-disable no-undef */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Hooks': path.resolve(__dirname, 'src/hooks'),
      '@Store': path.resolve(__dirname, 'src/store'),
      '@Data': path.resolve(__dirname, 'src/data')
    }
  }
};
