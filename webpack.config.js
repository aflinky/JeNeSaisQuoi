const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './client/index.js',
    mode: process.env.NODE_ENV,
    output: {
        path: path.join(__dirname, '/build'), //puts things in a build folder
        filename: 'bundle.js', //under the name bumdle
    },
    // externals: {
    //     "styled-components": {
    //         commonjs: "styled-components",
    //         commonjs2: "styled-components",
    //         amd: "styled-components",
    //     },
    // },
    plugins: [ //plugins for separating css in bundle (during prod) and HMR
        new MiniCssExtractPlugin({}),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        publicPath: '/build/', //for dev, proxy kicks back to localhost 3000/build
        // proxy: {
        //   '/yandex': 'http://localhost:3000'
        // },
        // hot: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, //for js and jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //use babel-loader
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["babel-plugin-styled-components"]
                    },
                },
            },
            {
                test: /.s?css$/, //for scss and css
                exclude: /node_modules/,
                use: [
                    // choose MiniCss plugin for prod, style-loader for dev
                    // process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    "style-loader",
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
}