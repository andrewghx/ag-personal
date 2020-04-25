const webpack = require('webpack')
const path = require('path')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? 'https://www.griffithsa.co.uk' : ''

module.exports = withFonts(withCSS({
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
}))
