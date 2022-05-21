const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


const config = {
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/index.html", to: "index.html" },
            ],
        }),
    ],
    context: path.join(
        __dirname, // build
        '..', // bookah
    ),
    entry: {
        index: './src/index.tsx'
    },
    output: {
        clean: true,
        path: path.join(
            __dirname, // build
            '..', // bookah
            'dist',
        ),
        filename: '[name].js',
    },
    mode: 'development',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
}

module.exports = (env, argv) => {
    
    return config;
}