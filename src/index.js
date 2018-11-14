import component from './component.js';

const trumbowygPlugin = (Vue, params) => {
  let name = 'trumbowyg';
  if (typeof params === 'string') name = params;

  Vue.component(name, component);
};

component.install = trumbowygPlugin;

export default component;
export {trumbowygPlugin, component};
