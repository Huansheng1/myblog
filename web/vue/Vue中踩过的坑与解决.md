# 谈谈我踩过Vue的坑
> 注：本文并不意味着说`Vue`有问题哦！主要是个人操作失误导致的
## 写代码时遇到的坑
### 路由数据变化未检测到问题
场景下，我定义了一个对象属性，通过索引对数组成员对象的属性进行修改，`Vue`是检测不到的，具体可以百度
> 小声BB：其实官网也有，我以前也看到过；但是人吧，不睬一次，不会往那方面想。

**Vue数组不能监测的情况有两种**

数组方面
1. 直接通过索引修改值
```js
this.items[indexOfItem] = newValue
```
2. 通过修改数组长度
```js
this.items.length = newLength
```
解决办法：
```js
// 数组解决办法：
// Array.prototype.splice.call()
arr数组对象.splice(开始索引，删除长度，插入的值)
// 两者是一样的，没啥区别
// Vue.$set(arr,index,value)
this.$set(arr,index,value)
````

对象方面
1. 通过点方法赋值`Watch`无法监测到
> 我通过计算属性返回`store`里的数据再通过`watch`监听这个计算属性来达到间接监听`Vuex`的目的；万万没想到还有个坑。
```js
this.对象.属性 = 值
```
2. 如果在实例创建之后添加新的属性到实例上，它不会触发视图更新
解决办法：
```js
this.$set(this.对象, '属性名', 值)// 通过提供的API添加属性；后续可正常监听

// Object.assign(target, ...sources) 第一个参数是目标对象，后面可接N个源对象
// 后面的数据都会复制到前面目标对象里，最后将结果对象返回
this.对象 = Object.assign({}, this.对象, 新对象)// 通过新对象避免无法检测的问题
```
最后，也可试试`deep`深度监听属性：
```js
watch:{
 '要监听的变量名':{
      handler(curVal,oldVal){
            console.log(oldVal)//数据变动就 打印以前的值
            },
      deep:true// 重点
      }
}
```
## 编译时遇到的坑

## 优化时遇到的坑

## 部署托管遇到的坑

### 多级路由刷新出现404问题

这个坑踩了一下午不知道为什么，最后排查发现是路由嵌套惹的锅

因为我使用了`history`模式，导致路由跳转会改变路径，因为本来从首页一路使用确实是正常的；

但当我们在嵌套路由页面刷新时，完蛋，页面404打不开，因为我托管在`Github`里，这时控制台会显示`refused ....xxx.icon....` - 意思就是：拒绝加载我们的资源。

为什么会这样？因为我们此时的路径是路由地址，实际服务器是没有的，刷新操作会让页面数据清除，JS文件不存在了，就向服务器请求该地址，那可不就报错了么。

最简单的解决办法：设置路由模式为`hash`

更多办法：
* [各位用cli3 遇到过 路由用history模式 二级路由刷新报错的情况吗](https://bbs.csdn.net/topics/393538425)

* [vue-route+webpack部署单页路由项目，访问刷新出现404问题](https://www.cnblogs.com/kevingrace/p/6126762.html)

* [关于react-router的HashRouter与BrowserRouter（二级路由刷新404）](https://blog.csdn.net/qq_39989929/article/details/94015657)