const path = require('path');
const { node } = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js'
    },
    externals: [nodeExternals()]
}