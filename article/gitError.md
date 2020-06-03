# git报错解决指南
## 提交报错
### git push -u origin master报错
```bash
The authenticity of host 'github.com (13.250.177.223)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com,13.250.177.223' (RSA) to the list of known hosts.
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```
> 这里我们在第三行按照指示敲上了yes，可是并不顶用！  
> 再次尝试：  
```bash
Warning: Permanently added the RSA host key for IP address '13.229.188.59' to the list of known hosts.
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.      

Please make sure you have the correct access rights
and the repository exists.
```
> 既然如此，尝试重新试试配置的命令  
> 1. ssh -T git@github.com  
> `git@github.com: Permission denied (publickey).`  第一步被拒绝了。。。  
> 2. git config --global user.name "Huansheng1"  配置用户名  
> 3. git config --global user.email "2933903535@qq.com"  配置用户邮箱  
> 再次尝试：依旧如此。  
```bash
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```
> 推测秘钥问题  
> 解决开始：  
>> github主页 -> 点击设置 -> 进入 SSH and GPG keys  
>> 创建一个新的密钥"New SSH key"  
>> 这里出现个 输入key的框  
>> 我们回到 需要上传的项目文件夹的根目录，右键Git Base Here  
>> 输入命令：`ssh-keygen -t rsa -C "2933903535@qq.com"`  
![image.png](https://i.loli.net/2020/06/03/SljRmrN7YWadC8c.png)  
>> 一路回车，不要做其他操作  
>> 输入命令：`cat ~/.ssh/id_rsa.pub`  
![image.png](https://i.loli.net/2020/06/03/ArZzyWu3dYt9Jis.png)  
>> 复制公钥输入到key的输入框，不要名字！  
>> `git push --set-upstream origin master` 成功了！  
### git commit -m 'xxx'提示：……up to date……
```bash
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```
