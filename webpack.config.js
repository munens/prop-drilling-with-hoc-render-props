const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // entry point
  entry: './src/index.js',

   // output:
   output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  // loaders:
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },

  devServer: {
    port: 8070
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
