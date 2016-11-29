var path = require('path');

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./static"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.ts$/, loaders: ["ts-loader", "angular2-router-loader"], include: path.resolve(__dirname, './src') }
    ]
  }
};
