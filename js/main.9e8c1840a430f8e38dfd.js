!function(e){function t(t){for(var n,l,i=t[0],s=t[1],c=t[2],b=0,d=[];b<i.length;b++)l=i[b],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,i=1;i<o.length;i++){var s=o[i];0!==a[s]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},a={0:0},r=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;r.push([13,1]),o()}({13:function(e,t,o){"use strict";o.r(t);var n=o(4),a=(o(6),o(2));const r=Object(a.g)('<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark shadow-sm mb-3"><span class="navbar-brand mb-0">Vue.js Trumbowyg</span><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" href="https://github.com/ankurk91/vue-trumbowyg" target="_blank"> GitHub</a></li></ul></nav>',1),l={class:"container"},i={class:"row"},s={class:"col-md-8 mb-3"},c={class:"card mb-3"},u={class:"card-body"},b={class:"form-group"},d=Object(a.i)("label",null,"Basic example",-1),m={class:"form-group"},f=Object(a.i)("label",null,"Advanced example",-1),h=Object(a.i)("div",{class:"form-group"},[Object(a.i)("button",{class:"btn btn-primary",type:"submit"},"Submit form ")],-1),g=Object(a.g)('<aside class="col-md-4 mb-3"><div class="card"><div class="card-header"> Links </div><div class="card-body"><ul><li><a href="https://github.com/ankurk91/vue-trumbowyg" target="_blank">Github</a></li><li><a href="https://www.npmjs.com/package/vue-trumbowyg" target="_blank">npm</a></li><li><a href="http://alex-d.github.io/Trumbowyg/" rel="noreferrer" target="_blank">Trumbowyg docs</a></li></ul></div></div></aside>',1),p=Object(a.i)("footer",{class:"text-center text-muted small mb-3"},[Object(a.h)(" Created by "),Object(a.i)("a",{href:"https://twitter.com/ankurk91",target:"_blank",rel:"noopener"},"@ankurk91")],-1);var v=o(3),y=o.n(v),w=(o(8),o(5)),j=["init","focus","blur","change","resize","paste","openfullscreen","closefullscreen","close","modalopen","modalclose"];var O={name:"trumbowyg",render:()=>Object(a.l)("textarea",{ref:"root"}),props:{modelValue:{default:null,required:!0,validator:e=>null===e||"string"==typeof e||e instanceof String},config:{type:Object,default:()=>({})},svgPath:{type:[String,Boolean],default:w.a},disabled:{type:Boolean,default:!1}},data:()=>({el:null}),mounted(){this.el||(this.el=y()(this.$refs.root),this.el.trumbowyg(y.a.extend(!0,{},{svgPath:this.svgPath},this.config)),this.el.trumbowyg("html",this.modelValue),this.el.on("".concat("tbw","change"),this.onChange),this.el.on("".concat("tbw","blur"),this.onBlur),this.toggleDisabled(this.disabled),this.registerEvents())},watch:{modelValue(e){this.el&&e!==this.el.trumbowyg("html")&&this.el.trumbowyg("html",e)},disabled(e){this.toggleDisabled(e)}},methods:{onChange(e){this.$emit("update:modelValue",e.target.value)},onBlur(e){this.$emit("blur",e.target.value)},registerEvents(){j.forEach(e=>{this.el.on("".concat("tbw").concat(e),(...t)=>{this.$emit("".concat("tbw","-").concat(e),...t)})})},toggleDisabled(e){const t=e?"disable":"enable";this.el.trumbowyg(t)}},beforeUnmount(){this.el&&(this.el.trumbowyg("destroy"),this.el=null)}};O.install=(e,t)=>{let o="trumbowyg";"string"==typeof t&&(o=t),e.component(o,O)};var k=O,T=(o(9),o(10),o(11),o(12),{name:"app",data:()=>({form:{content:"<h1>Preloaded content</h1>",body:null},configs:{basic:{autogrow:!1},advanced:{autogrow:!0,removeformatPasted:!0,btnsAdd:["foreColor","backColor"],btns:[["bold","italic"],["formatting"],["link"],["foreColor"],["backColor"]]}}}),components:{Trumbowyg:k},methods:{submit(){alert("Form submitted.")},setNewValue(){this.form.content='<h3 class="bg-success">New content inserted</h3>'},listenToBlurEvent(e){},listenToInitEvent(e){}},render:function(e,t,o,v,y,w){const j=Object(a.p)("trumbowyg");return Object(a.o)(),Object(a.d)("div",null,[r,Object(a.i)("main",l,[Object(a.i)("div",i,[Object(a.i)("div",s,[Object(a.i)("div",c,[Object(a.i)("div",u,[Object(a.i)("button",{class:"btn btn-secondary",onClick:t[1]||(t[1]=Object(n.b)(e=>w.setNewValue(),["prevent"]))},"Set new value pragmatically")])]),Object(a.i)("form",{method:"post",action:"/",onSubmit:t[4]||(t[4]=Object(n.b)(e=>w.submit(),["prevent"]))},[Object(a.i)("div",b,[d,Object(a.i)(j,{modelValue:y.form.content,"onUpdate:modelValue":t[2]||(t[2]=e=>y.form.content=e),class:"form-control",config:y.configs.basic},null,8,["modelValue","config"])]),Object(a.i)("div",m,[f,Object(a.i)(j,{modelValue:y.form.body,"onUpdate:modelValue":t[3]||(t[3]=e=>y.form.body=e),name:"body",config:y.configs.advanced,placeholder:"Enter your content here",class:"form-control",onTbwBlur:w.listenToBlurEvent,onTbwInit:w.listenToInitEvent},null,8,["modelValue","config","onTbwBlur","onTbwInit"])]),h],32)]),g])]),p])}}),x=T;Object(n.a)(x).mount("#app")}});