# Angular 个人常用技巧

## 监听浏览器宽度变化

> 生命周期函数没有适用这个需求的代码哦

```ts
@HostListener('window:resize') onResize() {
		this.checkClientWidth();
}
checkClientWidth() {
		if (document.body.clientWidth > 992) {
		  this.isPhone = false;
		} else {
		  this.isPhone = true;
		}
}
```
## 脏值检测
在`Angular`里通过注入服务再在`subcribe`订阅赋值时，界面检测不到数据的更新，因此我们需要手动告诉`Angular`这里发生了数据变动，快来更新视图

[我推断原因是`Angular`采用的`zone.js`检测，只对异步事件（如：键盘输入、`Xhr`请求、定时器等异步任务）进行检测，却没有对订阅进行检测 - 个人猜测，暂未证实。](https://angular.cn/api/core/ChangeDetectorRef)

`Angular`默认的检测策略是一有变更就检测整个`Angular`视图组件树，在超大型项目这种检测就比较浪费性能，因此我们可修改检测策略为`OnPush`策略（该策略不对监听异步事件自动进行视图检测），这样就需要和`markForCheck`搭配使用。

```ts
@Component({
//   ...其他代码
// 修改检测策略为OnPush策略，这种策略需要手动通过markForCheck标记改变了需要检测
// 其实不设置这个也行
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// 先在构造函数注入
private changeDetectorRef: ChangeDetectorRef,

// 在数据更新后下面执行：

// 标记有数据更改了
this.changeDetectorRef.markForCheck();
```
## 阻止冒泡和默认行为
方式一：
```html
<!-- 阻止冒泡 -->
<!-- $event.stopPropagation(); -->
<!-- 阻止默认行为 -->
<!-- $event.preventDefault(); -->
<!-- handleClick是点击触发事件，与本次讨论重点无关 -->
<button (click)="$event.stopPropagation();$event.preventDefault();handleClick($event)">阻止冒泡和默认行为</button>
```
方式二：
```html
<button class="btn btn-primary" (click)="handleClick($event)">阻止冒泡和默认行为</button>
```
```ts
handleClick(event) {
        event.stopPropagation();
        event.preventDefault();
        console.log('点击了。');
    }
```
方式三：
```ts
// 监听当前组件的： 全部click事件，装饰器装饰的方法参数为$event事件
    @HostListener('click', ['$event'])
    reset(event) {
        // 将该组件全部click进行阻止冒泡处理和阻止默认行为
        event.stopPropagation();
        event.preventDefault();
    }
```