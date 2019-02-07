const path = require('path');

module.exports = {
    mode: 'production',
    target: "electron-renderer",
    entry: './src/Renderer/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'renderer.common.js',
        libraryTarget: "commonjs2"
    },
    externals: {
        "electron-edge-js": "commonjs electron-edge-js",
        "electron": "commonjs electron"
    },
    optimization: {
        minimize: false
    }
};