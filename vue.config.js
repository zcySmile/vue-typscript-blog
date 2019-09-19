const path = require('path')

function resolve(dir) {
  return path_join(__dirname, './', dir)
}

module.exports = {
  chainWebpack: config => {
    // // 这里是对环境的配置，不同环境对应不同的BASE_API，以便axios的请求地址不同
    // config.plugin('define').tap(args => {
    //   const argv = process.argv
    //   const mode = argv[argv.indexOf('--project-mode') + 1]
    //   args[0]['process.env'].MODE = `"${mode}"`
    //   args[0]['process.env'].BASE_API = '"http://47.94.138.75:8000"'
    //   return args
    // })
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000
  }
}
