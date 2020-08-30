# 个人经验记录
## 脚手架创建项目版本问题
不知道为啥，在我这台电脑上安装最新的`Angular/cli`脚手架创建项目后，其项目内的`Angular`版本是`Angular2`的版本。

因此，我在练习`Angular`的`*ngIf`的`else`语法时，控制台会提示一个错误：`Unhandled Promise rejection: Template parse errors: Can't bind to 'ngIfElse' since it isn't a known property of 'div'.`

> 也就是说：ngIfElse 不是一个已知的属性；我以为是自己代码问题，来回与官网对比，摸不着头脑

突然，灵光一闪，是不是这个项目内部的`Angular`版本太旧，不支持这种比较新的语法呢？

打开`package.json`一看，啊，果然：![image.png](https://i.loli.net/2020/08/21/TC1EcVAZUMwsujN.png)

既然知道问题原因，那就很简单了，首先我们打开官方提供的：[升级指南](https://github.com/raineorshine/npm-check-updates)

1. 全局安装检查更新模块：
```bash
npm install -g npm-check-updates
```
2. 在当前项目目录下的控制台输入：`ncu`
![本地版本与最新版本对比](https://i.loli.net/2020/08/21/7eOgoSKPszCvDa5.png)
3. 将`package.json`文件内依赖的版本号升级：`ncu -u`
4. 然后呢，重新`npm install`一遍，将最新版的模块下载到本地
5. `ng serve`运行项目看看还有没有问题 ， 尴尬，报错提示：`Version of @angular/compiler-cli needs to be 2.3.1 or greater. Current version is "10.0.11".` -> `@angular/compiler-cli 版本应该是2.3.1或者更高。当前版本是10.0.11` ；我们当前版本不是明显大于它了么，为啥报错？
6. 通过检查全局包：`ncu -g`，发现我们的脚手架好像版本不对，强制升级了一下：![image.png](https://i.loli.net/2020/08/21/Ucdbmow6qKr74zV.png)
7. 检查版本：`ng v`，正常了，但是之前老版本的命令`ng serve`使用报错。。。
8. 我们重新创建一个项目，`ng new demo-ng`，现在创建项目有选择是否需要路由 和 `css`语法选择 ，耐心等待片刻。
9. 启动顺利，在html文件复制之前代码过来测试 是否为我们之前推测报错为老版本太旧，导致不支持新语法的问题
10. 正常了，完美。