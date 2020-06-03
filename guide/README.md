<!-- 可能重复使用的链接 -->
[vuepress]: https://vuepress.vuejs.org/zh/ 'vuepress官网'
[github]: https://github.com '开源社区'
[gitee码云]: https://gitee.com '码云，国内开源社区，访问速度更快！'
# 前置条件
> 掌握基础MD语法  
> 安装node.js环境  
>> 可在cmd上输入:`node -v` 和 `npm -v`查看是否显示版本号，以确保安装成功  

> 注册[github] 或者 [gitee码云] ，以后我们将部署的html文件放置到pages静态服务里  
> 安装git客户端，我们用git同步，方便快捷。  
> 安装VSCode客户端，轻量快捷，在文本编辑器和编译器寻找到一个完美的平衡
# vuePress概述
* Vue 驱动的静态网站生成器
* 基于markdown语法生成网页
* 可自定义和扩展样式
* 可以发布至github
* 详情请看官网[vuepress]
# 安装配置
> 该教程仅针对window写作，linux系统自行将touch等window终端命令改为linux的对应命令
## 初步使用vuepress
* 全局安装vuepress：  
```bash
npm i -g vuepress
```
* 创建博客项目目录
```bash
mkdir myBlogVue
```
* npm初始化
1. 转入项目文件夹
```bash
cd myBlogVue
```
2. npm初始化,会生成一个package.json
```bash
npm init -y
```
* 创建.vuepress目录
```bash
mkdir .vuepress
```
* 创建config.js
```bash
cd .vuepress
touch config.js
```
* 创建首页README.md文件
```bash
cd ../
touch README.md
```
## 配置设置文件
### 当前目录结构
```
myBlogVue
├─ README.md
└─ package.json
└─ .vuepress
└─---└─ config.js
```
### 修改README.md
#### Vuepress提供开箱即用的 YAML front matter
```bash
---
home: true
lang: zh-CN
heroText: 菜鸡前端
heroImage: ../../assets/img/logo.png
tagline: 一点一滴都是进步
actionText: 欣赏文章 →
actionLink: /guide/
features:
- title: 个人博客
  details: 以 Markdown 为中心的项目结构，记录个人经验与踩坑解决办法。
- title: 前端技术
  details: 巩固自我，记录一点一滴，方便用时自我查阅。
- title: 实战项目
  details: 个人开发的免费开源项目步骤详细记录，编程->从博客开始。
- title: 搭建技术
  details: node.js环境下vuepress为基础，github或者码云部署搭建。
- title: 作品源码
  details: 以往作品开源在github，可通过导航前往获取我的历史项目源码。
- title: 学习目标
  details: 不断深入，每天学习，用心思考，向全栈进发！
footer: MIT Licensed | Copyright © 2020-present 幻生
---
<!-- 注：此格式是YAML front matter,一定要在md文件的顶部才会生效。 -->
<!-- 博客首页 -->
```
#### 说明：
> heroText： 网站主页居中标题  
> heroImage：网站首页图片  
> tagline： 网站居中描述  
> actionText：网站居中按钮文字  
> actionLink: 网站居中按钮跳转路径  
> features：博客特性，支持N个
>> title：该特性标题  
>> details：该特性描述  
### 配置`.vuepress/config.js`
>  一个 VuePress 网站必要的配置文件
> 采用CommonJS的模块导入导出语法
```js
const path = require('path');
module.exports = { //这个js变动时本地调试服务会自动重新 启动服务刷新网页，但是md文件改动保存是无法检测到的
        title: '幻生博客', //网站标题
        keywords: "幻生,vue,vuepress,vuepress技术博客,前端,blog,vuepress-blog,golang,script,windows,git,小程序", // 关键字
        description: '如有错误，敬请提交意见与指导，QQ：2933903535', //网站描述
        repo: 'https://github.com/Huansheng1', //设置 repo属性，VuePress 会在导航栏中添加一个 Github 仓库的链接。
        base: '/', //ase 属性的默认值是 /。设置站点根路径，如果你在访问的地址是 'www.xxxx.com/wxDocs' 那么就设置成 '/wxDocs/'  
        dest: './dist', //指定编译路径，该处为根目录下的dist文件夹，VuePress默认路径为.vuepress/dist文件夹
        port: '7777', //指定端口号
        head: [
            ['link', { rel: 'icon', href: './public/assets/img/logo.png' }], //头部引入logo图片，也可引入CSS/JS，public目录
            ['meta', { 'name': 'viewport', content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" }],
            ['meta', { name: 'referrer', content: 'never' }],
            ['script', { type: 'text/javascript', src: './public/assets/js/load.js' }],
        ],
        markdown: {
            lineNumbers: true // 是否在每个代码块的左侧显示行号。
        },
        themeConfig: {
            nav: require("./nav.js"), //引入抽离的网站nav导航栏设置，.js后缀可省略
            sidebar: 'auto', //require("./sidebar.js"), //注：sidebar: 'auto'表示自动通过md内容生成左边侧边栏
            sidebarDepth: 2, //同时提取markdown中h2 和 h3 标题，显示在侧边栏上
            lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
            searchMaxSuggestoins: 10, //搜索结果最大数量
            author: '幻生',
            serviceWorker: {
                updatePopup: {
                    message: "有新的内容.",
                    buttonText: '更新'
                }
            },
            editLinks: true,
            editLinkText: '在 GitHub 上编辑此页 ！'
        },
        configureWebpack: {
            resolve: {
                alias: { //目录别名
                    '@': path.join(__dirname, '../'), //相对于config.js文件的路径->.vuepress目录
                    'public': '@/public',
                    'assets': 'public/assets', //MD文件里可这样使用别名  ![](~assets/img/003.png)
                    'web': '@/web',
                    'project': '@/project',
                    'article': '@/article',
                    'tips': '@/tips',
                    'tools': '@/tools',
                }
            }
        }
    }
    // 自定义搜索：VuePress搭建个人技术文档网站教程 - 个人文章 - https://segmentfault.com/a/1190000017055963?utm_source=tag-newest
```
### 配置`.vuepress/nav.js`
```js
module.exports = [{
        text: '搭建指南',
        link: '/guide/' //指定导航栏文字下的链接路径，如无link则无法点击
    },
    {
        text: '前端知识',
        //link: '/web/',//有分类的情况下不推荐给上级目录页加上可点击路径
        items: [ //面试宝典导航下的子分类导航
            { text: '新手入门篇', link: '/web/learn/' }, //设置点击该导航时跳转路径，默认寻找该目录下的README.md文件
            { text: '基础提升篇', link: '/web/code/' },
            { text: '中级巩固篇', link: '/web/make/' },
        ]
    },
    {
        text: '推荐网站', //items里面可以嵌套新的导航{}，推荐最多两级导航，不然嵌套不清晰
        items: [{
                text: '在线编辑',
                items: [
                    { text: '图片压缩', link: 'https://tinypng.com/' } //外部链接
                ]
            },
            {
                text: '在线服务',
                items: [
                    { text: '阿里云', link: 'https://www.aliyun.com/' },
                    { text: '腾讯云', link: 'https://cloud.tencent.com/' }
                ]
            },
            {
                text: '博客指南',
                items: [
                    { text: '掘金', link: 'https://juejin.im/' },
                    { text: 'CSDN', link: 'https://blog.csdn.net/' }
                ]
            }
        ]
    },
    {
        text: '工具箱',
        link: '/tools/'
    },
    {
        text: 'MD相关',
        link: '/markdown/'
    }
]
```
> tips：  
> link路径  
>> 相对路径：指向README.md所在目录的相对路径，如果为文件夹而非文件，则自动寻找该目录下的README.md
>> 绝对路径：指向对应路径/网站
### 配置`./package.json`
> 配置npm管理该项目的配置文件
```js
{
    "name": "myblog-vuepress",
    "version": "1.0.0",
    "description": "幻生教你从零搭建个人网站，免费永久的博客",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "serve": "vuepress dev .",
        "build": "vuepress build ."
    },
    "keywords": [],
    "author": "huansheng",
    "license": "MIT"
}
```
> 配置完后效果：  
>>第一条命令会启动本地服务器，用于预览网站内容，第二条命令用于发布生产代码
```bash
npm run serve
npm run build
```
## 增加插件
### 新增评论系统
> ……待更新……
### 新增第三方搜索
> ……待更新……
## 发布部署
> git注册、登录、创建仓库、安装客户端、命令行登录 自行百度
![image.png](https://i.loli.net/2020/06/03/iZRaxNPmCd4GHK8.png)
> 我们只 熟悉回顾一下 常用git指令
### git命令
> 原理图：![简易图](https://user-gold-cdn.xitu.io/2019/6/28/16b9d385970c7b6c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
![image.png](https://i.loli.net/2020/06/03/yoMI5cNDLOszVxE.png)
#### 配置
```bash
# 显示当前的Git配置
$ git config --list
# 编辑Git配置文件，只是配置用户信息的话直接看下面两行命令即可
$ git config -e [--global]
# 设置提交代码时的用户信息，是否加上全局--global自行决定，一般是直接设置全局的。另外用户邮箱需要注意最好使用gmail,QQ也可以，需要和你远程仓库保持一致不然你的contribution是不会被记录在远程仓库的
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```
> Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。
#### 常用指令
> git初始化项目：会创建一个.git目录  
```bash
git init
```
> git连接已经存在的远程仓库  
```bash
git remote add origin git@github.com:xxx/xxx.git
```
> git添加文件到暂存区：git add 指定文件/.  
```bash
git add .
```
>> .表示当前目录下的全部文件都加到暂存区  

> git将暂存区文件添加到本地仓库  
```bash
git commit -m '本次更新的内容'
```
>> add 和 commit 合二为一指令：`git commit -am '本次更新的内容'`
> git将本地仓库同步到远程仓库  
```bash
git push
```
```bash
# 首次推送需要加上-u,之后推送就可以直接git push  origin master,origin是远程Git名字，这个可以自己定义，不过一般是用origin罢了，master是默认的分支，如果不在master分支提交需要写清楚分支名称
$ git push -u origin master
```
#### 其他可能用到的指令  
> git克隆远程仓库到本地  
```bash
git clone https://github.com/xxx/xxx.git
```
> git查看工作区、暂存区的状态  
>> 红色表示不在暂存区，绿色表示已经加入到暂存区  
```bash
git status
```
> git查看提交日志  
```bash
git log
```
> git显示回退版本步数（重点）  
>> 查看所有的head的记录：从上到下是新版本->旧版本  
```bash
git reflog
```
> git版本回退  
>> 当前分支的代码全部回退到以前的一个版本，不可逆转，需要谨慎使用。  
```bash
git reset --hard XXX版本记录编号
```
![image.png](https://i.loli.net/2020/06/03/wCaIu7zNx5jnokY.png)
>  清空 github 仓库  
>> 谨慎使用。  
```bash
#从中删除历史记录
rm -rf .git
#仅从当前内容重新创建存储库
git init
git add .
git commit -m "Initial commit"
#推送到github远程仓库，以确保您覆盖历史记录
git remote add origin git@github.com:<YOUR ACCOUNT>/<YOUR REPOS>.git
git push -u --force origin master
```
#### 分支管理（重头戏）  
1. 创建分支： `git branch XXX分支名`  
> 此时我们创建了一个xxx分支，代码与主分支master保持一致  
2. 查看分支：`git branch`  
> 我们可以在命令窗口看见我们新建的分支：xxx分支  
> 注意：`git branch`查看的本地分支，如要查看本地+远程仓库的所有分支，需使用`git branch -a`  
3. 切换到指定分支：`git checkout XXX分支名`  
> 我们切换到了新建分支上，这时修改提交的代码都在xxx分支里  
4. 合并分支：`git merge`  
> 步骤：
>> 1.切换到主分支master  
```bash
git checkout master
```
>> 2.查看当前分支是否为master  
```bash
git branch
```
>> 3.合并指定分支到主分支master  
```bash
git merge XXX分支名
```
5. 删除合并后的分支：  
> 步骤：  
>> 删除本地分支：`git branch -D XXX`  
>> 删除远程分支： `git push origin --delete XXX`  

* 撤销merge操作：git merge --abort  

> 注意：  
>> 创建并且切换到XXX分支二合一命令：`git checkout -b XXX`  
>> 当前处于XXX分支，XXX分支是不能被删除的，需要先切换到其他分支  
>> git branch -a 查看所有分支，再进行操作  
>> 删除远程分支属于危险操作，如果权限不合理，可能会出现大问题。  
> 结束推荐：个人感觉写得很好的一篇文章  
>> [程序员都要掌握的 Git](https://juejin.im/post/5d157bf3f265da1bcc1954e6#heading-5)  
>> [程序员都要掌握的 Git](https://juejin.im/post/5b4d66125188251ace75ba27#heading-0)  
>> [Sourcetree-界面窗口的git管理](https://juejin.im/post/59bc944d51882519777c5e07#heading-9)  
### 使用github-Pages托管代码
#### 前置知识
> Github创建项目仓库后随即只产生一个master分支，只需要再添加`gh-pages`分支就可以创建静态页面了。  
> 这利用了项目站点（即Project Pages）的方式。还有一种创建站点的方式叫做`User/Organization Pages`。  
> 我们这里介绍前者。  
> 首先，创建一个名为 Github用户名.github.io 的仓库。  
> 接着大家可以在这仓库里放一些静态页面，在外网访问: Github用户名.github.io,就能访问到里面的静态资源了。  
> 如果你想知道楼主如何基于github搭建自己的博客，可以看[这篇文章](http://www.cnblogs.com/MuYunyun/p/5927491.html)，这次讲的重点主要是gh-pages。
#### 为什么有了Github用户名.github.io 的仓库，我们还需要gh-pages呢？
> 大家不会只有一个项目要展示的吧，万一你和楼主一样把 Github用户名.github.io 作为博客了，那不就没地方展示项目了吗？所以就有了gh-pages这个东东。  
#### 进入主题
1. 进入dist文件夹下
```bash
cd dist
```
2. git初始化
```bash
git init
```
3. 创建并切换gh-pages分支
```bash
git checkout --orphan gh-pages
```
4. 添加文件到暂存区
```bash
git add .
```
5. 添加信息
```bash
git commit -m "init project"
```
6. 设置远程仓库地址
```bash
git remote add origin git@github.com:nqmysb/shared-library-ui.git
```
7. 推送项目到 gh-pages分支
```bash
git push origin gh-pages
```
> 此时你的github该项目会多一个gh-pages分支，点击切换分支可以看到刚刚上传的项目文件。  
> 展示地址：Github用户名.github.io/当前创建的仓库名

* **[推荐命令]** 指定的dist文件提交到gh-pages分支：`git subtree push --prefix=dist origin gh-pages`