const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
      // new CleanWebpackPlugin(['dist']),
      // new HtmlWebpackPlugin({
      //   title: 'Output Management'
      // })
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
           {
             test: /\.(png|svg|jpg|gif)$/,
             use: [
               'file-loader'
             ]
           }
        ]
    }
}