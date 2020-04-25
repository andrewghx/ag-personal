const path = require('path')
const withCSS = require('@zeit/next-css')
const isProd = process.env.NODE_ENV === 'production'

console.log(process.env)

module.exports = withCSS({
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    return config
  },
  assetPrefix: isProd ? '/ag-personal' : ''
})
