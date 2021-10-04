const path = require('path');
module.exports = {
  entry: "./src/index.js",
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: "myBundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // compress: true,
    port:8080,
    hot:true
  },
  mode: "development"
};