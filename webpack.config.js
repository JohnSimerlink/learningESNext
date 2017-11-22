var path = require('path')
module.exports = {
    entry: {
        build: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
}
