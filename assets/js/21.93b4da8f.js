(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{443:function(t,v,e){"use strict";e.r(v);var _=e(65),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"记录自己开发小程序碰见的坑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记录自己开发小程序碰见的坑"}},[t._v("#")]),t._v(" 记录自己开发小程序碰见的坑")]),t._v(" "),e("h2",{attrs:{id:"首次安装后无法打开开发工具了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首次安装后无法打开开发工具了"}},[t._v("#")]),t._v(" 首次安装后无法打开开发工具了")]),t._v(" "),e("p",[t._v("个人解决办法：")]),t._v(" "),e("ol",[e("li",[t._v("卸载工具，并将其C盘未删除干净的目录全部手动删除")])]),t._v(" "),e("blockquote",[e("p",[t._v("如果文件被占用则使用火绒等第三方工具将占用解除")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("下载稳定版32位安装包（对的，你没听错，即使我们是64位系统）并安装")])]),t._v(" "),e("blockquote",[e("p",[t._v("目录名建议将其默认的 微信开发工具 目录名改为自己喜欢的 英文名目录")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("打开，一切顺利。")])]),t._v(" "),e("h2",{attrs:{id:"app-json里配置pages无法自动创建页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-json里配置pages无法自动创建页面"}},[t._v("#")]),t._v(" app.json里配置pages无法自动创建页面")]),t._v(" "),e("ol",[e("li",[t._v("检查 路径是否为驼峰标识符（比如，"),e("code",[t._v("playList")]),t._v("），将其改为 "),e("code",[t._v("play-list")])])]),t._v(" "),e("blockquote",[e("p",[t._v("貌似并不支持大小写的形式")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("如果非驼峰标识符依旧报错，不会自动创建文件，则将报错部分剪切掉保存下，再重新粘贴保存")]),t._v(" "),e("li",[t._v("此时我们发现一切正常了。"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20200801124840.png",alt:""}})])]),t._v(" "),e("h2",{attrs:{id:"云函数本地调试报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#云函数本地调试报错"}},[t._v("#")]),t._v(" 云函数本地调试报错")]),t._v(" "),e("ul",[e("li",[t._v("这是我在社区发布的问题 - "),e("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/0008a4df30ca781fcfba98b765bc00?fromCreate=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("云函数内代码执行问题？"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("最终自己发现，每次出现问题就关闭云函数本地调试，重新右键开启本地调试就能正常运行")]),t._v(" "),e("li",[t._v("有时候多格式化几次再保存几次也能加载成功")]),t._v(" "),e("li",[t._v("BUG超级多，我吐了。")])]),t._v(" "),e("h2",{attrs:{id:"wx-if与wx-else部分情况下失效的原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wx-if与wx-else部分情况下失效的原因"}},[t._v("#")]),t._v(" wx:if与wx:else部分情况下失效的原因")]),t._v(" "),e("ul",[e("li",[t._v("检查"),e("code",[t._v("wx:if")]),t._v(" 与"),e("code",[t._v("wx:for")]),t._v(" 是否写在同一个标签上")]),t._v(" "),e("li",[t._v("如果一个标签同时拥有 "),e("code",[t._v("wx:if")]),t._v(" 与"),e("code",[t._v("wx:for")]),t._v(" ，那么其同级的 "),e("code",[t._v("wx:else")]),t._v(" 无法生效，只能使用"),e("code",[t._v("wx:if")]),t._v("再次判断！")])]),t._v(" "),e("blockquote",[e("p",[t._v("这是因为 "),e("code",[t._v("wx:for")]),t._v(" 优先级 大于 "),e("code",[t._v("wx:if")]),t._v("，而且 我们不建议 在"),e("code",[t._v("wx:for")]),t._v("内部的子元素使用"),e("code",[t._v("wx:if")]),t._v("，因为如果很多子项数据都是需要隐藏的话，会造成 大量不必要的开销！")])]),t._v(" "),e("h2",{attrs:{id:"wx-if条件判断问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wx-if条件判断问题"}},[t._v("#")]),t._v(" wx:if条件判断问题")]),t._v(" "),e("p",[t._v("场景：判断对象某个属性是否有值出现问题")]),t._v(" "),e("ul",[e("li",[t._v("值为"),e("code",[t._v("null")]),t._v("时"),e("code",[t._v("wx:if")]),t._v("依旧判断为真："),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20200812112846.png",alt:""}})]),t._v(" "),e("li",[t._v("正常来说是没问题的:"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20200812112913.png",alt:""}})])]),t._v(" "),e("p",[t._v("建议解决办法：")]),t._v(" "),e("blockquote",[e("p",[t._v("通过"),e("code",[t._v("length")]),t._v("判断，同样适用于值为"),e("code",[t._v("[]")]),t._v("的时候："),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20200812112831.png",alt:""}})])]),t._v(" "),e("h2",{attrs:{id:"编译或者真机调试运行报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译或者真机调试运行报错"}},[t._v("#")]),t._v(" 编译或者真机调试运行报错")]),t._v(" "),e("p",[t._v("错误场景："),e("code",[t._v("Error:EEXIST:file already exists,open '某个路径'")]),t._v(" "),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20200812175424.png",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("编译可以正常显示，预览 与 真机调试 不行")])]),t._v(" "),e("p",[e("strong",[t._v("解决办法：重启开发软件即可")])]),t._v(" "),e("h2",{attrs:{id:"引入组件库组件时报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入组件库组件时报错"}},[t._v("#")]),t._v(" 引入组件库组件时报错")]),t._v(" "),e("p",[t._v("场景：当我使用"),e("code",[t._v("vant-weapp")]),t._v("组件库某个组件的时候，组件内部竟然报错："),e("code",[t._v('VM372:1 miniprogram_npm/@vant/weapp/collapse-item/index.json: ["usingComponents"]["van-cell"]: "../cell/index" 未找到')]),t._v("等错误。\n"),e("img",{attrs:{src:"https://pic.downk.cc/item/5f5092ef160a154a67280712.jpg",alt:""}}),t._v("\n解决方案："),e("strong",[t._v("清除缓存，删除本地"),e("code",[t._v("node_modules")]),t._v("和"),e("code",[t._v("miniprogram_npm")]),t._v("目录，重新安装并构建")])])])}),[],!1,null,null,null);v.default=a.exports}}]);