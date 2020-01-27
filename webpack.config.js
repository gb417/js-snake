const path = require("path");

module.exports = {
    entry: ["babel-polyfill","./src/script.js"],
    output: {
        path: path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname,"dist"),
        open: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};