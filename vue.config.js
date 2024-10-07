const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
};

