/*var webpack = require("webpack")
module.exports = {
	entry: "./src/app.js",
	output: {
		path: __dirname+"/build",
		filename: "bundle.js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				plugins: ["transform-runtime"],
				presets: ["es2015", "react", "stage-2"]
			}
		},{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}]
	}
}*/




var webpack = require("webpack")
var optimist = require("optimist")
var argv = optimist.argv
console.log("测试")
console.log(argv)
var port = argv.port || 8000;
module.exports = {
	entry: "./src/app.js",
	output: {
		path: __dirname+"/build",
		filename: "bundle.js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				plugins: ["transform-runtime"],
				presets: ["es2015", "react", "stage-2"]
			}
		},{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}]
	},
	devServer:{
		historyApiFallback: true,
		hot: true,
		inline: true,
		port: port,
		stats: { colors: true }
	}
}