### Configure webpack for `vue-trumbowyg`

* Install file-loader
```
yarn add file-loader
```

* Update your `webpack.config.js` file
```js
const webpack = require('webpack');

const jQueryPath = 'jquery/dist/jquery.js';

module.exports = {
  resolve: {
      alias: {
        'jquery$': jQueryPath,
      }
   },  
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'file-loader?name=[name].[ext]?[hash]',
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({     
      jQuery: jQueryPath,
      $: jQueryPath,
      'window.jQuery': jQueryPath,
    }),
  ],
};
```
