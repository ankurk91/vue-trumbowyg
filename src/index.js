import component from './component.vue';

const plugin = {
  install: function (Vue, options) {
    Vue.component('trumbowyg', component);
  }
};

component.install = plugin.install;

export default component;
