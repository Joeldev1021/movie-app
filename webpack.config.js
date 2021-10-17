const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**@type {import('webpack').Configuration} */


module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output : {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },
  
   module : {
    rules : [
        {
            test : /\.js$/,
            loader : 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
        },
        {
            test : /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
          },
       
    ]
   },
   plugins: [
    new HtmlWebpackPlugin({template: './public/index.html'})
],



   devServer: {
       open: true,

   }
  
   
}