<template>
  <section class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Vue.js trumbowyg Demo</a>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://www.npmjs.com/package/vue-trumbowyg" target="_blank"> npm</a></li>
          <li><a href="https://github.com/ankurk91/vue-trumbowyg" target="_blank"> Github</a></li>
        </ul>
      </div>
    </nav>

    <div class="row">
      <div class="col-md-8">

        <div class="row">
          <div class="col-md-12">
            <button class="btn btn-default" @click.prevent="setNewValue()">Set new value pragmatically</button>
          </div>
        </div>

        <form method="post" action="/" @submit.prevent="submit()">

          <div class="form-group">
            <label>Basic example</label>
            <trumbowyg
              v-model="form.content"
              :config="configs.basic"></trumbowyg>
          </div>


          <div class="form-group" :class="{'has-error' : errors.has('body')}">
            <label>Advanced example</label>
            <trumbowyg
              v-model="form.body"
              name="body"
              :config="configs.advanced"
              placeholder="Enter your content here"
              v-validate="{required:true}"></trumbowyg>

            <span v-show="errors.has('body')"
                  class="help-block">{{ errors.first('body') }}</span>

          </div>

          <hr>

          <div class="form-group">
            <button class="btn btn-primary" type="submit"><i class="glyphicon glyphicon-ok"></i> Validate form</button>
          </div>

        </form>
      </div>

      <aside class="col-md-4">
        <div class="panel panel-info">
          <div class="panel-heading"> Links</div>
          <div class="panel-body">
            <ul>
              <li><a href="https://github.com/ankurk91/vue-trumbowyg" target="_blank">Github</a></li>
              <li><a href="https://www.npmjs.com/package/vue-trumbowyg" target="_blank">npm</a></li>
              <li><a href="http://alex-d.github.io/Trumbowyg/" target="_blank">
                Trumbowyg
              </a></li>
              <li><a
                href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en"
                target="_blank">Vue.js Dev tools</a>
              </li>
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
