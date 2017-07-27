# Vue-Trumbowyg

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-trumbowyg.svg)](https://www.npmjs.com/package/vue-trumbowyg)
[![npm-version](https://img.shields.io/npm/v/vue-trumbowyg.svg)](https://www.npmjs.com/package/vue-trumbowyg)
[![github-tag](https://img.shields.io/github/tag/ankurk91/vue-trumbowyg.svg?maxAge=1800)](https://github.com/ankurk91/vue-trumbowyg/)
[![license](https://img.shields.io/github/license/ankurk91/vue-trumbowyg.svg?maxAge=1800)]()

Vue.js v2.x component for [Trumbowyg](https://alex-d.github.com/Trumbowyg) rich text editor

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
* Play nice with [vee-validate](https://github.com/logaretm/vee-validate) validation library

## Requirements
* jQuery >=1.8 || ^3.2.1
    
## Usage
```html
<template>
  <div>
    <trumbowyg v-model="content"></trumbowyg>
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
  import trumbowyg from 'vue-trumbowyg';
  import 'trumbowyg/dist/ui/trumbowyg.css';
  Vue.use(trumbowyg);
```
This will register a global component `<trumbowyg>` 

## Available props
The component accepts these props:

| Attribute       | Type               | Default               | Description      |
| :---            |  :---:             | :---:                 | :---             |
| v-model / value | String / null      | `null`                | Set or Get editor value |
| config          | Object             | `{}`                  | Editor configuration [options](http://alex-d.github.io/Trumbowyg/documentation.html#basic-options)|
| placeholder     | String             | `''`                  | Set placeholder on input |
| input-class     | String / Object    | `''`                  | Add CSS class to input  |
| name            | String             | `editor`              | Set input field name  |
| required        | Boolean            | `false`               | Make input field required |
| disabled        | Boolean            | `false`               | Make input field disabled |
| id              | String             | `''`                  | Set input field id |

## Install in non-module environments (without webpack)
* Acquire required files
```html
<!-- Editor dependency-->
<script src="https://unpkg.com/jquery@3.2.1/dist/jquery.min.js"></script>

<!-- Editor itself -->
<script src="https://unpkg.com/trumbowyg@2.7.0/dist/trumbowyg.min.js"></script>
<link href="https://unpkg.com/trumbowyg@2.7.0/dist/ui/trumbowyg.min.css" rel="stylesheet">

<!-- Vue js -->
<script src="https://unpkg.com/vue@2.4.1/dist/vue.min.js"></script>
<!-- Lastly add this package -->
<script src="https://unpkg.com/vue-trumbowyg"></script>
```
* Use the component anywhere in your app like this
```html
<!-- index.html -->
<div id="app">  
   <trumbowyg v-model="content"></trumbowyg>  
</div>
<script>
  //Initialize as global component
  Vue.component('Trumbowyg', VueTrumbowyg.default);
  
  new Vue({
    el: '#app',
    data: {
      content: null
    },    
  });
</script>
```

## Run examples on your localhost
* Clone this repo
* Make sure you have node-js >=6.10 and [yarn](https://yarnpkg.com) >=0.27.x
* Install dependencies
``
yarn install
``
* Run webpack dev server
``
yarn start
``
* Open the demo page at ``http://localhost:8080``

## Changelog
Changelog for each release can be found [here](CHANGELOG.md)

## License
[MIT](LICENSE.txt) License
