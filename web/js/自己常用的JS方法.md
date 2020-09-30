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