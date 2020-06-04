# git知识小课堂
## 指令与基础
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
## "奇技淫巧"
### github加速下载
> 国内[github]的访问速度，大部分情况下还是比较堪忧  
> 我们克隆[github]的项目到本地就会发现：似乎限速比百度云还严重多了？（虽然这不是限速，单纯是服务器国内访问比较艰难的表现）  
> 我们以克隆这个[网易云api项目为例](https://github.com/Binaryify/NeteaseCloudMusicApi 'https://github.com/Binaryify/NeteaseCloudMusicApi')  
> 有几种方法解决克隆项目到本地过于艰难：  
> 1. 使用 [github]镜像网站 加速下载  
>> 镜像列表：  
>> * <https://github.com.cnpmjs.org>  
>>> * *ssh协议*：git clone 指令：*git clone https://github.com.cnpmjs.org/xxx/xxx.git*  
>> * <https://github.wuyanzheshui.workers.dev/>  
>>> * *http协议*：直接下载zip推荐该镜像    
>> * <https://hub.fastgit.org/>  
>> * <https://download.fastgit.org>  
>> * <https://www.jsdelivr.com/>  
>>> * *http协议*：raw.githubusercontent.com 推荐镜像  
>> * <http://zll.us/>  
>>> * *ssh协议*：git clone 指令：*git clone https://zll.us/xxx/xxx.git*  
> * 我们只需将 *https://`github.com`/Binaryify/NeteaseCloudMusicApi* 中的  `github.com`  替换成 镜像列表的域名即可  
>> * 最终链接： **<https://github.com.cnpmjs.org/Binaryify/NeteaseCloudMusicApi>**  

> 2. [码云]克隆[github]的项目地址，快速导入到码云，然后我们在码云下载  
> 3. 第三方代下载网站 ：  
>> 1. [GitHub代下载服务·永久免费](https://g.widora.cn/)  
>> 2. [serctl.com](https://d.serctl.com/)  
### git图片加载失败：图裂  
> 修改本地host文件可解决该问题：  
> 1. 打开本机host文件-[WIndow系统路径](C:\Windows\System32\drivers\etc\host 'C:\Windows\System32\drivers\etc\host')  
> 2.加入以下代码：  
```bash
# =========GitHub图片修复==============
199.232.28.133 gist.githubusecontent.com
199.232.28.133 user-images.githubusercontent.com
199.232.28.133 raw.githubusercontent.com
199.232.28.133 camo.githubusercontent.com
199.232.28.133 cloud.githubusercontent.com
199.232.28.133 avatars0.githubusercontent.com
199.232.28.133 avatars1.githubusercontent.com
199.232.28.133 avatars2.githubusercontent.com
199.232.28.133 avatars3.githubusercontent.com
199.232.28.133 avatars4.githubusercontent.com
199.232.28.133 avatars5.githubusercontent.com
199.232.28.133 avatars6.githubusercontent.com
199.232.28.133 avatars7.githubusercontent.com
199.232.28.133 avatars8.githubusercontent.com
# =========GitHub图片修复==============
```
> 3. 在cmd输入：`ipconfig/flushdns` ------>  刷新本地dns缓存！  
> [The Best IP Address, Email and Networking Tools](https://www.ipaddress.com/)-该网站查询IP地址  
### vue官网访问过于缓慢  
> 修改本地host文件可解决该问题：  
> 1. 打开本机host文件-[WIndow系统路径](C:\Windows\System32\drivers\etc\host 'C:\Windows\System32\drivers\etc\host')  
> 2.加入以下代码：  
```bash
# =========vue官网加速 =========
104.248.78.24 cli.vuejs.org
104.248.78.24 cn.vuejs.org
104.248.78.24 router.vuejs.org
104.248.78.24 vuex.vuejs.org
# =========加速结束！ =========
```
> 3. 在cmd输入：`ipconfig/flushdns` ------>  刷新本地dns缓存！  
### 一个项目同时提交到码云和GitHub两个仓库
* 1. **一次性提交两个仓库**  
> 在项目目录里找到.git文件夹然后找到config文件。  
> 打开这个文件后找到下面的代码  
```bash
# remote是远程仓库名，默认github的远程仓库是origin
#但如果有多个远程库，我建议用不同的名称来标识不同的远程库。
[remote "origin"]
    url = git提交地址
    fetch = +refs/heads/*:refs/remotes/origin/*
```
> 将其改成  
```bash
[remote "origin"]
    url = 码云Git提交地址
    url = GitHub提交地址
    fetch = +refs/heads/*:refs/remotes/origin/*
```
![image.png](https://i.loli.net/2020/06/04/VqFUzoOcJ92WR5a.png)
* 2. **两个仓库分开提交**  
1. 先删除已关联的名为origin的远程库  
```bash
git remote rm origin
```
1. 先删除已关联的名为origin的远程库  
```bash
git remote rm origin
```
2. 关联GitHub的远程库：  
```bash
#github就是我们现在起的github远程仓库名
git remote add github https://github.com/javaobjects/Oracle.git
```
3. 再关联码云的远程库：  
```bash
git remote add gitee https://gitee.com/JavaObjects/Oracle.git
```
4. 我们现在的config文件里的配置长这个样子：  
![image.png](https://i.loli.net/2020/06/04/ksayhHLmM6bC7vc.png)
5. 用git remote -v查看远程库信息,可以看到两个远程库  
```bash
gitee   https://gitee.com/JavaObjects/Oracle.git (fetch)
gitee   https://gitee.com/JavaObjects/Oracle.git (push)
github  https://github.com/javaobjects/Oracle.git (fetch)
github  https://github.com/javaobjects/Oracle.git (push)
```
6. 推送到GitHub  
```bash
git status 
git add .
git commit -m "push-message-github/gitee"
git push github master
```
7. 推送到码云  
```bash
git push gitee master
```
> **不使用命令直接修改config文件：**  
```bash
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	ignorecase = true
[remote "origin"]
	url = git@github.com:Huansheng1/Huansheng1.github.io.git
	fetch = +refs/heads/*:refs/remotes/origin/*

[remote "second"]
	url = git@gitee.com:huanshenga/Myblog.git
	fetch = +refs/heads/*:refs/remotes/second/*
```
> git push origin master  会推送到 Github  
> git push second master 会推送到码云  
> 注意：second origin都是名字，你自己可以随便取。  
* 3. **强制同步**  
> 码云提供的，强制同步  
![image.png](https://i.loli.net/2020/06/04/EndHis9XPxTU5hG.png)
## git错误及解决
> git错误及解决-[点我](../article/gitError)