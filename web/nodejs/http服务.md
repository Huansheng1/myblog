# nodeJs实现http服务
## 框架对比
![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201024174233.png)
### 内置的`http`模块
优点：
1. 无需安装即可使用
2. 官方提供

缺点：
1. 功能比较简陋
2. 代码多时不方便管理
### `express`框架
优点：
1. 最出名的`node`服务器开发框架
2. 齐全完善，功能庞大

缺点：
1. 在回调函数里难以处理异步代码
* > 比如，在回调函数里如果有 定时器等异步代码，由于 异步任务与同步任务不在一个 任务队列，这就导致 异步代码的回调函数里如果出现异常，在外部代码里是无法通过`try`、`catch`来捕获到的，错误直接抛到全局，导致`node`服务出现异常

* > 原因：异常抛出机制是通过 在当前函数调用栈 一层一层往上层抛出的，`try`、`catch`捕获只要在上层代码写了就能捕获到下面的抛出的异常，但 异步任务调用栈 相比于 同步任务是全新的调用栈（因为异步是开其他线程来实现的异步呀），这就自然没法捕获异常了。
### `koa`框架
优点：
1. 极简却高性能
2. 完善的洋葱模型，相比于`express`能通过`async`和`await`在中间件里支持 异步操作
3. 可扩展性强，符合现在热门的 `微内核`、`微服务` 的潮流

缺点：
1. 由于太简洁，需要依赖不少第三方的中间件，因此有时候也可以说是略带简陋

## RPC通信
> 全称：`remote procedure call` - 远程过程调用

![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201024175237.png)
### protocol buffers
> 二进制通信的话，如果像`JSON`一样简单的将对象数据与二进制数据进行互相转化？

1. 定义协议配置文件：
![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201024211026.png)
2. 通过定义好的格式配置文件生成二进制对象数据：
![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201024210627.png)
### Http通讯
> 使用到的内置模块：`http`
### Socket通讯
> 使用到的内置模块：`net` - `TCP协议`

## 实现简单下载页服务
> 使用到的模块：
* [`koa-mount`  第三方路由模块](https://www.npmjs.com/package/koa-mount)
* [`koa-static`  返回静态文件给浏览器的模块](https://www.npmjs.com/package/koa-static)
* [`nodemon`  检测`nodeJs文件`发生变更自动重启服务的模块](https://www.npmjs.com/package/nodemon)

因此，我们需要安装它们：
```bash
npm install koa
npm install koa-mount
npm install koa-static
npm install nodemon
```
然后，我们将 极客时间 的App下载页保存到本地，再通过`koa-static`实现浏览器请求返回 我们本地`node`服务器静态资源的效果。

### 返回本地下载页
1. 初步代码：
```js
const Koa = require('koa')
const static = require('koa-static')
const mount = require('koa-mount')
const fs = require('fs')
// 创建koa实例
const app = new Koa()
// 通过mount设置路由，通过fs读取本地数据
app.use(mount('/app.index',async (ctx)=>{
  // console.log(__dirname+'/static/download.html')
  ctx.body = fs.readFileSync(__dirname+'/static/download.html','utf-8')
}))

// 监听端口
app.listen(8080)
```
2. 通过`nodemon`运行服务![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201025174937.png)，浏览器访问本地地址：`http://localhost:8080/app.index`

3. 网页效果图：![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201025174917.png)
4. 发现木有，样式乱了，通过`F12`我们可知道原因为`html`请求的静态文件找不到：![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201025175055.png)
5. 通过`koa-static`中间件返回浏览器静态资源正确文件：
```js
const Koa = require('koa')
const static = require('koa-static')
const mount = require('koa-mount')
const fs = require('fs')
// 创建koa实例
const app = new Koa()
// 设置请求静态文件时从哪寻找
app.use(static('./static'))
// 通过mount设置路由，通过fs读取本地数据
app.use(mount('/app.index',async (ctx)=>{
  console.log(__dirname+'/static/download.html')
  ctx.body = fs.readFileSync(__dirname+'/static/download.html','utf-8')
}))

// 监听端口
app.listen(8080)
```
6. 成功效果图：![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201025175527.png)

### 为什么使用`koa-mount`中间件
因为 该中间件 第二个参数不一定是单纯的中间件函数，也可以是`koa`实例；

这就意味着，我们可将上面的下载页代码的`koa`实例 导出，再在一个总的`koa`实例里导入，即可实现 路由嵌套与复用。


让我们来改造一下之前的代码：
1. 修改上面代码，将下载页的`koa`实例导出
```js
// demo.js
const Koa = require('koa')
const static = require('koa-static')
const mount = require('koa-mount')
const fs = require('fs')
// 创建koa实例
const app = new Koa()
// 设置请求静态文件时从哪寻找
app.use(static('./static'))
// 通过mount设置路由，通过fs读取本地数据
app.use(mount('/app.index',async (ctx)=>{
  console.log(__dirname+'/static/download.html')
  ctx.body = fs.readFileSync(__dirname+'/static/download.html','utf-8')
}))

// 监听端口
// app.listen(8080)
module.exports = app
```
2. 在`app.js`文件中导入并使用：
```js
// app.js
const koa = require('koa')
const mount = require('koa-mount')
// 导入上面导出的下载页koa实例
const download = require('./demo')

const app = new koa()
// 这样就实现了路由嵌套，上面的下载页代码生效且在`/index/`路径下
app.use(mount('/index',download))

app.listen(8080)
```
3. 运行`nodemon app.js`并打开`http://localhost:8080/index/app.index`查看效果：![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201025175527.png)
4. 当前代码文件：![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201025180513.png)