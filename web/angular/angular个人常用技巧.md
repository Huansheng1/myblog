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
