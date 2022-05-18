const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "production",
    module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           {
             loader: 'style-loader'
           },
           {
             loader: 'css-loader'
           }
         ]
       }
     ]
   },
   plugins: [
     /* HTML Webpack Plugin */
     new HtmlWebpackPlugin({
       template: './src/template/index.html',
       filename: 'index.html'
     })
   ]
}