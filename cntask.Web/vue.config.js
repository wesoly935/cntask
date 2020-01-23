module.exports = {
  "outputDir": "wwwroot",
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: "/",
    devServer: {
        port: 4445,
        https: false,
        proxy: {
            '/api' : {
                target: 'http://localhost:4443'
            }
        }
    },
    chainWebpack: config => {
      // aspnet uses the other hmr so remove this one
      config.plugins.delete('hmr');
  },
}