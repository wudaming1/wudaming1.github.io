(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{362:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"同步锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步锁"}},[t._v("#")]),t._v(" 同步锁")]),t._v(" "),s("p",[t._v("常见的锁有synchronized、volatile、偏向锁、轻量级锁、重量级锁，用于并发编程的代码同步。")]),t._v(" "),s("h2",{attrs:{id:"synchronized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronized"}},[t._v("#")]),t._v(" synchronized")]),t._v(" "),s("p",[t._v("synchronized是并发编程中接触的最基本的同步工具，是一种重量级锁，也是java内置的同步机制。")]),t._v(" "),s("ol",[s("li",[t._v("对象锁：当使用synchronized修饰类普通方法时，那么当前加锁的级别就是实例对象，当多个线程并发访问该对象的同步方法、同步代码块时，会进行同步。")]),t._v(" "),s("li",[t._v("类锁：当使用synchronized修饰类静态方法时，那么当前加锁的级别就是类，当多个线程并发访问该类（所有实例对象）的同步方法以及同步代码块时，会进行同步。")]),t._v(" "),s("li",[t._v("同步代码块：当使用synchronized修饰代码块时，那么当前加锁的级别就是synchronized（X）中配置的x对象实例，当多个线程并发访问该对象的同步方法、同步代码块以及当前的代码块时，会进行同步。")])]),t._v(" "),s("h2",{attrs:{id:"volatile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volatile"}},[t._v("#")]),t._v(" volatile")]),t._v(" "),s("p",[t._v("每个线程拥有自己的工作内存，实际上线程所修改的共享变量是从主内存中拷贝的副本，当一个共享变量被volatile修饰时，它会保证修改的值会立即被更新到主存，当有其他线程需要读取时，它会去内存中读取新值。只能修饰变量。")])])}),[],!1,null,null,null);s.default=e.exports}}]);