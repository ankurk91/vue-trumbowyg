<template>
  <section class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand mb-0">Vue-trumbowyg Demo</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://www.npmjs.com/package/vue-trumbowyg"
               target="_blank"> npm</a></li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/ankurk91/vue-trumbowyg"
               target="_blank"> Github</a></li>
        </ul>
      </div>
    </nav>
    <p class="mb-2"></p>

    <div class="row">
      <div class="col-md-8">

        <div class="row">
          <div class="col-md-12">
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
              v-validate="{required:true}"></trumbowyg>

            <span v-show="errors.has('body')"
                  class="text-danger">{{ errors.first('body') }}</span>

          </div>

          <hr>

          <div class="form-group">
            <button class="btn btn-primary" type="submit"><i class="glyphicon glyphicon-ok"></i> Validate form</button>
          </div>

        </form>
      </div>

      <aside class="col-md-4">
        <div class="card">
          <div class="card-header">
            Links
          </div>
          <div class="card-body">
            <ul>
              <li><a href="https://github.com/ankurk91/vue-trumbowyg" target="_blank">Github</a></li>
              <li><a href="https://www.npmjs.com/package/vue-trumbowyg" target="_blank">npm</a></li>
              <li><a href="http://alex-d.github.io/Trumbowyg/" rel="noreferrer" target="_blank">Trumbowyg docs</a></li>
              <li><a
                href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en"
                rel="noreferrer" target="_blank">Vue.js Dev tools</a></li>
              <li><a href="https://github.com/logaretm/vee-validate" target="_blank">vee-validate</a></li>
            </ul>
          </div>
        </div>
      </aside>

    </div>


  </section>
</template>

<script type="text/javascript">
  import Vue from 'vue';

  import trumbowyg from '../src/index';
  import 'trumbowyg/dist/ui/trumbowyg.css';

  // Plugins are optional
  import 'trumbowyg/dist/plugins/colors/trumbowyg.colors'
  import 'trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.css'

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
      trumbowyg
    },
    methods: {
      submit() {
        console.log('Form submit event');
        console.log(this.form);
        // http://vee-validate.logaretm.com/examples.html#component-example
        this.$validator.validateAll().then(result => {
          // eslint-disable-next-line
          alert(`Validation Result: ${result}`);
        });
      },
      setNewValue() {
        console.log('Set new value');
        this.form.content = '<h3 class="bg-success">New content inserted</h3>';
      }
    },
    mounted() {

    }
  }
</script>
