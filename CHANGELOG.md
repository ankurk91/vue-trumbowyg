# Changelog

### [3.6.2](https://github.com/ankurk91/vue-trumbowyg/compare/3.6.1...3.6.2) 
* Fix: previous version

### [3.6.1](https://github.com/ankurk91/vue-trumbowyg/compare/3.6.0...3.6.1) 
* Fix: `disabled` prop initial value not being reflected

### [3.6.0](https://github.com/ankurk91/vue-trumbowyg/compare/3.5.0...3.6.0) 
* Add : `disabled` prop, [#26](https://github.com/ankurk91/vue-trumbowyg/issues/26)

### [3.5.0](https://github.com/ankurk91/vue-trumbowyg/compare/3.4.2...3.5.0) 
* Add new events to the list

### [3.4.2](https://github.com/ankurk91/vue-trumbowyg/compare/3.4.1...3.4.2) 
* Change: specify jQuery as dependency

### [3.4.1](https://github.com/ankurk91/vue-trumbowyg/compare/3.4.0...3.4.1) 
* Change: 
    - convert template to render function to reduce build size
    - remove the workaround to update `v-model` on paste event, because `trumbowyg` is now handling it internally

### [3.4.0](https://github.com/ankurk91/vue-trumbowyg/compare/3.3.0...3.4.0) 
* Add: `blur` event to work with validation libraries

### [3.3.0](https://github.com/ankurk91/vue-trumbowyg/compare/3.2.0...3.3.0) 
* Add: `tbw-init` event, fixes [#14](https://github.com/ankurk91/vue-trumbowyg/issues/14)

### [3.2.0](https://github.com/ankurk91/vue-trumbowyg/compare/3.1.2...3.2.0) 
* Internal: Upgrade build system to Webpack v4.x

### [3.1.2](https://github.com/ankurk91/vue-trumbowyg/compare/3.1.1...3.1.2) 
* Internal: Use `jQuery.extend` instead of `Object.assign`
    
### [3.1.1](https://github.com/ankurk91/vue-trumbowyg/compare/3.1.0...3.1.1) 
* Fix: v-model was not being updated on paste event (Ctrl+V)
    
### [3.1.0](https://github.com/ankurk91/vue-trumbowyg/compare/3.0.0...3.1.0) 
* Add: Emit all possible events, you can listen to them, for example
    ```html
      <trumbowyg v-model="body" @tbw-blur="doSomethingOnBlur"></trumbowyg>
    ```

### [3.0.0](https://github.com/ankurk91/vue-trumbowyg/compare/2.0.0...3.0.0) (breaking)
* Change:
    - `input-class` prop has been removed, you can always use Vue.js inbuilt [class](https://vuejs.org/v2/guide/class-and-style.html#With-Components) bindings
    ```html
      <trumbowyg v-model="body" class="form-control input"></trumbowyg>
    ```
    - Similarly `name`, `id`, `placeholder` and `required` props has been removed, you can still specify any number of attributes on component
    ```html
      <trumbowyg v-model="body" name="editor" id="js-editor" placeholder="Type something" aria-required="true"></trumbowyg>
    ```
        
### [2.0.0](https://github.com/ankurk91/vue-trumbowyg/compare/1.0.3...2.0.0) (breaking)
* Change: Update v-model value in real time
* Change: No longer force the input to have default css classes
    - To preserve old behaviour
    ```html
     <trumbowyg v-model="content" input-class="form-control input your-css-class"></trumbowyg> 
    ```
* Fix: v-model validator 
* Chore: repo no longer have `dist` folder
* Fix: IE11 support
 
### 1.0.3
- Fixed a bug where user is unable to enter a new line

### 1.0.1
- Min jQuery requirements dropped to v1.8

### 1.0.0
- Initial release
