(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{606:function(s,t,a){"use strict";a.r(t);var n=a(65),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"小程序在ios机型上的页面在全面屏下边缘被遮挡问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序在ios机型上的页面在全面屏下边缘被遮挡问题"}},[s._v("#")]),s._v(" 小程序在ios机型上的页面在全面屏下边缘被遮挡问题")]),s._v(" "),a("h2",{attrs:{id:"起因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[s._v("#")]),s._v(" 起因")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("ios")]),s._v(" 全面屏设备下，由于引入了全面屏手势，在屏幕下边缘有一块区域是用于 小白条 之类的提供，其不参与显示东西；"),a("br"),s._v("\n但是，在小程序里，也许是自定义tabar的原因，页面底部会被小白条挡住一部分，这时候我们需要对其进行特殊处理")]),s._v(" "),a("h2",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),a("p",[s._v("好在苹果给我们提供了一个特殊的 "),a("code",[s._v("css")]),s._v(" 变量用于解决该问题： "),a("code",[s._v("safe-area-inset-bottom")]),s._v(" 下安全区域能在苹果里生效，从而利用它解决页面底部被遮挡问题，至于安卓无需担心，因为不识别这个css就不会生效：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("page")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 136是我自定义tabbar高度，constant避免老版机型不识别env */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("136rpx + "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 适合新机型 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("padding-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("136rpx + "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("另外，如果在 "),a("code",[s._v("js")]),s._v(" 里我们也可以获取：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 屏幕高度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" screenHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSystemInfoSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("screenHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 除去下边缘的安全区域的高度")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" safeAreaHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSystemInfoSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("safeArea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果高度一样就没有小白条")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("screenHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" safeAreaHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    viewHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" screenHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    viewHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" safeAreaHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("但是上面代码可以简化下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" safeAreaHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSystemInfoSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("safeArea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 功能和上面等同")]),s._v("\nviewHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" safeAreaHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);