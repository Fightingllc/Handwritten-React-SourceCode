/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2024-11-25 20:44:51
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2024-11-25 21:34:17
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    module: {
        rules: [
           {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env',{targets: 'defaults'}]],
                    }
                }
           }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React',
            template: path.join(__dirname,'src/index.html'),
        })
    ]
}