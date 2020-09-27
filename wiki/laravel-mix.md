## Use `vue-trumbowyg` in [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)

* Update your `webpack.mix.js` file like:
```js
const webpack = require('webpack');
const path = require('path');
const mix = require('laravel-mix');
// Your mix configs may go here

mix.webpackConfig({
  resolve: {
    alias: {
      'jquery$': path.resolve(path.join(__dirname, 'node_modules', 'jquery')),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: ['vue/dist/vue.esm.js', 'default'],
      jQuery: 'jquery',
      $: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
});
```


#### Missing icons?
* Try to disable image minification
```js
// webpack.mix.js
mix.options({
  imgLoaderOptions: {
    enabled: false
  },
});
```
