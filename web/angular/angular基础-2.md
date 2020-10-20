# Angular之路 - 第二部分
## angualar  与 vue 的 语法对比
### `slot` ---> `ng-content`

> 代码对比：
1. 创建一个组件：`ng g c components/slot`
2. 修改`slot`组件代码：
```html
<!-- vue语法，in 和 of都有效果，但官网是in，不可在前面写let之类的声明关键字，且必需加上key配合diff算法使用 -->
<div>
    vue插槽测试
    <slot></slot>
</div>
<!-- angular语法 -->
<!-- src\app\components\slot\slot.component.html -->
<div>
    ng-content插槽测试
    <ng-content></ng-content>
</div>
```
3. 其他地方使用：
```html
<!-- 其他地方使用 -->
<app-slot>
    <div>测试啊</div>
</app-slot>
```
4. 注意与`vue`的不同处：
```html
<!-- 即使只有一个ng-content但是我们依旧可以在使用的地方插入多个元素 -->
<app-slot>
    <div>测试啊</div>
    <div>测试2</div>
    <div>测试3</div>
</app-slot>
```
5. 即使里面放入多个`ng-content`依旧和一个效果一致：
```html
<!-- <ng-content> 的本质只是移动元素，并不会去自动的创建传入的模板 -->
<!-- 因此，如果传入的是自定义的组件，这些组件也只会被实例化一次。 -->
<div>
    ng-content插槽测试
    <ng-content></ng-content>
    <ng-content></ng-content>
</div>
```
6. 插入顺序会保持在`ng-content`所处位置：
```html
<!-- 这里我们放入了两个，尽管和一个生效的效果一样的，但是最终结果是在第二个ng-content位置处插入，就相当于第一个不存在 -->
<div>
    ng-content插槽测试
    <ng-content></ng-content>
    ng-content插槽测试2
    <ng-content></ng-content><!-- 也就是说使用处会将中间的东西插到这里 -->
    ng-content插槽测试3
</div>
```
7. `ng-content`还可以限制只能插入啥标签，也就是说其他标签它当做看不见：
```html
<!-- slot组件代码 -->
<div>
    ng-content插槽测试
    <ng-content select="div"></ng-content>
    ng-content插槽测试2
</div>
```
```html
<!-- 使用的地方 -->
<app-slot>
    <div>测试啊</div>
    <span>测试2</span>
    <div>测试13</div>
    6666
</app-slot>
```
我们会发现最终结果为：![](https://pic.downk.cc/item/5f8eb97c1cd1bbb86be8eff4.jpg)
8. `ngProjectAs`又可以在强行插入

> 总结：
* 我们可以发现，其用法和`vue`里的匿名插槽差不多
* 注意：官方文档貌似都搜索不到相关信息，但确实可以正常使用的

更多：

- [`NgTemplateOutlet`](https://angular.cn/api/common/NgTemplateOutlet)
* [`Angular 向组件传递模板的几种方法`](https://gianthard.rocks/a/23)
* [`ngTemplateOutlet指令`](https://zhuanlan.zhihu.com/p/44446232)