# Vue3.x初体验
## 引入方式
### CDN引入
#### CDN是什么？
日常开发与上线中，我们常常需要购买一个 云服务器，这时候我们都知道他会让我们选择一个 服务器地址，比如，我一般会选择 上海 或 广州的服务器；
然后我们会将打包后的代码上传发布到服务器里面，由于我们服务器是上海的，所以靠近上海的用户访问我们服务器最快，越远的用户由于网络传输的限制，访问会更慢一点。
一般情况下我们当然是考虑在用户最多的地方上线。
但是，现实是很难让用户都在一个城市的，这时候我们有两种做法：
1. 部署多个服务器，根据`IP`让用户访问离他最近的服务器 - 但这个开销有点大，而且有点浪费
2. `CDN`分发技术

`CDN`是什么呢？

> `内容分发网络`（`Content Delivery Network`，简称CDN）是建立并覆盖在承载网之上，由分布在不同区域的边缘节点服务器群组成的分布式网络。
![](https://pic3.zhimg.com/80/v2-5ba76e77f05b030b5879177bd336928f_720w.jpg?source=1940ef5c)

比如：我们购买了一个`CDN`资源包（服务器），我们可以将我们的程序发布到这个 CDN服务器里，由于CDN系统是在全国各地都有相应的子服务器。当北京用户去访问我们资源时，CDN系统会优先找离当前北京用户最近的服务器，如果这个子服务器没有找到相应的资源的话，子服务器会找它的父服务器，父服务器也没该资源的话，父服务器再去往上一级服务器寻找，知道找到 源站，再将源站的该资源下载保存到自己服务器里，然后其他用户访问的时候就能在最近的服务器找到该资源了！
#### CDN引入Vue3
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue3</title>
<!-- 引入CDN里的Vue3库文件 -->
<script src="https://unpkg.com/vue@next"></script>
</head>
<body>
<!-- 宿主节点 -->
<div id="root"></div>
<script>
// 创建Vue实例的初始化数据
const HelloVueApp = {
      template: '<h1>Hello Vue!!</h1>'
}
// Vue3是通过createApp创建一个Vue实例的，然后再挂载到宿主节点上
Vue.createApp(HelloVueApp).mount('#root')
</script>
</body>
</html>
```
### 本地文件引入

### VueCli脚手架

## 基础
### 制作加减器
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Vue3</title>
    <!-- 引入CDN里的Vue3库文件 -->
    <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
    <div id="root"></div>
    <script>
        const HelloVueApp = {
            template: `
			<h1>Hello Vue!!</h1>
			<h1>{{count}}</h1>
			<button @click="increment">增加</button>
			<button @click="decrement">减小</button>
	`,
            data: () => {
                return {
                    count: 0
                }
            },
            methods: {
                increment() {
                    this.count++;
                },
                decrement() {
                    this.count--;
                }
            }
        }

        Vue.createApp(HelloVueApp).mount('#root')
    </script>
</body>

</html>
```
### 定义模版方式
1. 直接在`createApp`方法传入对象的`template`里直接赋值

> 上面都是这种方式

2. `script`定义脚本：
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Vue3</title>
    <!-- 引入CDN里的Vue3库文件 -->
    <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
    <div id="root"></div>
    <!-- 定义了一个模板 -->
    <script type="x-template" id="calcRef">
            <h1>Hello Vue!!</h1>
			<h1>{{count}}</h1>
			<button @click="increment">增加</button>
			<button @click="decrement">减小</button>
    </script>
    <script>
        const HelloVueApp = {
            template: `#calcRef`,
            data: () => {
                return {
                    count: 0
                }
            },
            methods: {
                increment() {
                    this.count++;
                },
                decrement() {
                    this.count--;
                }
            }
        }

        Vue.createApp(HelloVueApp).mount('#root')
    </script>
</body>

</html>
```
3. `template`方式定义一个模板：
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Vue3</title>
    <!-- 引入CDN里的Vue3库文件 -->
    <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
    <div id="root"></div>
    <!-- 定义了一个模板 -->
    <template id="calcRef">
            <h1>Hello Vue!!</h1>
			<h1>{{count}}</h1>
			<button @click="increment">增加</button>
			<button @click="decrement">减小</button>
    </template>
    <script>
        const HelloVueApp = {
            template: `#calcRef`,
            data: () => {
                return {
                    count: 0
                }
            },
            methods: {
                increment() {
                    this.count++;
                },
                decrement() {
                    this.count--;
                }
            }
        }

        Vue.createApp(HelloVueApp).mount('#root')
    </script>
</body>

</html>
```
综上对比，我们可以发现`template`方式有 标签高亮、语法提示，以后我们优先使用该种方式！

## 如何分析源代码
> 新手无需阅读

1. 前往`github`下载`vue3`的源码，项目名是 [`vue-next`](https://github.com/vuejs/vue-next)

2. 我们下载`tag`稳定版本便于分析：[`网页下载`](https://github.com/vuejs/vue-next/tree/v3.2.23)

> 如果是`git clone`的话，克隆的是整个仓库，然后切换到`对应tag版本`上
```bash
git clone https://github.com/vuejs/vue-next.git
```
3. 我们会发现`vue-next`是一个[`monorep`](https://juejin.cn/post/6950082433647640612)，不是以前的那种单仓库哦！其采用的依赖安装是`yarn`安装。
4. 终端进入目录，我们开始安装依赖：
```bash
# 如果是zip下载而非git克隆需要先执行git初始化
# git init

# 安装依赖，如果没有yarn则会报错
yarn install
# emm，报错了，不是课程说的yarn，而是pnpm，需要先安装pnpm
npm i -g pnpm
# 再安装依赖
pnpm intall
```
5. 运行打包指令：`yarn dev`
6. 导入打包后的库文件`D:\code\vue-next\packages\vue\dist\vue.global.js`，引入该文件：
```html
<script>
        // 设置断点
        debugger;
        const HelloVueApp = {
            template: `#calcRef`,
            data: () => {
                return {
                    count: 0
                }
            }
        }
        Vue.createApp(HelloVueApp).mount('#root')
    </script>
```
7. 会发现断点虽然能中断，打包后的文件经过了压缩，不好分析原理
8. 于是我们需要修改打包指令，在`package.json`文件里增加一个参数：`--sourcemap`：
```json
{
    "scripts":{
        "dev":"node scripts/dev.js --sourcemap
    }
}
```

### 相关参考文章
* [coderwhy老师 - vue3课程](https://ke.qq.com/course/3453141)
* [从 vue3 和 vite 源码中，我学到了一行代码统一规范团队包管理器的神器](https://blog.csdn.net/weixin_40906515/article/details/121668177)