var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    // './src/index',
    './src/index.jsx',
  ],
  output: {
    // path: path.join(__dirname, 'dist'),
    path: path.join(__dirname, 'lib/javascripts'),
    // path: __dirname + '/app/assets/javascripts',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
      // include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
    ]
  }
};
