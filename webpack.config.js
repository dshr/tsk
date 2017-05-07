const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {

	context: path.join(__dirname, 'src'),
	entry: [
		'./main.jsx',
	],
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: ['babel-loader',],
			},
		],
	},
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		],
	},
	plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./www directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['www'] }
    })
  ]
}