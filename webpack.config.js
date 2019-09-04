const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
		entry:path.join(__dirname,'./src/main.js'),
		output:{
			path:path.join(__dirname,'./dist'),
			filename:"bundle.js"
		},
		devServer:{
			open:true,
			port:4000,
			// contentBase:'src',
			hot:true
		},
		plugins:[
			new htmlWebpackPlugin({
				// 模板文件
				template:path.join(__dirname,'./src/index.html'),
				// 内存中的文件名
				filename:'index.html'
			}),
			new webpack.HotModuleReplacementPlugin(),
			new VueLoaderPlugin()
		],
		module:{
			rules:[
				{
					test:/\.css$/,
					use:['style-loader','css-loader']
				},
				{
					test:/\.less$/,
					use:['style-loader','css-loader','less-loader']
				},
				{
					test:/\.scss$/,
					use:['style-loader','css-loader','sass-loader']
				},
				{
					test:/\.jpg|png|gif|jpeg|bmp$/,
					use:'url-loader?limit=50&name=[hash:8]-[name].[ext]'
				},
				{
					test:/\.js$/,
					use:'babel-loader',
					exclude:/node_modules/
				},
				{
					test:/\.vue$/,
					use:'vue-loader',
				
				},
				{ 
					test: /\.(ttf|eot|svg|woff|woff2)$/, 
					use: 'url-loader' ,
				},

			]
		},
		resolve:{
			alias:{
				"vue$":"vue/dist/vue.js"
			}
		}




}
