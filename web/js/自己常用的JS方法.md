# JavaScript常用方法
## 判断链接格式
```js
// 判断是否是视频链接
  isVideo(url = "") {
    if (!url) return false;
    let typeName = url.substring(url.lastIndexOf(".") + 1);
    return (
      typeName === "mp4" ||
      typeName === "rmvb" ||
      typeName === "avi" ||
      typeName === "flv"
    );
  }
```
## 数组移除某个成员
```js
if (!Array.prototype.remove) {
  Array.prototype.remove = function remove(item) {
    // 如果长度为零则返回空数组
    if (!this.length) return []
    // 获取当前item在当前数组的索引
    let index = this.indexOf(item)
    if (index > -1) this.splice(index, 1)
    return this
  }
}
```
## 检测是否是手机
```js
functon isPhone(){
  return 'ontouchend' in document
}
```