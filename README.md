# Vue-Trumbowyg

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-trumbowyg.svg)](http://npm-stats.com/~packages/vue-trumbowyg)
[![npm-version](https://img.shields.io/npm/v/vue-trumbowyg.svg)](https://www.npmjs.com/package/vue-trumbowyg)
[![github-tag](https://img.shields.io/github/tag/ankurk91/vue-trumbowyg.svg?maxAge=1800)](https://github.com/ankurk91/vue-trumbowyg/)
[![license](https://img.shields.io/github/license/ankurk91/vue-trumbowyg.svg?maxAge=1800)](https://yarnpkg.com/en/package/vue-trumbowyg)

Vue.js v2.x component for [Trumbowyg](https://alex-d.github.io/Trumbowyg/) WYSIWYG editor

## Demo on [JSFiddle](https://jsfiddle.net/ankurk91/p7xs2jkk/)

## Installation
```bash
# npm
npm install vue-trumbowyg --save

# Yarn
yarn add vue-trumbowyg
```

## Features
* Reactive ``v-model`` value
    - You can change editor value programmatically 
* Emits all possible [events](https://alex-d.github.io/Trumbowyg/documentation/#events)   
* Supports most [plugins](https://alex-d.github.io/Trumbowyg/documentation/plugins/)
* Play nice with [vee-validate](https://github.com/logaretm/vee-validate) validation library

## Requirements
* jQuery >=1.8 || ^3.3
    
## Usage
```html
<template>
  <div>
    <trumbowyg v-model="content" :config="config" class="form-control" name="content"></trumbowyg>
  </div>
</template>

<script>  
  // Import this component
  import trumbowyg from 'vue-trumbowyg';
  
  // Import editor css
  import 'trumbowyg/dist/ui/trumbowyg.css';
   
  export default {    
    data () {
      return {
        content: '',
        config: {
          // Any option from 
          // https://alex-d.github.io/Trumbowyg/documentation/#basic-options
        }       
      }
    },
    components: {
      trumbowyg
    }
  }
</script>
```

#### As plugin
```js
  import Vue from 'vue';
  import VueTrumbowyg from 'vue-trumbowyg';
  import 'trumbowyg/dist/ui/trumbowyg.css';
  Vue.use(VueTrumbowyg);
```
This will register a global component `<trumbowyg>` 

### Events
* You can listen to various events like this
```html
 <trumbowyg v-model="body" @tbw-blur="yourMethod"></trumbowyg>
```

## Available props
The component accepts these props:

| Attribute       | Type               | Default               | Description      |
| :---            |  :---:             | :---:                 | :---             |
| v-model / value | String / null      | `null`                | Set or Get editor value (required)|
| config          | Object             | `{}`                  | Editor configuration [options](http://alex-d.github.io/Trumbowyg/documentation.html#basic-options)|
| svg-path        | String, Boolean    | `import 'trumbowyg/dist/ui/icons.svg'`   | Set [custom](https://alex-d.github.io/Trumbowyg/documentation/#svg-icons) svg icon file URL|

## Install in non-module environments (without webpack)
* Acquire required files
```html
<!-- Editor dependency-->
<script src="https://unpkg.com/jquery@3.3/dist/jquery.min.js"></script>

<!-- Editor itself -->
<script src="https://unpkg.com/trumbowyg@2.9/dist/trumbowyg.min.js"></script>
<link href="https://unpkg.com/trumbowyg@2.9/dist/ui/trumbowyg.min.css" rel="stylesheet">

<!-- Vue js -->
<script src="https://unpkg.com/vue@2.5/dist/vue.min.js"></script>
<!-- Lastly add this package -->
<script src="https://unpkg.com/vue-trumbowyg"></script>
```
* Use the component anywhere in your app like this
```html
<!-- index.html -->
<div id="app">  
   <trumbowyg v-model="content" class="form-control"></trumbowyg>  
</div>
<script>
  // Initialize as global component
  Vue.component('Trumbowyg', VueTrumbowyg.default);
  
  new Vue({
    el: '#app',
    data: {
      content: null,      
    },    
  });
</script>
```

## Troubleshoot
* Read [setup guide](https://github.com/ankurk91/vue-trumbowyg/wiki)

## Run examples on your localhost
* Clone this repo
* Make sure you have node-js >=6.10 and [yarn](https://yarnpkg.com) >=1.x pre-installed
* Install dependencies - `yarn install`
* Run webpack dev server - `yarn start`
* This should open the demo page at `http://localhost:8000` in your default web browser 

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## License
[MIT](LICENSE.txt) License
