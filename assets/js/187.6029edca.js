(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{610:function(v,_,t){"use strict";t.r(_);var e=t(65),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"微前端入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端入门"}},[v._v("#")]),v._v(" 微前端入门")]),v._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://microfrontends.cn/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Thinking in Microfrontend (微前端的那些事儿)"),t("OutboundLink")],1)])]),v._v(" "),t("h2",{attrs:{id:"技术选型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[v._v("#")]),v._v(" 技术选型")]),v._v(" "),t("h3",{attrs:{id:"实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[v._v("#")]),v._v(" 实现方式")]),v._v(" "),t("ol",[t("li",[t("code",[v._v("Iframe")]),v._v("：通过"),t("code",[v._v("iframe")]),v._v("标签作为容器引入其他页面，通过"),t("code",[v._v("postMessage")]),v._v("进行页面之间的传参")])]),v._v(" "),t("blockquote",[t("p",[v._v("优势：")])]),v._v(" "),t("ul",[t("li",[v._v("技术成熟，是原生就支持的技术")]),v._v(" "),t("li",[v._v("支持页面嵌入")]),v._v(" "),t("li",[v._v("天然支持运行沙箱隔离，页面独立运行")])]),v._v(" "),t("blockquote",[t("p",[v._v("劣势：")])]),v._v(" "),t("ul",[t("li",[v._v("页面之间如果是不同域名存在跨域等一系列问题")]),v._v(" "),t("li",[v._v("需要额外设计一套应用通讯机制来决定如何进行消息的监听与传递等")]),v._v(" "),t("li",[v._v("应用加载、渲染、缓存等体系完全由浏览器决定，我们难以手动处理控制")])]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("code",[v._v("web component")]),v._v("："),t("code",[v._v("Html5")]),v._v("的一项新技术，原生支持自定义标签的方式来定义个标准的组件")])]),v._v(" "),t("blockquote",[t("p",[v._v("优势：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("支持自定义标签元素、"),t("code",[v._v("shadow dom")]),v._v("，控制起来比较灵活")])]),v._v(" "),t("li",[t("p",[v._v("支持模板"),t("code",[v._v("temlapate")]),v._v("和插槽"),t("code",[v._v("slot")]),v._v("，方便的引入自定义组件内容")])])]),v._v(" "),t("blockquote",[t("p",[v._v("劣势：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("由于"),t("code",[v._v("web component")]),v._v("是原生技术，类似于框架里的组件，将部分逻辑与业务封装起来再进行引用，因此需要对老项目进行通过"),t("code",[v._v("web component")]),v._v("的方式重写，改动大，侵入性强")])]),v._v(" "),t("li",[t("p",[v._v("规范出来时间较短，生态不完善，容易出现需要自己大量实现且兼容性问题不容忽视")])]),v._v(" "),t("li",[t("p",[v._v("偏向组件的形式导致通讯起来可能比较繁琐复杂")])])]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("自研框架/第三方框架")])]),v._v(" "),t("blockquote",[t("p",[v._v("优势：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("高度定制化，完全由自己做主，兼容性自己控制有保证")])]),v._v(" "),t("li",[t("p",[v._v("独立的通讯机制和沙箱运行环境，可以保证应用之间相互影响的问题")])]),v._v(" "),t("li",[t("p",[v._v("支持不同技术栈子应用，可以无缝实现页面刷新渲染")])])]),v._v(" "),t("blockquote",[t("p",[v._v("劣势：")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("技术实现难度较高")])]),v._v(" "),t("li",[t("p",[v._v("需要设计一套定制的通信机制")])]),v._v(" "),t("li",[t("p",[v._v("首次加载可能会出现资源过大的情况")])])]),v._v(" "),t("h2",{attrs:{id:"自研框架准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自研框架准备"}},[v._v("#")]),v._v(" 自研框架准备")]),v._v(" "),t("h3",{attrs:{id:"需求-功能点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求-功能点"}},[v._v("#")]),v._v(" 需求/功能点")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("分发式路由")])]),v._v(" "),t("li",[t("p",[v._v("主应用控制路由匹配和子应用加载，共享依赖加载")])]),v._v(" "),t("li",[t("p",[v._v("子应用做功能，与主应用实现控制与联动")])])]),v._v(" "),t("h3",{attrs:{id:"技术栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#技术栈"}},[v._v("#")]),v._v(" 技术栈")]),v._v(" "),t("p",[v._v("应用：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("主应用："),t("code",[v._v("vue3")])])]),v._v(" "),t("li",[t("p",[v._v("子应用："),t("code",[v._v("vue3")]),v._v("、"),t("code",[v._v("react")]),v._v("、"),t("code",[v._v("angular")])])]),v._v(" "),t("li",[t("p",[v._v("后端服务和发布应用："),t("code",[v._v("koa")])])])]),v._v(" "),t("h3",{attrs:{id:"实现思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现思路"}},[v._v("#")]),v._v(" 实现思路")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20220123170702.png",alt:""}}),v._v(" "),t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20220123170738.png",alt:""}})]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Huansheng1/myimg/PicGo/20220123171515.png",alt:""}})])])}),[],!1,null,null,null);_.default=a.exports}}]);