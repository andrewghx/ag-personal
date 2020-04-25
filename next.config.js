const webpack = require('webpack')
const path = require('path')
const withCSS = require('@zeit/next-css')
const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? '/ag-personal' : ''

module.exports = withCSS({
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )
    return config
  },
  assetPrefix
})
