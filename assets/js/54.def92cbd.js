(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{342:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sliver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sliver"}},[t._v("#")]),t._v(" Sliver")]),t._v(" "),s("p",[t._v("Sliver布局用于滑动组件的布局和绘制。")]),t._v(" "),s("h2",{attrs:{id:"对象介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象介绍"}},[t._v("#")]),t._v(" 对象介绍")]),t._v(" "),s("h3",{attrs:{id:"sliverconstraints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sliverconstraints"}},[t._v("#")]),t._v(" SliverConstraints")]),t._v(" "),s("p",[t._v("SliverConstraints描述的是当前ViewPort的滚动状态，RenderSliver使用SliverConstraints来测量、布局自己。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverConstraints")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constraints")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//主轴方向")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AxisDirection")]),t._v(" axisDirection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Sliver 沿着主轴从列表的哪个方向插入？枚举类型，正向或反向")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GrowthDirection")]),t._v(" growthDirection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用户滑动方向")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScrollDirection")]),t._v(" userScrollDirection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前Sliver理论上（可能会固定在顶部）已经滑出可视区域的总偏移")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double scrollOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前Sliver之前的Sliver占据的总高度，因为列表是懒加载，如果不能预估时，该值为double.infinity")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double precedingScrollExtent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//上一个 sliver 覆盖当前 sliver 的大小，通常在 sliver 是 pinned/floating")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//或者处于列表头尾时有效，我们在后面的小节中会有相关的例子。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double overlap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前Sliver在Viewport中的最大可以绘制的区域。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//绘制如果超过该区域会比较低效（因为不会显示）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double remainingPaintExtent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//纵轴的长度；如果列表滚动方向是垂直方向，则表示列表宽度。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double crossAxisExtent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//纵轴方向")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AxisDirection")]),t._v(" crossAxisDirection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Viewport在主轴方向的长度；如果列表滚动方向是垂直方向，则表示列表高度。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double viewportMainAxisExtent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Viewport 预渲染区域的起点[-Viewport.cacheExtent, 0]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double cacheOrigin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Viewport加载区域的长度，范围:")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[viewportMainAxisExtent,viewportMainAxisExtent + Viewport.cacheExtent*2]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double remainingCacheExtent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"slivergeometry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slivergeometry"}},[t._v("#")]),t._v(" SliverGeometry")]),t._v(" "),s("p",[t._v("描述RenderSliver所占空间信息。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SliverGeometry")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 在滑动方向上sliver所占的长度。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double scrollExtent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" double paintOrigin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);