# buffer二进制处理
`Buffer`是`NodeJs`内置的二进制对象，其形式可以简单理解为每个成员为一个字节 - `8b，或者成为 8比特`的数组。
## 字符串与二进制互转
```js
const text = "世界你好！"
const targetBuffer = Buffer.from(text, "utf8")
// 转换后的二进制数据，其实是0101的二进制形式，只是打印的时候会用八进制的形式展现
console.log(targetBuffer)
// 将创建出来的二进制对象转换为字符串
console.log(targetBuffer.toString("utf8"))
// 注意：编码格式都是可选参数

```
