# Changelog

### [3.0.0](https://github.com/ankurk91/vue-trumbowyg/compare/2.0.0...3.0.0) (breaking)
* Change:
    - `input-class` prop has been removed, you can always use Vue.js inbuilt [class](https://vuejs.org/v2/guide/class-and-style.html#With-Components) binding
    ```html
      <trumbowyg v-model="date" class="form-control input"></trumbowyg>
    ```
    - Similarly `name`, `id`, `placeholder` and `required` props has been removed, you can still specify any number of attributes on component
    ```html
      <trumbowyg v-model="date" name="editor" id="js-editor" placeholder="Type something" aria-required="true"></trumbowyg>
    ```
        
### [2.0.0](https://github.com/ankurk91/vue-trumbowyg/compare/1.0.3...2.0.0) (breaking)
* Change: Update v-model value in real time
* Change: No longer force the input to have default css classes
    - To preserve old behaviour
    - `<trumbowyg v-model="content" input-class="form-control input your-css-class"></trumbowyg> `
* Fix: v-model validator 
* Chore: repo no longer have `dist` folder
* Fix: IE11 support
 
### 1.0.3
- Fixed a bug where user is unable to enter a new line

### 1.0.1
- Min jQuery requirements dropped to v1.8

### 1.0.0
- Initial release
