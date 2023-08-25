(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{313:function(t,e,r){"use strict";r.r(e);var a=r(14),u=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"dart-异步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dart-异步"}},[t._v("#")]),t._v(" Dart 异步")]),t._v(" "),e("p",[t._v("Dart异步实现的简单介绍，和一些使用API。")]),t._v(" "),e("h2",{attrs:{id:"isolates-and-event-loops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isolates-and-event-loops"}},[t._v("#")]),t._v(" Isolates and Event Loops")]),t._v(" "),e("p",[t._v("所有的Dart代码都运行在Isolate上。Isolate包含一块私有的内存空间、一个运行着事件循环的线程。Isolate之间不能共享内存，也就是说线程之间不共享内存。两个Isolate之间通过传递消息的方式通讯。不共享内存的方式使得垃圾收集效率非常高。所有异步的的基础是Event Loop。Dart的异步基于事件循环，将事件添加到事件循环队列，并把回调和事件绑定，待事件运行完成，调起绑定的回调。")]),t._v(" "),e("h2",{attrs:{id:"future"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#future"}},[t._v("#")]),t._v(" Future")]),t._v(" "),e("p",[t._v("我们一般通过Future对象提供的方法来获取一个Future。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//参数是函数对象，无参数，返回值是Future或者T。\n//通过Timer将计算过程加入到Event Loop。并在计算完成后调用回调，如果有的话。\n//而返回结果Future立即返回，以便用户注册回调。\nfactory Future(FutureOr<T> computation()) \n\nfactory Future.microtask(FutureOr<T> computation()) //事件添加到microtask，会被相对普通队列优先执行。\n\nfactory Future.sync(FutureOr<T> computation()) //以同步的方式执行computation。返回的Future是已经完成的。\n\nfactory Future.value([FutureOr<T>? value]) //异步的返回一个Future，稍后以value来完成Future。\n\nfactory Future.error(Object error, [StackTrace? stackTrace]) //异步的返回一个Future，稍后以error来完成Future。\n\nfactory Future.delayed(Duration duration, [FutureOr<T> computation()?]) //延迟Duration事件在将computation添加到Event Loop。\n\nstatic Future<List<T>> wait<T>(Iterable<Future<T>> futures,\n      {bool eagerError = false, void cleanUp(T successValue)?}) //等待所有的futures完成后，一起回调结果。\n\nstatic Future<T> any<T>(Iterable<Future<T>> futures) //以第一个完成的Future为结果，填充返回的Future。\n\nstatic Future forEach<T>(Iterable<T> elements, FutureOr action(T element)) // 按顺序运行elements，当所有elements都完成了，这个方法返回的Future才完成。\n\nstatic Future doWhile(FutureOr<bool> action()) //循环运行action，直到action的结果是false。\n\n\nFuture<R> then<R>(FutureOr<R> onValue(T value), {Function? onError})\nFuture<T> catchError(Function onError, {bool test(Object error)?});\nFuture<T> whenComplete(FutureOr<void> action());\nStream<T> asStream();\nFuture<T> timeout(Duration timeLimit, {FutureOr<T> onTimeout()?});\n")])])]),e("h2",{attrs:{id:"stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream"}},[t._v("#")]),t._v(" Stream")]),t._v(" "),e("p",[t._v("多个异步事件的源。Stream提供了一种接收Event序列的方式，每个Event要么是data要么是error，当Event全部发送完成，Stream会产生一个done Event来表示结束。通过listen方法来启动Stream发送Event的流程，listen方法注册的listener可以收到Stream发送的Event。Stream的listen方法有一个StreamSubscription类型的返回值，这个对象是实际上生产Event的对象，并可以控制流程：stop、pause。")]),t._v(" "),e("p",[t._v('Dart中存在两种Stream："Single-subscription"、"broadcast"。单订阅的只允许在Stream上设置一个listener(准确来说只能调用一次listen方法)。在设置监听后开始发送Event，在unsubscribe后停止发送Event。单订阅Stream通常用于大块连续数据的数据分包流，比如文件IO。broadcast Stream可以设置任意数量的listener，当Event准备好立即发送，与是否设置监听没有关系')]),t._v(" "),e("h2",{attrs:{id:"async-and-await"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-and-await"}},[t._v("#")]),t._v(" Async and Await")]),t._v(" "),e("h2",{attrs:{id:"generators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generators"}},[t._v("#")]),t._v(" Generators")])])}),[],!1,null,null,null);e.default=u.exports}}]);