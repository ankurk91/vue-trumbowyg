## Use `vue-trumbowyg` in [Vue CLI](https://cli.vuejs.org/)

* Create a file named `vue.config.js` in your project root.
```js
const webpack = require('webpack')
const jQueryPath = 'jquery/dist/jquery.js';

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({      
        jQuery: jQueryPath,
        $: jQueryPath,
        'window.jQuery': jQueryPath,
      }),
    ],
  }
}
```
Start your dev server with `npm run serve`
