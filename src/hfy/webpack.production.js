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
