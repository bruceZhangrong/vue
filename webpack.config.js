/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {
	//entry
	entry: {
		index: [
			'webpack-dev-server/client?http://localhost:8000',
			'webpack/hot/only-dev-server',
			'./src/js/app'
		]
	},
	/*
	 *devServer: {
	 * 	host:
	 *  port:
	 * }
	 * */
	devtool: 'false',
	//输入
	output: {
		path: __dirname,
		filename: './assets/bundle.js'
	},
	//插件项
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	//其他配置方案
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx', '.json', '.css', '.scss', '.less']
	},
	//外部引入简化打包体积
	/*externals: {
		'react': 'React',
		'react-dom': 'ReactDom',
		'react-router': 'ReactRouter',
		'jquery': 'jQuery',
		'immutable': 'Immutable',
		'echarts': 'echarts'
	},*/
	//加载器loader
	module: {
		noParse: [],
		loaders: [
			{
				test: /.\js[x]?$/,
				loaders: ['react-hot-loader', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-1'],
				include: path.join(__dirname, 'src/js')
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				query: {
			        presets: ['es2015', 'react']
			    },
				include: path.join(__dirname, 'src/json')
			},
			{
				test:/\.css$/,
				loader: 'style-loader!css-loader?minimize',
				include: path.join(__dirname, 'src/css')
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader?minimize',
				include: path.join(__dirname, 'src/less')
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader?minimize',
				include: path.join(__dirname, 'src/sass')
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&minetype=application/font-woff'
			},
			{
				test:/\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			}
		]
	}
};
















































