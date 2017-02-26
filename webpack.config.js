const path = require('path');
const webpack = require('webpack');

module.exports =  {
    entry:{
        index:[
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './static/scripts/main'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            path.join(__dirname, "node_modules")
        ],
        extensions: [ '.vue','.js', '.json', '.css', '.less', '.scss' ]
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'jquery': 'jQuery'
    },
    //插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],
    devtool: 'false',
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                include: path.join(__dirname, 'static/scripts'),
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader:"babel-loader",
                options: {
                    cacheDirectory: true,
                    presets: [['es2015', {loose: true, module: false}], 'stage-0'],
                },
                include: path.join(__dirname, 'static/scripts'),
                exclude: "/node_modules/"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
                include: path.join(__dirname, 'static/styles'),
                exclude: "/node_modules/"
            },
            {
                test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
                use: [
                    "file-loader"
                ]
            },
            // {
            //     test: /\.less$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         "less-loader"
            //     ],
            //     include: path.join(__dirname, 'static/styles'),
            //     exclude: "/node_modules/"
            // },
            {
                test: /\.(scss|sass)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                include: path.join(__dirname, 'static/styles'),
                exclude: "/node_modules/"
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        }
                    }
                ],
                include: path.join(__dirname, 'static/images')
            }
        ]
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}
