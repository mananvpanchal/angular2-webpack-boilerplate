var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

new WebpackDevServer(webpack(config), {
  port: 3000,
  host: "localhost",
  inline: true,
  contentBase: './static'
})
.listen('3000', 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
});
