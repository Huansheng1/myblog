# git中踩到的坑
## 分支管理
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
