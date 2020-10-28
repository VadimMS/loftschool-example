let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let rules = require('./webpack.config.rules');
let path = require('path');

rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
    })
});

module.exports = {
    entry: {
        index: './src/index.js',
        dnd: './src/dnd.js'
    },
    devServer: {
        index: 'index.html',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: { rules },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                sourceMap: true,
                compress: {
                    drop_debugger: false,
                }
            }
        })]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlPlugin({
            title: 'Main Homework',
            template: 'index.hbs',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlPlugin({
            title: 'Div Drag And Drop',
            template: 'dnd.hbs',
            filename: 'dnd.html',
            chunks: ['dnd']
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
