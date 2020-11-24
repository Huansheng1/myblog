# NodeJs第一天
## 获取`node`后面的输入参数
通过`node`运行`js`文件通常我们是这样做的：`node test.js`；

可是，如果我们想给运行的`js`传递参数呢？  
其实`node`也是支持该操作，为了实现获取参数的效果，我们需要知道一个对象：`process`：![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201020212503.png)

通过打印`process.argv`，我们可用知道：
1. `arfv`存储的是`node进程`接收到参数信息，其类型为一个数组
2. 第一个成员为`node绝对路径`，第二个成员为`当前运行的js文件`

那么，我们如果在运行时传递一个参数呢？
```
node demo.js testArg
```
结果：![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201020212926.png)

那么，我们要做的非常简单，**只需通过`process.argv[process.argv.length-1]`即可读取最后一个参数**
## 持续获取用户输入
通过上面的方式，我们只能在`js`文件运行时获取一次就执行结束了，那我们能不能做到 接受用户多次输入（持续交互）
```js
process.stdin.on('data',e=>{
  // e.toString()就能打印出我们的输入结果
  console.log(e.toString())
})
```
运行后终端我们可一直输入：![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20201020220942.png)
## `CommonJs`与`Es6`模块的规范区别
### `Es6 Module`规范 - `Js官方标准`
1. 在当前目录`创建 package.json`文件，并加入以下字段：
```json
{
    "type": "module"
}
```
2. 导出：
```js
const obj = {
  obj: {
    name: 'foo',
    age: 18,
  },
  name:'fooObj'
}
// 只能暴漏一个成员
export default obj

// export var s = {}
//export var b = {}  (可以暴漏多个成员)
```
3. 导入：
```js
// 导入export default暴漏的成员
import obj from './test.js';
// import * as foo from './test.js';
// foo.default指向的才和上面的相等

// import {s} from '包名（或者是文件路径）' （导入export 暴漏的成员，名字要一致）
// import {s as foo} from '包名（或者是文件路径）' （但是，别名也是可行的）

console.log(obj)
// { obj: { name: 'foo', age: 18 }, name: 'fooObj' }
```
### `CommonJs`规范 - `NodeJs`使用
> 如果导入一个没导出的文件，其值将为`{}`  

方式一：**`module.exports`导出**：
```js
const obj = {
  obj: {
    name: 'foo',
    age: 18,
  },
  name:'fooObj'
}
module.exports = obj
```

方式二：**`exports`导出**：
```js
const obj = {
  name: 'foo',
  age: 18,
}
exports.obj = obj
exports.name = 'fooObj'
```
**`require`导入**：
```js
let obj = require('./test')
console.log(obj)
// { obj: { name: 'foo', age: 18 }, name: 'fooObj' }
```
注意：
* `exports.属性名 = 导出的具体数据`导出的数据挂载在同一个对象里，但支持导出多个数据
* `module.exports = {}`只导出一个数据，如果先后导出两次，则其他文件只能获得最后导出的那次数据
* > `module.exports`导出多个数据就得这样：`module.exports={属性1：属性值，属性2：属性值2}`
#### `exports`与`module.exports`区别与联系
*`exports`变量与`exports.属性`关联对象*：
> 情境一：
```js
// 导出
const obj = {
  name: 'foo',
  age: 18,
}
exports = {}
exports.obj = obj
exports.name = 'fooObj'
// { obj: { name: 'foo', age: 18 }, name: 'fooObj' }
console.log(exports)
```
```js
// 导入
let obj = require('./test')
console.log(obj)
// {}
```
> 情境二：
```js
// 导出
const obj = {
  name: 'foo',
  age: 18,
}
exports.obj = obj
exports.name = 'fooObj'
exports = {}
console.log(exports)
// {}
```
```js
// 导入
let obj = require('./test')
console.log(obj)
// { obj: { name: 'foo', age: 18 }, name: 'fooObj' }
```
> 思考题：
1. 为什么导出的对象和模块里的对象不一样？
2. 只是在导出的那个文件里稍微跳转了下赋值顺序，为什么结果截然相反？

*为什么`module.exports`导出两次，后一次数据会覆盖前一次？*

*`exports.属性`对上`module.exports`*：
```js
// 导出
const obj = {
  obj: {
    name: 'foo',
    age: 18,
  },
  name:'fooObj'
}
exports.obj = obj
module.exports = {test:true}
console.log(exports)
// { obj: { obj: { name: 'foo', age: 18 }, name: 'fooObj' } }
console.log(module.exports)
// { test: true }
```
```js
// 导入
let obj = require('./test')
console.log(obj)
// { test: true }
```
> 思考题：
1. 为什么`exports`和`module.exports`对象不一样？
2. 为什么其他文件导入结果是`module.exports`对象数据？

**结论**：
* `exports`是`module.exports`的语法糖，或者你可以这样说：`exports`是`module.exports`的别名，其指向`module.exports`对象地址：
```js
let foo = {
  name: 'demo'
}
let bar = foo
// 这里，foo就是module.exports，bar就是exports

// exports.a = a  其实是它缩写--> module.exports.a = a 
```
* `module.exports`之所以后一次会覆盖前一次数据，道理非常简单，因此后一次将其指向了新的对象地址
* `exports.属性`导出后，再将`exports`赋予别的值，结果内部打印结果与外部导入结果不一样的原因是：后面的赋值将`exports`指向了其他类型的引用地址，而导出的对象其实是`module.exports`指向的对象数据
```js
let foo = {
  name: 'demo'
}
let bar = foo// 模拟语法糖
bar.aaa ='test'// 增加导出数据，模拟 exports.xxx = xxx
bar = {}// 模拟后面的赋值操作，exports = {}
console.log(foo)// 这就是为什么其他地方导入数据和内部打印不一样的原因，因为只是改变了bar的指针，但外面人家导入的是foo啊
```
## 其他小知识
### 获取运行文件路径与目录
```js
// 获取当前运行js文件的绝对路径
console.log(__filename);
// 获取当前运行js文件的所在目录（绝对路径）
console.log(__dirname);
```
## 定时器
### 常用定时器
```js
// 如果在Node代码时没有代码提示，则可以通过安装插件的方式解决：
// 1. npm init
// 2. npm install --save-dev @types/node

// 延迟执行
setTimeout(() => {
    console.log('setTimeout');
}, 0)
// 定时执行
const handler = setInterval(() => {
    console.log('setInterval');
    clearInterval(handler);
}, 0)
// 立即执行，不需要加时间
setImmediate(() => {
    console.log('setImmediate');
})
// 下一帧执行
process.nextTick(() => {
    console.log('processs.nextTick');
})

// 执行结果：
// processs.nextTick
// setTimeout
// setInterval
// setImmediate
```