var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/js',
    entry: {
        app: './main.js'
    },
    output: {
        path: path.resolve(__dirname, '../../assets/js'),
        filename: '[name].bundle.js'
    },
    devServer: {
        open: true, // to open the local server in browser
        contentBase: path.resolve(__dirname, '../..'),
    },
    module: {
        loaders: [{
            test: path.join(__dirname, 'js'),
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};