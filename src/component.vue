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
  import icons from 'trumbowyg/dist/ui/icons.svg';

  export default {
    name: 'trumbowyg',
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
        default: icons,
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
      // set initial value
      this.el.trumbowyg('html', this.value);

      // Watch for changes for further updates
      this.el.on('tbwchange', this.onChange);
      this.el.on('tbwblur', this.onBlur);

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
        this.el && this.el.trumbowyg('html', newValue)
      },
    },
    methods: {
      /**
       * Emit change event with current editor value
       * This event allows you to capture value in real-time
       *
       * @param event
       */
      onChange(event) {
        this.$emit('change', event.target.value);
      },

      /**
       * Update v-model on blur event
       * Let's not update value in real-time
       *
       * @param event
       */
      onBlur(event) {
        this.$emit('input', event.target.value);
      },
    }
  };
</script>
