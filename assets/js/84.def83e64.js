(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{371:function(t,i,a){"use strict";a.r(i);var l=a(14),o=Object(l.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"核心概念"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),i("p",[t._v("一个元素如何排版主要由三个属性控制：")]),t._v(" "),i("ul",[i("li",[t._v("position：控制元素之间的位置关系。")]),t._v(" "),i("li",[t._v("display：控制元素是堆叠、并排、隐藏。每个元素存在两个盒子：外部盒子、内部盒子。"),i("em",[i("strong",[t._v("个人理解，内部盒子影响内容的排版，外部盒子影响自身的排版。")])])]),t._v(" "),i("li",[t._v("float：控制的方式，是指position和display会受到float的影响？")])]),t._v(" "),i("h2",{attrs:{id:"float"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#float"}},[t._v("#")]),t._v(" float")]),t._v(" "),i("p",[t._v("决定元素本身如何在父元素的定位，同时会影响到兄弟元素，但是不影响子元素的排版。\nfloat对元素本身的影响：")]),t._v(" "),i("ul",[i("li",[t._v("脱离文档流。")]),t._v(" "),i("li",[t._v("失去块级元素占行的特点。")]),t._v(" "),i("li",[t._v("父元素无法感知")])]),t._v(" "),i("p",[t._v("float的元素对块级元素和内联元素的影响是不同的:")]),t._v(" "),i("ul",[i("li",[t._v("对块级元素来说，除了内容以外，感知不到float元素的存在，但是内容会为float元素空出空间，以免被遮挡。")]),t._v(" "),i("li",[t._v("对应内联元素，整体会为float元素空出空间，以免被遮挡。")])]),t._v(" "),i("h2",{attrs:{id:"position"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" position")]),t._v(" "),i("p",[t._v("决定元素本身如何在父元素的定位，可能影响兄弟元素，但是不影响子元素的排版。")]),t._v(" "),i("p",[t._v("属性值：")]),t._v(" "),i("ul",[i("li",[t._v("static：该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。")]),t._v(" "),i("li",[t._v("relative：该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。")]),t._v(" "),i("li",[t._v("absolute：不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。")]),t._v(" "),i("li",[t._v("fixed：不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform  属性非 none 时，容器由视口改为该祖先。")]),t._v(" "),i("li",[t._v("sticky：盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 table 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。position: sticky 对 table 元素的效果与 position: relative 相同。")])]),t._v(" "),i("h2",{attrs:{id:"display"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#display"}},[t._v("#")]),t._v(" display")]),t._v(" "),i("p",[t._v("决定元素本身如何在父元素的定位，同时会影响到兄弟元素，影响子元素的排版。主要分为4大类。按照使用复杂度和功能排名。")]),t._v(" "),i("ul",[i("li",[t._v("IFC =》 Inline formatting context：内部元素按照文档流排版。包裹内容。")]),t._v(" "),i("li",[t._v("BFC =》 Block fomatting context：内部元素按照文档流排版。自身在父元素中独占一行。")]),t._v(" "),i("li",[t._v("FFC =》 Flex formatting context：内部元素有自己的排版规则，一维布局。自身在父元素中独占一行。")]),t._v(" "),i("li",[t._v("GFC =》 Grid formatting context：内部元素有自己的排版规则，二维布局。自身在父元素中独占一行。")])]),t._v(" "),i("p",[t._v("FC的全称是：Formatting Contexts，是W3C CSS2.1规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。")])])}),[],!1,null,null,null);i.default=o.exports}}]);