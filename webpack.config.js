const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "bundle"),
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
          chunks: ["index"],
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif|mp3)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use:{
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ],
    }
}