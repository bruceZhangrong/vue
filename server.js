/* eslint-disable no-var, strict */
'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    proxy: {
        '/app/*': {
            target: 'http://www.ih5.cn',
            changeOrigin: true,
            // host:'localhost:3000',
            secure: false
        }
    }
});

server.listen(3000, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
