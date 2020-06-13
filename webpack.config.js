const path = require('path');

const common = {
  mode: 'development',

  context: path.resolve(__dirname, 'src/client'),

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

const serverConfig = {
  ...common,

  target: 'node',

  externals: {
    react: 'react',
  },

  entry: {
    components: './components/export.js',
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/static'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
};

const clientConfig = {
  ...common,

  target: 'web',

  entry: {
    bundle: './index.jsx',
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/static'),
    filename: '[name].js',
  },

  devtool: 'inline-source-map',
};

module.exports = [serverConfig, clientConfig];
