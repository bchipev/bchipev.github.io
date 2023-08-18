const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
      bundle: path.resolve(__dirname, 'src/website.js')
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name][contenthash].js',
      clean: true,
      assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map',
  devServer: {
      static: {
          directory: path.resolve(__dirname, 'dist')
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Hello, this is Bo.',
        filename: 'index.html',
        template: 'src/pages/index-template.html',
        favicon: 'src/assets/images/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      title: "Bo's work so far",
      filename: 'work.html',
      template: 'src/pages/work-template.html',
      favicon: 'src/assets/images/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      title: "Get in touch with Bo",
      filename: 'about.html',
      template: 'src/pages/about-template.html',
      favicon: 'src/assets/images/favicon.ico',
    }),
  ]
}