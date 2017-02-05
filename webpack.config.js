var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, '');

var config = {
    entry: APP_DIR + '/ui/App.js',
    output: {
        path: path.resolve(__dirname, 'build/'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|browser_components)/,
                include: APP_DIR,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.png/,
                loader: "file-loader"
            }, {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader!"
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};

module.exports = config;
