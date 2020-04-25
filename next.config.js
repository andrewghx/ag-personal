const path = require('path')
const withCSS = require('@zeit/next-css')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withCSS({
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
  assetPrefix: isProd ? 'https://andrewghx.github.io/ag-personal' : ''
})
