(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{395:function(t,n,s){"use strict";s.r(n);var a=s(14),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vue-init-过程分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-init-过程分析"}},[t._v("#")]),t._v(" Vue _init()过程分析")]),t._v(" "),n("p",[t._v("_init()方法在new Vue()时触发，是第一个触发的原型方法。这个方法在将参数合并到$options属性后，初始化整个生命周期。js文件位置：src/core/instance/init.js")]),t._v(" "),n("p",[t._v("关键代码如下")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optimize internal component instantiation")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// since dynamic options merging is pretty slow, and none of the")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// internal component options needs special treatment.")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initInternalComponent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeOptions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveConstructorOptions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        vm\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    \n    vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_self "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initLifecycle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initEvents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initRender")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeCreate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initInjections")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve injections before data/props")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initProvide")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve provide after data/props")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'created'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"将vue实例渲染到dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将vue实例渲染到dom"}},[t._v("#")]),t._v(" 将Vue实例渲染到DOM")]),t._v(" "),n("ol",[n("li",[t._v("Vue._init():src/core/instance/init.js")]),t._v(" "),n("li",[t._v("Vue.$mount():src/platform/entry-runtime-with-compiler.js，检查并生成Vue._render()函数。")]),t._v(" "),n("li",[t._v("Vue.$mount():src/platforms/web/runtime/index.js")]),t._v(" "),n("li",[t._v("mountComponent():src/core/instance/lifecycle.js")]),t._v(" "),n("li",[t._v("vm._render():src/core/instance/render.js,创建VNode。")]),t._v(" "),n("li",[t._v("vm._update():src/core/instance/lifecycle.js，把 VNode 渲染成真实的 DOM。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);