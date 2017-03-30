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
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.ts$/, loaders: ["awesome-typescript-loader", "angular2-router-loader"], include: path.resolve(__dirname, './src') }
    ]
  }
};
