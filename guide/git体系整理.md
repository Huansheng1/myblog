# Git体系整理

## 基础

### 概念

`git` 是一个 `分布式版本管理系统` ，是为了更好地管理Linux内核开发而创立的。

 其 `版本记录数据库` 在本地和远程服务器都有保存，因此没网时你依旧可正常的进行操作（除了推送到远程仓库之类的操作不行外）：

 ![](https://gitee.com/huanshenga/myimg/raw/master/PicGo/20210516130554.png)

所以，让我们来完成一个将普通文件夹变成纳入 `git` 管理的项目的完整流程：

1. 初始化项目：将 一个目录初始化为`git`管理的项目 - `git init`，这时候 当前目录已经被纳入到`git`管理下，你可以看到`.git`隐藏文件夹

2. 然后，我们可用`git config -l`来查看`git`管理的相关配置

3. 新项目的话，我们需要先配置下 名称 和 联系邮箱：`git config user.name "幻生"`、`git config user.email "2933903535@qq.com"`，这样的话，别人可以看见是谁提交的代码便于联系以及追踪。

> 注意： `git config` 会显示有 `config` 配置有哪些指令可用，通过 `git config --unset 配置属性` 可以删除某个属性

## 其他文章

* [git知识小课堂](./git.md)
* [git踩到的坑](./git踩到的坑.md)
* [git进阶操作](./git进阶操作.md)

## 推荐链接

* [猴子都能懂的GIT入门](https://backlog.com/git-tutorial/cn/)
