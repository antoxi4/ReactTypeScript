const webpackConfig = {
  dev: require('./webpack.config.development'),
  production: require('./webpack.config.production')
}

module.exports = webpackConfig[process.env.NODE_ENV]
