const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './src/main.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: __dirname + '/src/index.html',
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }])
    ]
}