const path = require('path');
module.exports = {

  entry: {
    "indexBundle": "./src/index.js",
    "appBundle": "./src/app.js"
  },
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // compress: true,
    port:8080,
    hot:true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  mode: "development"
};