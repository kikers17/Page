const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: {
        script: './src/js/script.js',
    },
    output: {
        path: __dirname + '/docs/js',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
      new BrowserSyncPlugin({
        single: true,
        server: "docs",
        files: "src/js/**/*.js"
      })
    ]
}
