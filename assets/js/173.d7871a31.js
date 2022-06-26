(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{599:function(t,s,a){"use strict";a.r(s);var n=a(65),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"canvas-生成海报问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas-生成海报问题"}},[t._v("#")]),t._v(" canvas 生成海报问题")]),t._v(" "),a("h2",{attrs:{id:"开始原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始原因"}},[t._v("#")]),t._v(" 开始原因")]),t._v(" "),a("p",[t._v("在某个微信小程序中，我发现，部分手机点击保存按钮毫无反应。")]),t._v(" "),a("h2",{attrs:{id:"分析过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析过程"}},[t._v("#")]),t._v(" 分析过程")]),t._v(" "),a("p",[t._v("既然代码不生效，我想到的第一步当然是在触发事件看看 是否进入了按钮监听函数。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("console.log")]),t._v("可以发现，确实进入了点击事件。")]),t._v(" "),a("p",[t._v("仔细分析代码，初步推断，不生效的原因为："),a("code",[t._v("if (that.data.canvasDrawSuccess) {...}")]),t._v(" 中所使用的条件出现异常。")]),t._v(" "),a("p",[t._v("既然该变量"),a("code",[t._v("canvasDrawSuccess")]),t._v("不为真 ，那我们往上找找 为何"),a("code",[t._v("canvas")]),t._v("绘制成功的变量没有被设置成功。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("canvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFontSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncanvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFillStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#353535"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lenght"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  canvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" positionX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" positionY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  canvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("canvasDrawSuccess")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("为什么没有进入"),a("code",[t._v("draw")]),t._v("函数的成功回调？")]),t._v(" "),a("p",[t._v("我的揣测是，快速调用"),a("code",[t._v("draw")]),t._v("可能有一个坑，容易导致后面的几次调用不生效，但是，"),a("code",[t._v("draw")]),t._v("好像并无失败回调。")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.draw.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CanvasContext.draw | 微信开放文档"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("既然如此，我将其改为：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("canvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFontSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncanvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFillStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#353535"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lenght"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  canvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" positionX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" positionY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ncanvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  that"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("canvasDrawSuccess")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("嗯哼，解决了，因此可以总结出：如果我们需要绘制多行文本，不要在一个时间段内频繁调用"),a("code",[t._v("draw")]),t._v("，不如先设置，最后再一起调用。")]),t._v(" "),a("h2",{attrs:{id:"黑色背景-bug-的出现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#黑色背景-bug-的出现"}},[t._v("#")]),t._v(" 黑色背景 Bug 的出现")]),t._v(" "),a("p",[t._v("当我们在手机上保存时，会哑然发现，相册中的"),a("code",[t._v("活动分享图")]),t._v("背景为黑色，这与我们在模拟器上的白色不符。")]),t._v(" "),a("p",[t._v("推测为 默认背景色就是黑色，至于为何部分手机或者模拟器上为白色，暂时不确定。。。")]),t._v(" "),a("p",[t._v("解决办法，显式地给背景全部刷成白色即可：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置画布图片背景颜色为白色")]),t._v("\ncanvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFillStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#ffffff"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncanvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvasWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvasHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncanvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncanvasObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"canvas层级问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas层级问题"}},[t._v("#")]),t._v(" canvas层级问题")]),t._v(" "),a("p",[t._v("将canvas整体刷成白色，我们又发现了个新问题：点击保存的按钮被"),a("code",[t._v("canvas")]),t._v("覆盖了（设置"),a("code",[t._v("z-index")]),t._v("无效）")]),t._v(" "),a("p",[t._v("原因为：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("canvas")]),t._v("作为原生组件，层级最高，具体可查看："),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原生组件层级问题 | 微信开放文档"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://pic.downk.cc/item/5f56f8cb160a154a678c18f7.jpg",alt:""}})])]),t._v(" "),a("p",[t._v("解决办法：")]),t._v(" "),a("ol",[a("li",[t._v("可将按钮改为"),a("code",[t._v("cover-view")]),t._v("和"),a("code",[t._v("cover-image")]),t._v("组件来保证优先级问题，注意，"),a("code",[t._v("canvas")]),t._v("组件需在前面，后面的"),a("code",[t._v("cover-view")]),t._v("方可覆盖前者优先级。")]),t._v(" "),a("li",[a("code",[t._v("canvas")]),t._v("使用新版的"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("2D")]),t._v("组件"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"canvas图片层级问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas图片层级问题"}},[t._v("#")]),t._v(" canvas图片层级问题")]),t._v(" "),a("p",[t._v("我们有这样的场景，在绘制完一个图片后，在该图片的上面再绘制一个"),a("code",[t._v("Logo")]),t._v("图标。")]),t._v(" "),a("p",[t._v("可是，我发现绘制的图标竟然不显示在画布上？")]),t._v(" "),a("p",[t._v("经过分析与查阅资料，其不显示的原因为：")]),t._v(" "),a("ul",[a("li",[t._v("层级我们是通过后面的绘制优先级比前面绘制图片的高来保证的，我们之前的代码也确实是这样做的")]),t._v(" "),a("li",[t._v("可问题就在于，经过我们代码看起来是从上到下绘制的，先绘制背景图再绘制Logo图标，但是 "),a("code",[t._v("canvas")]),t._v("的方法应是异步的，在上面的背景图还没绘制完成的时候我们又开始绘制了Logo图标")]),t._v(" "),a("li",[t._v("因此，最后层级是没法保证的，因为Logo较小，先绘制完成，其层级反而会被前者给挡住")]),t._v(" "),a("li",[t._v("解决方法：在绘制背景图的成功回调里才开始绘制Logo图片即可")])]),t._v(" "),a("h2",{attrs:{id:"推荐文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐文章"}},[t._v("#")]),t._v(" 推荐文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/article/doc/0006a40bf88ed0fbfe9a0339651c13",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序canvas绘制海报"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);