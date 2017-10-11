<template>

  <textarea :name="name"
            :id="id"
            :class="inputClass"
            :required="required"
            :placeholder="placeholder"
            :disabled="disabled"
  ></textarea>

</template>

<script type="text/javascript">
  const jQuery = window.jQuery || require("jquery");

  import 'trumbowyg';
  // You have to import css yourself

  // You may have to configure webpack to load svg files
  import iconsSvg from 'trumbowyg/dist/ui/icons.svg';

  export default {
    name: 'trumbowyg',
    props: {
      value: {
        default: null,
        required: true,
        validator(value) {
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
        default: 'form-control input'
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
        default: iconsSvg,
      },
    },
    data() {
      return {
        // jQuery DOM
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
      // Set initial value
      this.el.trumbowyg('html', this.value);

      // Watch for changes for further updates
      this.el.on('tbwchange', this.onChange);
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
       * @param newValue String
       */
      value(newValue) {
        if (this.el) {
          // Prevent multiple input events
          if (newValue === this.el.trumbowyg('html')) return;
          this.el.trumbowyg('html', newValue)
        }
      },
    },
    methods: {
      /**
       * Emit input event with current editor value
       * This will update v-model on parent component
       * This method gets called when value gets changed by editor itself
       *
       * @param event
       */
      onChange(event) {
        this.$emit('input', event.target.value);
      },
    }
  };
</script>
