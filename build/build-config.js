var path = require('path')

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'tennetcn-ui': path.resolve(__dirname, '../'),
  vue: 'vue/dist/vue.js'
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;