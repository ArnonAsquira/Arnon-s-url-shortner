const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  watch: true,
  mode: 'development',
  entry: './public/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html',
    title: 'url shortner',
    filename: 'index.html'
  }), 
  new HtmlWebpackPlugin({
    template: './public/statisticsSheet.html',
    title: 'url shortner',
    filename: 'statistics.html'
  }),
  new HtmlWebpackPlugin({
    template: './public/why-arni.html',
    title: 'url shortner',
    filename: 'why.html'
  })]
};