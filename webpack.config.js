import { resolve } from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import webpack from 'webpack'

/**
 * @returns {webpack.Configuration}
 */
export default function defineConfig(env) {
    return {
        mode: 'development',
        entry: {
            main: resolve(import.meta.dirname, 'src/main.js'),
        },
        module: {
            rules: [
                {
                    resourceQuery: /raw/,
                    type: 'asset/source',
                },
                {
                    resourceQuery: /^((?!raw).)*$/,
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
                template: resolve(import.meta.dirname, 'src/index.html'),
                hash: true,
            }),
            new webpack.DefinePlugin({
              TRANSLATE_API: JSON.stringify("https://translate.googleapis.com/translate_a/single"),
            })
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
}
