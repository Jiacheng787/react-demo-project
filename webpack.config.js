const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') // 导入安装的插件

// 创建一个插件的实例化对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件，__dirname表示当前文件所在目录，即根目录
    filename: 'index.html' // 内存中首页的名称
})

// 向外暴露一个打包的配置对象；因为webpack是基于Node构建的，所以webpack支持所有Node API和语法
module.exports = {
    mode: 'development', // production模式下，main.js会被压缩
    plugins: [
        htmlPlugin // 把插件放到plugin下
    ],
    module: { // 所有第三方模块的配置规则
    	rules: [ //第三方匹配规则
    		// 添加exclude排除项，否则报错
    		{ test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, 
    	]
	}
}