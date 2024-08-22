import { resolve } from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

export default {
    mode: 'development',
    entry: {
        main: resolve(import.meta.dirname, 'src/main.js'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ],
                        plugins: [
                            '@emotion',
                            '@vue/babel-plugin-jsx',
                        ],
                    },
                }],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(import.meta.dirname, 'src/index.html')
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(import.meta.dirname, 'src'),
        },
    },
    optimization: {
        minimizer: [
            new TerserPlugin({ extractComments: false, })
        ],
    },
    performance: {
        maxEntrypointSize: 1024 * 1024,
        maxAssetSize: 1024 * 1024,
    },
}