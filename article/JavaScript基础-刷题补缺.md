# JavaScript基础面试题与解析
## ES5
1. `typeof`能判断哪些类型？
`typeof`能识别的类型有：
* 基本类型：`number`、`string`、`boolean`、`undefined`  
> ES6及以后新增：`Syboml`、`BigInt`
```js
var a = 1
console.log(a,typeof a)// 1 "number"
var a = 'huansheng' - 1
console.log(a,typeof a)// NaN "number" ；NaN是一个不是数字的特殊数字类型
var a = '1'
console.log(a,typeof a)// 1 string
var a = true
console.log(a,typeof a)// true "boolean"
var a = undefined
console.log(a,typeof a)// undefined "undefined"
var a = Symbol('1')
console.log(a,typeof a)// Symbol(1) "symbol"
var a = BigInt('11111111111111111111111111111111')
console.log(a,typeof a)// 11111111111111111111111111111111n "bigint"
```
* 引用类型：`function`、`object`
```js
var a = null
console.log(a,typeof a)// null "object"
var a = function(){}
console.log(a,typeof a)// ƒ (){} "function"
var a = {}
console.log(a,typeof a)// {} "object"
var a = []
console.log(a,typeof a)// [] "object"
```
> 要想具体判断对象类型，需使用：`obj实例 intanceof Object类型` 或者 `Object.prototype.toString.call(obj实例)` 

更多：[instanceof与typeof原理浅析](../web/js/变量类型判断.md)  

2. 实现一个深拷贝函数
```js
function deepCopy (obj, cache = []) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    if (Object.prototype.toString.call(obj) === '[object Date]') return new Date(obj)
    if (Object.prototype.toString.call(obj) === '[object RegExp]') return new RegExp(obj)
    if (Object.prototype.toString.call(obj) === '[object Error]') return new Error(obj)
   
    const item = cache.filter(item => item.original === obj)[0]
    if (item) return item.copy
    
    let copy = Array.isArray(obj) ? [] : {}
    cache.push({
        original: obj,
        copy
    })

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache)
    })
    return copy
}
```
更多：[深浅拷贝](../web/js/深浅拷贝.md)

99. `Object.is()` 与 `===` 的区别？  

...  
`Object.is()` 是 `===` 的BUG修复版，推荐使用前者。
## ES6

## Dom文档对象模型

## Bom浏览器API

