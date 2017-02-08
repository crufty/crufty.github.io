var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/js',
    entry: {
        app: './main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    devServer: {
        open: true, // to open the local server in browser
        contentBase: path.join(__dirname, 'dist'),
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