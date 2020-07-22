# Mock数据
## 为什么需要Mock数据

前后台并行开发，节省因为数据联掉而浪费的时间

## 数据Mock方案

### 本地Json文件Mock

直接请求项目本地`Json`文件，方便快捷，操作简单，缺点是代码耦合度太高，更换接口时需要改动不少文件；还支持`mock.js`语法

### EasyMock平台

通过`EasyMock`网站，代码几乎不需要任何变更，只需要将`baseUrl`修改为`EasyMock`地址，方便快捷，不但学习成本低，后期更换自己接口也非常容易；缺点是官方网站服务器不理想，经常无法访问，一旦出现故障，项目就无法正常进行`Mock`

解决办法：自己通过`github`搭建属于自己公司的`easyMock`网站，当然需要一定学习成本

更多：[使用easyMock](https://juejin.im/post/5d31925ef265da1bd04f1b6d)

> 官网：[Easy Mock](https://easy-mock.com/)
### Mock.JS拦截请求

在网络请求发送前`mock.js`就将其拦截掉，返回给`vue`它模拟的数据，既不用担心服务器故障，也不需要担心后期代码大幅更换，只需要一点点代码的增加。

步骤图示：
1. 安装`mockjs`插件：
2. 在项目源代码文件夹创建`mock`目录，里面存放我们的`api.js`用来`mock`掉我们的`api`请求：![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20200721221329.png)
> 上面代码可让我们`vue`项目请求`/api/user/login`时自动拦截并返回传入的`JSON`格式对象
3. 在`main.js`里加入我们少量的`mock`代码：![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20200721221520.png)
> 注意`require`与`import`的区别：`import`导入插件会在项目发布时编译，`require`则在项目运行时才决定是否运行（我们这里通过`mock`状态判断是否引入`mock.js`）

> 更多请看官网：[Mock.js](http://mockjs.com/examples.html)