# git中踩到的坑
## 分支管理
### 分支切换失败
有时候我们明明先`git pull`拉取了远程分支，但还是无法切换：
```bash
$ git switch 1680
fatal: Cannot switch branch to a non-commit '1680'
```
这个时候我们需要手动创建一个本地分支并将其与远程分支进行关联，这里我提供两种命令：
1. `git checkout -b xxx分支 origin:服务器分支名xxx`
2. `git switch -t origin/服务器分支名`：
```bash
$ git switch -t origin/1680
Switched to a new branch '1680'
Branch '1680' set up to track remote branch '1680' from 
'origin'.
```

### 分支切换
* [保留/丢弃当前分支修改并切换至其他分支](https://www.cnblogs.com/yhjoker/p/11776240.html)

* [Git在不提交当前更改的情况下切换到其它分支](https://www.pianshen.com/article/7416612965/)

* [分支操作](https://www.cnblogs.com/yongdaimi/p/7600052.html)

步骤：
1. 先拉去远程仓库信息到本地：`git pull`
2. 显示所有分支：`git branch -a`
* 如果想只显示远程分支则：`git branch -r`
3. 切换分支：`git checkout 17-`![image.png](https://i.loli.net/2020/08/27/fK9sNhSY3yQ8ivW.png)
4. 在分支做完并推送后记得切回主分支：`git checkout master`
## 项目推送
### `git push`时被拒绝
场景：将本地一个目录代码推送到远程仓库，我于是在码云上新建一个仓库，然后在本地按[以前的文章](http://hs.xuexizuoye.com/guide/git.html#指令与基础)进行仓库关联，结果在最后一步`git push`上出现了问题：
```bash
error: failed to push some refs to 'gitee.com:huanshenga/ng-img-lazyload.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

解决方案：
出现错误的主要原因是：`github中的README.md文件不在本地代码目录中`

1. 通过如下命令进行代码合并
```bash
git pull --rebase origin master
```

2. 再执行语句 `git push -u origin master`即可完成代码上传到`github`
