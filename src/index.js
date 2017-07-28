import component from './component.vue';

const plugin = {
  install: function (Vue, params) {
    let name = 'trumbowyg';
    if (typeof params === 'string') name = params;

    Vue.component(name, component);
  }
};

component.install = plugin.install;

export default component;
