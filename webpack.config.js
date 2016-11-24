module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
};
