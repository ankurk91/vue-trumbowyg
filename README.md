# Vue Trumbowyg

[![downloads](https://img.shields.io/npm/dt/vue-trumbowyg.svg)](http://npm-stats.com/~packages/vue-trumbowyg)
[![npm-version](https://img.shields.io/npm/v/vue-trumbowyg.svg)](https://www.npmjs.com/package/vue-trumbowyg)
[![github-tag](https://img.shields.io/github/tag/ankurk91/vue-trumbowyg.svg?maxAge=1800)](https://github.com/ankurk91/vue-trumbowyg/)
![build](https://github.com/ankurk91/vue-trumbowyg/workflows/build/badge.svg)
[![license](https://img.shields.io/github/license/ankurk91/vue-trumbowyg.svg?maxAge=1800)](https://yarnpkg.com/en/package/vue-trumbowyg)

Vue.js component for [Trumbowyg](https://alex-d.github.io/Trumbowyg/) WYSIWYG editor

## [Demo](https://ankurk91.github.io/vue-trumbowyg/) or [JSFiddle](https://jsfiddle.net/ankurk91/p7xs2jkk/)

## Installation
```bash
# yarn
yarn add vue-trumbowyg

# npm
npm install vue-trumbowyg 
```

## Features
* Reactive ``v-model`` value
    - You can change editor value programmatically 
* Emits all possible [events](https://alex-d.github.io/Trumbowyg/documentation/#events)   
* Supports most [plugins](https://alex-d.github.io/Trumbowyg/documentation/plugins/)
* Works with validation libraries like - [vee-validate](https://github.com/logaretm/vee-validate) 

## Requirements
* jQuery >=1.8 
    
## Usage
```html
<template>
  <div>
    <trumbowyg v-model="content" :config="config" class="form-control" name="content"></trumbowyg>
  </div>
</template>

<script>  
  // Import this component
  import Trumbowyg from 'vue-trumbowyg';
  
  // Import editor css
  import 'trumbowyg/dist/ui/trumbowyg.css';
   
  export default {    
    data () {
      return {
        content: null,
        config: {
          // Get options from 
          // https://alex-d.github.io/Trumbowyg/documentation
        }       
      }
    },
    components: {
      Trumbowyg
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
* You can listen to various [events](https://alex-d.github.io/Trumbowyg/documentation/#events) like this
```html
 <trumbowyg v-model="body" @tbw-blur="yourMethod"></trumbowyg>
```
* :bulb: Events names are prefixed with `tbw` and separated with a dash, for example: `tbw-focus`

## Available props
The component accepts these props:

| Attribute       | Type               | Default               | Description      |
| :---            |  :---:             | :---:                 | :---             |
| v-model / value | String / null      | `null`                | Set or Get editor value (required)|
| disabled        | Boolean            | `false`               | Enable/disable editor |
| config          | Object             | `{}`                  | Editor configuration [options](http://alex-d.github.io/Trumbowyg/documentation.html)|
| svg-path        | String, Boolean    | `import 'trumbowyg/dist/ui/icons.svg'`   | Set [custom](https://alex-d.github.io/Trumbowyg/documentation/#svg-icons) svg icon file URL|

## Install in non-module environments (without webpack)
```html
<!-- Editor dependencies-->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.4"></script>

<!-- Editor itself -->
<script src="https://cdn.jsdelivr.net/npm/trumbowyg@2"></script>
<link href="https://cdn.jsdelivr.net/npm/trumbowyg@2/dist/ui/trumbowyg.min.css" rel="stylesheet">

<!-- Vue js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-trumbowyg@3"></script><
<script>
  // Initialize as global component
  Vue.component('Trumbowyg', VueTrumbowyg.default);
</script>
```

## Troubleshoot
* Read [setup guide](https://github.com/ankurk91/vue-trumbowyg/wiki)

## Run examples on your localhost
* Clone this repo
* Make sure you have node-js `>=10.13` and [yarn](https://yarnpkg.com) `>=1.x` pre-installed
* Install dependencies - `yarn install`
* Run webpack dev server - `yarn start`
* This should open the demo page at `http://localhost:9000` in your default web browser 

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## License
[MIT](LICENSE.txt) License
