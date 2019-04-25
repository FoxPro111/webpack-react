const path = require('path');

module.exports = {
    devtools: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    resolve: {
        extentions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};