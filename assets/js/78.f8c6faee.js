(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{500:function(t,s,a){"use strict";a.r(s);var n=a(65),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"angular指令小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#angular指令小结"}},[t._v("#")]),t._v(" angular指令小结")]),t._v(" "),a("h2",{attrs:{id:"指令选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令选择器"}},[t._v("#")]),t._v(" 指令选择器")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Directive")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[lazyloadSrc]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("用"),a("code",[t._v("[]")]),t._v("表示选择有"),a("code",[t._v("lazyloadSrc")]),t._v("属性的元素，因此，指令我们也可以说是自定义属性！")]),t._v(" "),a("h2",{attrs:{id:"angular指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#angular指令"}},[t._v("#")]),t._v(" angular指令")]),t._v(" "),a("p",[t._v("指令一般分为：")]),t._v(" "),a("ol",[a("li",[t._v("组件 - 带模板的指令")]),t._v(" "),a("li",[t._v("结构型指令 - ngIf")]),t._v(" "),a("li",[t._v("属性型指令 - ngClass")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20201108170822.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20201108171336.png",alt:""}})]),t._v(" "),a("p",[t._v("此外，装饰器是可嵌套的，因此，我们通过"),a("code",[t._v("@HostBinding()")]),t._v("装饰器和"),a("code",[t._v("@Input()")]),t._v("装饰器结合可实现 直接将获取到的输入值设置当前宿主样式的效果：\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20201108172840.png",alt:""}})]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("@HostListen()")]),t._v("我们可处理我们想要的监听事件：")]),t._v(" "),a("div",{staticClass:"language-ts line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HostListener")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$event.target'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickTest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("比如这里，我们传入了两个参数：第一个代表监听宿主的"),a("code",[t._v("click")]),t._v("点击事件、第二个代表我们装饰的方法想获取"),a("code",[t._v("点击事件源")]),t._v("数据；")]),t._v(" "),a("p",[t._v("于是，我们便可将当前点击元素打印出来。")]),t._v(" "),a("p",[t._v("注意：通过该装饰器我们不再需要在"),a("code",[t._v("html")]),t._v("里的某个元素上通过"),a("code",[t._v("(click)")]),t._v("监听点击事件。")])])}),[],!1,null,null,null);s.default=e.exports}}]);