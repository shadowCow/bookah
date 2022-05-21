const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");


const config = {
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/index.html", to: "index.html" },
                { from: "node_modules/react/umd/react.development.js", to: "react.js" },
                { from: "node_modules/react-dom/umd/react-dom.development.js", to: "react-dom.js" },
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
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                ],
            },
        ],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    }
}

module.exports = (env, argv) => {
    
    return config;
}