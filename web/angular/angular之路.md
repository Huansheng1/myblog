# angular 之路

> 别的不多说，每次换电脑，上来就是切换成国内镜像，不科学上网下载实在太慢：`npm config set registry http://registry.npm.taobao.org/`

## 安装配置

1. 安装 `Angular CLI`
   > `npm install -g @angular/cli`
2. 测试命令是否正常：`ng v` 或者 `ng --version` 都可以

成功：![image.png](https://i.loli.net/2020/08/20/IX9kUOtwj6eErgc.png)

注意：

- 如果显示命令不存在，则尝试卸载重新安装

```bash
# 卸载已安装脚手架
npm uninstall -g @angular/cli
# 清除缓存
npm cache clean
# 强制再安装一次
npm install -g --force @angular/cli
```

- 如果还不行，则应该是环境变量配置的问题
- 因为在我这台电脑上的账号是`foo`，则其`ng.cmd`文件所在路径应该为`C:\Users\foo\AppData\Roaming\npm`
- 将其加入到环境变量的`path`上即可
- 如果该路径找不到，则直接在电脑里搜索`ng.cmd`找到对应目录即可

3. 如何创建和启动新项目：

```bash
# 创建新项目
ng new my-first-project
# 进入新项目目录
cd my-first-project
# 启动新项目
ng serve
# 默认地址是http://localhost:4200/

# 打包构建
ng build --prod
```

> 也可使用`npm start`来启动服务，追加后缀可指定端口：`npm start --port 8888`

> 自动打开浏览器可加后缀：`-o`

> 脚手架创建新项目，在自动生成好项目骨架之后，会立即自动使用 `npm` 来安装所依赖的 `Node` 模块；因此，如果你使用的是 `cnpm` ，则需要 Ctrl+C 终止掉，然后自己进入项目的根目录，使用 `cnpm` 来进行安装。

> 更多后缀：[Angular CLI 终极指南](https://segmentfault.com/a/1190000009771946)

## 创建指令

1. 自动创建组件：

```bash
ng generate component MyComponent
# 缩写创建组件
ng g c xxx
```

- 指定在`header`目录下创建：`ng generate component header/MyHeader`
- 命令可方便快捷地直接在`src/app/`下创建对应的组件目录与文件，而不需要像`vue`一样手动创建：![image.png](https://i.loli.net/2020/08/20/oyRniueVxXCth1a.png)

2. 自动创建指令：`ng g d MyDirective`
3. 自动创建服务：`ng g s MyService`
4. 自动创建模块：`ng g m MyModule`

## angualar 项目目录结构

> [模块、组件和服务都是使用装饰器的类，这装饰器会标出它们的类型并提供元数据，以告知 Angular 该如何使用它们。](https://angular.cn/guide/architecture#introduction-to-angular-concepts)

### NgModule - 模块

- 每个 Angular 应用都有一个根模块，通常命名为 `AppModule`。根模块提供了用来启动应用的引导机制。
- `NgModule` 为其中的组件提供了一个编译上下文环境。根模块总会有一个根组件，并在引导期间创建它。
- 模块里最少有一个组件，那些属于这个 `NgModule` 的组件会共享同一个编译上下文环境。
- 应该类似于 包 机制。
- 我将 模块 理解为 该项目的最小独立功能单元

示例：

```js
// app.module.ts
// 导入模块的原因
// 当你想要在浏览器中运行应用时
import { BrowserModule } from "@angular/platform-browser";
// Angular核心模块
import { NgModule } from "@angular/core";
// 双向绑定需要导入该项
import { FormsModule } from "@angular/forms";
// Angular路由模块
import { AppRoutingModule } from "./app-routing.module";
// 根组件
import { AppComponent } from "./app.component";

@NgModule({
  // 属于本 NgModule 的组件、指令、管道。
  declarations: [AppComponent],
  // 导入哪些模块使用
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  // 配置项目所需要的的服务
  providers: [],
  // 应用的主视图，称为根组件。
  // 它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。
  bootstrap: [AppComponent],
})
// 将本模块的哪些东西导出给其他模块使用
// 根模块不需要导出任何东西，其他模块才需要
export class AppModule {}

// 更多信息：https://angular.cn/guide/architecture-modules
```

### 组件

- 组件分为 模板 html、样式 css、行为 ts 文件
- 我将 组件 理解为 渲染视图（界面）的最小单元

示例：

```js
// app.component.ts
// 从 @angular/core 库中导入 Angular 的 Component 装饰器
import { Component } from '@angular/core';

// @Component 装饰器需要传入元数据参数
@Component({
  // 组件名
  selector: 'app-root',
  // 组件模版文件路径
  templateUrl: './app.component.html',
  // 组件样式文件路径
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputText = '';
  title = '6666';
  flag = false;
  obj = {
    a: 666
   };
  message = ['Hello Vue.js!', 'Hello!', ' Vue.js!', 'e.js!'];
  url = 'https://i.loli.net/2020/08/21/TC1EcVAZUMwsujN.png';
  time = new Date();
  // 方法声明
  public changeShow(e: any): void {
    console.log(e.target.value);
    this.flag = !this.flag;
  }
  public onEnter(): void {
    // console.log(this.box.offsetHeight);
  }
  consoleInput() {
    console.log(this.inputText);
  }
}
// public声明公共的，可被其他模块import 导入使用
```

### 服务

- 模块之间 共同的方法与数据共享，通过 依赖注入 使用
  > 与视图耦合度不高，可复用或者功能较独立的东西，我觉得抽离到服务里再使用比较合适

> 常用于`api`请求

## angualar 的 api 与 vue 的 api 对比

### 数据存放

`Vue`存放在 `vue`实例对象的`data`里，而 `Angular` 则存放在 当前 html 同名的 `.ts` 文件 `export class AppComponent {}` 内部

代码对比：

```js
// vue数据存放
new Vue({
  el: '#app',
  data: {
	flag：false,
    message: ['Hello Vue.js!','Hello!',' Vue.js!','e.js!']
  }
})
// angular数据存放
export class AppComponent {
  flag = false;
  message =  ['Hello Vue.js!','Hello!',' Vue.js!','e.js!'];
}
```

> 为了方便我们刚开始学习，通过[stackblitz](https://angular.cn/generated/live-examples/getting-started-v0/stackblitz.html)在线创建运行`Angualar`项目有助于我们加深对`api`的理解。

### `v-for` ---> `*ngFor`

> 代码对比：

```html
<!-- vue语法，in 和 of都有效果，但官网是in，不可在前面写let之类的声明关键字，且必需加上key配合diff算法使用 -->
<div v-for="(item,index) in arrData">
  <div :key="index">{{item}}</div>
</div>
<!-- angular语法 -->
<div *ngFor="let item of products">
  <div>{{ item }}</div>
  <!-- <div>{{ item.name }}</div> -->
</div>
```

> 注意：

- `*ngFor` 类似于`for...of...`，实际是 `ngForOf`的缩写，因此里面只能用 `of`。
- 经测试，不用`let`，用`const`、`var`依旧报错。
- 想使用索引的话：

```html
<!-- 效果等于let i = index -->
<div *ngFor="let item of message; index as i">
  <div>{{ i }}----{{ item }}</div>
</div>
```

更多：

- [NgForOf 手册](https://angular.cn/api/common/NgForOf)
- [\*ngFor 解析](https://www.jianshu.com/p/432819f64a7e)

### `v-if` ---> `*ngIf`

> 代码对比：

```html
<!-- vue语法 -->
<div v-if="flag">
  <div>我显示</div>
</div>
<!-- angular语法 -->
<div *ngIf="flag">
  <div>我显示</div>
</div>
```

**`v-if/else` ---> `*ngIf/else`**

> 代码对比：

```html
<!-- vue语法 -->
<div id="app">
  <p v-if="flag">{{ message }}</p>
  <p v-else>我显示了</p>
</div>
<!-- angular语法 -->
<div *ngIf="flag; else elseBlock">
  <div>我显示</div>
</div>
<ng-template #elseBlock>
  <p>现在为假</p>
</ng-template>
```

- `elseBlock` 是固定的，不能改哦；`else`必须在`ng-template`上，好像没有语法糖简写哦。

* `ngSwitch`：![](https://pic.downk.cc/item/5f61c79c160a154a6771203e.jpg)

### `v-bind`或者`:` ---> `[]`

> 代码对比：

```html
<!-- url: 'https://i.loli.net/2020/08/21/TC1EcVAZUMwsujN' -->
<!-- vue语法 -->
<div id="app">
  <img :src="url + '.png'" />
</div>
<!-- angular语法 -->
<img [src]="url + '.png'" />
```

注意：

1. `vue`中 模板差值语法`{{}}` 适合用于双标签之间，自定义指令比如`v-bind`、`v-if`是不支持模板差值的，会当做普通字符串或者变量名处理
2. `angular`属性内是可以使用 模板插值语法的，因此，上述的 属性绑定变量也可以这样写：`<img src="{{url + '.png'}}" />`
3. 带方括号 或者 模板插值 时，等号内必须是一个变量、对象或表达式，不能是普通字符串；如果非要是字符串数据，请用 单引号包裹起来：`[src]="'https://x.xx.com/xxx.jpg'"`
4. `angular`中动态绑定样式：

```html
<!-- 普通写法 -->
<div [class]="flag ? 'test' : ''">
  <!-- ... -->
</div>
<!-- 单个样式快速写法 -->
<!-- [class.样式名]="判断表达式" 是在应用单个class时的常用技巧 -->
<div [class.test]="flag">
  <!-- ... -->
</div>
```

### `v-html` ---> `[innerHtml]`

> 代码对比：

```html
<!-- vue语法 -->
<div id="app">
  <div v-html="message">测试</p>
</div>
<script>
new Vue({
  el: '#app',
  data: {
    message: '<h1>innerHtml测试效果啊</h1>'
  }
})
</script>
<!-- angular语法 -->
<!-- html文件 -->
<div [innerHtml]="content"></div>
<!-- Js文件 -->
export class HeaderComponent implements OnInit {
  content:string = '<h1>innerHtml测试效果啊</h1>';
  constructor() {}
  ngOnInit(): void {}
}
```
效果：
* ![](https://pic.downk.cc/item/5f61ba9c160a154a676e12d1.jpg)
* ![](https://pic.downk.cc/item/5f61bab9160a154a676e1b7c.jpg)

### `v-on`或者`@` ---> `()`

> 代码对比：

```html
<!-- vue语法 -->
<button @click="changeShow($event)">点我切换状态</button>
<div v-if="flag">我显示</div>
<div v-else>我隐藏</div>
<!-- angular语法 -->
<button (click)="changeShow($event)" #box (keyup.enter)="onEnter(box)">
  点我切换
</button>
<div *ngIf="flag; else elseBlock">
  <div>我显示</div>
</div>
<ng-template #elseBlock>
  <div>现在为假</div>
</ng-template>
```

注意：

1. `$event`对象为 DOM 事件对象，一般使用 `event.target.value` 来获取当前元素的值。
2. `typescript` 与 `javascript` 写法上的区别：

```js
// vue中这样写合适
 changeShow(e) {
   console.log(e);
   this.flag = !this.flag;
 }
// angular中
// 推荐typescript写法
public changeShow(e: object): void {
    console.log(e);
    this.flag = !this.flag;
  }
```

3. [angular 绑定事件与监听输入](https://angular.cn/guide/user-input)

常用事件：

- `key.enter`：回车事件
- `blur`：失去焦点事件

### `v-modal`---> `ngModal`

作用：一般用于将表单元素（`input`）的`value`值双向绑定到某个变量上

> 代码对比：

```html
<!-- vue语法 ref="box" -->
<input type="text" name="" id="" v-model="inputText" />
<div>{{ inputText }}</div>
<!-- angular语法 #box -->
<input type="text" name="" id="" [(ngModel)]="inputText" />
<div>{{ inputText }}</div>
```

```js
// vue语法获取虚拟Dom对象 .$refs.box
data: {
  inputText: "";
}
// angular语法 传入直接使用即可
inputText = "";
```

注意：

- `angular`的双向绑定指令无法直接使用，必须先导入对应的模块；
- 在`app.module.ts`中导入`FormsModule`：

```js
// 双向绑定需要导入该项
import { FormsModule } from "@angular/forms";
```

- 将要使用的模块加入到列表里：

```js
// 导入哪些模块使用
imports: [BrowserModule, AppRoutingModule, FormsModule];
```

### `ref` ---> `#`

> 代码对比：

```html
<!-- vue语法 ref="box" -->
<button @click="changeShow($refs.box)">点我切换状态</button>
<div ref="box">
  <div v-if="flag">我显示</div>
  <div v-else style="width: 250px; height: 250px;">我隐藏</div>
</div>
<!-- angular语法 #box -->
<button (click)="changeShow($event)" (keyup.enter)="onEnter(box)">
  点我切换
</button>
<div [class.test]="flag" #box>
  <div *ngIf="flag; else elseBlock">
    <div>我显示</div>
  </div>
  <ng-template #elseBlock>
    <div>现在为假</div>
  </ng-template>
</div>
```

```js
// vue语法获取虚拟Dom对象 .$refs.box
changeShow(v){
	this.flag = !this.flag
	console.log(v.offsetHeight)
}
// angular语法 传入直接使用即可
public onEnter(v: any): void {
  console.log(v);
  console.log(v.offsetHeight)
}
```

注意：

1. `vue`可不给相应方法传入数据，直接在方法里通过`$refs.box`直接获得虚拟`Dom`对象
2. `angular`不传入的话，经测试通过`this`获取好像是不行的？

### 过滤器 ---> 管道

> 代码对比：

```html
<!-- vue语法 自定义的过滤器方法 -->
<p>{{ time | formateDate }}</p>
<!-- angular语法 内置管道 -->
<div>{{ time | date:'medium' }}</div>
```

```js
// vue语法
filters: {
	formateDate(time){
		return time + '-- 证明格式化过了'
  }
}
// angular语法 传入直接使用即可
time = new Date();
```

注意：

1. `vue`过滤器处理方法需要定义，而`angular`管道则内置了不少方法；更多请查看：[内置管道 Api 文档](https://angular.cn/api?type=pipe)
2. [angular 自定义管道格式方法](https://blog.csdn.net/hbiao68/article/details/84563018)

### 自定义指令 ---> 指令

- vue：[自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html)

- angular：[指令](https://angular.cn/guide/architecture-components#directives)、[详细自定义指令](https://angular.cn/guide/attribute-directives#write-the-directive-code)

[大概步骤](https://angular.cn/guide/attribute-directives#write-the-directive-code)：

1. 终端输入：`ng generate directive highlight` - 创建 自定义指令的文件，脚手架自动生成的文件有：

- > `src/app/highlight.directive.ts`
- > `src/app/highlight.directive.spec.ts`
- > 在根模块 AppModule 中声明这个指令类

2. `src/app/highlight.directive.ts`代码：

```js
// 导入 Angular 的 @Directive 装饰器 、还从 Angular 的 core 库中导入了一个 ElementRef 符号。
import { Directive, ElementRef } from "@angular/core";
// 在选择器名字前面添加前缀，以确保它们不会与标准 HTML 属性冲突。 它同时减少了与第三方指令名字发生冲突的危险。
// 叫myHighlight也是可以的
@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    // ElementRef 通过其 nativeElement 属性给你了直接访问宿主 DOM 元素的能力。
    el.nativeElement.style.backgroundColor = "yellow";
  }
}
```

3. 使用自定义属性指令：

```html
<!-- src/app/app.component.html -->
<p appHighlight>Highlight me!</p>
```

### 安全导航运算符(？)

vue 好像没有该功能，一般通过`v-if`或者`xxx&&xxx.xx`之类的方法间接达到类似效果

angular 代码：

```html
<div>{{ obj?.a }}</div>
```

```js
obj = {
  a: 666,
};
```

作用：

- 对在属性路径中出现 `null` 和 `undefined` 值进行保护；避免空指针错误导致视图渲染失败。
- 使用安全导航运算符 `?`，当 `Angular` 表达式遇到第一个空值时，它将停止对表达式的求值，并渲染出无错误的视图。（也就是空白符）

注意事项：

1. 前者`obj为例`，必须要是“正常”对象类型，数组什么的都不行
2. 后面只可以是`.属性名`，不可用`[]`
3. 主要是 处理 `null` 和 `undefined` 值；对于空对象或者属性不存在时渲染还是会报错的

## 生命周期

- [vue 文档](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
- [angular 文档](https://angular.cn/guide/lifecycle-hooks)
