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

我怀疑是`Angular`采用的`zone.js`检测只对异步等事件进行检测，却没有对订阅进行检测 - 个人猜测，暂未证实。

```ts
// 先在构造函数注入
private changeDetectorRef: ChangeDetectorRef,

// 在数据更新后下面执行：

// 标记有数据更改了
this.changeDetectorRef.markForCheck();
this.changeDetectorRef.detectChanges();
```