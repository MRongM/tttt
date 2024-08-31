import { merge } from 'webpack-merge'
import { default as webpackBase } from './webpack.config.js'
import { resolve } from 'node:path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = merge(webpackBase, {
    output:{
        path: resolve(import.meta.dirname, 'chrome_extension/sidepanel'),
    },
  }
)
config.plugins = [
    new HtmlWebpackPlugin({
        template: resolve(import.meta.dirname, 'src/index.html')
    }),
    new webpack.DefinePlugin({
      TRANSLATE_API: JSON.stringify("https://w2.1778064.xyz/"),
    })
]

export default config;