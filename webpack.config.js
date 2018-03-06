const path = require('path');
const webpack = require('webpack');

module.exports =  {
    entry:{
        index:[
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/main'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        // filename: '[name]-[chunkhash].js'
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            path.join(__dirname, "node_modules")
        ],
        extensions: [ '.vue','.js', '.json', '.css', '.less', '.scss','.sass' ],
        alias: {
            'src': path.resolve(__dirname, './src'),
            'components': path.resolve(__dirname, './src/components'),
            'utils': path.resolve(__dirname, './src/utils'),
            'assets': path.resolve(__dirname, './src/assets'),
            'pages': path.resolve(__dirname, './src/pages'),
            'node_modules': path.resolve(__dirname, './node_modules')
        }
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
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: function(module) {
        //         return module.context && module.context.indexOf('node_modules') !== -1;
        //     }
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // })
    ],
    devtool: 'false',
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            'scss': 'style-loader!css-loader!sass-loader'
                        }
                    }
                },
                include: path.join(__dirname, './src'),
                
            },
            {
                test: /\.js$/,
                use:{
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: [['es2015', {loose: true, module: false}], 'stage-0'],
                    }
                },
                include: path.join(__dirname, './src')
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
                include: path.join(__dirname, './src/assets/styles'),
                // exclude: "/node_modules/"
            },
            {
                test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
                use: "file-loader"
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
                test: /\.(scss|sass|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                // include: path.join(__dirname, 'static/styles'),
                // exclude: "/node_modules/"
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        }
                    }
                ],
                // include: path.join(__dirname, 'static/images')
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            mimetype: "application/font-woff"
                        }
                    }
                ],
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
