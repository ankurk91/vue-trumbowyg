<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark shadow-sm mb-3">
      <span class="navbar-brand mb-0">Vue.js Trumbowyg</span>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/ankurk91/vue-trumbowyg"
             target="_blank"> GitHub</a></li>
      </ul>
    </nav>

    <main class="container">
      <div class="row">
        <div class="col-md-8 mb-3">

          <div class="card mb-3">
            <div class="card-body">
              <button class="btn btn-secondary" @click.prevent="setNewValue()">Set new value pragmatically</button>
            </div>
          </div>

          <form method="post" action="/" @submit.prevent="submit()">

            <div class="form-group">
              <label>Basic example</label>
              <trumbowyg
                v-model="form.content"
                class="form-control"
                :config="configs.basic"></trumbowyg>
            </div>

            <div class="form-group">
              <label>Advanced example</label>
              <trumbowyg
                v-model="form.body"
                name="body"
                :config="configs.advanced"
                placeholder="Enter your content here"
                class="form-control"
                @tbw-blur="listenToBlurEvent"
                @tbw-init="listenToInitEvent"
              ></trumbowyg>
            </div>

            <div class="form-group">
              <button class="btn btn-primary" type="submit">Submit form
              </button>
            </div>
          </form>
        </div>

        <aside class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              Links
            </div>
            <div class="card-body">
              <ul>
                <li><a href="https://github.com/ankurk91/vue-trumbowyg" target="_blank">Github</a></li>
                <li><a href="https://www.npmjs.com/package/vue-trumbowyg" target="_blank">npm</a></li>
                <li><a href="http://alex-d.github.io/Trumbowyg/" rel="noreferrer" target="_blank">Trumbowyg docs</a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
    <footer class="text-center text-muted small mb-3">
      Created by <a href="https://twitter.com/ankurk91" target="_blank" rel="noopener">@ankurk91</a>
    </footer>
  </div>
</template>

<script>
  import Vue from 'vue';

  import Trumbowyg from '../src/index.js';
  import 'trumbowyg/dist/ui/trumbowyg.min.css';

  // Plugins are optional
  import 'trumbowyg/dist/plugins/colors/trumbowyg.colors.js'
  import 'trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.min.css'
  import 'trumbowyg/dist/plugins/pasteembed/trumbowyg.pasteembed.js'

  export default {
    name: 'app',
    data() {
      return {
        form: {
          content: '<h1>Default text</h1>',
          body: null,
        },
        // http://alex-d.github.io/Trumbowyg/documentation.html#basic-options
        configs: {
          basic: {
            autogrow: false
          },
          advanced: {
            autogrow: true,
            removeformatPasted: true,
            // Adding color plugin button
            btnsAdd: ['foreColor', 'backColor'],
            // Limit toolbar buttons
            btns: [
              ['bold', 'italic'], ['formatting'], ['link'],
              ['foreColor'], ['backColor'],
            ]
          },
        },
      }
    },
    components: {
      Trumbowyg
    },
    methods: {
      submit() {
        console.log('Form submit event', this.form);
        alert("Form submitted.")
      },
      setNewValue() {
        console.log('Set new value');
        this.form.content = '<h3 class="bg-success">New content inserted</h3>';
      },
      listenToBlurEvent(event) {
        console.log("listen to blur event")
      },
      listenToInitEvent(event) {
        console.log("listen to init event")
      }
    },
  }
</script>
<style>
  .trumbowyg-box, .trumbowyg-editor {
    margin: 0;
  }
</style>
