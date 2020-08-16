# 常用Css代码
## 文本溢出隐藏
### 单行文本溢出隐藏
核心 CSS 语句 
```css
/* （文字长度超出限定宽度，则隐藏超出的内容） */
overflow: hidden；
/* （设置文字在一行显示，不能换行） */
white-space: nowrap；
/* （规定当文本溢出时，显示省略符号来代表被修剪的文本） */
text-overflow: ellipsis；
```

适用场景：

* 适用于单行文本溢出显示省略号的情况

### 多行文本溢出隐藏
核心 CSS 语句
```css
/* （用来限制在一个块元素显示的文本的行数，2 表示最多显示 2 行。为了实现该效果，它需要组合其他的 WebKit 属性） */
-webkit-line-clamp: 2；
/* （和 上面代码 结合使用，将对象作为弹性伸缩盒子模型显示 ） */
display: -webkit-box；
/* （和 上面代码 结合使用 ，设置或检索伸缩盒对象的子元素的排列方式 ） */
-webkit-box-orient: vertical；
/* （文本溢出限定的宽度就隐藏内容） */
overflow: hidden；
/* （多行文本的情况下，用省略号 “…” 隐藏溢出范围的文本) */
text-overflow: ellipsis；
```
适用场景
* 兼容性一般：`-webkit-line-clamp` 属性只有 `WebKit` 内核的浏览器才支持

* 多适用于移动端页面，因为移动设备浏览器更多是基于 `WebKit` 内核

### 推荐文章
* [可能是最全的 “文本溢出截断省略” 方案合集](https://mp.weixin.qq.com/s/i6zozLOzMzBB_z3sJY3MUg)