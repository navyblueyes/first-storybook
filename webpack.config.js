const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ClearnWebpackPlugin = require('clean-webpack-plugin')

module.export = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'custom-button.js',
        library: 'custom-button',
        libraryTarget: 'umd', // umb is made for JS modules
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-eng", "@babel/preset-react"]
                }
            }
        }
    }
}
optimization: {
    minimizer: [new UglifyJsPlugin()]
}
plugins: [
    new ClearnWebpackPlugin(['dist'])
]