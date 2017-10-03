import component from './component.vue';

const trumbowygPlugin = (Vue, params) => {
  let name = 'trumbowyg';
  if (typeof params === 'string') name = params;

  Vue.component(name, component);
};

component.install = trumbowygPlugin;

export default component;
