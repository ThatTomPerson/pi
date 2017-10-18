const path = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'dev';
var entry = `./src/Plug-It.js`;

module.exports = {
	devtool: ENV === 'dev' ? 'source-map' : undefined,
	entry: entry,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'plug-it.js',
		publicPath: ENV === 'dev' ? 'https://localhost:8080/dist/' : ''
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			}
		],
		rules: [
			{
				test: /\.txt$/,
				exclude: /node_modules/,
				use: 'raw-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: 'html-loader'
			}
		]
	},
	externals: {
		API: 'API'
	},
	plugins: [
		new webpack.ProvidePlugin({
			identifier: 'API',
		}),
		new webpack.ExtendedAPIPlugin()
	],
	devServer: {
		https: true,
		hotOnly: true,
		overlay: true,
		public: "localhost:8080",
		publicPath: "http://localhost:8080/dist/",
		inline: true,
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	}
};
