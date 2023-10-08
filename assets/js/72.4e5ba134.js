(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{358:function(s,a,e){"use strict";e.r(a);var r=e(14),l=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"classloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classloader"}},[s._v("#")]),s._v(" ClassLoader")]),s._v(" "),a("p",[s._v("ClassLoader主要对类的请求提供服务，当JVM需要某类时，它根据名称向ClassLoader要求这个类，然后由ClassLoader返回这个类的class对象。\nClassLoader负责载入系统的所有资源（Class，文件，图片，来自网络的字节流等），通过ClassLoader从而将资源载入JVM 中。每个class都有一个引用，指向自己的ClassLoader")]),s._v(" "),a("p",[s._v("##获取ClassLoader")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("this.getClass.getClassLoader();  // 使用当前类的ClassLoader   \n  \nThread.currentThread().getContextClassLoader();  // 使用当前线程的ClassLoader   \n  \nClassLoader.getSystemClassLoader();  // 使用系统ClassLoader，即系统的入口点所使用的ClassLoader。\n")])])]),a("p",[s._v("##用ClassLoader载入资源\n一些随程序发布出去的资源需要用ClassLoader来加载。")])])}),[],!1,null,null,null);a.default=l.exports}}]);