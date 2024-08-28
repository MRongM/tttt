import { merge } from 'webpack-merge'
import { default as webpackBase } from './webpack.config.js'
import { resolve } from 'node:path'

const config = merge(webpackBase, {
    output:{
        path: resolve(import.meta.dirname, 'chrome_extension/sidepanel'),
        },
    }
)
export default config;