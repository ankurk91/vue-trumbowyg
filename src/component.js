// Need full jQuery build
import jQuery from 'jquery';

import 'trumbowyg';
// You have to import css yourself

// You have to configure webpack to load svg files
import svgIcons from 'trumbowyg/dist/ui/icons.svg';

// https://alex-d.github.io/Trumbowyg/documentation/#events
import events from './events';

const eventPrefix = 'tbw';

export default {
  name: 'trumbowyg',
  render(el) {
    return el('textarea')
  },
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
    // https://alex-d.github.io/Trumbowyg/documentation/#svg-icons
    svgPath: {
      type: [String, Boolean],
      default: svgIcons,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      /**
       * @var jQuery DOM
       */
      el: null,
    }
  },
  mounted() {
    // Return early if instance is already loaded
    if (this.el) return;

    // Store DOM
    this.el = jQuery(this.$el);

    // Init editor with config
    this.el.trumbowyg(jQuery.extend(true, {}, {svgPath: this.svgPath}, this.config));
    // Set initial value
    this.el.trumbowyg('html', this.value);

    // Watch for further changes
    this.el.on(`${eventPrefix}change`, this.onChange);

    // Blur event for validation libraries
    this.el.on(`${eventPrefix}blur`, this.onBlur);

    // Initial value for disabled prop
    this.toggleDisabled(this.disabled);

    // Register events
    this.registerEvents();
  },
  watch: {
    /**
     * Listen to change from parent component and update DOM
     *
     * @param newValue String
     */
    value(newValue) {
      if (!this.el) return;
      // Prevent multiple input events
      if (newValue === this.el.trumbowyg('html')) return;
      // Set new value
      this.el.trumbowyg('html', newValue)
    },

    disabled(newValue) {
      this.toggleDisabled(newValue)
    }
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

    /**
     * This event is different from tbw-blur event
     *
     * @param event
     */
    onBlur(event) {
      this.$emit('blur', event.target.value);
    },

    /**
     * Emit all available events
     */
    registerEvents() {
      events.forEach((name) => {
        this.el.on(`${eventPrefix}${name}`, (...args) => {
          this.$emit(`${eventPrefix}-${name}`, ...args);
        });
      })
    },

    toggleDisabled(value) {
      const method = value ? 'disable' : 'enable'
      this.el.trumbowyg(method);
    }
  },
  /**
   * Release memory
   */
  beforeDestroy() {
    if (!this.el) return;

    this.el.trumbowyg('destroy');
    this.el = null;
  },
};
