const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false //若有Vue项目报错： Component name “xxx“ should always be multi-word vue/multi-word-component-names就硬加上這個
})  
