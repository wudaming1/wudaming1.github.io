(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{301:function(t,a,e){t.exports=e.p+"assets/img/java_io.0fb3f3ff.jpg"},360:function(t,a,e){"use strict";e.r(a);var r=e(14),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java-io包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-io包"}},[t._v("#")]),t._v(" Java IO包")]),t._v(" "),a("p",[t._v("Java IO包提供的工具类用于与操作系统交互来完成磁盘读写和网络读写。它的核心概念是stream，stream有以下几个特点：")]),t._v(" "),a("ol",[a("li",[t._v("单向读写，即一个stream要么用于写数据，要么用于读数据，不能同时完成这两项工作。")]),t._v(" "),a("li",[t._v("阻塞线程，即读写过程中，当前线程被阻塞。")]),t._v(" "),a("li",[t._v("stream之间可以嵌套，以提供更方便的交互方式。")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(301),alt:"IO流体系图"}}),t._v("简易IO流体系介绍图")]),t._v(" "),a("h2",{attrs:{id:"inputstream-与-outputstream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputstream-与-outputstream"}},[t._v("#")]),t._v(" InputStream 与 OutputStream")]),t._v(" "),a("p",[t._v("在IO包中有很多stream，有一些的主要工作是面向操作系统实现不同类型的IO的具体操作，有一些的主要工作是面向数据提供多样的处理数据的方式。")]),t._v(" "),a("h3",{attrs:{id:"第一类-面向操作系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一类-面向操作系统"}},[t._v("#")]),t._v(" 第一类---面向操作系统")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("FileInputStream：本地磁盘输入流。\nFileOutputStream：本地磁盘输出流。\nSocketInputStream：TCP输入流。\nSocketOutputStream：TCP输出流。\n")])])]),a("p",[t._v("Java使用DatagramSocket代表UDP协议的Socket，DatagramSocket本身只是码头，不维护状态，不能产生IO流，所以它并不在Java IO体系中。")]),t._v(" "),a("h3",{attrs:{id:"第二类-面向数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二类-面向数据"}},[t._v("#")]),t._v(" 第二类---面向数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("BufferedInputStream/BufferedOutputStream：对于stream的读写添加缓存，一次性读取/写入大量数据，减少与操作系统通讯的次数，提高读写速度。\nInputStreamReader/OutputStreamWriter：实现以字符的方式读/写数据。stream只能以字节或者字节数组的方式读/写数据。\nBufferedReader/BufferedWriter：同时具备以上两种特点。\n")])])]),a("p",[t._v("以上只是列举几个常用的，实际上有特别多。这些stream是嵌套使用的，带Buffered前缀的需要用相对应的stream或者reader来生成，reader需要用stream来生成。这些都不能直接产生。")])])}),[],!1,null,null,null);a.default=s.exports}}]);