const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    // progress:true,
    inline: true,
    // noInfo:true,  //不用输出打包信息
    stats: {
        colors: true  // 用颜色标识
    },
    disableHostCheck: true,
    compress:true,
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
