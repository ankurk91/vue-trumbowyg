<template>

  <textarea class="form-control input"
            :name="name"
            :id="id"
            :class="inputClass"
            :required="required"
            :placeholder="placeholder"
            :disabled="disabled"
  ></textarea>

</template>

<script type="text/javascript">
  const jQuery = window.jQuery || require("jquery");

  import 'trumbowyg/dist/trumbowyg';
  // You have to import css yourself

  // You may have to configure webpack to load svg files
  import icons from 'trumbowyg/dist/ui/icons.svg';

  export default {
    props: {
      value: {
        default: null,
        required: true,
        validate(value) {
          return value === null || typeof value === 'string' || value instanceof String
        }
      },
      // http://alex-d.github.io/Trumbowyg/documentation.html#basic-options
      config: {
        type: Object,
        default: () => ({})
      },
      placeholder: {
        type: String,
        default: ''
      },
      inputClass: {
        type: [String, Object],
        default: ''
      },
      name: {
        type: String,
        default: 'editor'
      },
      required: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      id: {
        type: String
      },
      svgPath: {
        type: [String, Boolean],
        default: icons,
      },
    },
    data() {
      return {
        el: null,
      }
    },
    mounted() {
      // Return early if instance is already loaded
      if (this.el) return;

      // Store DOM
      this.el = jQuery(this.$el);

      // Init editor with config
      this.el.trumbowyg(Object.assign({svgPath: this.svgPath}, this.config));
      // set initial value
      this.el.trumbowyg('html', this.value);
      // Watch for changes
      this.el.trumbowyg().on('tbwchange', this.onChange);

    },
    beforeDestroy() {
      // Free up memory
      if (this.el) {
        this.el.trumbowyg('destroy');
        this.el = null;
      }
    },
    watch: {
      /**
       * Listen to change from outside of component and update DOM
       *
       * @param newValue
       */
      value(newValue) {
        this.el && this.el.trumbowyg('html', newValue)
      },
    },
    methods: {
      /**
       * Update v-model upon change triggered by editor itself
       *
       * @param event
       */
      onChange(event) {
        this.el && this.$emit('input', this.el.trumbowyg('html'));
      }
    }
  };
</script>
