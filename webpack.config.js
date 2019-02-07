const path = require('path');

module.exports = {
    mode: 'production',
    target: "electron-renderer",
    entry: './src/Renderer/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'renderer.common.js',
        libraryTarget: "commonjs"
    },
    externals: [
        "electron-edge-js"
    ],
    optimization: {
        minimize: false
    }
};