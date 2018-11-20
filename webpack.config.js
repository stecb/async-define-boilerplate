const path = require('path');

const defaultConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV !== 'development' ? '[name].min.js' : '[name].js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
  },
  entry: {
    'react-16.6.3_react-dom-16.6.3': path.join(__dirname, 'index.js'),
  }
};

module.exports = process.env.NODE_ENV !== 'development' ? [
  defaultConfig,
] : [{
  ...defaultConfig,
  optimization: {
    minimize: false,
  },
}];
