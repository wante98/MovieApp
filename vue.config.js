const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //若有Vue项目报错： Component name “xxx“ should always be multi-word vue/multi-word-component-names就硬加上這個
  //由於 github-pages 並非在網頁根目錄顯示成果 , 所以需要增加 vue.config.js 調整網頁根目錄
  publicPath: '/MovieApp/'
})  
